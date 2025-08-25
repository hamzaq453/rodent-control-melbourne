'use client';

import Image from 'next/image';
import Link from 'next/link';

const ServicesPage = () => {
  const allServices = [
    {
      id: 1,
      title: "Possum Removal",
      description: "Safe and humane possum removal services with relocation to appropriate habitats.",
      image: "/RC-1.png",
      slug: "possum-removal"
    },
    {
      id: 2,
      title: "Possum Catcher",
      description: "Professional possum catching and relocation services with proper permits.",
      image: "/RC-2.png",
      slug: "possum-catcher"
    },
    {
      id: 3,
      title: "Dead Animal Removal",
      description: "Safe and hygienic removal of deceased animals from your property.",
      image: "/RC-3.png",
      slug: "dead-animal-removal"
    },
    {
      id: 4,
      title: "General Pest Control",
      description: "Comprehensive pest control solutions for all types of pest infestations.",
      image: "/RC-4.png",
      slug: "general-pest-control"
    },
    {
      id: 5,
      title: "Flea Control Treatment",
      description: "Effective flea elimination and prevention for homes and pets.",
      image: "/RC-5.png",
      slug: "flea-control-treatment"
    },
    {
      id: 6,
      title: "Spider Control Treatment",
      description: "Comprehensive spider treatment and prevention to keep your home spider-free.",
      image: "/RC-6.png",
      slug: "spider-control-treatment"
    },
    {
      id: 7,
      title: "Bedbugs Control",
      description: "Effective bedbug elimination with heat treatment and chemical solutions.",
      image: "/RC-1.png",
      slug: "bedbugs-control"
    },
    {
      id: 8,
      title: "Bird Proofing",
      description: "Professional bird proofing solutions to protect your property from bird damage.",
      image: "/RC-2.png",
      slug: "bird-proofing"
    },
    {
      id: 9,
      title: "Ants Control Treatment",
      description: "Complete ant control and prevention for all ant species.",
      image: "/RC-3.png",
      slug: "ants-control-treatment"
    },
    {
      id: 10,
      title: "Bird Nest Removal",
      description: "Safe and legal bird nest removal with proper permits and timing.",
      image: "/RC-4.png",
      slug: "bird-nest-removal"
    },
    {
      id: 11,
      title: "Rodent Control",
      description: "Professional mouse and rat elimination with guaranteed results and 6-month warranty protection.",
      image: "/RC-5.png",
      slug: "rodent-control"
    },
    {
      id: 12,
      title: "Mice Control Treatment",
      description: "Specialized mouse control and prevention services for homes and businesses.",
      image: "/RC-6.png",
      slug: "mice-control-treatment"
    },
    {
      id: 13,
      title: "Rats Control Treatment",
      description: "Comprehensive rat control and elimination with long-term prevention.",
      image: "/RC-1.png",
      slug: "rats-control-treatment"
    },
    {
      id: 14,
      title: "Wasp Nest Removal",
      description: "Safe and professional wasp nest removal with protective equipment and techniques.",
      image: "/RC-2.png",
      slug: "wasp-nest-removal"
    },
    {
      id: 15,
      title: "Bees Removal",
      description: "Humane bee removal and relocation services by experienced beekeepers.",
      image: "/RC-3.png",
      slug: "bees-removal"
    },
    {
      id: 16,
      title: "Mosquitoes Control Treatment",
      description: "Effective mosquito control and prevention for outdoor and indoor areas.",
      image: "/RC-4.png",
      slug: "mosquitoes-control-treatment"
    },
    {
      id: 17,
      title: "Commercial Pest Control",
      description: "Comprehensive pest management solutions for businesses and commercial properties.",
      image: "/RC-5.png",
      slug: "commercial-pest-control"
    },
    {
      id: 18,
      title: "Residential Pest Control",
      description: "Complete pest control solutions designed specifically for residential properties.",
      image: "/RC-6.png",
      slug: "residential-pest-control"
    },
    {
      id: 19,
      title: "Bugs Control Treatment",
      description: "General bug control and elimination for all types of insect infestations.",
      image: "/RC-1.png",
      slug: "bugs-control-treatment"
    },
    {
      id: 20,
      title: "End of Lease Spray",
      description: "Professional end of lease pest control treatment to meet rental requirements.",
      image: "/RC-2.png",
      slug: "end-of-lease-spray"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
             {/* Header Section */}
       <section className="relative py-20 text-white overflow-hidden">
         {/* Background Image */}
         <div className="absolute inset-0">
           <Image
             src="/Services-1.png"
             alt="Professional pest control technician spraying"
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
               <span className="text-white">Services</span>
             </div>

             {/* Page Title */}
             <h1 className="text-4xl lg:text-5xl font-bold mb-6">
               Our Pest Control
               <span className="block text-[#FFA500]">Services</span>
             </h1>

             {/* Description */}
             <p className="text-xl text-[#9AC3E4] max-w-3xl mx-auto">
               Comprehensive pest control solutions for residential and commercial properties. 
               Professional, safe, and guaranteed results with our expert team.
             </p>
           </div>
         </div>
       </section>

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allServices.map((service) => (
              <Link 
                key={service.id} 
                href={`/services/${service.slug}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-[#2C6EA5] mb-3 group-hover:text-[#FFA500] transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#FFA500] font-semibold text-sm group-hover:text-[#FF8C00] transition-colors duration-200">
                      Learn More
                    </span>
                    <svg 
                      className="w-5 h-5 text-[#FFA500] group-hover:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
