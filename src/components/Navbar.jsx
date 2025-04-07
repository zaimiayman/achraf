import { FaTools, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SmartLink } from './SmartLink';
import Img from '../assets/logo.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-0 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
         
            <img src={Img} className="text-blue-600 md:h-8 md:w-9 h-20  " />
            <a href='/' className="ml-2 text-5xl md:text-xl font-bold text-gray-900">ETCE INFO</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <SmartLink to="/#services">
            <a  className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </a>
            </SmartLink>
            <SmartLink to="/#why">
            <a  className="text-gray-600 hover:text-blue-600 transition-colors">
              Why Us
            </a>
            </SmartLink>
            <SmartLink to="/store/#stor">
            <a  className="text-gray-600 hover:text-blue-600 transition-colors">
              Store
            </a>
            </SmartLink>
            <SmartLink to="/#reviews">
            <a className="text-gray-600 hover:text-blue-600 transition-colors">
              Reviews
            </a>
            </SmartLink>
            <SmartLink to="/#contact">
            <a className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
            </SmartLink>
            <SmartLink to="/book-now/#Book"  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
             
                Book Now
           
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
          <SmartLink to="/#services">
            <a
            
              className="text-gray-600 hover:text-blue-600 text-3xl transition-colors px-3 py-2 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            </SmartLink>
            <SmartLink to="/#why">
            <a
              
              className="text-gray-600 hover:text-blue-600 text-3xl transition-colors px-3 py-2 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Us
            </a>
            </SmartLink>
            <SmartLink to="/store/#stor">
            <a  className="text-gray-600 hover:text-blue-600 text-3xl transition-colors px-3 py-2 rounded-md"
                onClick={() => setMobileMenuOpen(false)}>
              
              Store
            </a>
            </SmartLink>
            <SmartLink to="/#reviews">
            
            <a
             
              className="text-gray-600 hover:text-blue-600 text-3xl transition-colors px-3 py-2 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reviews
            </a>
            </SmartLink>
            <SmartLink to="/#contact">
            <a
              className="text-gray-600 hover:text-blue-600 text-3xl transition-colors px-3 py-2 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            </SmartLink>
            <SmartLink to="/book-now/#Book" className="bg-blue-600 text-white text-center text-3xl px-6 py-6 rounded-full hover:bg-blue-700 transition-colors w-full max-w-sm mx-auto">
              Book Now <FaChevronRight className="inline ml-1" />
            </SmartLink>
          </div>
        </div>
      )}
    </nav>
  );
}