// ==========================================
// AI工具导航 - 交互脚本
// ==========================================

// ---- 点击统计 (localStorage) ----
const CLICKS_KEY = 'ai_nav_clicks';
function getClicks() {
    try { return JSON.parse(localStorage.getItem(CLICKS_KEY) || '{}'); }
    catch(e) { return {}; }
}
function recordClick(toolUrl) {
    const clicks = getClicks();
    clicks[toolUrl] = (clicks[toolUrl] || 0) + 1;
    localStorage.setItem(CLICKS_KEY, JSON.stringify(clicks));
}
function getClickCount(toolUrl) { return getClicks()[toolUrl] || 0; }

// ---- 全局状态 ----
let currentCategory = 'all';
let searchKeyword = '';

// ---- 工具函数 ----
function getHotTools()  { return TOOLS.filter(t => t.isHot); }
function getNewTools()  { return TOOLS.filter(t => t.isNew); }
function getOtherTools() {
    return TOOLS.filter(t => !t.isHot && !t.isNew);
}

// 搜索匹配
function matchSearch(tool) {
    const kw = searchKeyword.toLowerCase();
    return tool.name.toLowerCase().includes(kw) ||
           tool.desc.toLowerCase().includes(kw) ||
           tool.tags.some(tag => tag.toLowerCase().includes(kw));
}

// ---- 渲染分类按钮 ----
function renderCategories() {
    const nav = document.getElementById('categoryNav');
    CATEGORIES.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'cat-btn';
        btn.dataset.cat = cat.key;
        btn.textContent = cat.icon + ' ' + cat.name;
        btn.addEventListener('click', () => {
            currentCategory = cat.key;
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderAll();
        });
        nav.appendChild(btn);
    });
}

// ---- 渲染工具卡片 ----
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.dataset.cat = tool.category;
    card.addEventListener('click', () => {
        recordClick(tool.url);
        window.open(tool.url, '_blank');
    });

    // 标签
    let badgesHTML = '';
    if (tool.isHot) badgesHTML += '<span class="badge badge-hot">热门</span>';
    if (tool.isNew) badgesHTML += '<span class="badge badge-new">新</span>';
    if (tool.pricing === 'free') badgesHTML += '<span class="badge badge-free">免费</span>';

    // 标签
    const tagsHTML = tool.tags.slice(0, 3).map(t => `<span class="tool-tag">${t}</span>`).join('');

    // 点击数
    const clicks = getClickCount(tool.url);
    const clicksText = clicks > 0 ? `👆 ${clicks}` : '';

    card.innerHTML = `
        <div class="card-header">
            <span class="tool-name">${tool.name}</span>
            <span class="tool-badges">${badgesHTML}</span>
        </div>
        <div class="tool-desc">${tool.desc}</div>
        <div class="card-footer">
            <span class="tool-tags">${tagsHTML}</span>
            <span class="tool-stats">${clicksText}</span>
        </div>
    `;
    return card;
}

// ---- 渲染全部内容 ----
function renderAll() {
    // 获取数据
    let newTools = getNewTools();
    let hotTools = getHotTools();
    let otherTools = getOtherTools();

    // 搜索过滤
    if (searchKeyword) {
        newTools = newTools.filter(matchSearch);
        hotTools = hotTools.filter(matchSearch);
        otherTools = otherTools.filter(matchSearch);
    }

    // 分类过滤（对所有区域生效）
    if (currentCategory !== 'all') {
        newTools = newTools.filter(t => t.category === currentCategory);
        hotTools = hotTools.filter(t => t.category === currentCategory);
        otherTools = otherTools.filter(t => t.category === currentCategory);
    }

    // 本周新增
    const newGrid = document.getElementById('newToolsGrid');
    newGrid.innerHTML = '';
    newTools.forEach(t => newGrid.appendChild(createToolCard(t)));
    document.getElementById('newToolsSection').style.display = newTools.length > 0 ? '' : 'none';

    // 热门推荐
    const hotGrid = document.getElementById('hotToolsGrid');
    hotGrid.innerHTML = '';
    hotTools.forEach(t => hotGrid.appendChild(createToolCard(t)));

    // 全部工具
    const allGrid = document.getElementById('allToolsGrid');
    allGrid.innerHTML = '';
    otherTools.forEach(t => allGrid.appendChild(createToolCard(t)));

    // 无结果
    const noResult = document.getElementById('noResult');
    const totalVisible = newTools.length + hotTools.length + otherTools.length;
    noResult.style.display = totalVisible === 0 ? '' : 'none';

    // 更新总数
    document.getElementById('toolCount').textContent = TOOLS.length;
}

// ---- 搜索 ----
function doSearch() {
    searchKeyword = document.getElementById('searchInput').value.trim();
    currentCategory = 'all';
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    const allBtn = document.querySelector('.cat-btn[data-cat="all"]');
    if (allBtn) allBtn.classList.add('active');
    renderAll();
}

// ---- 初始化 ----
function init() {
    renderCategories();
    renderAll();
    document.getElementById('toolCount').textContent = TOOLS.length;
    document.getElementById('updateTime').textContent = new Date().toLocaleDateString('zh-CN');

    document.getElementById('searchBtn').addEventListener('click', doSearch);
    document.getElementById('searchInput').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doSearch();
    });
}

document.addEventListener('DOMContentLoaded', init);
