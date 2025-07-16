import React from 'react';
import { Droplets, Truck, Shield, Heart } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-400 via-purple-400 to-pink-400 relative overflow-hidden">
      {/* Floating bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white/25 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/22 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-60 right-10 w-18 h-18 bg-white/18 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-60 left-10 w-16 h-16 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-16 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Water?
          </h2>
          <p className="text-xl opacity-90">
            Join the hydration revolution
          </p>
        </div>

        <div className="text-center">
          <button className="bg-white text-purple-600 px-12 py-4 rounded-full font-bold text-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 shadow-lg">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;