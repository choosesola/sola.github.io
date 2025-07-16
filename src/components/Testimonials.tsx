import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      age: 28,
      location: "Los Angeles, CA",
      text: "I've never been good at drinking enough water, but Sola changed everything! It's like having a mini party in my water bottle every time.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Jake R.",
      age: 24,
      location: "Austin, TX",
      text: "As a college student, I'm always on the go. These cubes are perfect for my water bottle between classes. No prep, no mess, just flavor!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Emma L.",
      age: 31,
      location: "Seattle, WA",
      text: "Finally, a healthy alternative that actually tastes amazing! My kids ask for 'flavour water' every day now. It's a win-win for the whole family.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Marcus T.",
      age: 26,
      location: "Miami, FL",
      text: "I work out daily and these are perfect for post-gym hydration. Natural, refreshing, and no artificial anything. Exactly what I needed!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-pink-200 via-purple-200 to-yellow-200 relative overflow-hidden">
      {/* Background bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-20 h-20 bg-purple-400/55 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-32 w-36 h-36 bg-yellow-400/45 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-28 left-1/4 w-24 h-24 bg-pink-400/60 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-16 right-16 w-16 h-16 bg-purple-300/65 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-yellow-500/40 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-1/2 right-1/4 w-28 h-28 bg-pink-500/50 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 right-8 w-12 h-12 bg-purple-500/55 rounded-full animate-bounce" style={{animationDelay: '1.3s'}}></div>
        <div className="absolute bottom-2/3 left-8 w-18 h-18 bg-yellow-400/50 rounded-full animate-bounce" style={{animationDelay: '2.7s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent">10,000+</span> Happy Customers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 relative overflow-hidden">
              {/* Card bubbles */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-100/30 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-purple-100/40 rounded-full"></div>
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-gradient-to-r from-yellow-400 to-purple-400"
                />
                <div className="relative z-10">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-xs">Age {testimonial.age}</p>
                </div>
                <Quote className="h-6 w-6 text-purple-400 ml-auto relative z-10" />
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4 relative z-10">"{testimonial.text}"</p>
              
              <div className="flex items-center relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;