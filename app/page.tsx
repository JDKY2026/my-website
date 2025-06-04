import ClothesSwapTool from './components/ClothesSwapTool';
import FAQSection from './components/FAQSection';

export default function Home() {
  return (
    <main className="min-h-screen" style={{background: 'linear-gradient(135deg, #dbeafe 0%, #ffffff 50%, #f3e8ff 100%)'}}>
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'}}>
                <span className="text-white font-bold text-lg">AC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">AI Clothes Swapper</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#tool" className="text-gray-600 hover:text-blue-600 transition-colors">Try Now</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
              <button className="btn-primary">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Free AI Clothes Swapper Tool
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Style with{' '}
              <span className="bg-clip-text text-transparent" style={{background: 'linear-gradient(to right, #2563eb, #8b5cf6)', WebkitBackgroundClip: 'text'}}>
                AI Clothes Swapper
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              Experience the future of virtual fashion with our advanced AI clothes swapper. 
              Try on any outfit instantly, create stunning looks for social media, or boost your 
              e-commerce business with realistic clothing visualization. Our AI clothes changer 
              delivers professional results in seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Swapping Clothes →
              </button>
              <button className="btn-secondary">
                ▶ Watch Demo
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500K+</div>
                <div className="text-sm text-gray-600">Clothes Swapped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.8/5</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section id="tool" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Try Our AI Clothes Swapper Now
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upload your photo and select clothes to see instant AI-powered transformations. 
              Our clothes swapper technology creates realistic results in seconds.
            </p>
          </div>

          <ClothesSwapTool />

          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Completely Free • No Registration Required • Instant Results
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20" style={{background: 'linear-gradient(135deg, #dbeafe 0%, #ffffff 50%, #f3e8ff 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Clothes Swapper?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the powerful features that make our AI clothes changer the most advanced 
              virtual try-on solution. Transform your wardrobe digitally with professional-grade results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{background: 'linear-gradient(to right, #fbbf24, #f97316)'}}>
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast AI Clothes Swapper</h3>
              <p className="text-gray-600 leading-relaxed">Our advanced AI clothes swapper processes your images in seconds, delivering instant results without compromising quality.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{background: 'linear-gradient(to right, #60a5fa, #06b6d4)'}}>
                <span className="text-white text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Realistic Clothing Visualization</h3>
              <p className="text-gray-600 leading-relaxed">Get photorealistic results with our AI clothes changer that perfectly fits garments to your body shape.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{background: 'linear-gradient(to right, #a78bfa, #ec4899)'}}>
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Fashion AI Technology</h3>
              <p className="text-gray-600 leading-relaxed">Powered by cutting-edge machine learning algorithms, our clothes swapper understands fashion styles and color matching.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{background: 'linear-gradient(to right, #4ade80, #10b981)'}}>
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy-First Clothes Swapping</h3>
              <p className="text-gray-600 leading-relaxed">Your photos are processed securely and deleted automatically after use. Complete privacy protection guaranteed.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{background: 'linear-gradient(to right, #818cf8, #a855f7)'}}>
                <span className="text-white text-2xl">∞</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Unlimited Daily Swaps</h3>
              <p className="text-gray-600 leading-relaxed">Enjoy unlimited access to our AI clothes changer with no daily limits. Experiment with countless outfit combinations.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{background: 'linear-gradient(to right, #f87171, #fb7185)'}}>
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile-Optimized Experience</h3>
              <p className="text-gray-600 leading-relaxed">Use our clothes swapper seamlessly on any device with the same powerful AI clothes changing capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'}}>
                <span className="text-white font-bold text-lg">AC</span>
              </div>
              <span className="text-xl font-bold">AI Clothes Swapper</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              The most advanced AI clothes swapper and virtual try-on platform. Transform your style 
              with cutting-edge artificial intelligence technology.
            </p>
            <div className="text-gray-400 text-sm">
              © 2025 AI Clothes Swapper. All rights reserved. Made with ❤️ for fashion innovation
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 