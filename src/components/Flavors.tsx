import React from 'react';

const Flavors = () => {
  const flavors = [
    {
      name: "Passionfruit Mango",
      description: "Tropical paradise in a cube - sweet mango meets exotic passionfruit for the ultimate escape",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
      emoji: "🥭",
      accent: "yellow"
    },
    {
      name: "Strawberry Lemon",
      description: "Perfect balance of sweet strawberry and zesty lemon - refreshing and energizing",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      emoji: "🍓",
      accent: "purple"
    }
  ];

  return (
    <section id="flavors" className="py-20 bg-gradient-to-tl from-yellow-200 via-pink-200 to-purple-200 relative overflow-hidden">
      {/* Background bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-44 h-44 bg-yellow-400/40 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400/65 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-pink-400/50 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-12 right-12 w-20 h-20 bg-yellow-300/55 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-12 w-24 h-24 bg-purple-500/50 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-1/2 right-12 w-28 h-28 bg-pink-500/45 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-yellow-500/60 rounded-full animate-bounce" style={{animationDelay: '1.7s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Two Perfect
            <span className="bg-gradient-to-r from-yellow-500 to-purple-500 bg-clip-text text-transparent"> Flavours</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {flavors.map((flavor, index) => (
            <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
              <div className={`bg-gradient-to-br ${flavor.bgColor} rounded-2xl p-8 mb-6 text-center relative overflow-hidden`}>
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-8 left-8 w-8 h-8 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="relative z-10">
                  <div className="text-7xl mb-4">{flavor.emoji}</div>
                  <div className={`bg-gradient-to-r ${flavor.color} w-16 h-4 rounded-full mx-auto shadow-lg`}></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{flavor.name}</h3>
                <p className="text-gray-600 leading-relaxed">{flavor.description}</p>
                
                <div className="flex items-center justify-between">
                  <button className={`${flavor.accent === 'yellow' ? 'text-yellow-600 hover:text-yellow-700' : 'text-purple-600 hover:text-purple-700'} font-semibold transition-colors`}>
                    Shop Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flavors;