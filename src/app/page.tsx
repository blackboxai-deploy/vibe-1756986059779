export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Hello World Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-white/20">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Hello World!
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Welcome to your new Next.js application. This is a simple, elegant Hello World page 
            built with modern web technologies.
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl p-6 border border-blue-200/50">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Next.js</h3>
              <p className="text-gray-600">Built with the React framework for production</p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-2xl p-6 border border-indigo-200/50">
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">Tailwind CSS</h3>
              <p className="text-gray-600">Styled with utility-first CSS framework</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl p-6 border border-purple-200/50">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">TypeScript</h3>
              <p className="text-gray-600">Type-safe development environment</p>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="space-y-4">
            <p className="text-gray-500">Ready to start building something amazing?</p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              Get Started
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <p className="text-gray-400 mt-8 text-sm">
          Built with ❤️ using Next.js, Tailwind CSS, and TypeScript
        </p>
      </div>
    </div>
  );
}