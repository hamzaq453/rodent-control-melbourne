import Image from "next/image";
import TopHeader from "./components/TopHeader";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutCompanySection from "./components/AboutCompanySection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";


export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <TopHeader />
     
      <HeroSection />
      <ServicesSection />
      <AboutCompanySection />
      <WhyChooseUsSection />
      
    </div>
  );
}
