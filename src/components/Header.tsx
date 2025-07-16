import React from 'react';
import { Droplets, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-400 p-2 rounded-xl">
              <Droplets className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Sola
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">How It Works</a>
            <a href="#benefits" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">Benefits</a>
            <a href="#flavors" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">Flavours</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Shop Now
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-yellow-100">
            <nav className="flex flex-col space-y-4">
              <a href="#how-it-works" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">How It Works</a>
              <a href="#benefits" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">Benefits</a>
              <a href="#flavors" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">Flavors</a>
              <a href="#testimonials" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">Reviews</a>
              <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full font-semibold w-full">
                Shop Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;