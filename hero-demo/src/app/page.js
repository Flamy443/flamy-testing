import Header from "@/components/Header/Header";
import Announcement from "@/components/Sections/Announcement";
import Hero from "@/components/Hero/Hero";
import Mission from "@/components/Sections/Mission";
import Features from "@/components/Sections/Features";
import MissionFeatures from "@/components/Sections/MissionFeatures";
import Surgery from "@/components/Sections/Surgery";
import Explore from "@/components/Sections/Explore";
import Reviews from "@/components/Sections/Reviews";
import Faq from "@/components/Sections/Faq";
import Blogs from "@/components/Sections/Blogs";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <Announcement />
      <Hero />
      <Mission />
      <Features />
      <MissionFeatures />
      <Surgery />
      <Explore />
      <Reviews />
      <Faq />
      <Blogs />
      <Footer />
    </div>
  );
}
