import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Heart className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">HealthCare Plus</span>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/doctors" className="text-gray-700 hover:text-blue-600">Doctors</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          <Link to="/login" className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}