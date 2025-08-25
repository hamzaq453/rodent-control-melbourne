'use client';

import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

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
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#3687C9] rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">FAQ</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C6EA5] mb-6">
            Frequently Asked
            <span className="block text-[#3687C9]">Questions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our pest control services. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              {/* Question Bar */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-4 text-left flex items-center justify-between transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-[#2C6EA5] text-white' 
                    : 'bg-white text-gray-800 hover:bg-gray-50'
                }`}
              >
                <h3 className="text-lg font-semibold pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${
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
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
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
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
