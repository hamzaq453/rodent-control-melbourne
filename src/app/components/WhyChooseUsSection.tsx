'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const WhyChooseUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#why-choose-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const features = [
    {
      id: 1,
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "100+ locations",
      description: "Nationwide"
    },
    {
      id: 2,
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Guaranteed Protection",
      description: ""
    },
    {
      id: 3,
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: "Expert Team",
      description: ""
    },
    {
      id: 4,
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Always-on support",
      description: "24/7"
    }
  ];

  return (
    <section id="why-choose-section" className="relative py-12 bg-[#1A1A1A] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #FFA500 2px, transparent 2px), radial-gradient(circle at 75% 75%, #FFA500 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Subtitle */}
          <div className={`text-[#FFA500] uppercase text-sm font-semibold tracking-wider mb-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Why Hire Us
          </div>
          
          {/* Main Title */}
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 leading-tight transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Why Choose Us For
            <span className="block">Rodent Control</span>
          </h2>
          
          {/* Description Text */}
          <div className={`max-w-3xl mx-auto transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-base text-gray-300 leading-relaxed text-left">
              We are committed to excellence in pest control services, providing 24/7 availability, 
              revisits until complete eradication, affordable pricing, reliable solutions, highly 
              skilled professionals, 100% client satisfaction, and continuous expertise updates. 
              Choose Rodent Control Melbourne for peace of mind and a lasting pest-free environment.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`bg-[#2A2A2A] rounded-lg p-6 border border-[#FFA500] text-center transition-all duration-700 hover:border-red-400 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FFA500]/20 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                transitionDelay: isVisible ? `${500 + index * 100}ms` : '0ms',
                background: 'linear-gradient(145deg, #2A2A2A 0%, #333333 100%)'
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {feature.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-1 transition-all duration-300 group-hover:text-[#FFA500]">
                {feature.title}
              </h3>
              
              {/* Description */}
              {feature.description && (
                <p className="text-gray-300 text-sm transition-all duration-300 group-hover:text-white">
                  {feature.description}
                </p>
              )}

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFA500]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-10 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link 
            href="/quote" 
            className="inline-flex items-center space-x-2 bg-[#FFA500] hover:bg-[#FF8C00] text-white font-bold px-8 py-3 rounded-lg text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FFA500]/30 group"
          >
            <span className="transition-all duration-300 group-hover:translate-x-1">Get Your Free Quote</span>
            <svg className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-[#FFA500] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-[#FFA500] rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-5 w-1 h-1 bg-[#FFA500] rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default WhyChooseUsSection;
