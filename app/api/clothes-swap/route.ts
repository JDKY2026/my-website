import { NextRequest, NextResponse } from 'next/server';
import Replicate from 'replicate';

// 这里是Replicate API集成示例
// 您需要安装: npm install replicate
// 并设置环境变量: REPLICATE_API_TOKEN

// Replicate AI 换衣服务集成
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const personImage = formData.get('person') as File;
    const clothesImage = formData.get('clothes') as File;

    if (!personImage || !clothesImage) {
      return NextResponse.json(
        { error: '请提供人物照片和服装图片' },
        { status: 400 }
      );
    }

    // 验证文件类型
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(personImage.type) || !allowedTypes.includes(clothesImage.type)) {
      return NextResponse.json(
        { error: '仅支持 JPEG、PNG、WebP 格式' },
        { status: 400 }
      );
    }

    // 验证文件大小 (10MB)
    const maxSize = 10 * 1024 * 1024;
    if (personImage.size > maxSize || clothesImage.size > maxSize) {
      return NextResponse.json(
        { error: '文件大小不能超过10MB' },
        { status: 400 }
      );
    }

    const startTime = Date.now();

    // 将文件转换为base64以便API调用
    const personBuffer = await personImage.arrayBuffer();
    const clothesBuffer = await clothesImage.arrayBuffer();
    
    const personBase64 = `data:${personImage.type};base64,${Buffer.from(personBuffer).toString('base64')}`;
    const clothesBase64 = `data:${clothesImage.type};base64,${Buffer.from(clothesBuffer).toString('base64')}`;

    // 检查是否配置了Replicate API Token
    if (process.env.REPLICATE_API_TOKEN) {
      try {
        console.log('🚀 使用 Replicate AI 服务进行换衣处理...');
        
        const replicate = new Replicate({
          auth: process.env.REPLICATE_API_TOKEN,
        });

        // 使用最新的换衣模型
        const output = await replicate.run(
          "cuuupid/idm-vton:c871bb9b046607b680449ecbae55fd8c6d945e0a1948644bf2361b3d021d3ff4",
          {
            input: {
              human_img: personBase64,
              garm_img: clothesBase64,
              garment_des: "A piece of clothing to try on",
              is_checked: true,
              is_checked_crop: false,
              denoise_steps: 30,
              seed: Math.floor(Math.random() * 1000000)
            }
          }
        );

        const processingTime = Date.now() - startTime;

        return NextResponse.json({
          success: true,
          result_url: output,
          processing_time: processingTime,
          service: 'Replicate AI',
          model: 'cuuupid/idm-vton',
          message: '🎉 AI换衣处理完成！使用了最新的IDM-VTON模型。'
        });

      } catch (replicateError) {
        console.error('Replicate API 错误:', replicateError);
        
        // 如果Replicate失败，回退到模拟模式
        console.log('⚠️ Replicate API 失败，使用模拟模式...');
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        return NextResponse.json({
          success: true,
          result_url: personBase64,
          processing_time: Date.now() - startTime,
          service: 'Simulation Mode',
          message: '⚠️ 当前使用模拟模式。Replicate API 暂时不可用，请检查API密钥或网络连接。',
          error_details: process.env.NODE_ENV === 'development' ? (replicateError as Error).message : undefined
        });
      }
    } else {
      // 没有配置API Token，使用模拟模式
      console.log('📝 未配置 REPLICATE_API_TOKEN，使用模拟模式...');
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      return NextResponse.json({
        success: true,
        result_url: personBase64,
        processing_time: Date.now() - startTime,
        service: 'Demo Mode',
        message: '🔧 当前为演示模式。要使用真实AI换衣功能，请配置 REPLICATE_API_TOKEN 环境变量。',
        setup_instructions: {
          step1: '访问 https://replicate.com 注册账户',
          step2: '获取 API Token',
          step3: '创建 .env.local 文件并添加: REPLICATE_API_TOKEN=your_token_here',
          step4: '重启开发服务器'
        }
      });
    }

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        error: '服务器内部错误',
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      },
      { status: 500 }
    );
  }
}

// GET 方法用于健康检查和状态信息
export async function GET() {
  const hasReplicateToken = !!process.env.REPLICATE_API_TOKEN;
  
  return NextResponse.json({
    status: 'ok',
    message: 'AI Clothes Swap API is running',
    timestamp: new Date().toISOString(),
    ai_service: {
      replicate: {
        configured: hasReplicateToken,
        status: hasReplicateToken ? 'ready' : 'needs_configuration'
      }
    },
    supported_methods: ['POST'],
    required_fields: ['person', 'clothes'],
    supported_formats: ['image/jpeg', 'image/png', 'image/webp'],
    max_file_size: '10MB',
    setup_guide: hasReplicateToken ? 'AI service is ready!' : {
      step1: '访问 https://replicate.com 注册账户',
      step2: '获取 API Token', 
      step3: '创建 .env.local 文件并添加: REPLICATE_API_TOKEN=your_token_here',
      step4: '重启开发服务器'
    }
  });
} 