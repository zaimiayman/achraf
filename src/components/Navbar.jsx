import { FaTools, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

import { SmartLink } from './SmartLink';


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-950 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-0 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
         
    
            <a href='/' className="ml-2 text-white text-5xl md:text-xl font-bold text-gray-900">DOCNOW</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
           
            <SmartLink to="/login/#logi">
            <a  className="text-white hover:text-blue-600 transition-colors">
              Se connecter 
            </a>
            </SmartLink>
          
            <SmartLink to="/sign/#signup"  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
             
                Créer un compte
           
            </SmartLink>
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-6">
          <div className="flex flex-col space-y-8">
        
            <SmartLink to="/store/#stor">
            <a  className="text-gray-600 hover:text-blue-600 text-3xl transition-colors px-3 py-2 rounded-md"
                onClick={() => setMobileMenuOpen(false)}>
              
              Se connecter 
            </a>
            </SmartLink>
           
            <SmartLink to="/book-now/#Book" className="bg-blue-600 text-white text-center text-3xl px-6 py-6 rounded-full hover:bg-blue-700 transition-colors w-full max-w-sm mx-auto">
              Créer un compte <FaChevronRight className="inline ml-1" />
            </SmartLink>
          </div>
        </div>
      )}
    </nav>
  );
}