import React from 'react';
import { Package, Droplets, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Package,
      title: "Choose Your Flavour",
      description: "Pick from our collection of delicious, naturally-derived fruit flavours.",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: Droplets,
      title: "Drop in Water",
      description: "Simply drop one cube into your glass or bottle of water and give it a shake.",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Sparkles,
      title: "Let It Dissolve",
      description: "Watch it dissolve completely and transform your water into something amazing.",
      color: "from-pink-400 to-purple-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-tr from-pink-100 via-yellow-100 to-purple-100 relative overflow-hidden">
      {/* Floating bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-40 h-40 bg-purple-400/50 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-24 w-12 h-12 bg-yellow-400/60 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-24 left-1/3 w-28 h-28 bg-pink-400/55 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-16 right-16 w-18 h-18 bg-purple-300/65 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 right-8 w-32 h-32 bg-yellow-500/40 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-1/2 left-8 w-22 h-22 bg-pink-500/50 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-40 left-1/2 w-14 h-14 bg-purple-500/45 rounded-full animate-bounce" style={{animationDelay: '1.8s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            It's
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent"> Ridiculously </span>
            Simple
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group relative">
              <div className="relative mb-8">
                <div className={`bg-gradient-to-br ${step.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                  <div className="absolute top-2 right-2 w-4 h-4 bg-white/30 rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 bg-white/20 rounded-full"></div>
                  <step.icon className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;