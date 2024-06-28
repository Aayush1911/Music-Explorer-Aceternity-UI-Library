import Herosection from "@/components/Herosection";
import './globals.css'
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpCommingWebinar from "@/components/UpCommingWebinar";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
          <Herosection/>
          <FeaturedCourses/>
          <WhyChooseUs/>
          <TestimonialCards/>
          <UpCommingWebinar/>
          <Instructors/>
          <Footer/>
    </main>
      );
}
