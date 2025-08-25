import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import servicesData from '@/data/services.json';

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ServiceDetailPage = async ({ params }: ServiceDetailPageProps) => {
  const { slug } = await params;
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
            <div className="flex items-center justify-center space-x-2 mb-6 animate-fade-in-down">
              <Link href="/" className="text-[#9AC3E4] hover:text-white transition-all duration-300 transform hover:scale-105">
                Home
              </Link>
              <span className="text-[#9AC3E4] animate-pulse">/</span>
              <Link href="/services" className="text-[#9AC3E4] hover:text-white transition-all duration-300 transform hover:scale-105">
                Services
              </Link>
              <span className="text-[#9AC3E4] animate-pulse">/</span>
              <span className="text-white font-semibold">{service.title}</span>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
              {service.heroTitle}
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-[#FFA500] animate-fade-in-up animation-delay-200">
              {service.heroSubtitle}
            </h2>

            {/* Description */}
            <p className="text-xl text-[#9AC3E4] max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
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
            <div className="animate-fade-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2C6EA5] mb-4 hover:text-[#3687C9] transition-colors duration-300">
                {service.overview.title}
              </h2>
              <h3 className="text-xl font-semibold text-[#FFA500] mb-6 animate-pulse">
                {service.overview.subtitle}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {service.overview.description}
              </p>
              
              {/* Features */}
              <div className="space-y-4">
                {service.overview.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 group hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#FFA500] rounded-full flex items-center justify-center mt-1 group-hover:scale-110 group-hover:bg-[#FF8C00] transition-all duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl animate-fade-in-right group">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Dangers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C6EA5] mb-4 hover:text-[#3687C9] transition-colors duration-300">
              {service.dangers.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {service.dangers.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.dangers.risks.map((risk, index) => (
              <div key={index} className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg hover:shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-xl font-bold text-red-700 mb-3 group-hover:text-red-800 transition-colors duration-300">
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
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C6EA5] mb-4 hover:text-[#3687C9] transition-colors duration-300">
              {service.whyChooseUs.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.whyChooseUs.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-[#2C6EA5] hover:border-[#FFA500] animate-fade-in-up group" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-16 h-16 bg-[#FFA500] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-[#FF8C00] transition-all duration-300">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-[#2C6EA5] mb-4 text-center group-hover:text-[#3687C9] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-center group-hover:text-gray-800 transition-colors duration-300">
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
           <div className="absolute top-10 left-10 w-2 h-2 bg-[#9AC3E4] rounded-full animate-pulse"></div>
           <div className="absolute top-20 right-20 w-1 h-1 bg-[#9AC3E4] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
           <div className="absolute top-40 left-1/4 w-1.5 h-1.5 bg-[#9AC3E4] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
           <div className="absolute top-60 right-1/3 w-1 h-1 bg-[#9AC3E4] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
           <div className="absolute top-80 left-1/3 w-2 h-2 bg-[#9AC3E4] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
           <div className="absolute top-96 right-1/4 w-1.5 h-1.5 bg-[#9AC3E4] rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16 animate-fade-in-up">
             <h2 className="text-3xl lg:text-4xl font-bold text-[#fefefe] mb-4 hover:text-[#FFA500] transition-colors duration-300">
               {service.process.title}
             </h2>
           </div>

           <div className="max-w-6xl mx-auto relative">
             {/* Central timeline */}
             <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#9AC3E4] transform -translate-x-1/2 animate-pulse"></div>
             
             <div className="space-y-16">
               {service.process.steps.map((step, index) => (
                 <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                   {/* Timeline node */}
                   <div className="absolute left-1/2 top-8 w-4 h-4 bg-[#FFA500] rounded-full transform -translate-x-1/2 z-10 animate-pulse"></div>
                   
                   {/* Card */}
                   <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                     <div className={`w-6/12 ${index % 2 === 0 ? 'pr-5' : 'pl-5'}`}>
                       <div className="bg-gray-800 p-6 rounded-xl text-white shadow-lg hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-500 group">
                         <div className="flex items-center space-x-4 mb-4">
                           <div className="w-12 h-12 bg-[#FFA500] rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FF8C00] transition-all duration-300">
                             <span className="text-lg font-bold text-white">{step.step}</span>
                           </div>
                           <h3 className="text-xl font-bold text-white group-hover:text-[#FFA500] transition-colors duration-300">
                             {step.title}
                           </h3>
                         </div>
                         <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#3687C9] rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">FAQs</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C6EA5] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most common questions about our {service.title.toLowerCase()} services.
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="w-full px-6 py-4 text-left flex items-center justify-between bg-[#2C6EA5] text-white">
                  <h3 className="text-lg font-semibold pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg 
                      className="w-5 h-5"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          {/* <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Still have questions about {service.title.toLowerCase()}? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0451003300" 
                className="inline-flex items-center space-x-2 bg-[#3687C9] hover:bg-[#2C6EA5] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now: 0451 003300</span>
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center space-x-2 bg-[#FFA500] hover:bg-[#FF8C00] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Contact Us</span>
              </a>
            </div>
          </div> */}
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
