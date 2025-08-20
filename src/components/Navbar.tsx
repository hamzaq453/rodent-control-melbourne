'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg border-b-2 border-[#3687C9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/Logo.jpg"
                alt="Rodent Control Melbourne Logo"
                width={50}
                height={50}
                className="rounded-lg"
                priority
              />
              <div className="flex flex-col">
                <span className="text-[#2C6EA5] font-bold text-xl">Rodent Control</span>
                <span className="text-[#3687C9] text-sm font-medium">Melbourne</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-[#2C6EA5] hover:text-[#3687C9] font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-[#2C6EA5] hover:text-[#3687C9] font-medium transition-colors duration-200"
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="text-[#2C6EA5] hover:text-[#3687C9] font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-[#2C6EA5] hover:text-[#3687C9] font-medium transition-colors duration-200"
            >
              Contact
            </Link>
            <Link 
              href="/quote" 
              className="bg-[#3687C9] hover:bg-[#2C6EA5] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#2C6EA5] hover:text-[#3687C9] focus:outline-none focus:text-[#3687C9]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-[#9AC3E4]">
              <Link 
                href="/" 
                className="block px-3 py-2 text-[#2C6EA5] hover:text-[#3687C9] font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="block px-3 py-2 text-[#2C6EA5] hover:text-[#3687C9] font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-[#2C6EA5] hover:text-[#3687C9] font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-[#2C6EA5] hover:text-[#3687C9] font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/quote" 
                className="block px-3 py-2 bg-[#3687C9] hover:bg-[#2C6EA5] text-white rounded-lg font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
