"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./TechnologySolutions.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function TechnologySolutions() {
  const containerRef = useRef(null);

  const titleText = "Duos Tech Does Distribution Better.";

  useEffect(() => {
    let ctx;
    if (typeof window !== "undefined") {
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
          `.${styles.servicePanel}`,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 95%"
            }
          }
        );

        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 500);
      }, containerRef);
    }
    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.section} id="technology-solutions">
      <div className={styles.container}>
        <div className={`${styles.layoutGrid} ${styles.scrollWrapper}`}>

          <div className={styles.introPanel}>
            <div className={styles.introHeader}>
              <span className={styles.overline}>Technology Solutions</span>
              <div className={styles.titleWrapper}>
                <h2 className={styles.title}>{titleText}</h2>
              </div>
            </div>
            <div className={styles.introBody}>
              <div className={styles.introImageWrapper}>
                <img src="/edge-ai/pod.jpeg" alt="Duos Sourcing and Engineering Solutions" className={styles.introImage} />
              </div>
              <p className={styles.description}>
                Duos Tech does distribution better. We deliver manufacturer-agnostic sourcing solutions for data center, networking, power cooling and infrastructure projects. We simplify procurement with technical expertise, strategic vendor partnerships, and responsive customer support.
              </p>
              <Link href="#contact" className={styles.ctaBtn}>
                Connect
              </Link>
            </div>
          </div>

          <div className={styles.servicePanel}>
            <div className={styles.imageColumn}>
              <img src="/why-duos/pod2.png" alt="Our Solutions" className={styles.serviceImage} />
            </div>
            <div className={styles.textColumn}>
              <h3 className={styles.serviceTitle}>Our Solutions</h3>
              <ul className={styles.solutionsList} style={{ gap: "1.5rem" }}>
                <li className={styles.solutionItem}>
                  <div className={styles.solutionItemHeader}>
                    <span className={styles.bulletDot}></span>
                    <span className={styles.solutionItemTitle}>Strategic IT Sourcing</span>
                  </div>
                </li>
                <li className={styles.solutionItem}>
                  <div className={styles.solutionItemHeader}>
                    <span className={styles.bulletDot}></span>
                    <span className={styles.solutionItemTitle}>White Space Infrastructure</span>
                  </div>
                </li>
                <li className={styles.solutionItem}>
                  <div className={styles.solutionItemHeader}>
                    <span className={styles.bulletDot}></span>
                    <span className={styles.solutionItemTitle}>Structured Cabling</span>
                  </div>
                </li>
                <li className={styles.solutionItem}>
                  <div className={styles.solutionItemHeader}>
                    <span className={styles.bulletDot}></span>
                    <span className={styles.solutionItemTitle}>Power & Cooling Solutions</span>
                  </div>
                </li>
                <li className={styles.solutionItem}>
                  <div className={styles.solutionItemHeader}>
                    <span className={styles.bulletDot}></span>
                    <span className={styles.solutionItemTitle}>Logistics & Kitting</span>
                  </div>
                </li>
                <li className={styles.solutionItem}>
                  <div className={styles.solutionItemHeader}>
                    <span className={styles.bulletDot}></span>
                    <span className={styles.solutionItemTitle}>Dedicated Customer Support</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
