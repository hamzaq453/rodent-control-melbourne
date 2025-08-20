import Image from "next/image";
import Navbar from "./components/Navbar";
import TopHeader from "./components/TopHeader";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <TopHeader />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <Footer />
    </div>
  );
}
