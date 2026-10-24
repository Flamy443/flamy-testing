"use client";

import { useState, useEffect, useRef } from "react";
import Preloader from "@/components/Preloader/Preloader";
import Hero from "@/components/Hero/Hero";
import WhyDuos from "@/components/WhyDuos/WhyDuos";
import Industries from "@/components/Industries/Industries";
import DeploymentMap from "@/components/DeploymentMap/DeploymentMap";
import TechnologySolutions from "@/components/TechnologySolutions/TechnologySolutions";
import Testimonials from "@/components/Testimonials/Testimonials";
import TeamSection from "@/components/TeamSection/TeamSection";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import OperatingCompanies from "@/components/OperatingCompanies/OperatingCompanies";
import LinkedInFeed from "@/components/LinkedInFeed/LinkedInFeed";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = '/hero-logo/duostech.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleLoad = () => {
        const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
        ScrollTrigger.refresh();
      };

      window.addEventListener("load", handleLoad);

      if (!isLoading) {
        document.documentElement.classList.add("preloader-done");
        const timer1 = setTimeout(handleLoad, 100);
        const timer2 = setTimeout(handleLoad, 1500);
        return () => {
          window.removeEventListener("load", handleLoad);
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <Hero />

      <OperatingCompanies />

      <TechnologySolutions />

      <WhyDuos />

      <Industries />

      <DeploymentMap />

      <Testimonials />

      <TeamSection />

      <LinkedInFeed />

      <FinalCTA />
    </>
  );
}
