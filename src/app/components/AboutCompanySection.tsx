'use client';

import Image from 'next/image';

const AboutCompanySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Equipment Image */}
          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="relative h-96 lg:h-[500px] w-full">
                <Image
                  src="/About-1.png"
                  alt="Professional pest control equipment including sprayers, dust applicators, and safety gear"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Small Heading */}
            <div className="inline-flex items-center space-x-2 bg-[#3687C9] rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-white text-sm font-medium">About the Company</span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C6EA5] leading-tight">
              Welcome to Rodent Control Melbourne
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
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
            <div className="bg-gradient-to-r from-[#2C6EA5] to-[#3687C9] rounded-lg p-6 text-white">
              <p className="text-lg font-semibold leading-relaxed">
                Trust Rodent Control Melbourne to protect your home and business. 
                We're not just your service provider—we're your partners in pest management.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#FFA500] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Licensed & Certified</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#FFA500] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">24/7 Emergency Service</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#FFA500] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Guaranteed Results</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#FFA500] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Eco-Friendly Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanySection;
