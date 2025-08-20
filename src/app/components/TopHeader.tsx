'use client';

const TopHeader = () => {
  return (
    <div className="bg-[#2C6EA5] text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 relative">
          {/* Service Hours - Left side on desktop */}
          <div className="hidden sm:flex items-center space-x-2">
            <svg 
              className="w-4 h-4 text-[#FFA500] flex-shrink-0" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">
              24 hours service | Open 7 Days a Week
            </span>
          </div>

          {/* Contact Info Container - Row on mobile, separate positioning on desktop */}
          <div className="flex items-center space-x-4 sm:hidden">
            {/* Phone Number */}
            <div className="flex items-center space-x-2">
              <svg 
                className="w-4 h-4 text-[#FFA500] flex-shrink-0" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a 
                href="tel:0466660066" 
                className="text-xs font-medium hover:text-[#9AC3E4] transition-colors duration-200 whitespace-nowrap"
              >
                0466660066
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-2">
              <svg 
                className="w-4 h-4 text-[#FFA500] flex-shrink-0" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a 
                href="mailto:contact@rodentcontrolmelbourne.com.au" 
                className="text-xs font-medium hover:text-[#9AC3E4] transition-colors duration-200 break-all"
              >
                contact@rcm.com.au
              </a>
            </div>
          </div>

          {/* Phone Number - Center on desktop only */}
          <div className="hidden sm:flex items-center space-x-2 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
            <svg 
              className="w-4 h-4 text-[#FFA500] flex-shrink-0" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <a 
              href="tel:0466660066" 
              className="text-sm font-medium hover:text-[#9AC3E4] transition-colors duration-200 whitespace-nowrap"
            >
              0466660066
            </a>
          </div>

          {/* Email - Right side on desktop only */}
          <div className="hidden sm:flex items-center space-x-2 sm:ml-auto">
            <svg 
              className="w-4 h-4 text-[#FFA500] flex-shrink-0" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a 
              href="mailto:contact@rodentcontrolmelbourne.com.au" 
              className="text-sm font-medium hover:text-[#9AC3E4] transition-colors duration-200 break-all"
            >
              <span className="hidden lg:inline">contact@rodentcontrolmelbourne.com.au</span>
              <span className="lg:hidden">contact@rcm.com.au</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
