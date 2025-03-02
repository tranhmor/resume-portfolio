export const resumeData = {
  name: "徐浩然",
  title: "Web前端开发工程师",
  avatar: "/xuhaoran.jpg",
  phone: "+86 18126773996",
  email: "tranhmor@gmail.com",
  github: "https://github.com/tranhmor",
  blog: "https://github.com/tranhmor",
  location: "广州 广东",
  birthYear: "2001-09",
  
  educations: [{
    university: "华南农业大学",
    major: "信息管理与信息系统",
    degree: "本科",
    duration: "2020.09 - 2024.06"
  },
  {
    university: "香港科技大学（广州）",
    major: "优秀营员",
    degree: "红鸟营",
    duration: "2024.06 - 2024.07"
  }
],
  
  // 添加其他维度数据
  otherDimensions: [
    {
      title: "美国大学生数学建模竞赛特等奖Finalist (2%)",
    },
    {
      title: "大创省级立项 - 基于多模态数据的农业知识图谱构建及应用研发",
    },
    {
      title: 'Moledao Web3 二期优秀学员',
    },
    {
      title: '英语证书CET-6',
    }
  ],
  
  skills: {
    frontend: [
      "熟练使用 React，掌握 Hooks 性能优化",
      "掌握 Next.js（SSR 服务端渲染）",
      "熟悉使用 Vue.js",
      "熟练使用 TailwindCSS",
      "熟悉 Shadcn、Headless UI 组件库",
      "熟悉 Ant Design、Element UI"
    ],
    engineering: [
      "熟悉项目脚手架的搭建",
      "熟练使用 Git 进行代码协作",
      "了解 CI/CD 流水线设计（结合 GitLab Runner 和 Docker 实现自动化部署）"
    ],
    fullstack: [
      "具备多端应用开发经验（使用 Taro 开发小程序）",
      "拥有全栈 Node.js 开发经验（Nest.js 微服务架构、Strapi 快速开发）"
    ],
    other: [
      "熟悉 HTTP、TCP/IP 协议，了解浏览器工作原理",
      "熟悉常用的跨域解决方案",
      "了解前端监控体系的搭建（使用 Sentry 和埋点方案）"
    ]
  },
  
  projects: [
    {
      name: "AICoin",
      type: "PC + 网页",
      tech: "React + Next.js + Shadcn UI + TailwindCSS + Redux",
      description: "AICoin作为全球Web3行情分析工具的领跑者，致力于通过 AI 驱动、多终端协同、社区化生态 三大核心能力，为全球用户提供 实时行情分析、智能投资决策、去中心化社交互动 的一站式解决方案。",
      role: "核心开发成员",
      responsibilities: [
        "参与VIP订阅体系前端架构设计，重构实现VIP落地页开发，首屏LCP≤800ms，订阅转化率提升18%，营收增长50%。",
        "设计快讯板块高性能事件日历数据 Hook，采用LRU缓存策略与按需加载机制，减少重复请求，实现按月份分区存储与快速检索，支持日/周/月视图无缝切换，用户日均停留时长增加18分钟。",
        "封装基于ECharts的实时行情趋势图组件，实现分钟级数据更新与万级数据点流畅渲染，受多个核心模块复用，有效节省开发资源。",
        "迁移PC端自定义社区指标板块至Web端，包括k线行情、AIScript自研脚本代码渲染，引流PC客户端下载，社区生态活跃度显著增长，用户生成自定义指标数达5w+。",
        "设计全局Metadata生成器，标准化OG/Twitter协议与多语言Canonical管理，推动核心页面搜索排名提升40%，Lighthouse SEO平均分≥95。"
      ]
    },
    {
      name: "ITalent",
      type: "移动端优先 网页",
      tech: "React + Next.js + Ant Design + TailwindCSS + Strapi + MySql + MongoDB",
      description: "面向B端的SaaS服务平台企业级OA系统，集成人力资源管理、招聘管理、组织架构管理、即时通讯、考勤管理、人事管理和审批流程等多个业务板块于一体，为企业提供全方位的数字化人才管理解决方案。",
      role: "项目主导者 & 全栈开发",
      responsibilities: [
        "主导核心业务模块的数据库设计，利用Strapi提供的灵活接口管理功能，实现数据的快速映射和业务逻辑的高效实现。",
        "基于MongoDB及封装Antd组件实现灵活的自定义表单功能，支持用户灵活定义表单字段，提升人事管理模块的可配置性和扩展性。",
        "集成Tecent Map SDK实现员工考勤的定位打卡功能，结合地理围栏技术，提高考勤数据的准确性和可靠性。",
        "接入OpenAI API，应用最新的 AI 技术实现自动解析简历、岗位需求生成等功能，优化招聘流程，提高招聘效率。",
        "使用Socket.io构建即时通讯模块，实现基于组织架构的自动建群和消息通知，提升企业内部的沟通效率。",
        "结合html2canvas技术，支持导出组织架构图为图片或文件格式，方便分享和存档，提升信息展示的灵活性。",
        "实现Excel表单的自定义导出功能，生成满足用户特定需求的报表。"
      ]
    },
    {
      name: "管理中枢系统",
      type: "微前端 + 网页",
      tech: "Vue + Element UI + Qiankun",
      description: "支撑全球用户、日均千万级数据操作的SaaS级管理中枢，涵盖用户权限、数据监控、策略审核、行情爬取等12个核心模块",
      role: "前端开发",
      responsibilities: [
        "设计配置化页面引擎，通过JSON Schema协议实现60%+管理页面自动生成，需求交付效率提升3倍。",
        "构建RBAC+ABAC混合权限体系，开发动态路由加载。",
        "日常维护及迭代优化会员、行情、快讯、资讯管理等多个模块的后台管理页面。"
      ]
    },
    {
      name: "无聊",
      type: "AI助手 + 聊天室",
      tech: "React + Nest.js + ScyllaDB + Elasticsearch + Socket.io + Redis",
      description: "结合即时通讯与AI技术，为用户提供类似微信的社交体验，支持个人聊天、群组话题讨论和好友关系管理。内置Claude、Gemini、OpenAI等主流大模型，能够实现内容生成、数据分析等智能服务，内嵌于ITalent与AICoin，实现企业内外信息互通，大幅提升工作效率和用户体验。",
      role: "前端开发 & 后端开发",
      responsibilities: [
        "参与后端服务重构，集成Redis缓存机制，优化数据存取性能，降低数据库压力，提高系统的响应速度和稳定性。",
        "集成Nest.js官方日志打印功能，完善日志记录，便于调试和监控；接入Swagger生成接口文档，规范API接口，提升团队协作和维护效率。",
        "优化图片和文件的上传流程，提升上传速度和可靠性，支持大文件的断点续传和多线程上传，改善用户体验。",
        "集成 OpenAI、Claude、Gemini 等 AI 服务，提供智能回复、内容生成和数据分析等功能，增强聊天机器人和智能助手的能力。",
        "实现群成员列表的增删改查功能，支持批量操作和权限控制，提升群组管理的便捷性；实现群公告的增删改查服务，支持公告的富文本编辑和发送通知，增强群信息传达效率。"
      ]
    }
  ],
  
  workExperience: [
    {
      company: "广州安点科技有限公司",
      position: "全栈开发工程师（前端方向）",
      duration: "2023.12 - 至今",
      description: "负责公司多个核心产品的前端架构设计与开发，专注于高性能Web应用与AI技术集成。主要工作包括：优化用户界面与交互体验，提升产品转化率与留存；设计高效数据处理方案，实现复杂数据可视化；集成多种AI大模型API，开发大模型应用功能；参与技术选型与基础设施建设，推动前端工程化实践。"
    }
  ]
} 