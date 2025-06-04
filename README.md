# 🎨 AI Clothes Swapper - AI换衣网站

一个功能完整的AI虚拟换衣网站，基于Next.js构建，集成了先进的AI换衣技术。

![AI Clothes Swapper](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Replicate](https://img.shields.io/badge/Replicate-AI-blue?style=for-the-badge)

## ✨ 主要功能

### 🎯 核心功能
- **🔄 AI换衣技术** - 集成Replicate IDM-VTON模型，实现高质量换衣效果
- **📱 响应式设计** - 完美支持桌面和移动设备
- **🖱️ 拖拽上传** - 支持拖拽和点击上传图片
- **⚡ 实时预览** - 即时显示上传的图片预览
- **🛡️ 智能验证** - 文件格式、大小和类型检查

### 🎨 用户界面
- **现代化设计** - 使用Tailwind CSS和渐变效果
- **交互动画** - 平滑的过渡和加载动画
- **直观操作** - 三步式换衣流程
- **错误处理** - 友好的错误提示和重试机制

### 📋 页面结构
- **首页** - Hero区域、功能展示、统计数据
- **工具页面** - 交互式AI换衣工具
- **功能介绍** - 六大核心功能展示
- **FAQ页面** - 12个详细的常见问题
- **SEO优化** - 完整的metadata和结构化数据

## 🚀 快速开始

### 前置要求
- Node.js 18+ 
- npm 或 yarn
- Git

### 安装步骤

1. **克隆仓库**
```bash
git clone https://github.com/JDKY2026/my-website.git
cd my-website
```

2. **安装依赖**
```bash
npm install
```

3. **配置环境变量**
```bash
# 创建 .env.local 文件
cp .env.local.example .env.local

# 编辑 .env.local 并添加你的API密钥
REPLICATE_API_TOKEN=your_replicate_api_token_here
```

4. **启动开发服务器**
```bash
npm run dev
```

5. **访问应用**
打开 [http://localhost:3000](http://localhost:3000) 查看网站

## 🔧 AI服务配置

### Replicate API (推荐)

1. 访问 [Replicate.com](https://replicate.com) 注册账户
2. 获取 API Token
3. 在 `.env.local` 中设置:
```bash
REPLICATE_API_TOKEN=your_token_here
```

### 支持的AI模型
- **IDM-VTON** - 高质量虚拟试衣模型
- **其他模型** - 支持多种Replicate换衣模型

## 📊 项目结构

```
my-website/
├── app/
│   ├── api/
│   │   └── clothes-swap/        # API路由
│   ├── components/
│   │   ├── ClothesSwapTool.tsx  # 主要换衣工具
│   │   └── FAQSection.tsx       # FAQ组件
│   ├── globals.css              # 全局样式
│   ├── layout.tsx               # 根布局
│   └── page.tsx                 # 首页
├── public/                      # 静态资源
├── README_API_INTEGRATION.md    # API集成详细指南
└── package.json
```

## 🎯 技术栈

### 前端
- **Next.js 15.3.3** - React框架
- **TypeScript** - 类型安全
- **Tailwind CSS 4** - 样式框架
- **React Dropzone** - 文件上传
- **Framer Motion** - 动画效果

### 后端 & AI
- **Next.js API Routes** - 后端API
- **Replicate SDK** - AI模型调用
- **Axios** - HTTP客户端

### 部署
- **Vercel** - 推荐部署平台
- **Docker** - 容器化支持

## 🌟 功能特点

### AI换衣功能
- ✅ 支持多种图片格式 (JPEG, PNG, WebP)
- ✅ 智能文件大小限制 (最大10MB)
- ✅ 高质量AI处理结果
- ✅ 快速处理时间 (10-30秒)
- ✅ 错误处理和重试机制

### 用户体验
- ✅ 拖拽上传界面
- ✅ 实时图片预览
- ✅ 处理进度显示
- ✅ 结果对比展示
- ✅ 移动端优化

### 开发特性
- ✅ TypeScript 类型安全
- ✅ ESLint 代码规范
- ✅ 响应式设计
- ✅ SEO优化
- ✅ 错误边界处理

## 📱 截图展示

### 主页界面
- 现代化Hero区域
- 功能特点展示
- 用户统计数据

### AI换衣工具
- 三步式操作流程
- 拖拽上传界面
- 实时处理状态

### FAQ页面
- 交互式问答
- 技术支持信息
- 服务统计展示

## 🚀 部署指南

### Vercel部署 (推荐)
```bash
# 安装Vercel CLI
npm i -g vercel

# 设置环境变量
vercel env add REPLICATE_API_TOKEN

# 部署
vercel --prod
```

### Docker部署
```bash
# 构建镜像
docker build -t ai-clothes-swapper .

# 运行容器
docker run -p 3000:3000 -e REPLICATE_API_TOKEN=your_token ai-clothes-swapper
```

## 📚 API文档

详细的API集成指南请查看: [README_API_INTEGRATION.md](./README_API_INTEGRATION.md)

### 主要端点
- `GET /api/clothes-swap` - 健康检查和配置状态
- `POST /api/clothes-swap` - AI换衣处理

### 请求格式
```javascript
const formData = new FormData();
formData.append('person', personImageFile);
formData.append('clothes', clothesImageFile);
```

## 🔒 安全和隐私

- 🛡️ **数据安全** - 图片仅用于处理，24小时内自动删除
- 🔐 **加密传输** - 使用HTTPS加密所有数据传输
- 🚫 **隐私保护** - 不收集或存储用户个人信息
- ⚡ **速率限制** - 防止API滥用

## 💰 成本优化

### 建议措施
- 图片压缩和优化
- 结果缓存策略
- 用户配额管理
- API使用监控

## 🛠️ 开发指南

### 本地开发
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 类型检查
npm run type-check

# 代码格式化
npm run lint
```

### 构建和测试
```bash
# 生产构建
npm run build

# 启动生产服务器
npm start
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📞 技术支持

- 📧 **邮箱**: support@aiclothesswapper.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/JDKY2026/my-website/issues)
- 📖 **文档**: [API集成指南](./README_API_INTEGRATION.md)

## 📄 许可证

本项目基于 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🎉 致谢

- [Next.js](https://nextjs.org/) - 优秀的React框架
- [Replicate](https://replicate.com/) - 强大的AI模型平台
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的CSS框架
- [IDM-VTON](https://github.com/yisol/IDM-VTON) - 高质量换衣AI模型

---

⭐ 如果这个项目对你有帮助，请给一个Star！

🚀 **现在就体验AI换衣的魅力吧！**
