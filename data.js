// ==========================================
// AI???? - ?????
// ???????????????????
// ?????
//   name: ????
//   desc: ?????
//   url: ????
//   tags: ????
//   category: ??key
//   pricing: "free" | "freemium" | "paid"
//   isHot: ????
//   isNew: ????
// ==========================================

const CATEGORIES = [
    { key: "all",      name: "全部",       icon: "📦" },
    { key: "writing",  name: "AI写作",     icon: "✍️" },
    { key: "image",    name: "AI绘画/图像", icon: "🎨" },
    { key: "video",    name: "AI视频",     icon: "🎬" },
    { key: "office",   name: "AI办公/效率", icon: "💼" },
    { key: "coding",   name: "AI编程",     icon: "💻" },
    { key: "marketing",name: "AI营销/电商", icon: "📢" },
    { key: "academic", name: "AI学术",     icon: "🎓" },
    { key: "other",    name: "其他AI工具",  icon: "🔧" },
];

const TOOLS = [
    // ==================== AI?? ====================
    {
        name: "ChatGPT", desc: "OpenAI出品的全能对话AI，支持写作、翻译、编程、分析等",
        url: "https://chatgpt.com", tags: ["对话", "写作", "编程", "翻译"],
        category: "writing", pricing: "freemium", isHot: true,
    },

    {
        name: "Claude", desc: "Anthropic的长文本对话AI，擅长深度分析和长文写作",
        url: "https://claude.ai", tags: ["对话", "写作", "分析"],
        category: "writing", pricing: "freemium", isHot: true,
    },

    {
        name: "Kimi", desc: "月之暗面的超长上下文AI助手，支持200万字，擅长中文写作",
        url: "https://kimi.moonshot.cn", tags: ["中文", "写作", "长文本"],
        category: "writing", pricing: "free", isHot: true, isNew: true,
    },

    {
        name: "通义千问", desc: "阿里出品的全能AI助手，支持多轮对话和文档分析",
        url: "https://tongyi.aliyun.com", tags: ["中文", "写作", "文档"],
        category: "writing", pricing: "free",
    },

    {
        name: "DeepSeek", desc: "深度求索的推理模型，擅长逻辑推理和代码生成",
        url: "https://chat.deepseek.com", tags: ["中文", "推理", "编程"],
        category: "writing", pricing: "free", isHot: true,
    },

    {
        name: "文心一言", desc: "百度出品的知识增强大语言模型，中文理解能力强",
        url: "https://yiyan.baidu.com", tags: ["中文", "写作", "知识"],
        category: "writing", pricing: "free",
    },

    {
        name: "Notion AI", desc: "集成在Notion中的AI写作助手，直接在工作区使用",
        url: "https://www.notion.so/product/ai", tags: ["写作", "笔记", "协作"],
        category: "writing", pricing: "paid",
    },

    {
        name: "Jasper", desc: "专业营销文案AI写作工具，支持品牌语调定制",
        url: "https://www.jasper.ai", tags: ["营销", "写作", "品牌"],
        category: "writing", pricing: "paid",
    },

    {
        name: "豆包", desc: "字节跳动出品的AI对话助手，支持网页/APP/插件，免费好用",
        url: "https://www.doubao.com", tags: ["中文", "写作", "翻译"],
        category: "writing", pricing: "free", isNew: true,
    },

    {
        name: "智谱清言", desc: "智谱AI基于ChatGLM的对话助手，支持128K上下文和联网搜索",
        url: "https://chatglm.cn", tags: ["中文", "写作", "搜索"],
        category: "writing", pricing: "free",
    },

    // ==================== AI??/?? ====================
    {
        name: "Midjourney", desc: "AI绘画标杆产品，艺术风格表现出色，通过Discord使用",
        url: "https://www.midjourney.com", tags: ["绘画", "艺术", "创意"],
        category: "image", pricing: "paid", isHot: true,
    },

    {
        name: "Stable Diffusion", desc: "开源AI绘画模型，可本地部署，社区生态丰富",
        url: "https://stability.ai", tags: ["绘画", "开源", "本地部署"],
        category: "image", pricing: "free",
    },

    {
        name: "DALL·E 3", desc: "OpenAI的AI绘画工具，集成在ChatGPT Plus中，文字理解强",
        url: "https://openai.com/dall-e-3", tags: ["绘画", "创意", "精确"],
        category: "image", pricing: "paid",
    },

    {
        name: "Canva AI", desc: "Canva内置的AI设计工具，一键生成海报、PPT、社交媒体图",
        url: "https://www.canva.com/ai-image-generator", tags: ["设计", "海报", "PPT"],
        category: "image", pricing: "freemium", isHot: true,
    },

    {
        name: "Remove.bg", desc: "AI一键抠图，上传图片自动去除背景，速度快效果好",
        url: "https://www.remove.bg", tags: ["抠图", "电商", "去背景"],
        category: "image", pricing: "freemium",
    },

    {
        name: "稿定AI", desc: "国内AI设计工具，支持AI商品图、AI消除、智能抠图",
        url: "https://www.gaoding.com/ai", tags: ["设计", "电商图", "中文"],
        category: "image", pricing: "freemium",
    },

    {
        name: "Leonardo.ai", desc: "专注游戏和设计领域的AI绘画平台，模型丰富",
        url: "https://leonardo.ai", tags: ["绘画", "游戏", "设计"],
        category: "image", pricing: "freemium",
    },

    {
        name: "即梦AI", desc: "字节跳动AI图片和视频生成工具，支持文生图和智能修图",
        url: "https://jimeng.jianying.com", tags: ["绘画", "中文", "视频"],
        category: "image", pricing: "free", isNew: true,
    },

    {
        name: "Ideogram", desc: "AI图片生成，文字渲染能力业界领先，适合海报和Logo设计",
        url: "https://ideogram.ai", tags: ["绘画", "文字", "设计"],
        category: "image", pricing: "freemium",
    },

    // ==================== AI?? ====================
    {
        name: "可灵AI", desc: "快手出品的AI视频生成工具，支持文生视频和图生视频，效果惊艳",
        url: "https://kling.kuaishou.com", tags: ["视频生成", "中文", "免费"],
        category: "video", pricing: "free", isHot: true, isNew: true,
    },

    {
        name: "Runway", desc: "专业AI视频编辑和生成平台，功能全面，影视级效果",
        url: "https://runwayml.com", tags: ["视频编辑", "生成", "专业"],
        category: "video", pricing: "paid",
    },

    {
        name: "剪映AI", desc: "字节跳动出品的视频剪辑工具，内置AI数字人、AI配音等功能",
        url: "https://www.capcut.cn", tags: ["剪辑", "数字人", "中文"],
        category: "video", pricing: "free", isHot: true,
    },

    {
        name: "HeyGen", desc: "AI数字人视频生成，上传照片即可生成口播视频",
        url: "https://www.heygen.com", tags: ["数字人", "口播", "营销"],
        category: "video", pricing: "freemium",
    },

    {
        name: "Pika", desc: "AI视频生成新秀，支持文字/图片生成视频，创意玩法多",
        url: "https://pika.art", tags: ["视频生成", "创意"],
        category: "video", pricing: "freemium",
    },

    {
        name: "Descript", desc: "AI视频/播客编辑，像编辑文档一样编辑视频",
        url: "https://www.descript.com", tags: ["视频编辑", "播客", "字幕"],
        category: "video", pricing: "freemium",
    },

    {
        name: "??", desc: "????AI??????????????AI???????",
        url: "https://www.jichuang.tech", tags: ["???", "???", "??"],
        category: "video", pricing: "free",
    },

    // ==================== AI??/?? ====================
    {
        name: "Gamma", desc: "AI一键生成精美PPT，输入主题自动生成完整演示文稿",
        url: "https://gamma.app", tags: ["PPT", "演示", "文档"],
        category: "office", pricing: "freemium", isHot: true,
    },

    {
        name: "Beautiful.ai", desc: "AI驱动的PPT设计工具，自动排版，设计专业",
        url: "https://www.beautiful.ai", tags: ["PPT", "设计", "自动排版"],
        category: "office", pricing: "paid",
    },

    {
        name: "腾讯会议AI", desc: "腾讯会议内置AI助手，自动会议纪要、字幕翻译",
        url: "https://meeting.tencent.com/ai", tags: ["会议", "纪要", "翻译"],
        category: "office", pricing: "free",
    },

    {
        name: "飞书智能伙伴", desc: "飞书内置AI，支持文档总结、表格分析、会议记录",
        url: "https://www.feishu.cn/product/ai", tags: ["文档", "协作", "表格"],
        category: "office", pricing: "free",
    },

    {
        name: "Otter.ai", desc: "AI会议记录工具，实时转录、生成摘要和待办事项",
        url: "https://otter.ai", tags: ["会议", "转录", "英文"],
        category: "office", pricing: "freemium",
    },

    {
        name: "Perplexity", desc: "AI搜索引擎，实时联网搜索并给出引用来源",
        url: "https://www.perplexity.ai", tags: ["搜索", "研究", "引用"],
        category: "office", pricing: "freemium", isHot: true,
    },

    {
        name: "AiPPT", desc: "AI一键生成PPT，输入主题自动生成完整演示文稿和配图",
        url: "https://www.aippt.cn", tags: ["PPT", "中文", "演示"],
        category: "office", pricing: "freemium",
    },

    {
        name: "通义效率", desc: "阿里出品的AI效率工具，实时语音转文字、会议纪要和总结",
        url: "https://tongyi.aliyun.com/efficiency", tags: ["会议", "转录", "中文"],
        category: "office", pricing: "free",
    },

    // ==================== AI?? ====================
    {
        name: "GitHub Copilot", desc: "GitHub出品的AI编程助手，IDE内实时代码补全",
        url: "https://github.com/features/copilot", tags: ["编程", "补全", "IDE"],
        category: "coding", pricing: "paid", isHot: true,
    },

    {
        name: "Cursor", desc: "AI-first代码编辑器，基于VS Code，内置Chat和代码生成",
        url: "https://cursor.sh", tags: ["编辑器", "代码生成", "Chat"],
        category: "coding", pricing: "freemium", isHot: true,
    },

    {
        name: "Windsurf", desc: "Codeium出品的AI IDE，支持多文件上下文理解和自动编辑",
        url: "https://codeium.com/windsurf", tags: ["编辑器", "多文件", "免费"],
        category: "coding", pricing: "free",
    },

    {
        name: "通义灵码", desc: "阿里出品的免费AI编程助手，支持VS Code和JetBrains",
        url: "https://tongyi.aliyun.com/lingma", tags: ["编程", "中文", "免费"],
        category: "coding", pricing: "free", isNew: true,
    },

    {
        name: "v0.dev", desc: "Vercel出品的AI前端生成工具，输入描述直接生成React/Next.js页面",
        url: "https://v0.dev", tags: ["前端", "React", "原型"],
        category: "coding", pricing: "freemium", isNew: true,
    },

    {
        name: "Replit Agent", desc: "Replit的AI编程代理，通过自然语言自动构建和部署全栈应用",
        url: "https://replit.com", tags: ["全栈", "部署", "原型"],
        category: "coding", pricing: "freemium",
    },

    // ==================== AI??/?? ====================
    {
        name: "Writesonic", desc: "AI营销内容生成，支持博客、广告文案、落地页等",
        url: "https://writesonic.com", tags: ["营销", "文案", "SEO"],
        category: "marketing", pricing: "freemium",
    },

    {
        name: "Copy.ai", desc: "AI营销文案生成器，专注销售和社交媒体文案",
        url: "https://www.copy.ai", tags: ["文案", "销售", "社媒"],
        category: "marketing", pricing: "freemium",
    },

    {
        name: "美图AI", desc: "美图秀秀AI功能，支持AI模特图、AI商品图、智能修图",
        url: "https://ai.meitu.com", tags: ["电商图", "模特", "修图"],
        category: "marketing", pricing: "freemium", isHot: true,
    },

    {
        name: "蝉镜AI", desc: "AI短视频营销工具，批量生成带货视频和口播内容",
        url: "https://www.chanjing.ai", tags: ["短视频", "带货", "批量"],
        category: "marketing", pricing: "paid",
    },

    {
        name: "易媒助手", desc: "AI自媒体多平台管理和分发工具，一键发布到30+平台",
        url: "https://www.yimeizhushou.com", tags: ["自媒体", "分发", "中文"],
        category: "marketing", pricing: "freemium",
    },

    // ==================== AI?? ====================
    {
        name: "Paperpal", desc: "AI学术写作助手，检查语法、提升学术表达",
        url: "https://paperpal.com", tags: ["论文", "语法", "学术写作"],
        category: "academic", pricing: "freemium",
    },

    {
        name: "Consensus", desc: "AI学术搜索，从论文中提取结论，回答研究问题",
        url: "https://consensus.app", tags: ["搜索", "论文", "研究"],
        category: "academic", pricing: "free", isHot: true,
    },

    {
        name: "笔灵AI", desc: "国内AI论文工具，支持论文降重、润色、提纲生成",
        url: "https://www.bilingai.cn", tags: ["论文", "降重", "润色", "中文"],
        category: "academic", pricing: "freemium",
    },

    {
        name: "Elicit", desc: "AI研究助手，自动从论文中提取数据并对比分析",
        url: "https://elicit.com", tags: ["研究", "文献", "数据分析"],
        category: "academic", pricing: "freemium",
    },

    {
        name: "Scholarcy", desc: "AI论文摘要工具，自动生成论文速读卡片",
        url: "https://www.scholarcy.com", tags: ["论文", "摘要", "速读"],
        category: "academic", pricing: "freemium",
    },

    {
        name: "知网AI助手", desc: "知网官方AI学术工具，支持论文研读、AI辅助写作和文献检索",
        url: "https://ai.cnki.net", tags: ["论文", "文献", "中文"],
        category: "academic", pricing: "free",
    },

    // ==================== ??AI?? ====================
    {
        name: "Suno", desc: "AI音乐生成，输入歌词和风格自动创作完整歌曲",
        url: "https://suno.com", tags: ["音乐", "创作", "歌曲"],
        category: "other", pricing: "freemium", isHot: true,
    },

    {
        name: "ElevenLabs", desc: "顶级AI语音合成，支持多语言，声音自然逼真",
        url: "https://elevenlabs.io", tags: ["语音", "合成", "配音"],
        category: "other", pricing: "freemium",
    },

    {
        name: "Napkin AI", desc: "AI将文字自动转化为信息图、流程图和图表",
        url: "https://www.napkin.ai", tags: ["图表", "可视化", "信息图"],
        category: "other", pricing: "freemium",
    },

    {
        name: "bolt.new", desc: "AI全栈应用生成，输入描述直接生成可运行的Web应用",
        url: "https://bolt.new", tags: ["应用", "全栈", "原型"],
        category: "other", pricing: "freemium", isHot: true,
    },

    {
        name: "通义听悟", desc: "阿里AI音视频转文字工具，支持实时记录、翻译和总结",
        url: "https://tingwu.aliyun.com", tags: ["语音", "转录", "中文"],
        category: "other", pricing: "free",
    },

];