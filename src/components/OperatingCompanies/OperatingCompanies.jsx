"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./OperatingCompanies.module.css";

export default function OperatingCompanies() {
  const containerRef = useRef(null);
  const titleText = "Who We Are";

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
      }, containerRef);
    }
    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.section} id="duos-businesses">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>{titleText}</h2>
          </div>
        </div>

        <div className={styles.grid}>

          <div className={styles.cardParent}>
            <div className={styles.cardHeader}>
              <h3 className={styles.parentTitle}>Duos Technologies Group, Inc.</h3>
              <span className={styles.tickerPill}>NASDAQ: DUOT</span>
            </div>
            <p className={styles.parentDescription}>
              Duos Technologies Group, Inc. (NASDAQ: DUOT), is a cutting edge company focused on providing and managing modular data center colocation facilities and infrastructure solutions. Through its wholly owned subsidiaries Duos Edge AI, Inc., and Duos Technology Solutions, Inc., the Company delivers high function computing infrastructure at the “Edge” designed to support high power computing facilities suitable for AI and Enterprise Computing.
            </p>
          </div>

          <div className={styles.bottomRow}>

            <div
              className={`${styles.opCard} ${styles.cardEdge}`}
              onClick={() => {
                document.getElementById("why-duos")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.opTitle}>Duos Edge AI</h3>
                <div className={styles.arrowCircle}>
                  <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className={styles.opDescription}>
                Develops, deploys, and operates modular AI-ready edge data centers that support demanding AI workloads, regional connectivity, and low-latency compute.
              </p>
              <span style={{ display: "block", fontSize: "0.8rem", opacity: 0.65, marginTop: "0.8rem", fontStyle: "italic" }}>
                A wholly owned subsidiary of Duos Technologies Group, Inc.
              </span>
            </div>

            <div
              className={`${styles.opCard} ${styles.cardTech}`}
              onClick={() => {
                document.getElementById("technology-solutions")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.opTitle}>Duos Technology Solutions</h3>
                <div className={styles.arrowCircle}>
                  <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className={styles.opDescription}>
                Provides and integrates the complex technology systems inside each edge deployment, including compute, storage, networking, racks, cooling, and monitoring systems.
              </p>
              <span style={{ display: "block", fontSize: "0.8rem", opacity: 0.65, marginTop: "0.8rem", fontStyle: "italic" }}>
                A wholly owned subsidiary of Duos Technologies Group, Inc.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
