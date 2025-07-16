import React from 'react';
import { Shield, Clock, Leaf, Smile, Award, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "No Nasty Chemicals",
      description: "Pure freeze-dried fruit juice. Zero preservatives, artificial colours, or synthetic flavours.",
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: Clock,
      title: "Zero Prep Time",
      description: "Drop a cube in water and watch it transform. Perfect for busy lifestyles.",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: Leaf,
      title: "97% Nutrients Retained",
      description: "Freeze-drying keeps all the good stuff while lasting up to 25 years.",
      color: "from-pink-400 to-purple-400"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-bl from-purple-200 via-yellow-200 to-pink-200 relative overflow-hidden">
      {/* Background bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 right-12 w-36 h-36 bg-yellow-300/45 rounded-full animate-bounce"></div>
        <div className="absolute bottom-16 left-16 w-20 h-20 bg-purple-300/55 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-8 w-24 h-24 bg-pink-300/50 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-32 left-1/4 w-16 h-16 bg-yellow-400/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-purple-400/45 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-60 left-8 w-12 h-12 bg-pink-400/60 rounded-full animate-bounce" style={{animationDelay: '2.2s'}}></div>
        <div className="absolute bottom-60 right-1/4 w-32 h-32 bg-yellow-500/35 rounded-full animate-bounce" style={{animationDelay: '2.8s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose
            <span className="bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Sola</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50 relative overflow-hidden">
              {/* Card bubbles */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-100/30 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-purple-100/40 rounded-full"></div>
              
              <div className={`bg-gradient-to-br ${benefit.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 relative z-10">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 shadow-lg">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;