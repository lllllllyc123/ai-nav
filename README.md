# 🤖 AI 工具导航站

> 零依赖纯静态 AI 工具导航站，56 个精选工具，8 个分类。双击即用，拖拽部署。

**在线地址**：**[https://ai-nav-kappa.vercel.app](https://ai-nav-kappa.vercel.app)**（GitHub → Vercel 自动部署）

**GitHub 仓库**：**[lllllllyc123/ai-nav](https://github.com/lllllllyc123/ai-nav)**

---

## 🚀 快速开始

```bash
# 本地预览
双击 index.html

# 或
cd ai-nav && npx serve .
```

零依赖，不需要 Node.js、npm 或任何框架。

---

## 🌐 线上部署

| 平台 | 结果 | 说明 |
|:---|:---|:---|
| **Vercel** ✅ | 当前线上 | GitHub 导入 → 自动部署，支持 HTTPS、自动续期 |
| Netlify ⚠️ | 备用 | 需登录后关闭 Site Protection |
| tiiny.host ⚠️ | 备用 | 有时效限制 + 广告，仅适合临时预览 |

**推荐方案**：GitHub + Vercel（免费、自动部署、push 即更新）。

---

## ➕ 如何新增工具

编辑 `data.js`，在对应分类数组末尾加对象：

```js
{
    name: "工具名称",
    desc: "一句话描述",
    url: "https://example.com",
    tags: ["标签1", "标签2"],
    category: "writing",     // 见下表
    pricing: "free",         // free | freemium | paid
    isHot: false,            // 热门推荐
    isNew: true,             // 本周新增
}
```

**分类 key**：

| key | 名称 | 工具数 |
|:---|:---|:---|
| `writing` | AI写作 | 10 |
| `image` | AI绘画/图像 | 9 |
| `video` | AI视频 | 7 |
| `office` | AI办公/效率 | 8 |
| `coding` | AI编程 | 6 |
| `marketing` | AI营销/电商 | 5 |
| `academic` | AI学术 | 6 |
| `other` | 其他AI工具 | 5 |

> 💡 每周五固定更新 3-5 个新工具，设 `isNew: true`，并在社媒同步"本周新增"通知。

---

## 📁 项目结构

```
ai-nav/
├── index.html      # 主页面（SEO meta、OG、Clarity 已配好）
├── style.css       # 响应式样式（CSS 变量，移动端适配）
├── data.js         # 工具数据库（唯一需改的文件）
├── script.js       # 搜索 / 分类筛选 / 点击统计（localStorage）
├── robots.txt      # 搜索引擎爬虫规则
├── sitemap.xml     # 站点地图
├── CONTENT.md      # 内容生产模板（知乎/小红书/微信群/短视频）
└── README.md       # 本文件
```

---

## ✅ 功能清单

- [x] 56 个工具，8 个分类
- [x] 实时搜索（名称 / 描述 / 标签）
- [x] 分类筛选（三区域同步过滤）
- [x] 🆕 本周新增 + 🔥 热门推荐 双区域
- [x] 点击计数（localStorage 持久化，卡片显示 👆 次数）
- [x] 移动端响应式
- [x] SEO 基础优化（meta、OG、Twitter Card）
- [x] 站点地图（sitemap.xml + robots.txt）
- [x] 用户行为分析（Microsoft Clarity）
- [x] 5 套内容生产模板（`CONTENT.md`）

---

## 📢 运营与变现路线图

### 变现模式（按 ch0023 路线）

```
流量 → CPS 佣金（用户点链接跳转，拿提成 10%-30%）
流量 → 广告坑位费（日 IP 300+ 后，首页位 ¥300-800/月）
流量 → 私域沉淀（首页加微信二维码 → 群里深度变现）
```

> 三种模式都不需要用户登录。详细分析见 ch0023 和 ch0094。

### 第一阶段：冷启动（前 1-2 周）

1. **私域邀约**：链接发给微信好友，收集反馈
2. **知乎截流**：搜索"AI工具推荐"类问题，用模板 2 回答
3. **社群分享**：技术群/学生群有人问工具时自然丢链接（模板 4）

### 第二阶段：内容获客

- **知乎横评**：每周一篇工具横评文章（模板 1）
- **小红书图文**：每周一篇图文笔记（模板 3）
- **朋友圈更新通知**：每周五发布"本周新增"（模板 4-C）
- **SEO 长尾词**：布局"免费 AI PPT""AI 写作工具推荐 2025"

### 第三阶段：变现

| 方式 | 如何做 | 预期 |
|:---|:---|:---|
| CPS 佣金 | data.js 的 url 换成返利链接 | ¥1,000-5,000/月 |
| 固定坑位费 | 首页推荐位按月出租 | ¥300-800/位/月 |
| 私域变现 | 加微信 → 群 → 卖课/社群 | ¥3,000+/月 |

### CPS 实操

1. 去工具官网找 "Affiliate" / "合作伙伴" 页面
2. 注册获取推广链接
3. 替换 `data.js` 中的 `url`：

```js
// 改前
{ name: "Jasper", url: "https://www.jasper.ai" }

// 改后（Jasper 返利 30%）
{ name: "Jasper", url: "https://www.jasper.ai?ref=你的推广码" }
```

---

## 📝 内容生产

**`CONTENT.md`** 包含 5 套可直接复制修改的模板：

| 模板 | 平台 | 用途 |
|:---|:---|:---|
| 模板 1 | 知乎横评文章 | 每周一篇深度测评 |
| 模板 2 | 知乎问答截流 | 高流量问题下自然植入 |
| 模板 3 | 小红书图文 | 打工人/学生党场景化推荐 |
| 模板 4 | 微信群/朋友圈 | 自然分享 + 更新通知 |
| 模板 5 | 抖音/B 站 | 60 秒工具推荐短视频脚本 |

每套模板包含：标题公式、正文结构（可直接复制改）、发布 Checklist、发布时间建议。

**内容生产辅助工具**：

| 需求 | 工具 | 说明 |
|:---|:---|:---|
| 文案初稿 | DeepSeek / Claude / ChatGPT | 用 AI 写 AI 工具测评，自然贴切 |
| 封面图/内页图 | Canva | 小白友好，模板丰富 |
| 视频剪辑 | 剪映 | AI 配音 + 自动字幕 |
| 数据监控 | Microsoft Clarity | 已集成，看用户行为 |

> 目前没有专门的中文内容模板开源工具——但 `CONTENT.md` 本身就是你打磨过的"工具"，每次发之前打开改几个词就行。

---

## ❌ 不做的事情

| 事项 | 理由 |
|:---|:---|
| 用户登录/注册 | 变现不需要登录，加登录增加跳出率和维护成本 |
| 手机号验证 | 国内短信 ~¥0.045/条，无收入前纯烧钱 |
| 后端数据库 | 纯静态站够用，56 个工具 JSON 足够 |
| 自建服务器 | Vercel 免费够用到日 UV 破万 |

---

## 🔧 项目记录

| 时间 | 事项 |
|:---|:---|
| 初始搭建 | index.html + style.css + data.js + script.js，44 工具 8 分类 |
| 自检修复 | 7 处：ChatGPT 链接 → chatgpt.com、Sora → 可灵 AI、随机排序移除、分类过滤三区域同步、页脚空链接修复、工具数同步、README 路径修正 |
| SEO 基建 | robots.txt + sitemap.xml + OG/Twitter meta |
| 分析接入 | Microsoft Clarity（ID: `wxiw5yvrwx`） |
| 部署 | GitHub → Vercel（`ai-nav-kappa.vercel.app`） |
| 内容模板 |
| 工具扩充 | +12 工具 -> 56 个（豆包、即梦AI、v0.dev、即创等）；收录入口改为 GitHub Issue | CONTENT.md：3 套 → 5 套（增加知乎问答截流 + 短视频脚本），润色对标爆款 |

---

## 📋 后续规划

- [ ] 首页加微信二维码引流区域
- [ ] 制作 og-image.png（Canva 1200×630）
- [ ] 开始执行内容发布节奏（先堆 12 条内容）
- [ ] 工具详情页（价格、教程链接、评分）
- [ ] 暗色模式切换
- [x] 用户提交收录表单（GitHub Issue）
- [ ] 自定义域名绑定

---

## 📚 参考

- 基于 [AI Money Maker Handbook](https://github.com) **ch0023「通过搭建垂直细分 AI 导航站赚钱」**
- 配套 **ch0094「通过创建导航站倒卖流量赚钱」** 提供通用方法论

---

## 📄 License

MIT
