// ==========================================
// AI工具导航 - CPS返利链接映射
// 替换 YOUR_CODE 为你实际的推广码
// 注册渠道见每个工具的注释
// ==========================================

// 返利链接映射表：工具名 -> 返利链接（含推广码）
// 未在表中的工具继续使用原链接
var AFFILIATE_MAP = {
    // === AI写作 ===
    // Notion 联盟计划: https://affiliate.notion.so/
    // "Notion AI": "https://affiliate.notion.so/YOUR_CODE",

    // Jasper 合作伙伴: https://www.jasper.ai/partners (20-30% 循环佣金)
    "Jasper": "https://www.jasper.ai?fpr=YOUR_CODE",

    // === AI绘画/图像 ===
    // Canva 联盟: https://www.canva.com/affiliates/
    "Canva AI": "https://www.canva.com/join/YOUR_CODE",

    // Remove.bg 联盟
    "Remove.bg": "https://www.remove.bg/r/YOUR_CODE",

    // === AI视频 ===
    // HeyGen 合作伙伴
    "HeyGen": "https://www.heygen.com?via=YOUR_CODE",

    // Descript 联盟
    "Descript": "https://www.descript.com?lmref=YOUR_CODE",

    // === AI办公/效率 ===
    // Gamma 联盟
    "Gamma": "https://gamma.app?via=YOUR_CODE",

    // === AI编程 ===
    // Cursor 推荐计划
    "Cursor": "https://cursor.sh?referral=YOUR_CODE",

    // === AI营销/电商 ===
    // Copy.ai 联盟
    "Copy.ai": "https://www.copy.ai?via=YOUR_CODE",

    // Writesonic 联盟
    "Writesonic": "https://writesonic.com?ref=YOUR_CODE",

    // === 其他AI工具 ===
    // ElevenLabs 推荐: https://elevenlabs.io/affiliate
    "ElevenLabs": "https://elevenlabs.io/?from=YOUR_CODE",

    // Suno 联盟
    "Suno": "https://suno.com?ref=YOUR_CODE",
};

// 获取工具的最终链接（优先返利链接）
function getAffiliateUrl(tool) {
    if (AFFILIATE_MAP[tool.name] && AFFILIATE_MAP[tool.name].indexOf('YOUR_CODE') === -1) {
        return AFFILIATE_MAP[tool.name];
    }
    return tool.url;
}
