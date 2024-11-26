import React, { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Roztion</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-gray-900 hover:text-purple-600 transition-colors">Home</Link>
              <Link to="/services" className="text-gray-900 hover:text-purple-600 transition-colors">Serviços</Link>
              <Link to="/about" className="text-gray-900 hover:text-purple-600 transition-colors">Sobre</Link>
              <Link to="/cases" className="text-gray-900 hover:text-purple-600 transition-colors">Cases</Link>
              <Link to="/contact" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Fale Conosco
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link to="/" className="block px-3 py-2 text-gray-900 hover:text-purple-600">Home</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-900 hover:text-purple-600">Serviços</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-900 hover:text-purple-600">Sobre</Link>
            <Link to="/cases" className="block px-3 py-2 text-gray-900 hover:text-purple-600">Cases</Link>
            <Link to="/contact" className="block px-3 py-2 text-purple-600 font-medium">Fale Conosco</Link>
          </div>
        </div>
      )}
    </nav>
  );
}