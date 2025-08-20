'use client';

import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Hero-vid.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            {/* Trust Badge */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium">Rated 5/5 by 200+ customers</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Melbourne's Premier
              <span className="block text-[#FFD700]">Rodent Control</span>
              <span className="block text-2xl lg:text-3xl xl:text-4xl mt-1">Expert Solutions</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl xl:text-2xl text-white leading-relaxed">
              Fast, safe, and guaranteed rodent elimination. Same-day service with 
              <span className="font-semibold text-[#FFD700]"> 6-month warranty</span> and 
              <span className="font-semibold text-[#FFD700]"> eco-friendly</span> solutions.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-2 py-3">
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link 
                href="/quote" 
                className="bg-[#FFD700] hover:bg-[#FFC000] text-[#2C6EA5] font-bold px-6 py-3 rounded-lg text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Free Quote
              </Link>
              <Link 
                href="tel:0466660066" 
                className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg text-base transition-all duration-300 border-2 border-white/30 hover:border-white/50"
              >
                Call Now: 0466660066
              </Link>
            </div>

            {/* Emergency Badge */}
            <div className="flex items-center space-x-2 pt-2">
              <div className="bg-red-500 animate-pulse rounded-full w-2 h-2"></div>
              <span className="text-xs font-medium">24/7 Emergency Service Available</span>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="hidden lg:flex flex-col space-y-4">
            {/* Stats Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-sm text-white/80">Happy Customers</div>
              </div>
            </div>

            {/* Service Card */}
            <div className="bg-[#FFD700]/90 backdrop-blur-sm rounded-xl p-4 border border-[#FFD700]/30">
              <div className="text-center">
                <div className="text-lg font-bold text-[#2C6EA5]">Same Day</div>
                <div className="text-sm text-[#2C6EA5]">Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
