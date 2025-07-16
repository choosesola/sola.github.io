import React from 'react';
import { Droplets, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-400 p-2 rounded-xl">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Sola
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Transforming hydration for health-conscious millennials and Gen Z. 
              Natural, convenient, and delicious – just the way it should be.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/choosesola" className="bg-gray-800 hover:bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <span className="text-xs">@</span>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <span className="text-xs">♪</span>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-yellow-400" />
              <span className="text-gray-300">choosesola@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-yellow-400" />
              <span className="text-gray-300">(647) 209-7868</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-yellow-400" />
              <span className="text-gray-300">Ontario, Canada</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Sola. All rights reserved. | 
            <a href="#" className="hover:text-yellow-400 transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-yellow-400 transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;