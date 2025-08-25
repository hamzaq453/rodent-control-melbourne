'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#testimonials-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Melbourne CBD",
      rating: 5,
      text: "Amazing service! The team was professional, punctual, and completely eliminated our rodent problem. The 6-month warranty gives us peace of mind. Highly recommend!",
      service: "Rodent Control",
      avatar: "/RC-1.png",
      gradient: "from-[#2C6EA5] to-[#3687C9]"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Eastern Suburbs",
      rating: 5,
      text: "Fast response time and excellent results. They handled our possum removal safely and humanely. The team was knowledgeable and explained everything clearly.",
      service: "Possum Removal",
      avatar: "/RC-6.png",
      gradient: "from-[#3687C9] to-[#9AC3E4]"
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "Western Suburbs",
      rating: 5,
      text: "Outstanding spider control service! They used pet-safe treatments and our home has been spider-free for months. Professional, reliable, and affordable.",
      service: "Spider Control",
      avatar: "/RC-2.png",
      gradient: "from-[#FFA500] to-[#FF8C00]"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} transition-all duration-300 group-hover:scale-110`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials-section" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #2C6EA5 2px, transparent 2px), radial-gradient(circle at 75% 75%, #3687C9 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className={`inline-flex items-center space-x-2 bg-gradient-to-r from-[#3687C9] to-[#2C6EA5] rounded-full px-4 py-2 mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">Customer Reviews</span>
          </div>
          
          <h2 className={`text-4xl lg:text-5xl font-bold text-[#2C6EA5] mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            What Our Customers
            <span className="block text-[#3687C9]">Say About Us</span>
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Don't just take our word for it. Here's what our satisfied customers have to say about our pest control services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                transitionDelay: isVisible ? `${500 + index * 150}ms` : '0ms',
                background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)'
              }}
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-all duration-500 rounded-2xl`}></div>
              
              {/* Service Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                {testimonial.service}
              </div>

              {/* Rating Stars */}
              <div className="flex items-center mb-4 p-6 pt-8">
                {renderStars(testimonial.rating)}
                <span className="ml-2 text-sm text-gray-600 font-medium">({testimonial.rating}.0)</span>
              </div>

              {/* Quote Icon */}
              <div className="mb-4 px-6">
                <svg className="w-8 h-8 text-[#3687C9] opacity-30 transition-all duration-300 group-hover:opacity-60 group-hover:scale-110 group-hover:rotate-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic px-6 transition-all duration-300 group-hover:text-gray-800">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4 p-6 pt-0">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 transition-all duration-300 group-hover:scale-110 group-hover:ring-4 group-hover:ring-[#3687C9]/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C6EA5] transition-all duration-300 group-hover:text-[#3687C9]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-700">{testimonial.location}</p>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#3687C9]/30 rounded-2xl transition-all duration-500"></div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[50px] border-l-transparent border-t-[50px] border-t-[#3687C9] opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-bl-2xl"></div>
            </div>
          ))}
        </div>

      

        {/* CTA Section */}
       
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-[#2C6EA5] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-[#3687C9] rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-5 w-1 h-1 bg-[#FFA500] rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default TestimonialsSection;
