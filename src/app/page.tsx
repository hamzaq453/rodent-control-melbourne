import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutCompanySection from "./components/AboutCompanySection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import FAQSection from "./components/FAQSection";


export default function Home() {
  return (
    <div className="font-sans min-h-screen">

      <HeroSection />
      <ServicesSection />
      <AboutCompanySection />
      <WhyChooseUsSection />
      <FAQSection />
      
    </div>
  );
}
