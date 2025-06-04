# AI Clothes Swapper - API 集成指南

## 🚀 快速开始

本项目已经完成了基础架构设置，包含完整的用户界面和后端API路由。目前使用模拟API，您可以按照以下步骤集成真实的AI服务。

## 📋 当前功能

✅ **已完成**
- 响应式网站界面
- 图片上传和预览功能
- 拖拽上传支持
- API 路由结构
- 错误处理和用户反馈
- FAQ 页面
- SEO 优化

🔄 **需要配置**
- 真实的AI换衣服务

## 🎯 支持的AI服务

### 1. Replicate API (推荐)

**优势:** 简单易用，模型丰富，按使用量付费

```bash
# 安装依赖
npm install replicate

# 设置环境变量
REPLICATE_API_TOKEN=your_replicate_token_here
```

**代码示例:**
```typescript
// 在 app/api/clothes-swap/route.ts 中取消注释并修改:
const Replicate = require('replicate');
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const output = await replicate.run(
  "levihsu/ootdiffusion:5126b48c66f58d3c2e37db2a8de5e50ad5f93297a36d64ebb8a68bcc2c4c0b31",
  {
    input: {
      model_image: personBase64,
      garment_image: clothesBase64,
      num_inference_steps: 20,
      guidance_scale: 2.5,
      seed: Math.floor(Math.random() * 1000000)
    }
  }
);
```

**推荐模型:**
- `levihsu/ootdiffusion` - 专业的换衣模型
- `cjwbw/try-on` - 简单易用的试衣模型
- `daanelson/virtual_try_on` - 高质量虚拟试衣

### 2. Stability AI

**优势:** 高质量输出，专业级服务

```bash
npm install stability-sdk
```

```typescript
import { StabilityApi } from 'stability-sdk';

const api = new StabilityApi({
  key: process.env.STABILITY_API_KEY,
  host: 'grpc.stability.ai:443'
});
```

### 3. RunPod API

**优势:** 灵活部署，成本可控

```bash
# 环境变量
RUNPOD_API_KEY=your_runpod_key
RUNPOD_ENDPOINT_ID=your_endpoint_id
```

### 4. 自定义 AI 服务

**适用于:** 有自己的AI模型或服务器

```typescript
const response = await fetch('YOUR_AI_SERVICE_ENDPOINT', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.AI_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    person_image: personBase64,
    clothes_image: clothesBase64,
  })
});
```

## ⚙️ 配置步骤

### 步骤 1: 选择AI服务

根据您的需求选择上述任一AI服务提供商。

### 步骤 2: 获取API密钥

- **Replicate:** 访问 https://replicate.com 注册并获取API token
- **Stability AI:** 访问 https://platform.stability.ai 获取API key
- **RunPod:** 访问 https://runpod.io 创建端点并获取密钥

### 步骤 3: 设置环境变量

创建 `.env.local` 文件：

```bash
# 选择其中一种配置
REPLICATE_API_TOKEN=your_token_here
# 或
STABILITY_API_KEY=your_key_here
# 或
RUNPOD_API_KEY=your_key_here
RUNPOD_ENDPOINT_ID=your_endpoint_id
```

### 步骤 4: 修改API代码

在 `app/api/clothes-swap/route.ts` 中：

1. 找到对应的代码段（目前被注释）
2. 取消注释并根据选择的服务修改
3. 删除或注释模拟响应代码

### 步骤 5: 测试集成

```bash
# 启动开发服务器
npm run dev

# 测试API端点
curl -X GET http://localhost:3000/api/clothes-swap
```

## 🔧 高级配置

### 图片优化

```typescript
// 添加图片压缩和优化
import sharp from 'sharp';

const optimizedImage = await sharp(imageBuffer)
  .resize(1024, 1024, { fit: 'inside', withoutEnlargement: true })
  .jpeg({ quality: 85 })
  .toBuffer();
```

### 批量处理

```typescript
// 支持批量换衣
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const images = formData.getAll('images') as File[];
  
  const results = await Promise.all(
    images.map(image => processClothesSwap(image))
  );
  
  return NextResponse.json({ results });
}
```

### 结果缓存

```typescript
// 使用Redis缓存结果
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

// 缓存结果
await redis.setex(cacheKey, 3600, JSON.stringify(result));
```

## 📊 监控和分析

### 使用统计

```typescript
// 添加使用统计
const stats = {
  user_id: userId,
  processing_time: processingTime,
  image_size: imageSize,
  success: true,
  timestamp: new Date()
};

// 发送到分析服务
await analytics.track('clothes_swap_completed', stats);
```

### 错误监控

```typescript
// 集成错误监控
import * as Sentry from '@sentry/nextjs';

try {
  // API 调用
} catch (error) {
  Sentry.captureException(error);
  throw error;
}
```

## 🚀 部署建议

### Vercel (推荐)

```bash
# 设置环境变量
vercel env add REPLICATE_API_TOKEN

# 部署
vercel --prod
```

### Docker 部署

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 💰 成本优化

### 1. 图片预处理
- 压缩上传图片
- 限制图片尺寸
- 验证图片格式

### 2. 缓存策略
- 缓存相似请求
- 使用CDN加速
- 实现结果复用

### 3. 用量控制
- 实现用户配额
- 添加请求频率限制
- 监控API使用量

## 🔒 安全考虑

### 1. 图片安全
```typescript
// 验证图片内容
import { createHash } from 'crypto';

const imageHash = createHash('sha256').update(imageBuffer).digest('hex');
// 检查是否为恶意内容
```

### 2. 用户隐私
```typescript
// 自动删除图片
setTimeout(() => {
  fs.unlinkSync(imagePath);
}, 24 * 60 * 60 * 1000); // 24小时后删除
```

### 3. API安全
```typescript
// 添加速率限制
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15分钟
  max: 100 // 最多100次请求
});
```

## 📞 技术支持

如果您在集成过程中遇到问题：

1. 检查环境变量配置
2. 验证API密钥有效性
3. 查看控制台错误日志
4. 参考具体AI服务的文档

**联系方式:**
- 邮箱: support@aiclothesswapper.com
- GitHub Issues: 提交技术问题
- 文档: 查看详细API文档

---

🎉 **恭喜！** 按照以上步骤，您就可以拥有一个完全功能的AI换衣网站了！ 