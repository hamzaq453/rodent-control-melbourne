'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const AboutCompanySection = () => {
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

    const element = document.querySelector('#about-company-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about-company-section" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #2C6EA5 2px, transparent 2px), radial-gradient(circle at 75% 75%, #3687C9 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Equipment Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="bg-gray-100 rounded-lg p-8 group hover:shadow-2xl transition-all duration-500">
              <div className="relative h-96 lg:h-[500px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/About-1.png"
                  alt="Professional pest control equipment including sprayers, dust applicators, and safety gear"
                  fill
                  className="object-cover rounded-lg transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Small Heading */}
            <div className={`inline-flex items-center space-x-2 bg-[#3687C9] rounded-full px-4 py-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">About the Company</span>
            </div>

            {/* Main Title */}
            <h2 className={`text-4xl lg:text-5xl font-bold text-[#2C6EA5] leading-tight transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Welcome to Rodent Control Melbourne
            </h2>

            {/* Description Paragraphs */}
            <div className={`space-y-4 text-gray-600 text-lg leading-relaxed transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p>
                Rodent Control Melbourne is Melbourne's leading provider of comprehensive pest management solutions. 
                We are fully licensed, certified, and committed to maintaining the highest standards of safety and 
                effectiveness in all our pest control services.
              </p>
              
              <p>
                Our experienced team combines years of expertise with state-of-the-art technology to deliver 
                effective, environmentally responsible treatments that exceed health and safety regulations. 
                We understand the unique challenges that pests present to Melbourne homes and businesses.
              </p>
            </div>

            {/* Trust Statement */}
            <div className={`bg-gradient-to-r from-[#2C6EA5] to-[#3687C9] rounded-lg p-6 text-white transition-all duration-700 delay-500 hover:shadow-2xl hover:transform hover:-translate-y-1 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-lg font-semibold leading-relaxed transition-all duration-300 group-hover:text-[#FFA500]">
                Trust Rodent Control Melbourne to protect your home and business. 
                We're not just your service provider—we're your partners in pest management.
              </p>
            </div>

            {/* Key Features */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {[
                "Licensed & Certified",
                "24/7 Emergency Service", 
                "Guaranteed Results",
                "Eco-Friendly Solutions"
              ].map((feature, index) => (
                <div 
                  key={feature}
                  className={`flex items-center space-x-3 transition-all duration-500 hover:transform hover:translate-x-2 group`}
                  style={{ transitionDelay: isVisible ? `${700 + index * 100}ms` : '0ms' }}
                >
                  <div className="w-8 h-8 bg-[#FFA500] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2C6EA5]">
                    <svg className="w-4 h-4 text-white transition-all duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium transition-all duration-300 group-hover:text-[#2C6EA5] group-hover:font-semibold">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-[#2C6EA5] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-[#3687C9] rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-5 w-1 h-1 bg-[#FFA500] rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default AboutCompanySection;
