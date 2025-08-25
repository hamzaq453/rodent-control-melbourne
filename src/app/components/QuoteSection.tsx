'use client';

import { useState } from 'react';

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    suburb: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage('Message sent successfully! We\'ll get back to you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          suburb: ''
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C6EA5]/90 to-[#3687C9]/90">
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Quote Form */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-4xl font-bold text-white mb-2">
                Request a Free Quote
              </h2>
              <p className="text-white/90 text-lg">
                Get a response in minutes
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Row - Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-white text-black rounded-lg border-0 focus:ring-2 focus:ring-[#FFA500] focus:outline-none transition-all duration-200"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-white text-black rounded-lg border-0 focus:ring-2 focus:ring-[#FFA500] focus:outline-none transition-all duration-200"
                  required
                />
              </div>

              {/* Second Row - Phone and Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className="w-full px-4 py-3 bg-white text-black rounded-lg border-0 focus:ring-2 focus:ring-[#FFA500] focus:outline-none transition-all duration-200"
                  required
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white text-gray-500 rounded-lg border-0 focus:ring-2 focus:ring-[#FFA500] focus:outline-none transition-all duration-200"
                >
                  <option value="" className='text-black'>Select a service</option>
                  <option value="rodent-control" className='text-black'>Rodent Control</option>
                  <option value="possum-removal" className='text-black'>Possum Removal</option>
                  <option value="spider-control" className='text-black'>Spider Control</option>
                  <option value="ant-control" className='text-black'>Ant Control</option>
                  <option value="bedbug-control" className='text-black'>Bedbug Control</option>
                  <option value="general-pest-control" className='text-black'>General Pest Control</option>
                  <option value="emergency-service" className='text-black'>Emergency Service</option>
                  <option value="other" className='text-black'>Other</option>
                </select>
              </div>

              {/* Third Row - Suburb */}
              <input
                type="text"
                name="suburb"
                value={formData.suburb}
                onChange={handleInputChange}
                placeholder="Suburb or Postcode"
                className="w-full px-4 py-3 bg-white text-black rounded-lg border-0 focus:ring-2 focus:ring-[#FFA500] focus:outline-none transition-all duration-200"
                required
              />

              {/* Message Textarea */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Describe your pest problem and any specific requirements..."
                rows={4}
                className="w-full px-4 py-3 bg-white text-black rounded-lg border-0 focus:ring-2 focus:ring-[#FFA500] focus:outline-none transition-all duration-200 resize-none"
                required
              ></textarea>

              {/* Status Message */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">{statusMessage}</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">{statusMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FFA500] hover:bg-[#FF8C00] disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg disabled:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Right Column - Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[#FFA500] font-semibold text-lg mb-2">
                Ready to Book?
              </h3>
              <h2 className="text-4xl lg:text-4xl font-bold text-white mb-6">
                Stop Rodents Before It's Too Late
              </h2>
            </div>

            {/* Features List */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#FFA500] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white text-lg font-medium">Same-Day Service</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#FFA500] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white text-lg font-medium">24/7 Emergency Support</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#FFA500] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white text-lg font-medium">Licensed & Guaranteed Work</span>
              </div>
            </div>

            {/* Call to Action */}
            {/* <div className="pt-1">
              <p className="text-white text-lg mb-1">
                Contact us for a free quote
              </p>
            </div> */}

            {/* Contact Information */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#FFA500] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <a href="tel:0466660066" className="text-white text-md font-medium hover:text-[#FFA500] transition-colors duration-200">
                  0451003300
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#FFA500] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a href="mailto:contact@rodentcontrolmelbourne.com.au" className="text-white text-lg font-medium hover:text-[#FFA500] transition-colors duration-200">
                  info@rodentcontrolmelbourne.com
                </a>
              </div>
              
              {/* <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#FFA500] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white text-lg font-medium">
                  info@rodentcontrolmelbourne.com
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
