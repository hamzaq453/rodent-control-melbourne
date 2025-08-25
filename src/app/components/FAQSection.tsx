'use client';

import { useState, useEffect } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
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

    const element = document.querySelector('#faq-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const faqs = [
    {
      question: "Are your treatments safe for my kids and pets?",
      answer: "Yes — we use tamper-proof bait boxes and pet-safe solutions. All our treatments are designed to be safe for children and pets while effectively eliminating pests. We follow strict safety protocols and use EPA-approved products."
    },
    {
      question: "What if the rodents come back?",
      answer: "We offer a 6-month warranty on all our rodent control services. If pests return within this period, we'll provide additional treatment at no extra cost. Our comprehensive approach includes prevention measures to minimize the risk of re-infestation."
    },
    {
      question: "How long does treatment take?",
      answer: "Most treatments are completed within 1-2 hours. However, the duration depends on the size of your property and the severity of the infestation. We'll provide you with a specific timeline during our initial assessment."
    },
    {
      question: "Do I need to vacate the property?",
      answer: "In most cases, you can remain in your home during treatment. We use safe, low-odor products and will advise you on any specific precautions. For severe infestations, we may recommend temporary relocation for a few hours."
    },
    {
      question: "What types of pests do you handle?",
      answer: "We specialize in dealing with a wide range of pests commonly found in residential and commercial properties, including rodents (mice, rats), insects (ants, cockroaches, spiders, bed bugs), termites, and wildlife (possums, birds)."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq-section" className="py-12 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3687C9 2px, transparent 2px), radial-gradient(circle at 75% 75%, #2C6EA5 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className={`inline-flex items-center space-x-2 bg-[#3687C9] rounded-full px-4 py-2 mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">FAQ</span>
          </div>
          
          <h2 className={`text-4xl lg:text-5xl font-bold text-[#2C6EA5] mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Frequently Asked
            <span className="block text-[#3687C9]">Questions</span>
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Get answers to the most common questions about our pest control services. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-700 hover:shadow-2xl hover:transform hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                transitionDelay: isVisible ? `${500 + index * 150}ms` : '0ms',
                background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)'
              }}
            >
              {/* Question Bar */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-4 text-left flex items-center justify-between transition-all duration-500 group ${
                  openIndex === index 
                    ? 'bg-gradient-to-r from-[#2C6EA5] to-[#3687C9] text-white shadow-lg' 
                    : 'bg-white text-gray-800 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100'
                }`}
              >
                <h3 className={`text-lg font-semibold pr-4 transition-all duration-300 ${openIndex === index ? 'text-white' : 'group-hover:text-[#2C6EA5]'}`}>
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg 
                    className={`w-5 h-5 transition-all duration-500 group-hover:scale-110 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer Section */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-12 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0451003300" 
              className="inline-flex items-center space-x-2 bg-[#3687C9] hover:bg-[#2C6EA5] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
            >
              <svg className="w-5 h-5 transition-all duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now: 0451 003300</span>
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center space-x-2 bg-[#FFA500] hover:bg-[#FF8C00] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
            >
              <svg className="w-5 h-5 transition-all duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-[#3687C9] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-[#2C6EA5] rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-5 w-1 h-1 bg-[#FFA500] rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default FAQSection;
