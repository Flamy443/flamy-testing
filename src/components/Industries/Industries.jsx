"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Industries.module.css";

export default function Industries() {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [showTexBuyModal, setShowTexBuyModal] = useState(false);
  const [scrollState, setScrollState] = useState({ canScrollLeft: false, canScrollRight: true });

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft: sLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setScrollState({
        canScrollLeft: sLeft > 5,
        canScrollRight: sLeft + clientWidth < scrollWidth - 5
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);

      checkScroll();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  const titleText = "Supporting the Industries Powering Tomorrow";

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
          `.${styles.titleWrapper}`,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out"
          }
        );

        gsap.fromTo(
          `.${styles.card}`,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 95%",
              toggleActions: "restart reset restart reset"
            }
          }
        );
      }, containerRef);
    }
    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  const industries = [
    {
      title: "Advance Compute & AI",
      desc: "Unlock the power of the edge with High-Performance Computing, GPU-as-a-Service, and specialized AI Inference. Accelerate time-to-insight, reduce latency, and scale complex workloads closer to data sources.",
      image: "/Industries/advance-compute.png",
      subcategories: ["Hyperscalers", "AI Developers"]
    },
    {
      title: "Carriers & Service",
      desc: "Whether you are a Carrier or Service Provider, our Tier 3 Edge Data Centers with patented Clean Room design future-proof your infrastructure. Reduce costs, improve network performance, unlock new revenues, and enable emerging technologies.",
      image: "/Industries/carriers.png"
    },
    {
      title: "Public Sector",
      desc: "Enable faster, smarter public services by processing data locally. Support smart city initiatives, enhance public safety, ensure HIPAA compliance for healthcare, and keep critical services running during outages.",
      image: "/Industries/public-sector.png",
      subcategories: ["Education", "Healthcare", "Smart Cities"]
    },
    {
      title: "Enterprise",
      desc: "Operate more efficiently with local data processing for manufacturing, agriculture, and oil & gas. Enable predictive maintenance, support autonomous machinery, and keep critical operations running in remote locations.",
      image: "/Industries/enterprise.png",
      subcategories: ["Enterprise Clients", "Enterprise AI Organizations", "Cloud Service Providers"]
    },
    {
      title: "Utilities",
      desc: "Process data closer to critical infrastructure for real-time grid monitoring and outage response. Support IoT and smart meter integration while strengthening cybersecurity with local operational technology data.",
      image: "/Industries/utilities.jpeg",
      subcategories: ["Grid Operators", "IoT Networks"]
    }
  ];

  return (
    <section ref={containerRef} className={`${styles.section} ${showTexBuyModal ? styles.modalOpen : ""}`} id="industries">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerTextCol}>
            <span className={styles.overline}>Industries</span>
            <div className={styles.titleWrapper}>
              <h2 className={styles.title}>{titleText}</h2>
            </div>
            <p className={styles.description}>
              Duos Edge AI provides infrastructure solutions across industries where performance, scalability, and reliability are critical.
            </p>
          </div>
        </div>

        <div ref={scrollContainerRef} className={styles.scrollContainer}>
          {industries.map((ind, index) => (
            <div key={index} className={styles.card}>

              <div className={styles.imageContainer}>
                <img src={ind.image} alt={ind.title} className={styles.cardImage} />
                <div className={styles.vignetteOverlay}></div>
              </div>

              <div className={styles.contentBlock}>
                <div>
                  <div className={styles.titleRow}>
                    <h3 className={styles.cardTitle}>{ind.title}</h3>
                    <div className={styles.arrowCircle}>
                      <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <p className={styles.cardDesc}>{ind.desc}</p>
                </div>

                {ind.title === "Public Sector" && (
                  <div
                    className={styles.texBuyBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowTexBuyModal(true);
                    }}
                  >
                    <div className={styles.texBuyHeader}>
                      <svg className={styles.texBuyIcon} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M 50 15 L 75 20 L 80 45 L 60 70 L 45 85 L 40 75 L 25 65 L 18 48 L 22 38 L 38 38 L 42 25 Z" fill="rgba(255, 255, 255, 0.15)" />
                        <circle cx="45" cy="62" r="5" fill="currentColor" />
                        <circle cx="60" cy="62" r="5" fill="currentColor" />
                        <path d="M 32 35 H 42 L 48 52 H 65 L 71 35" />
                      </svg>
                      <div className={styles.texBuyText}>
                        <span className={styles.texBuyTitle}>TexBuy</span>
                        <span className={styles.texBuySubtitle}>APPROVED VENDOR</span>
                      </div>
                    </div>
                    <span className={styles.texBuyLearnMore}>Learn What This Means →</span>
                  </div>
                )}

                {ind.subcategories && (
                  <div className={styles.subcategoryList}>
                    {ind.subcategories.map((sub, sIdx) => (
                      <span key={sIdx} className={styles.subcategoryTag}>{sub}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomControls}>
          <div className={styles.navControls}>
            <button
              className={`${styles.scrollBtn} ${!scrollState.canScrollLeft ? styles.disabledBtn : ""}`}
              onClick={scrollLeft}
              disabled={!scrollState.canScrollLeft}
              aria-label="Scroll Left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button
              className={`${styles.scrollBtn} ${!scrollState.canScrollRight ? styles.disabledBtn : ""}`}
              onClick={scrollRight}
              disabled={!scrollState.canScrollRight}
              aria-label="Scroll Right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {showTexBuyModal && (
        <div className={styles.modalOverlay} onClick={() => setShowTexBuyModal(false)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseBtn} onClick={() => setShowTexBuyModal(false)}>✕</button>
            <div className={styles.modalGrid}>
              <div className={styles.modalLeft}>
                <div className={styles.modalLogoHeader}>
                  <svg className={styles.modalTexBuyIcon} viewBox="0 0 100 100" fill="none" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 50 15 L 75 20 L 80 45 L 60 70 L 45 85 L 40 75 L 25 65 L 18 48 L 22 38 L 38 38 L 42 25 Z" fill="rgba(37, 99, 235, 0.1)" />
                    <circle cx="45" cy="62" r="5" fill="#2563eb" />
                    <circle cx="60" cy="62" r="5" fill="#2563eb" />
                    <path d="M 32 35 H 42 L 48 52 H 65 L 71 35" />
                  </svg>
                  <div className={styles.modalTexBuyText}>
                    <span className={styles.modalTexBuyTitle}>TexBuy</span>
                    <span className={styles.modalTexBuySubtitle}>APPROVED VENDOR</span>
                  </div>
                </div>

                <h3 className={styles.modalHeading}>Duos Edge AI is a TexBuy Approved Vendor</h3>

                <p className={styles.modalParagraph}>
                  Being a TexBuy Approved Vendor means eligible Texas public entities—including K-12 school districts, higher education institutions, municipalities, counties, and other government organizations—can purchase Duos Edge AI solutions through TexBuy's competitively awarded cooperative purchasing program.
                </p>
                <p className={styles.modalParagraph}>
                  This designation helps simplify procurement by allowing participating organizations to purchase from an approved vendor without conducting a separate competitive solicitation, saving valuable time while maintaining compliance with Texas purchasing requirements.
                </p>
                <p className={styles.modalParagraph}>
                  Whether supporting AI infrastructure for education, public safety, healthcare, or local government, Duos Edge AI provides a faster path from planning to deployment.
                </p>
              </div>

              <div className={styles.modalRight}>
                <div className={styles.featuresList}>
                  <div className={styles.featureItem}>
                    <div className={styles.checkBadge}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className={styles.featureTextWrapper}>
                      <span className={styles.featureTitle}>Streamlined Procurement</span>
                      <span className={styles.featureDesc}>Pre-approved through a competitive process so eligible entities can purchase quickly and confidently.</span>
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <div className={styles.checkBadge}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className={styles.featureTextWrapper}>
                      <span className={styles.featureTitle}>Saves Time & Resources</span>
                      <span className={styles.featureDesc}>Reduce administrative burden and accelerate project timelines.</span>
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <div className={styles.checkBadge}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className={styles.featureTextWrapper}>
                      <span className={styles.featureTitle}>Eligible Texas Entities</span>
                      <span className={styles.featureDesc}>Available to Texas public schools, colleges, cities, counties, and other government organizations.</span>
                    </div>
                  </div>
                </div>

                <a href="#contact" className={styles.modalSalesBtn} onClick={() => setShowTexBuyModal(false)}>
                  <span>Contact Our Sales Team</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
