'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "什么是AI换衣技术？它是如何工作的？",
    answer: "AI换衣技术使用先进的深度学习算法和计算机视觉技术，能够智能识别人体轮廓和服装特征，然后将新的服装无缝融合到原始照片中。我们的AI模型经过数百万张图片训练，能够理解人体姿态、光照条件和服装材质，确保换衣效果自然逼真。"
  },
  {
    id: 2,
    question: "使用AI换衣工具需要付费吗？",
    answer: "我们提供免费的基础服务，每天可以免费处理一定数量的图片。对于高频使用者和商业用户，我们也提供付费套餐，享受更快的处理速度、更高的图片质量和优先处理服务。所有用户都可以先免费体验我们的服务。"
  },
  {
    id: 3,
    question: "支持哪些图片格式和尺寸？",
    answer: "我们支持常见的图片格式：JPEG、PNG、WebP。推荐上传高质量的图片以获得最佳效果。图片尺寸建议在1024x1024到2048x2048像素之间，文件大小不超过10MB。人物照片应该清晰，光线充足，人物占比适中。"
  },
  {
    id: 4,
    question: "AI换衣的效果有多真实？",
    answer: "我们的AI换衣技术能够生成高度逼真的效果，包括：自然的服装褶皱、正确的光影效果、符合人体形状的服装贴合度、保持原有的肤色和背景。不过，效果质量会受到原始照片质量、人物姿态和服装复杂度的影响。"
  },
  {
    id: 5,
    question: "处理一张照片需要多长时间？",
    answer: "通常处理时间在10-30秒之间，具体取决于图片大小、复杂程度和当前服务器负载。高分辨率图片和复杂的服装样式可能需要更长时间。我们持续优化算法以提供更快的处理速度。"
  },
  {
    id: 6,
    question: "我的照片数据是否安全？会被保存吗？",
    answer: "我们非常重视用户隐私和数据安全。上传的照片仅用于AI处理，处理完成后会在24小时内自动删除。我们使用加密传输，不会将您的照片用于其他目的或与第三方分享。您可以放心使用我们的服务。"
  },
  {
    id: 7,
    question: "什么样的照片效果最好？",
    answer: "为了获得最佳效果，建议使用：1) 正面或半身照片，人物清晰可见；2) 光线充足，避免过度背光；3) 背景简洁，避免复杂背景干扰；4) 人物姿态自然，避免极端角度；5) 服装边界清晰，便于AI识别。"
  },
  {
    id: 8,
    question: "可以处理哪些类型的服装？",
    answer: "我们的AI可以处理多种服装类型：上衣（T恤、衬衫、毛衣、外套）、下装（裤子、裙子、短裤）、连衣裙、正装、休闲装等。对于复杂的服装（如婚纱、传统服饰）或配饰，效果可能会有所差异。"
  },
  {
    id: 9,
    question: "如果对结果不满意，可以重新处理吗？",
    answer: "当然可以！如果对首次结果不满意，您可以：1) 尝试上传不同角度或更清晰的照片；2) 选择其他服装样式；3) 调整照片光线和背景；4) 联系我们的技术支持获得建议。我们致力于为每位用户提供满意的结果。"
  },
  {
    id: 10,
    question: "是否支持批量处理和API接入？",
    answer: "是的，我们为企业用户提供批量处理和API接入服务。适用于电商平台、时尚网站、虚拟试衣间等商业应用。我们提供详细的API文档、技术支持和定制化解决方案。如有需求，请联系我们的商务团队。"
  },
  {
    id: 11,
    question: "移动设备可以使用吗？",
    answer: "完全可以！我们的网站采用响应式设计，完美适配手机、平板等移动设备。您可以直接在手机浏览器中使用所有功能，包括拍照上传、换衣处理和结果分享。移动端体验与桌面端同样流畅。"
  },
  {
    id: 12,
    question: "如何获得技术支持？",
    answer: "我们提供多种支持渠道：1) 在线客服：工作时间实时回复；2) 邮件支持：发送至support@aiclothesswapper.com；3) 常见问题文档：涵盖使用技巧和故障排除；4) 用户社区：与其他用户交流经验。我们承诺在24小时内回复所有技术咨询。"
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            常见问题解答
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            关于AI换衣的常见问题
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            查找关于我们AI换衣技术、使用方法、隐私保护等问题的详细答案。
            如果您有其他疑问，请随时联系我们的支持团队。
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div key={faq.id} className="bg-gray-50 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                  openItems.includes(faq.id) 
                    ? 'bg-blue-500 text-white rotate-45' 
                    : 'bg-white text-gray-400 border-2 border-gray-200'
                }`}>
                  <span className="text-lg font-bold">+</span>
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openItems.includes(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">还有其他问题？</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            如果您没有找到想要的答案，我们的技术支持团队随时为您提供帮助。
            我们承诺在24小时内回复您的咨询。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              💬 在线客服
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors border-2 border-blue-400">
              📧 邮件咨询
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-green-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">24小时</div>
            <div className="text-green-700">平均响应时间</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-blue-700">用户满意度</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">7×24</div>
            <div className="text-purple-700">技术支持</div>
          </div>
        </div>
      </div>
    </section>
  );
} 