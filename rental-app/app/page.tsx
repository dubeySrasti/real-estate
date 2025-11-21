import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";
import Events from "@/components/events";
import AppStore from "@/components/appStore";
import MobileContent from "@/components/mobileContent";
import Counters from "@/components/counter";
import HeroSection from "@/components/heroSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MobileContent />
      <Counters />
      <Events />
      <AppStore />
      <Footer />
    </>
  );
}
