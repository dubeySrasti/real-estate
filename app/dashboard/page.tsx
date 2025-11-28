import Footer from "@/components/footer";
import HouseTourSection from "@/components/houseTourSection";
import Navbar from "@/components/navbar";
import PropertyCard from "@/components/cards";
import PropertyHeroSection from "@/components/propertyHeroSection";

export default function Dashboard() {
 return(
    <>
   <Navbar />
   <PropertyHeroSection />
   <PropertyCard />
   <HouseTourSection />
   <Footer />
    </>
 )
 
}