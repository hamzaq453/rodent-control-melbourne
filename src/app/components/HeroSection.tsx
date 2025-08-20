'use client';

import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#2C6EA5] via-[#3687C9] to-[#9AC3E4] min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium">Rated 5/5 by 200+ customers</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Melbourne's Premier
              <span className="block text-[#FFD700]">Rodent Control</span>
              <span className="block text-3xl lg:text-4xl mt-2">Expert Solutions</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-[#E8F4FD] leading-relaxed">
              Fast, safe, and guaranteed rodent elimination. Same-day service with 
              <span className="font-semibold text-white"> 6-month warranty</span> and 
              <span className="font-semibold text-white"> eco-friendly</span> solutions.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">Same-Day Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">6-Month Warranty</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="font-medium">Pet & Child Safe</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <span className="font-medium">Licensed & Insured</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link 
                href="/quote" 
                className="bg-[#FFD700] hover:bg-[#FFC000] text-[#2C6EA5] font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Free Quote
              </Link>
              <Link 
                href="tel:0466660066" 
                className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50"
              >
                Call Now: 0466660066
              </Link>
            </div>

            {/* Emergency Badge */}
            <div className="flex items-center space-x-3 pt-4">
              <div className="bg-red-500 animate-pulse rounded-full w-3 h-3"></div>
              <span className="text-sm font-medium">24/7 Emergency Service Available</span>
            </div>
          </div>

          {/* Right Content - Image/Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden">
                  {/* Placeholder for hero image - you can replace with actual pest control image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2C6EA5] to-[#3687C9] flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <p className="text-lg font-medium">Professional Rodent Control</p>
                      <p className="text-sm opacity-75">Fast & Effective Solutions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2C6EA5]">200+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>

              {/* Floating Service Card */}
              <div className="absolute -top-6 -right-6 bg-[#FFD700] rounded-xl p-4 shadow-2xl">
                <div className="text-center">
                  <div className="text-sm font-bold text-[#2C6EA5]">Same Day</div>
                  <div className="text-xs text-[#2C6EA5]">Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
