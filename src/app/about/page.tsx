'use client';

import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/About-2.jpg"
            alt="Professional pest control team at work"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Link href="/" className="text-[#9AC3E4] hover:text-white transition-colors duration-200">
                Home
              </Link>
              <span className="text-[#9AC3E4]">/</span>
              <span className="text-white">About</span>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About
              <span className="block text-[#FFA500]">Rodent Control Melbourne</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-[#9AC3E4] max-w-3xl mx-auto">
              Your trusted partner in professional pest control services across Melbourne. 
              With years of experience and a commitment to excellence, we protect your home and business.
            </p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/About4.jpg"
                  alt="Professional pest control technician in action"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FFA500] rounded-full opacity-20"></div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#2C6EA5] mb-6">
                  Your Trusted Pest Control Experts
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Rodent Control Melbourne, we understand that pest infestations can be stressful and disruptive. 
                  That's why we've built our reputation on providing reliable, effective, and safe pest control solutions 
                  that give you peace of mind.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our team of certified professionals combines years of experience with the latest industry techniques 
                  and eco-friendly products to deliver results that last. We're not just exterminators – we're your 
                  partners in creating a safe, healthy environment for your family and business.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3687C9] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2C6EA5] mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed and insured professionals you can trust</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3687C9] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2C6EA5] mb-2">24/7 Emergency Service</h3>
                    <p className="text-gray-600">Available around the clock for urgent pest emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3687C9] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2C6EA5] mb-2">Eco-Friendly Solutions</h3>
                    <p className="text-gray-600">Safe for your family, pets, and the environment</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3687C9] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2C6EA5] mb-2">Guaranteed Results</h3>
                    <p className="text-gray-600">6-month warranty on all our pest control treatments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2C6EA5] mb-6">
                About Rodent Control Melbourne
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Rodent Control Melbourne is a seasoned and licensed pest management company providing top-tier 
                extermination services throughout Melbourne and surrounding areas. With over 15 years of experience, 
                our team is committed to eliminating dangerous pests using gentle, environmentally safe treatments.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We have successfully freed countless commercial and residential properties from pests, employing 
                advanced tools and strategies to handle a variety of pests, including rodents, spiders, fleas, 
                bed bugs, ants, possums, and more. Our services are affordably priced and accessible 24/7 to everyone.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Unlike many providers that only focus on urban center services, Rodent Control Melbourne extends 
                its expertise to suburban areas, offering specialized pest control treatments. Residents from 
                across Greater Melbourne can benefit from our dedicated services, ensuring their homes and 
                workplaces remain pest-free throughout the year.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/About-5.jpg"
                  alt="Professional pest control team working"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#3687C9] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Approach Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/About-6.jpg"
                  alt="Pest control technician using professional equipment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FFA500] rounded-full opacity-20"></div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2C6EA5] mb-6">
                Our Expert Approach
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Rodent Control Melbourne, we're recognized for our dedication to customer and environmental safety. 
                We adopt humane methods for pest management, preferring to relocate pests whenever possible over 
                using harsh capture techniques like electric shocks or sticky tapes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our focus is on using odorless, organic pest control methods to ensure the safety and comfort of 
                all our clients. We understand that every pest problem is unique, which is why we provide 
                customized solutions tailored to your specific situation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our systematic process starts with a detailed property inspection, followed by the development 
                of a personalized pest control strategy. We employ advanced methods like fumigation, temperature 
                treatments, and growth regulators to ensure comprehensive pest eradication.
              </p>
              
              {/* Approach Features */}
              <div className="grid grid-cols-1 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3687C9] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Detailed property inspection and assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3687C9] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Customized treatment plans for your specific needs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3687C9] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Safe, eco-friendly treatment methods</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3687C9] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Comprehensive follow-up and prevention strategies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C6EA5] mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to protecting your property and peace of mind through professional, 
              reliable pest control services that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="text-center p-8 bg-gradient-to-br from-[#2C6EA5] to-[#1E4A6B] rounded-2xl text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-[#9AC3E4] leading-relaxed">
                To provide exceptional pest control services that protect homes and businesses 
                while maintaining the highest standards of safety and environmental responsibility.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center p-8 bg-gradient-to-br from-[#2C6EA5] to-[#1E4A6B] rounded-2xl text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To be Melbourne's most trusted pest control provider, known for innovation, 
                reliability, and unwavering commitment to customer satisfaction.
              </p>
            </div>

            {/* Values */}
            <div className="text-center p-8 bg-gradient-to-br from-[#2C6EA5] to-[#1E4A6B] rounded-2xl text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-[#9AC3E4] leading-relaxed">
                Integrity, professionalism, safety, and environmental stewardship guide 
                everything we do, ensuring the best outcomes for our customers and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C6EA5] mb-6">
              Why Choose Rodent Control Melbourne?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand out from the competition with our commitment to excellence, safety, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Licensed & Certified */}
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#3687C9] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2C6EA5] mb-3">Licensed & Certified</h3>
              <p className="text-gray-600">Fully licensed and certified professionals with rigorous training and expertise</p>
            </div>

            {/* 24/7 Availability */}
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#3687C9] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2C6EA5] mb-3">24/7 Emergency Service</h3>
              <p className="text-gray-600">Available around the clock for urgent pest emergencies and same-day service</p>
            </div>

            {/* Eco-Friendly */}
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#3687C9] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2C6EA5] mb-3">Eco-Friendly Solutions</h3>
              <p className="text-gray-600">Safe, odorless treatments that protect your family, pets, and the environment</p>
            </div>

            {/* Guaranteed Results */}
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#3687C9] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2C6EA5] mb-3">Guaranteed Results</h3>
              <p className="text-gray-600">6-month warranty on all treatments with complete pest eradication guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C6EA5] mb-6">
              Serving Greater Melbourne
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive pest control services across Melbourne and surrounding areas, 
              ensuring no property is too far for our expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Melbourne CBD */}
            <div className="bg-gradient-to-br from-[#303234] to-[#2C6EA5] rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Melbourne CBD</h3>
              <p className="text-[#9AC3E4]">Professional pest control services for commercial and residential properties in the heart of Melbourne.</p>
            </div>

            {/* Eastern Suburbs */}
            <div className="bg-gradient-to-br from-[#303234] to-[#2C6EA5] rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Eastern Suburbs</h3>
              <p className="text-white/90">Comprehensive pest management for homes and businesses across Melbourne's eastern region.</p>
            </div>

            {/* Western Suburbs */}
            <div className="bg-gradient-to-br from-[#303234] to-[#2C6EA5] rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Western Suburbs</h3>
              <p className="text-[#9AC3E4]">Reliable pest control solutions serving Melbourne's growing western suburbs and communities.</p>
            </div>

            {/* Northern Suburbs */}
            <div className="bg-gradient-to-br from-[#303234] to-[#2C6EA5] rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Northern Suburbs</h3>
              <p className="text-[#9AC3E4]">Expert pest control services for residential and commercial properties in Melbourne's north.</p>
            </div>

            {/* Southern Suburbs */}
            <div className="bg-gradient-to-br from-[#303234] to-[#2C6EA5] rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Southern Suburbs</h3>
              <p className="text-white/90">Professional pest management solutions for Melbourne's southern suburbs and coastal areas.</p>
            </div>

            {/* Regional Areas */}
            <div className="bg-gradient-to-br from-[#303234] to-[#2C6EA5] rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Regional Areas</h3>
              <p className="text-[#9AC3E4]">Extended services to regional Victoria, bringing professional pest control to rural communities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
