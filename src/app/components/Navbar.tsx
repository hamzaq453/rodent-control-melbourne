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
    <nav className="bg-white shadow-lg border-b-2 border-[#3687C9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/Logo-no-bg.png"
                alt="Rodent Control Melbourne Logo"
                width={250}
                height={250}
                className="rounded-lg invert"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2 z-10">
            <Link 
              href="/" 
              className="text-[#2C6EA5] hover:text-[#3687C9] font-medium transition-colors duration-200 cursor-pointer"
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-[#2C6EA5] hover:text-[#3687C9] font-medium transition-colors duration-200 cursor-pointer"
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="text-[#2C6EA5] hover:text-[#3687C9] font-medium transition-colors duration-200 cursor-pointer"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-[#2C6EA5] hover:text-[#3687C9] font-medium transition-colors duration-200 cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Get Quote Button - Right Side */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="bg-[#3687C9] hover:bg-[#2C6EA5] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden relative z-30">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-[#2C6EA5] hover:text-[#3687C9] focus:outline-none focus:text-[#3687C9] p-2"
              aria-label="Toggle menu"
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
          <div className="md:hidden absolute top-full left-0 right-0 w-full bg-white border-t border-[#9AC3E4] z-20 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                href="/" 
                className="block px-3 py-2 text-[#2C6EA5] hover:text-[#3687C9] font-medium transition-colors duration-200 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="block px-3 py-2 text-[#2C6EA5] hover:text-[#3687C9] font-medium transition-colors duration-200 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-[#2C6EA5] hover:text-[#3687C9] font-medium transition-colors duration-200 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-[#2C6EA5] hover:text-[#3687C9] font-medium transition-colors duration-200 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/quote" 
                className="block px-3 py-2 bg-[#3687C9] hover:bg-[#2C6EA5] text-white rounded-lg font-medium transition-colors duration-200 cursor-pointer"
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