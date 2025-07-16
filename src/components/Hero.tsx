import React from 'react';
import { Sparkles, Heart, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-200 via-purple-200 to-pink-200 pt-12 pb-20 relative overflow-hidden">
      {/* Floating bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-8 w-40 h-40 bg-yellow-400/50 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-16 w-24 h-24 bg-purple-400/60 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-400/70 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-8 w-32 h-32 bg-yellow-300/55 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-16 left-16 w-20 h-20 bg-purple-300/65 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-24 left-1/2 w-12 h-12 bg-pink-300/75 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-1/2 right-1/3 w-28 h-28 bg-yellow-500/45 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-18 h-18 bg-purple-500/50 rounded-full animate-bounce" style={{animationDelay: '1.8s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium border-2 border-purple-200">
                <Sparkles className="h-4 w-4 mr-2" />
                100% Natural • Zero Preservatives
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Make Water
                <span className="bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Exciting </span>
                Again
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Drop a cube, shake, and transform boring water into delicious hydration. 
                Zero chemicals, maximum flavour.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg">
                <Heart className="h-5 w-5 mr-2" />
                Shop Now
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;