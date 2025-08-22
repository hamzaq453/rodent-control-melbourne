'use client';

import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative flex items-center overflow-hidden py-5">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/Hero-vid.mp4" type="video/mp4" />
      </video>
      
      {/* Brand Color Overlay for better text readability */}
      <div className="absolute inset-0"></div>

      {/* Vertical Call Now Button - Right Edge */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <Link 
          href="tel:0451003300" 
          className="bg-[#3687C9] hover:bg-[#2C6EA5] text-white font-bold px-3 py-4 rounded-l-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center space-y-1"
        >
          {/* Phone Icon */}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          
          {/* Phone Number - Vertical Stack */}
          <div className="flex flex-col items-center leading-none">
            <span className="text-xs font-semibold transform rotate-90">0</span>
            <span className="text-xs font-semibold transform rotate-90">4</span>
            <span className="text-xs font-semibold transform rotate-90">5</span>
            <span className="text-xs font-semibold transform rotate-90">1</span>
            <span className="text-xs font-semibold transform rotate-90">0</span>
            <span className="text-xs font-semibold transform rotate-90">0</span>
            <span className="text-xs font-semibold transform rotate-90">3</span>
            <span className="text-xs font-semibold transform rotate-90">3</span>
            <span className="text-xs font-semibold transform rotate-90">0</span>
            <span className="text-xs font-semibold transform rotate-90">0</span>
      </div>

          {/* Scroll to Top Button */}
          {/* <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-8 h-8 bg-[#2C6EA5] hover:bg-[#9AC3E4] rounded flex items-center justify-center transition-colors duration-300"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
          </button> */}
        </Link>
            </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full">
          {/* Mobile Layout */}
          <div className="lg:hidden text-center text-white space-y-4">
            {/* Main Headline - Mobile */}
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              Melbourne's Premier
              <span className="block text-[#9AC3E4]">Rodent Control</span>
              <span className="block text-xl sm:text-2xl mt-1">Expert Solutions</span>
            </h1>

            {/* Subheadline - Mobile */}
            <p className="text-base sm:text-lg text-white leading-relaxed px-2">
              Fast, safe, and guaranteed rodent elimination. Same-day service with 
              <span className="font-semibold text-[#9AC3E4]"> 6-month warranty</span> and 
              <span className="font-semibold text-[#9AC3E4]"> eco-friendly</span> solutions.
            </p>

            {/* Key Benefits - Mobile */}
            <div className="grid grid-cols-1 gap-2 py-3">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Same-Day Service</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">6-Month Warranty</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Pet & Child Safe</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
            </div>

            {/* CTA Buttons - Mobile */}
            <div className="flex flex-col gap-3 pt-2">
              <Link 
                href="/quote" 
                className="bg-[#3687C9] hover:bg-[#2C6EA5] text-white font-bold px-6 py-3 rounded-lg text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Free Quote
              </Link>
              <Link 
                href="tel:0451003300" 
                className="bg-[#9AC3E4] hover:bg-[#3687C9] text-[#2C6EA5] font-semibold px-6 py-3 rounded-lg text-base transition-all duration-300 border-2 border-[#9AC3E4] hover:border-[#3687C9]"
              >
                Call Now: 0451003300
              </Link>
            </div>

            {/* Emergency Badge - Mobile */}
            <div className="flex items-center justify-center space-x-2 pt-0">
              <div className="bg-red-500 animate-pulse rounded-full w-2 h-2"></div>
              <span className="text-xs font-medium">24/7 Emergency Service Available</span>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content - Desktop */}
            <div className="text-white space-y-6">
              {/* Main Headline - Desktop */}
              <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight mt-4">
                Melbourne's Premier
                <span className="block text-[#9AC3E4]">Rodent Control</span>
                <span className="block text-2xl xl:text-3xl 2xl:text-4xl mt-1">Expert Solutions</span>
              </h1>

              {/* Subheadline - Desktop */}
              <p className="text-lg xl:text-xl 2xl:text-2xl text-white leading-relaxed">
                Fast, safe, and guaranteed rodent elimination. Same-day service with 
                <span className="font-semibold text-[#9AC3E4]"> 6-month warranty</span> and 
                <span className="font-semibold text-[#9AC3E4]"> eco-friendly</span> solutions.
              </p>

              {/* Key Benefits - Desktop */}
              <div className="grid grid-cols-2 gap-1 py-1">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Same-Day Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">6-Month Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Pet & Child Safe</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Licensed & Insured</span>
                </div>
              </div>

              {/* CTA Buttons - Desktop */}
              <div className="flex flex-row gap-3 pt-3">
                <Link 
                  href="/quote" 
                  className="bg-[#3687C9] hover:bg-[#2C6EA5] text-white font-bold px-6 py-3 rounded-lg text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                </Link>
              </div>

              {/* Emergency Badge - Desktop */}
              <div className="flex items-center space-x-2 pt-2">
                <div className="bg-red-500 animate-pulse rounded-full w-2 h-2"></div>
                <span className="text-xs font-medium">24/7 Emergency Service Available</span>
            </div>
          </div>

            {/* Right Content - Professional Service Showcase - Desktop */}
            <div className="flex flex-col space-y-6 justify-center">
              {/* Main Service Card */}
              <div className="">
                <div className="text-center space-y-4">
                  {/* Professional Icon */}
                  <div className="w-20 h-20 bg-[#3687C9] rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  
                  {/* Service Title */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Professional Service</h3>
                    <p className="text-[#9AC3E4] text-sm">Licensed & Insured Experts</p>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex justify-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-[#9AC3E4]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-white">24/7 Available</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-[#9AC3E4]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-white">Same Day</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Stats Row */}
              <div className="grid grid-cols-2 gap-4">
                {/* Customer Satisfaction */}
                <div className="">
                <div className="text-center">
                    <div className="text-2xl font-bold text-white">200+</div>
                    <div className="text-xs text-[#ffffff]">Happy Customers</div>
                </div>
              </div>

                {/* Service Guarantee */}
                <div className="">
                <div className="text-center">
                    <div className="text-2xl font-bold text-white">6-Month</div>
                    <div className="text-xs text-[#ffffff]">Warranty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
