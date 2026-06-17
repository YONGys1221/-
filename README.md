# 个人作品集网站

一个使用 React + Vite 搭建的高级视觉设计师个人作品集网站。

## 特点

- 🎨 暗色系高级设计，科技感十足
- ⚡ 使用 Vite 构建，快速开发和打包
- 🎬 Framer Motion 流畅动画
- 📱 响应式布局设计
- 🎯 版心控制在 1700px，最适合 PC 端展示
- ✨ 现代化组件化架构

## 项目结构

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # 导航栏
│   │   ├── Hero.jsx            # 首页 Hero 区域
│   │   ├── About.jsx           # 个人经历模块
│   │   ├── Projects.jsx        # 精选项目模块
│   │   ├── Skills.jsx          # 个人优势模块
│   │   └── Contact.jsx         # 联系方式模块
│   ├── App.jsx                 # 主应用组件
│   ├── main.jsx                # 应用入口
│   └── index.css               # 全局样式
├── public/                     # 静态文件
├── package.json               # 项目依赖配置
├── vite.config.js             # Vite 配置
├── tailwind.config.js         # Tailwind CSS 配置
├── postcss.config.js          # PostCSS 配置
└── README.md                  # 项目说明
```

## 快速开始

### 1. 克隆仓库
```bash
git clone https://github.com/YONGys1221/-.git
cd -
```

### 2. 安装依赖
```bash
npm install
```

### 3. 开发模式运行
```bash
npm run dev
```
打开浏览器访问 `http://localhost:3000`

### 4. 构建生产版本
```bash
npm run build
```

## 技术栈

- **React 18** - UI 库
- **Vite 4** - 构建工具
- **Tailwind CSS** - 样式框架
- **Framer Motion** - 动画库
- **PostCSS** - CSS 处理器

## 页面模块

### 1. Hero 首页
- 全屏设计
- 动画光效背景
- 大标题和副标题
- 导航栏和 CTA 按钮
- 向下滚动提示

### 2. About 个人经历
- 头像容器
- 个人介绍文本
- 数据统计卡片
- 联系方式展示

### 3. Projects 精选项目
- 6 个项目卡片网格
- 项目分类标签
- 悬停交互效果
- 项目详情链接

### 4. Skills 个人优势
- 6 个技能卡片
- 技能标签列表
- 悬停动画效果
- 能力说明文本

### 5. Contact 联系方式
- 联系信息列表
- 联系表单
- 表单验证
- 页脚版权信息

## 自定义指南

### 修改主题色
编辑 `tailwind.config.js` 中的颜色配置：
```js
colors: {
  dark: {
    // 自定义颜色值
  }
}
```

### 修改内容
直接编辑各个组件文件中的数据：
- 项目信息在 `src/components/Projects.jsx`
- 技能信息在 `src/components/Skills.jsx`
- 联系方式在 `src/components/Contact.jsx`

### 添加头像图片
在 `public` 文件夹中放入头像图片，然后在 `About.jsx` 中引用：
```jsx
<img src="/avatar.jpg" alt="头像" />
```

## 后续优化计划

- [ ] 添加真实的项目图片和内容
- [ ] 完善表单提交功能
- [ ] 添加项目详情页面
- [ ] 优化移动端适配
- [ ] 添加深色/浅色主题切换
- [ ] 集成分析工具

## 许可证

MIT License - 自由使用和修改

## 支持

有任何问题或建议？欢迎提交 Issue 或联系我！

---

Made with ✨ by YONG
