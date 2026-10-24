"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./edge.module.css";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Preloader from "@/components/Preloader/Preloader";

export default function EdgePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef(null);
  const sectionHeaderRef = useRef(null);
  const deliverHeaderRef = useRef(null);
  const showcase1Ref = useRef(null);
  const showcase2Ref = useRef(null);

  const heroTitleText = "Next-Generation Edge AI Infrastructure";
  const sectionTitleText = "Capabilities in Action";
  const deliverTitleText = "Designed to Deploy More With Less Complexity";
  const showcase1TitleText = "Patented Modular Edge Pods, engineered for GPU density.";
  const showcase2TitleText = "Our strategic edge approach is what sets us apart.";

  useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = '/hero-logo/edgeai.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  useEffect(() => {
    let ctx;
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {

        const tlHero = gsap.timeline();
        tlHero.fromTo(
          `.${styles.heroTitle}`,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          }
        );

        const tlSection = gsap.timeline({
          scrollTrigger: {
            trigger: sectionHeaderRef.current,
            start: "top 90%",
            toggleActions: "restart reset restart reset"
          }
        });
        tlSection.fromTo(
          `.${styles.sectionTitle} .${styles.letterSpan}`,
          { opacity: 0, color: "#2563eb" },
          {
            opacity: 1,
            duration: 0.05,
            stagger: 0.04,
            ease: "none"
          }
        ).to(
          `.${styles.sectionTitle} .${styles.letterSpan}`,
          {
            color: "inherit",
            duration: 0.3,
            stagger: 0.04
          },
          0.25
        );

        const tlDeliver = gsap.timeline({
          scrollTrigger: {
            trigger: deliverHeaderRef.current,
            start: "top 90%",
            toggleActions: "restart reset restart reset"
          }
        });
        tlDeliver.fromTo(
          `.${styles.deliverTitleWrapper}`,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out"
          }
        );

        const tlShowcase1 = gsap.timeline({
          scrollTrigger: {
            trigger: showcase1Ref.current,
            start: "top 90%",
            toggleActions: "restart reset restart reset"
          }
        });
        tlShowcase1.fromTo(
          `.showcase1TitleWrapper`,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out"
          }
        );

        const tlShowcase2 = gsap.timeline({
          scrollTrigger: {
            trigger: showcase2Ref.current,
            start: "top 90%",
            toggleActions: "restart reset restart reset"
          }
        });
        tlShowcase2.fromTo(
          `.showcase2TitleWrapper`,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out"
          }
        );

        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 200);
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 600);
      }, containerRef);
    }
    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  const features = [
    {
      title: "Strategy",
      desc: "We analyze edge network topologies, fiber route paths, and regional workloads to target high-growth, underserved markets.",
      cta: "Learn Strategy"
    },
    {
      title: "Site Engineering",
      desc: "Our patent-protected modular pod designs are prefabricated with clean-room entries, securing infrastructure from harsh elements.",
      cta: "Explore Infrastructure"
    },
    {
      title: "High-Density Compute",
      desc: "Our power delivery configurations are engineered to handle the massive energy requirements of AI, GPU, and high-performance clusters.",
      cta: "View Power Specs"
    },
    {
      title: "Thermal Management",
      desc: "Equipped with direct-to-chip liquid cooling systems and N+1 redundant air cooling to maintain optimal operational temperatures.",
      cta: "See Cooling Systems"
    },
    {
      title: "Structured Cabling",
      desc: "Integrated high-strand single-mode fiber routes, pre-terminated fiber panels, and multi-carrier connection options.",
      cta: "Read Splicing Specs"
    },
    {
      title: "Telemetry & Security",
      desc: "Continuous environmental monitoring, power quality telemetry, and multi-tier physical security configurations inside every pod.",
      cta: "Explore Telemetry"
    },
    {
      title: "Commissioning",
      desc: "Rapid deployment cycles that enable us to build, transport, splice connectivity, and activate new edge nodes within 90 days.",
      cta: "View Timeline"
    },
    {
      title: "Operations",
      desc: "Dedicated site operations, preventive maintenance pipelines, and immediate on-site technical response teams.",
      cta: "Contact Support"
    }
  ];

  const milestones = [
    {
      image: "/edge-ai/ribbon-cutting.jpeg",
      tag: "Milestone",
      title: "Rapid Deployment Ceremonies",
      desc: "Celebrating key site activations with municipal partners, fiber providers, and local enterprise clients."
    },
    {
      image: "/edge-ai/doug-kt.jpeg",
      tag: "Strategic",
      title: "Partner Coordination & Alignment",
      desc: "Aligning with regional stakeholders and corporate leaders to scale digital edge capabilities across markets."
    },
    {
      image: "/why-duos/why-duos-hero.png",
      tag: "Engineering",
      title: "Patented Edge Infrastructure",
      desc: "Showcasing our patent-protected design with liquid cooling integrations and advanced power configuration modules."
    },
    {
      image: "/edge-ai/pod.jpeg",
      tag: "Architecture",
      title: "Standardized Modular Architecture",
      desc: "Scaling next-generation edge capabilities within a modular footprint designed to survive environmental extremes."
    }
  ];

  const partners = [
    { name: "NVIDIA" },
    { name: "DELL" },
    { name: "SUPERMICRO" },
    { name: "ARISTA" },
    { name: "AMD" },
    { name: "CISCO" },
    { name: "INTEL" }
  ];

  return (
    <>
      {isLoading && <Preloader logo="/hero-logo/edgeai.png" onComplete={() => setIsLoading(false)} />}
      <div ref={containerRef} className={styles.page}>

        <section className={styles.heroSection}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>

            <h1 className={styles.heroTitle}>{heroTitleText}</h1>
            <p className={styles.heroDesc}>
              Duos addresses the underserved “missing middle” of the data center market with appropriately sized, scalable infrastructure designed for regional deployments where traditional large scale development may not be practical. We deploy patented, pre-fabricated modular edge data centers that bring high-density compute, liquid cooling, and carrier-grade connectivity directly to utility substations, municipalities, and enterprise markets.
              <span style={{ display: "block", fontSize: "0.85rem", opacity: 0.75, marginTop: "1rem", fontWeight: "900", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                A wholly owned subsidiary of Duos Technologies Group, Inc.
              </span>
            </p>
          </div>
        </section>

        <section id="strategy" className={styles.deliverSection}>
          <div className={styles.deliverContainer}>
            <div ref={deliverHeaderRef} className={styles.deliverGrid}>
              <div className={styles.deliverLeft}>
                <div className={styles.deliverTitleWrapper}>
                  <h2 className={styles.deliverTitle}>{deliverTitleText}</h2>
                </div>
              </div>
              <div className={styles.deliverRight}>
                <p className={styles.deliverText}>
                  Our digital infrastructure is built for modern AI developers, hyperscalers, and telecom carriers who want to deploy secure, high-density compute capacity exactly where they need it.
                </p>
              </div>
            </div>

            <div className={styles.deliverCols}>
              <div className={styles.deliverColCard}>
                <h3 className={styles.colTitle}>Automated Telemetry</h3>
                <p className={styles.colDesc}>
                  Continuous environmental sensors, active power monitoring, and security alerts protect hardware reliability 24/7.
                </p>
              </div>
              <div className={styles.deliverColCard}>
                <h3 className={styles.colTitle}>Direct-to-Chip Cooling</h3>
                <p className={styles.colDesc}>
                  Engineered N+1 cooling configurations ready to handle high-density GPU heat loads up to 100 kW per rack.
                </p>
              </div>
              <div className={styles.deliverColCard}>
                <h3 className={styles.colTitle}>Multi-Carrier Splicing</h3>
                <p className={styles.colDesc}>
                  Pre-terminated fiber routes enabling carrier-neutral cross connects and redundant local routing paths.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.deliverBlurOverlay}></div>
        </section>

        <section id="pods" className={styles.showcaseSection}>
          <div className={styles.showcaseContainer}>
            <div className={styles.showcaseTextCol}>
              <span className={styles.showcaseSub}>About DUOS Edge</span>
              <div ref={showcase1Ref} className="showcase1TitleWrapper" style={{ display: "inline-block" }}>
                <h2 className={styles.showcaseTitle}>{showcase1TitleText}</h2>
              </div>
              <p className={styles.showcaseDesc}>
                With a commitment to rapid setup, power redundancy, and high-performance computing, we transform regional network points into carrier-grade edge nodes. Our prefabricated designs deploy within 90 days.
              </p>
              <Link href="/contact" className={styles.showcaseBtn}>
                Learn More →
              </Link>
            </div>
            <div className={styles.showcaseImageCol}>
              <div className={`${styles.organicImageFrame} ${styles.frameStyle1}`}>
                <img src="/edge-ai/pod.jpeg" alt="Modular Pod" className={styles.organicImage} />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.partnersSection}>
          <div className={styles.partnersContainer}>
            {partners.map((brand, idx) => (
              <span key={idx} className={styles.partnerLogo}>
                {brand.name}
              </span>
            ))}
          </div>
        </section>

        <section className={`${styles.showcaseSection} ${styles.showcaseFlipped}`}>
          <div className={styles.showcaseContainer}>
            <div className={styles.showcaseImageCol}>
              <div className={`${styles.organicImageFrame} ${styles.frameStyle2}`}>
                <img src="/edge-ai/doug-kt.jpeg" alt="Partners Alignment" className={styles.organicImage} />
              </div>
            </div>
            <div className={styles.showcaseTextCol}>
              <span className={styles.showcaseSub}>Our Approach</span>
              <div ref={showcase2Ref} className="showcase2TitleWrapper" style={{ display: "inline-block" }}>
                <h2 className={styles.showcaseTitle}>{showcase2TitleText}</h2>
              </div>
              <p className={styles.showcaseDesc}>
                Our method marries traditional telecommunication infrastructure with modern high-performance GPU capabilities. We focus on low latency, power optimization, and multi-tenant fiber architectures that keep you scaling.
              </p>
              <Link href="/contact" className={styles.showcaseBtn}>
                Our Strategy →
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.overlapSection}>
          <div className={styles.overlapCard}>
            <div className={styles.featuresLayout}>

              <div className={styles.focusList}>
                <span className={styles.columnLabel}>Capabilities:</span>
                <ul className={styles.list}>
                  {features.map((item, idx) => (
                    <li
                      key={idx}
                      className={`${styles.listItem} ${activeFeature === idx ? styles.activeListItem : ""}`}
                      onMouseEnter={() => setActiveFeature(idx)}
                      onClick={() => setActiveFeature(idx)}
                    >
                      <span className={styles.listDot}></span>
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.featureDetail}>
                <span className={styles.columnLabel}>Capability Overview</span>
                <div className={styles.detailCard}>
                  <h3 className={styles.detailTitle}>{features[activeFeature].title}</h3>
                  <p className={styles.detailDesc}>{features[activeFeature].desc}</p>
                  <Link href="/contact" className={styles.detailBtn}>
                    {features[activeFeature].cta}
                    <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className={styles.promoCol}>
                <div className={styles.promoCard}>
                  <h3 className={styles.promoTitle}>Let's build the future of Edge AI Together!</h3>
                  <p className={styles.promoDesc}>
                    Whether you're planning new AI deployments, expanding carrier-neutral routing, or securing regional low-latency compute pools, our team is ready to scale with you.
                  </p>
                  <Link href="/contact" className={styles.promoBtn}>
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="deployments" className={styles.milestonesSection}>
          <div className={styles.milestonesContainer}>
            <div ref={sectionHeaderRef} className={styles.sectionHeader}>
              <span className={styles.overline}>Active Deployments</span>
              <h2 className={styles.sectionTitle}>
                {sectionTitleText.split(" ").map((word, wordIdx) => (
                  <span key={wordIdx} className={styles.wordSpan} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                    {word.split("").map((char, charIdx) => (
                      <span
                        key={charIdx}
                        className={styles.letterSpan}
                        style={{ display: "inline-block" }}
                      >
                        {char}
                      </span>
                    ))}
                    {wordIdx < sectionTitleText.split(" ").length - 1 && "\u00A0"}
                  </span>
                ))}
              </h2>
            </div>

            <div className={styles.milestonesGrid}>
              {milestones.map((item, idx) => (
                <div key={idx} className={styles.milestoneCard}>
                  <div className={styles.milestoneImageWrapper}>
                    <img src={item.image} alt={item.title} className={styles.milestoneImage} />
                    <span className={styles.milestoneTag}>{item.tag}</span>
                  </div>
                  <div className={styles.milestoneInfo}>
                    <h3 className={styles.milestoneTitle}>{item.title}</h3>
                    <p className={styles.milestoneDesc}>{item.desc}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.footerCircle}></span>
                      <span className={styles.footerText}>DUOS Technologies</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </div>
    </>
  );
}
