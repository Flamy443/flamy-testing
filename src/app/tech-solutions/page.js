"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./solutions.module.css";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Preloader from "@/components/Preloader/Preloader";
import ProductsPartnersSection from "@/components/ProductsPartnersSection/ProductsPartnersSection";

export default function TechSolutionsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrolledPast, setScrolledPast] = useState({});
  const [heroVisible, setHeroVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const containerRef = useRef(null);
  const aboutRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);
  const expertiseRef = useRef(null);

  const splitText = (text) => text;

  useEffect(() => {
    let ctx;
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {

        const tlAbout = gsap.timeline({
          scrollTrigger: {
            trigger: `.${styles.aboutTitleWrapper}`,
            start: "top 90%",
            toggleActions: "restart reset restart reset"
          }
        });
        tlAbout.fromTo(
          `.${styles.aboutTitleWrapper}`,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out"
          }
        );

        gsap.fromTo(
          `.${styles.divisionColumn}`,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.2,
            stagger: 0.35,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 65%",
              toggleActions: "play none none none"
            }
          }
        );

        gsap.fromTo(
          visionRef.current,
          { opacity: 0, scale: 0.96 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: visionRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );

        const tlVision = gsap.timeline({
          scrollTrigger: {
            trigger: `.${styles.visionOverline}`,
            start: "top 90%",
            toggleActions: "restart reset restart reset"
          }
        });
        tlVision.fromTo(
          `.${styles.visionOverline}`,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out"
          }
        );

        const tlExecution = gsap.timeline({
          scrollTrigger: {
            trigger: `.${styles.executionOverline}`,
            start: "top 90%",
            toggleActions: "restart reset restart reset"
          }
        });
        tlExecution.fromTo(
          `.${styles.executionOverline}`,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out"
          }
        );

        const tlEdge = gsap.timeline({
          scrollTrigger: {
            trigger: `.${styles.edgeTitle}`,
            start: "top 90%",
            toggleActions: "restart reset restart reset"
          }
        });
        tlEdge.fromTo(
          `.${styles.edgeTitle}`,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out"
          }
        );

        const sectionTitles = document.querySelectorAll(`.${styles.sectionTitle}`);
        sectionTitles.forEach((titleEl) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: titleEl,
              start: "top 90%",
              toggleActions: "restart reset restart reset"
            }
          });
          tl.fromTo(
            titleEl,
            { opacity: 0, y: 45 },
            {
              opacity: 1,
              y: 0,
              duration: 1.1,
              ease: "power3.out"
            }
          );
        });

        const tlValues = gsap.timeline({
          scrollTrigger: {
            trigger: `.${styles.valuesTitle}`,
            start: "top 90%",
            toggleActions: "restart reset restart reset"
          }
        });
        tlValues.fromTo(
          `.${styles.valuesTitle}`,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          }
        );

        gsap.fromTo(
          `.${styles.valueCard}`,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.0,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: valuesRef.current,
              start: "top 75%",
              toggleActions: "play none none none"
            }
          }
        );

        gsap.fromTo(
          `.${styles.expertiseHeadline}`,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: expertiseRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );

        gsap.fromTo(
          `.${styles.expertiseCol}`,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: expertiseRef.current,
              start: "top 75%",
              toggleActions: "play none none none"
            }
          }
        );

        const tlHeroTitle = gsap.timeline({
          scrollTrigger: {
            trigger: `.${styles.heroTitle}`,
            start: "top 90%",
            toggleActions: "restart reset restart reset"
          }
        });
        tlHeroTitle.fromTo(
          `.${styles.heroTitle}`,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          }
        );

        const sectTitles = document.querySelectorAll(`.${styles.sectionBlock} .${styles.sectionTitle}`);
        sectTitles.forEach((sectTitleEl) => {
          const tlSect = gsap.timeline({
            scrollTrigger: {
              trigger: sectTitleEl,
              start: "top 90%",
              toggleActions: "restart reset restart reset"
            }
          });
          tlSect.fromTo(
            sectTitleEl,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out"
            }
          );
        });

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

  const aboutTitleText = "Duos Tech Does Distribution Better.";

  return (
    <>
      {isLoading && <Preloader logo="/hero-logo/duostechsolution.png" onComplete={() => setIsLoading(false)} />}
      <div ref={containerRef} className={styles.page}>

        <section ref={aboutRef} id="about" className={styles.aboutUsSection}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutIntro}>
              <span className={styles.aboutOverline}>About Us</span>
              <div className={styles.aboutTitleWrapper}>
                <h2 className={styles.aboutTitle}>
                  {aboutTitleText}
                </h2>
              </div>
              <p className={styles.aboutMainText}>
                Duos Tech does distribution better. We deliver manufacturer-agnostic sourcing solutions for data center, networking,
                power cooling and infrastructure projects. We simplify procurement with technical expertise, strategic vendor partner-
                ships, and responsive customer support.

              </p>
            </div>
          </div>

          <div className={styles.splitDivisionsContainer}>

            <div className={styles.divisionColumn} style={{ backgroundImage: `url('/why-duos/2.PNG')` }}>

            </div>

            <div className={styles.divisionColumn} style={{ backgroundImage: `url('/why-duos/pod2.png')` }}>

            </div>
          </div>
        </section>

        <div className={styles.expertisePageSection}>

          <section className={`${styles.heroSection} ${heroVisible ? styles.heroVisible : ""}`}>
            <p className={styles.heroLabel}>Our solutions</p>
            <h1 className={styles.heroTitle}>{splitText("Our Expertise")}</h1>
            <p className={styles.heroDesc}>
              We deliver value-added distribution, custom-built infrastructure solutions, and streamlined logistics to scale your operations.
            </p>
          </section>

          <section className={`${styles.sectionBlock} ${visibleSections["01"] ? styles.sectionVisible : ""}`} id="distribution" data-section="01">
            <div className={styles.sectionNumberWrap}>
              <div className={`${styles.sectionNumber} ${scrolledPast["01"] ? styles.sectionNumberScrolledPast : ""}`}>01</div>
            </div>
            <div className={styles.sectionContent}>
              <div>
                <p className={styles.techsectionlabel}>Value Added Distribution</p>
                <h2 className={styles.sectionTitle}>{splitText("Our Solutions")}</h2>
                <div className={styles.dividerLine}></div>
              </div>

              <div className={styles.featureGrid}>
                <div className={styles.techfeatureItem}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="12" cy="5" r="3" />
                    <circle cx="5" cy="12" r="3" />
                    <circle cx="19" cy="12" r="3" />
                    <circle cx="12" cy="19" r="3" />
                    <line x1="12" y1="8" x2="12" y2="9" />
                    <line x1="8" y1="12" x2="9" y2="12" />
                    <line x1="15" y1="12" x2="16" y2="12" />
                    <line x1="12" y1="15" x2="12" y2="16" />
                  </svg>
                  <h4>Strategic IT & Data Center Sourcing</h4>
                  <p>Manufacturer agnostic sourcing to meet project, rollout and ongoing operational needs.</p>
                </div>
                <div className={styles.techfeatureItem}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                    <line x1="10" y1="6" x2="18" y2="6" />
                    <line x1="10" y1="18" x2="18" y2="18" />
                  </svg>
                  <h4>White Space Infrastructure</h4>
                  <p>Cabinets, in-rack power, containment raised floors and security solutions.</p>
                </div>
                <div className={styles.techfeatureItem}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2v20M18 2v20M12 2v20M3 7h18M3 17h18" />
                  </svg>
                  <h4>Structured Cabling</h4>
                  <p>Copper and fiber cabling, connectivity and cross connect solutions.</p>
                </div>
                <div className={styles.techfeatureItem}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor" />
                  </svg>
                  <h4>Power & Cooling Solutions</h4>
                  <p>Medium voltage, power distribution UPS and cooling solutions.</p>
                </div>
                <div className={styles.techfeatureItem}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                  <h4>Logistics & Kitting</h4>
                  <p>Inventory management, custom stocking and inventory programs that ensure timely delivery and successful projects.</p>
                </div>
                <div className={styles.techfeatureItem}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                  <h4>Dedicated Customer Support</h4>
                  <p>Dedicated service from quote to post-delivery, every time.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={`${styles.sectionBlock} ${visibleSections["02"] ? styles.sectionVisible : ""}`} id="custom" data-section="02">
            <div className={styles.sectionNumberWrap}>
              <div className={`${styles.sectionNumber} ${scrolledPast["02"] ? styles.sectionNumberScrolledPast : ""}`}>02</div>
            </div>
            <div className={styles.sectionContent}>
              <div>
                <p className={styles.techsectionlabel}>Value Differentiators</p>
                <h2 className={styles.sectionTitle}>{splitText("Why Duos Tech")}</h2>
                <div className={styles.dividerLine}></div>
              </div>
              <div className={styles.featureGrid}>
                <div className={styles.techfeatureItem}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z" />
                  </svg>
                  <h4>Hardware Neutral</h4>
                  <p>Unbiased solutions that align with your technical and budgetary needs.</p>
                </div>
                <div className={styles.techfeatureItem}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 0" />
                  </svg>
                  <h4>Faster Lead Times</h4>
                  <p>Speed and efficiency to reduce lead times and sourcing bottlenecks.</p>
                </div>
                <div className={styles.techfeatureItem}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M8 11h8M12 7v8" />
                  </svg>
                  <h4>Flexible Support</h4>
                  <p>Scalable support for projects, rollouts and day-to-day requirements.</p>
                </div>
                <div className={styles.techfeatureItem}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="9" y="9" width="6" height="6" />
                    <line x1="9" y1="1" x2="9" y2="4" />
                    <line x1="15" y1="1" x2="15" y2="4" />
                    <line x1="9" y1="20" x2="9" y2="23" />
                    <line x1="15" y1="20" x2="15" y2="23" />
                    <line x1="20" y1="9" x2="23" y2="9" />
                    <line x1="20" y1="15" x2="23" y2="15" />
                    <line x1="1" y1="9" x2="4" y2="9" />
                    <line x1="1" y1="15" x2="4" y2="15" />
                  </svg>
                  <h4>Technical Expertise</h4>
                  <p>Deep understanding of IT and data center infrastructure requirements.</p>
                </div>
                <div className={styles.techfeatureItem}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h4>End-to-End Fulfillment</h4>
                  <p>We manage vendors, logistics and quality through every step of the process.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={`${styles.sectionBlock} ${visibleSections["03"] ? styles.sectionVisible : ""}`} id="fulfillment" data-section="03">
            <div className={styles.sectionNumberWrap}>
              <div className={`${styles.sectionNumber} ${scrolledPast["03"] ? styles.sectionNumberScrolledPast : ""}`}>03</div>
            </div>
            <div className={styles.sectionContent}>
              <div>
                <p className={styles.techsectionlabel}>Product Sourcing Portfolio</p>
                <h2 className={styles.sectionTitle}>{splitText("Product Solutions")}</h2>
                <div className={styles.dividerLine}></div>
              </div>

              <p className={styles.sectionDesc}>
                We offer comprehensive digital infrastructure sourcing and fulfillment, from structured cabling and conveyance to power and cooling configurations. Explore our complete portfolio of high-performance products and strategic manufacturer partnerships on our dedicated products page.
              </p>

            </div>
          </section>

          <section className={`${styles.sectionBlock} ${visibleSections["04"] ? styles.sectionVisible : ""}`} id="sales-team" data-section="04">
            <div className={styles.sectionNumberWrap}>
              <div className={`${styles.sectionNumber} ${scrolledPast["04"] ? styles.sectionNumberScrolledPast : ""}`}>04</div>
            </div>
            <div className={styles.sectionContent}>
              <div>
                <p className={styles.techsectionlabel}>Connect With Us</p>
                <h2 className={styles.sectionTitle}>{splitText("Contact Our Sales Team")}</h2>
                <div className={styles.dividerLine}></div>
              </div>

              <div className={styles.teamGrid}>
                <div className={styles.teamCard}>
                  <div className={styles.imageWrapper}>
                    <img
                      src="/team/jared.png"
                      alt="Jared Aguilar"
                      className={styles.avatar}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerText = 'JA';
                        }
                      }}
                    />
                  </div>
                  <div className={styles.teamInfo}>
                    <h3 className={styles.teamName}>Jared Aguilar</h3>
                    <p className={styles.teamRole}>Sr. Account Executive — West</p>
                    <p className={styles.teamSubRole}>Duos Technology Solutions, Inc.</p>
                    <div className={styles.socials}>
                      <a href="https://www.linkedin.com/in/jared-aguilar-8b894119/" className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.teamCard}>
                  <div className={styles.imageWrapper}>
                    <img
                      src="/team/madisonblack.png"
                      alt="Madison Black"
                      className={styles.avatar}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerText = 'MB';
                        }
                      }}
                    />
                  </div>
                  <div className={styles.teamInfo}>
                    <h3 className={styles.teamName}>Madison Black</h3>
                    <p className={styles.teamRole}>Account Executive — Central</p>
                    <p className={styles.teamSubRole}>Duos Technology Solutions, Inc.</p>
                    <div className={styles.socials}>
                      <a href="https://www.linkedin.com/in/madison-black-769a68138/" className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.teamCard}>
                  <div className={styles.imageWrapper}>
                    <img
                      src="/team/PhilipPien.png"
                      alt="Philip Pien"
                      className={styles.avatar}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerText = 'PP';
                        }
                      }}
                    />
                  </div>
                  <div className={styles.teamInfo}>
                    <h3 className={styles.teamName}>Philip Pien</h3>
                    <p className={styles.teamRole}>Director of Sales — East</p>
                    <p className={styles.teamSubRole}>Duos Technology Solutions, Inc.</p>
                    <div className={styles.socials}>
                      <a href="https://www.linkedin.com/in/philippien/" className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section id="products-partners">
          <ProductsPartnersSection />
        </section>

        <section ref={visionRef} id="vision" className={styles.visionSection}>
          <div className={styles.visionContainer}>
            <span className={styles.visionOverline}>Our Vision</span>
            <h2 className={styles.visionQuote}>
              "At Duos Technologies, our vision is to redefine how digital infrastructure is deployed, accessed, and scaled—bringing advanced compute, connectivity, and AI capabilities to every market, regardless of location."
            </h2>
            <p className={styles.visionDesc}>
              We envision a future where edge intelligence is ubiquitous, sustainable, and resilient, enabling organizations to innovate closer to where data is created and decisions are made. By expanding high-performance computing and AI infrastructure into underserved and emerging regions, we aim to close the digital divide while accelerating economic growth, technological advancement, and operational efficiency.
            </p>
            <p className={styles.visionDesc}>
              Through Duos Edge AI, we are building the foundation for a distributed, low-impact edge ecosystem that supports next-generation applications with speed, reliability, and environmental responsibility. Through Duos Technologies Solutions, we are transforming how infrastructure is sourced, delivered, and supported—simplifying complexity, increasing agility, and strengthening partnerships across the entire value chain.
            </p>
            <p className={styles.visionDesc}>
              Our vision is grounded in partnership, executional excellence, and long-term value creation. We strive to be the trusted infrastructure partner for customers, vendors, and investors by delivering scalable solutions, operational transparency, and consistent results—today and into the future.
            </p>
          </div>
        </section>

        <section ref={valuesRef} id="values" className={styles.valuesSection}>
          <div className={styles.valuesContainer}>
            <div className={styles.valuesHeader}>
              <span className={styles.valuesOverline}>Our Culture</span>
              <h2 className={styles.valuesTitle}>Our Core Values</h2>
            </div>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <span className={styles.valueNum}>01</span>
                <h3 className={styles.valueCardTitle}>Safety</h3>
                <p className={styles.valueCardDesc}>Protecting the health and well-being of our employees, customers, and community.</p>
              </div>
              <div className={styles.valueCard}>
                <span className={styles.valueNum}>02</span>
                <h3 className={styles.valueCardTitle}>Teamwork</h3>
                <p className={styles.valueCardDesc}>We are a “team of teams” always communicating and working together.</p>
              </div>
              <div className={styles.valueCard}>
                <span className={styles.valueNum}>03</span>
                <h3 className={styles.valueCardTitle}>Trust</h3>
                <p className={styles.valueCardDesc}>We are honest, dependable, and trustworthy.</p>
              </div>
              <div className={styles.valueCard}>
                <span className={styles.valueNum}>04</span>
                <h3 className={styles.valueCardTitle}>Performance-Based</h3>
                <p className={styles.valueCardDesc}>Our employees meet the highest standards; we promote and reward top performers.</p>
              </div>
              <div className={styles.valueCard}>
                <span className={styles.valueNum}>05</span>
                <h3 className={styles.valueCardTitle}>Determination</h3>
                <p className={styles.valueCardDesc}>We work until the job is done right.</p>
              </div>
              <div className={styles.valueCard}>
                <span className={styles.valueNum}>06</span>
                <h3 className={styles.valueCardTitle}>Responsibility</h3>
                <p className={styles.valueCardDesc}>We admit and correct mistakes while learning from them to do better next time.</p>
              </div>
              <div className={styles.valueCard}>
                <span className={styles.valueNum}>07</span>
                <h3 className={styles.valueCardTitle}>Value</h3>
                <p className={styles.valueCardDesc}>We deliver reliable and cutting-edge technology and solutions that best fit our customer’s needs.</p>
              </div>
              <div className={styles.valueCard}>
                <span className={styles.valueNum}>08</span>
                <h3 className={styles.valueCardTitle}>Innovation</h3>
                <p className={styles.valueCardDesc}>Our employees are encouraged to create new ways to solve hard problems.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
