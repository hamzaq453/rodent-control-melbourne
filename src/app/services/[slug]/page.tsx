'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import servicesData from '@/data/services.json';

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

const ServiceDetailPage = ({ params }: ServiceDetailPageProps) => {
  const { slug } = params;
  const service = servicesData.services[slug as keyof typeof servicesData.services];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover"
            style={{ objectPosition: 'center 25%' }}
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
              <Link href="/services" className="text-[#9AC3E4] hover:text-white transition-colors duration-200">
                Services
              </Link>
              <span className="text-[#9AC3E4]">/</span>
              <span className="text-white">{service.title}</span>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {service.heroTitle}
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-[#FFA500]">
              {service.heroSubtitle}
            </h2>

            {/* Description */}
            <p className="text-xl text-[#9AC3E4] max-w-3xl mx-auto">
              {service.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2C6EA5] mb-4">
                {service.overview.title}
              </h2>
              <h3 className="text-xl font-semibold text-[#FFA500] mb-6">
                {service.overview.subtitle}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {service.overview.description}
              </p>
              
              {/* Features */}
              <div className="space-y-4">
                {service.overview.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#FFA500] rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dangers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C6EA5] mb-4">
              {service.dangers.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {service.dangers.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.dangers.risks.map((risk, index) => (
              <div key={index} className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-700 mb-3">
                  {risk.title}
                </h3>
                <p className="text-gray-700">
                  {risk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-28 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C6EA5] mb-4">
              {service.whyChooseUs.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.whyChooseUs.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[#2C6EA5] hover:border-[#FFA500]">
                <div className="w-16 h-16 bg-[#FFA500] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-[#2C6EA5] mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

             {/* Process Section */}
       <section className="py-20 bg-gradient-to-br from-[#2C6EA5] to-[#1e4a75] relative overflow-hidden">
         {/* Background dots */}
         <div className="absolute inset-0 opacity-10">
           <div className="absolute top-10 left-10 w-2 h-2 bg-[#9AC3E4] rounded-full"></div>
           <div className="absolute top-20 right-20 w-1 h-1 bg-[#9AC3E4] rounded-full"></div>
           <div className="absolute top-40 left-1/4 w-1.5 h-1.5 bg-[#9AC3E4] rounded-full"></div>
           <div className="absolute top-60 right-1/3 w-1 h-1 bg-[#9AC3E4] rounded-full"></div>
           <div className="absolute top-80 left-1/3 w-2 h-2 bg-[#9AC3E4] rounded-full"></div>
           <div className="absolute top-96 right-1/4 w-1.5 h-1.5 bg-[#9AC3E4] rounded-full"></div>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-4xl font-bold text-[#fefefe] mb-4">
               {service.process.title}
             </h2>
           </div>

           <div className="max-w-6xl mx-auto relative">
             {/* Central timeline */}
             <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#9AC3E4] transform -translate-x-1/2"></div>
             
             <div className="space-y-16">
               {service.process.steps.map((step, index) => (
                 <div key={index} className="relative">
                   {/* Timeline node */}
                   <div className="absolute left-1/2 top-8 w-4 h-4 bg-[#FFA500] rounded-full transform -translate-x-1/2 z-10"></div>
                   
                   {/* Card */}
                   <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                     <div className={`w-6/12 ${index % 2 === 0 ? 'pr-5' : 'pl-5'}`}>
                       <div className="bg-gray-800 p-6 rounded-xl text-white shadow-lg">
                         <div className="flex items-center space-x-4 mb-4">
                           <div className="w-12 h-12 bg-[#FFA500] rounded-full flex items-center justify-center">
                             <span className="text-lg font-bold text-white">{step.step}</span>
                           </div>
                           <h3 className="text-xl font-bold text-white">
                             {step.title}
                           </h3>
                         </div>
                         <p className="text-gray-300 leading-relaxed">
                           {step.description}
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C6EA5] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-[#2C6EA5] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-[#2C6EA5] to-[#1e4a75]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {service.cta.title}
          </h2>
          <p className="text-xl text-[#9AC3E4] mb-8">
            {service.cta.description}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#FFA500] hover:bg-[#FF8C00] text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            {service.cta.buttonText}
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default ServiceDetailPage;
