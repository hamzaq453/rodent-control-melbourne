'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
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
        setStatusMessage('Message sent successfully! We\'ll get back to you within 24 hours.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Contact-1.jpg"
            alt="Professional pest control team ready to help"
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
            <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
              <Link href="/" className="text-[#9AC3E4] hover:text-white transition-colors duration-200 text-sm sm:text-base">
                Home
              </Link>
              <span className="text-[#9AC3E4] text-sm sm:text-base">/</span>
              <span className="text-white text-sm sm:text-base">Contact</span>
            </div>

            {/* Page Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Contact
              <span className="block text-[#FFA500]">Rodent Control Melbourne</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-[#9AC3E4] max-w-3xl mx-auto px-4">
              Get in touch with our expert pest control team. We're here 24/7 to help you with all your pest control needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6 sm:space-y-8">
              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#3687C9] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#2C6EA5]">Call Us</h3>
                    <p className="text-gray-600 text-sm sm:text-base">24/7 Emergency Service</p>
                  </div>
                </div>
                <a 
                  href="tel:0466660066" 
                  className="text-base sm:text-lg font-bold text-[#3687C9] hover:text-[#2C6EA5] transition-colors duration-200"
                >
                  0451 003300
                </a>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#3687C9] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2C6EA5]">Email Us</h3>
                    <p className="text-gray-600">Quick Response</p>
                  </div>
                </div>
                <a 
                  href="mailto:info@rodentcontrolmelbourne.com" 
                  className="text-md font-semibold text-[#3687C9] hover:text-[#2C6EA5] transition-colors duration-200"
                >
                  info@rodentcontrolmelbourne.com
                </a>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#3687C9] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2C6EA5]">Visit Us</h3>
                    <p className="text-gray-600">Service Area</p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-[#3687C9]">
                  Melbourne, Victoria, Australia
                </p>
                <p className="text-gray-600 mt-2">
                  Serving Greater Melbourne and surrounding areas
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#2C6EA5] mb-4 sm:mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                  Fill out the form below and we'll get back to you within 24 hours. 
                  For urgent pest control emergencies, please call us directly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3687C9] focus:border-transparent transition-colors duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3687C9] focus:border-transparent transition-colors duration-200"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3687C9] focus:border-transparent transition-colors duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3687C9] focus:border-transparent transition-colors duration-200"
                      >
                        <option value="" className='text-black'>Select a service</option>
                        <option value="possum-removal" className='text-black'>Possum Removal</option>
                        <option value="possum-catcher" className='text-black'>Possum Catcher</option>
                        <option value="dead-animal-removal" className='text-black'>Dead Animal Removal</option>
                        <option value="general-pest-control" className='text-black'>General Pest Control</option>
                        <option value="flea-control-treatment" className='text-black'>Flea Control Treatment</option>
                        <option value="spider-control-treatment" className='text-black'>Spider Control Treatment</option>
                        <option value="bedbugs-control" className='text-black'>Bedbugs Control</option>
                        <option value="bird-proofing" className='text-black'>Bird Proofing</option>
                        <option value="ants-control-treatment" className='text-black'>Ants Control Treatment</option>
                        <option value="bird-nest-removal" className='text-black'>Bird Nest Removal</option>
                        <option value="rodent-control" className='text-black'>Rodent Control</option>
                        <option value="mice-control-treatment" className='text-black'>Mice Control Treatment</option>
                        <option value="rats-control-treatment" className='text-black'>Rats Control Treatment</option>
                        <option value="wasp-nest-removal" className='text-black'>Wasp Nest Removal</option>
                        <option value="bees-removal" className='text-black'>Bees Removal</option>
                        <option value="mosquitoes-control-treatment" className='text-black'>Mosquitoes Control Treatment</option>
                        <option value="commercial-pest-control" className='text-black'>Commercial Pest Control</option>
                        <option value="residential-pest-control" className='text-black'>Residential Pest Control</option>
                        <option value="bugs-control-treatment" className='text-black'>Bugs Control Treatment</option>
                        <option value="end-of-lease-spray" className='text-black'>End of Lease Spray</option>
                        <option value="emergency-service" className='text-black'>Emergency Service</option>
                        <option value="other" className='text-black'>Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      required
                      className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3687C9] focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Describe your pest problem and any specific requirements..."
                    ></textarea>
                  </div>

                  {/* Status Message */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center space-x-2 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{statusMessage}</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center space-x-2 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{statusMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-[#3687C9] hover:bg-[#2C6EA5] disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    {/* <Link
                      href="/quote"
                      className="flex-1 bg-[#FFA500] hover:bg-[#FF8C00] text-white px-8 py-3 rounded-lg font-semibold text-center transition-colors duration-200"
                    >
                      Get Free Quote
                    </Link> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}


      {/* Emergency Contact Section */}
      {/* <section className="py-20 bg-gradient-to-r from-[#2C6EA5] to-[#3687C9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Emergency Pest Control?
            </h2>
            <p className="text-xl text-[#9AC3E4] mb-8">
              Don't wait! For urgent pest control emergencies, call us immediately. 
              We provide 24/7 emergency services to handle critical pest situations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:0466660066" 
                className="bg-[#FFA500] hover:bg-[#FF8C00] text-white px-8 py-4 rounded-lg font-bold text-xl transition-colors duration-200 flex items-center space-x-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0466 660 066</span>
              </a>
              <span className="text-[#9AC3E4] font-semibold">Available 24/7</span>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ContactPage;
