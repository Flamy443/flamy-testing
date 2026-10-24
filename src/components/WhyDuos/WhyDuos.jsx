"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./WhyDuos.module.css";

const servicesData = [
  {
    name: "Faster Deployment",
    heading: "Faster Deployment",
    description: "Bring AI infrastructure online in significantly less time than conventional facilities.",
    image: "/why-duos/2.PNG"
  },
  {
    name: "Regional Infrastructure",
    heading: "Regional Infrastructure",
    description: "Deploy computing resources closer to users and applications for lower latency and improved performance.",
    image: "/why-duos/pod2.png"
  },
  {
    name: "AI-Optimized Design",
    heading: "AI-Optimized Design",
    description: "Purpose-built environments designed to support high-density GPU workloads and future growth.",
    image: "/why-duos/why-duos-hero.png"
  },
  {
    name: "End-to-End Operations",
    heading: "End-to-End Operations",
    description: "From deployment through ongoing maintenance, Duos manages the infrastructure so customers can focus on innovation.",
    image: "/why-duos/4.jpg"
  }
];

export default function BrandArchitecture() {
  const [activeTab, setActiveTab] = useState("Faster Deployment");
  const containerRef = useRef(null);

  const currentTab = servicesData.find((t) => t.name === activeTab) || servicesData[0];
  const titleText = "Why Organizations Choose Duos Edge AI";

  useEffect(() => {
    let ctx;
    if (typeof window !== "undefined") {
      const ScrollTrigger = require("gsap/dist/ScrollTrigger").ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
            toggleActions: "restart reset restart reset"
          }
        });

        tl.fromTo(
          `.${styles.headlineWrapper}`,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out"
          }
        );
      }, containerRef);
    }
    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.section} id="why-duos">
      <div className={styles.container}>

        <div className={styles.dashboardWrapper}>
          <img
            src={currentTab.image}
            alt={currentTab.heading}
            className={styles.dashboardImage}
          />
        </div>

        <div className={styles.bottomContent}>

          <div className={styles.leftCol}>
            <span className={styles.overline}>Why Duos</span>
            <div className={styles.headlineWrapper}>
              <h2 className={styles.headline}>{titleText}</h2>
            </div>
            <p className={styles.subText}>
              Duos addresses the underserved “missing middle” of the data center market with appropriately sized, scalable infrastructure designed for regional deployments where traditional large scale development may not be practical. Today's AI workloads demand more than traditional data centers can deliver—Duos Edge AI combines modular design, operational expertise, and regional deployment capabilities to help customers expand faster while reducing complexity.
            </p>
          </div>

          <div className={styles.rightCol}>

            <div className={styles.tabsHeader}>
              {servicesData.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`${styles.tabBtn} ${activeTab === tab.name ? styles.tabBtnActive : ""}`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            <div className={styles.tabContentPanel}>
              <h4 className={styles.activeTitle}>{currentTab.heading}</h4>
              <p className={styles.tabDescription}>
                {currentTab.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
