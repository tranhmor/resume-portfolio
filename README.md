# 🚀 我的个人简历网站

这是一个基于 [Next.js](https://nextjs.org) 构建的个人简历网站项目，旨在以现代化、互动性强的方式展示我的专业经历和技能。

## ✨ 特色功能

- 🎨 现代化设计与响应式布局
- 📱 完美适配移动端与桌面端
- 🖨️ 一键导出PDF简历
- 🌙 明暗主题切换
- 🔍 SEO优化，让招聘者更容易找到你

## 🚀 快速开始

首先，运行开发服务器：

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

在浏览器中打开 [https://xuhaoran-resume.vercel.app/](https://xuhaoran-resume.vercel.app/) 查看结果。

你可以通过修改 `app/page.tsx` 开始编辑页面。页面会随着你的编辑自动更新。

## 🛠️ 项目结构

```
├── app/                # Next.js 应用目录
│   ├── page.tsx        # 主页面
│   └── sitemap.xml/    # 站点地图
├── components/         # 组件目录
│   ├── resume/         # 简历相关组件
│   │   ├── header.tsx      # 简历头部
│   │   ├── experience.tsx  # 工作经验
│   │   ├── projects.tsx    # 项目经验
│   │   └── education.tsx   # 教育背景
│   └── ui/             # UI组件
│       ├── floating-pdf-button.tsx  # 浮动PDF按钮
│       └── pdf-button-wrapper.tsx   # PDF按钮包装器
└── lib/                # 工具库
    └── resume-data.ts  # 简历数据
```

## 🎨 个性化

1. 修改 `lib/resume-data.ts` 文件中的数据以更新你的个人信息
2. 根据需要调整 `components/resume/` 目录下的组件
3. 自定义主题颜色和样式

## 📚 技术栈

- [Next.js](https://nextjs.org/) - React框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Tailwind CSS](https://tailwindcss.com/) - 样式解决方案
- [Geist Font](https://vercel.com/font) - Vercel的现代字体

## 🚀 部署

最简单的部署方式是使用 [Vercel平台](https://vercel.com/new)（Next.js的创建者提供）。

```bash
# 安装Vercel CLI
npm i -g vercel

# 部署
vercel
```

## 🤔 为什么选择这个项目？

- 📈 比传统PDF简历更能展示你的技术能力
- 🌐 随时随地可访问，方便分享
- 🔄 易于更新，无需重新设计PDF
- 🎭 展示你的个性和创造力

## 📝 待办事项

- [ ] 添加博客功能
- [ ] 集成更多交互式元素
- [ ] 添加作品集展示
- [ ] 支持多语言

---

💡 **小贴士**：记得定期更新你的简历内容，保持信息的时效性！
