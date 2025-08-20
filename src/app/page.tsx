import Image from "next/image";
import Navbar from "./components/Navbar";
import TopHeader from "./components/TopHeader";
import HeroSection from "./components/HeroSection";


export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <TopHeader />
      <Navbar />
      <HeroSection />
      
     
    </div>
  );
}
