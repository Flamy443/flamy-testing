"use client";

import React, { useState } from "react";
import gsap from "gsap";
import styles from "./Testimonials.module.css";
import TiltedMarquee from "./TiltedMarquee";
export default function Testimonials() {
  const testimonials = [
    {
      quote: "Their ability to deliver immediate access to power combined with an industry-leading deployment speed makes them a standout in the market.",
      author: "Aaron Ginn",
      company: "Hydra Host, CEO & Co-Founder"
    },
    {
      quote: "We continually seek partners who are on the cutting edge of technology. With this partnership with Duos Edge AI, we hope to create even more opportunities for our schools, communities, and local businesses.",
      author: "Kevin Hill",
      company: "Region 14 Education Service Center, Director of Technology Services"
    },
    {
      quote: "We view this as the first of what we expect will be multiple deployments with Duos and plan to replicate this model at additional locations.",
      author: "Jay Sivam",
      company: "Nistar, Chief Executive Officer"
    }
  ];

  const [mobileScrollIndex, setMobileScrollIndex] = useState(0);
  const mobileTrackRef = React.useRef(null);
  const itemWidth = 320;

  const handleMobilePrev = () => {
    const newIdx = Math.max(mobileScrollIndex - 1, 0);
    setMobileScrollIndex(newIdx);
    if (mobileTrackRef.current) {
      mobileTrackRef.current.style.transform = `translateX(-${newIdx * itemWidth}px)`;
    }
  };

  const handleMobileNext = () => {
    const newIdx = Math.min(mobileScrollIndex + 1, testimonials.length - 1);
    setMobileScrollIndex(newIdx);
    if (mobileTrackRef.current) {
      mobileTrackRef.current.style.transform = `translateX(-${newIdx * itemWidth}px)`;
    }
  };

  const containerRef = React.useRef(null);
  const titleText = "Loved by our Partners";

  React.useEffect(() => {
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
    <section ref={containerRef} className={styles.section} id="partners">
      <div className={styles.testimonialContainer}>
        <div className={styles.header}>
          <span className={styles.overline}>Partners</span>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>{titleText}</h2>
          </div>
          <p className={styles.description}>
            Building next-generation edge computing infrastructure requires trusted collaboration. Here is what our clients and partners say about working with Duos.
          </p>
        </div>

        <div className={styles.mobileCarouselContainer}>
          <div className={styles.mobileCarousel}>
            <div ref={mobileTrackRef} className={styles.carouselTrack}>
              {testimonials.map((item, idx) => (
                <div key={idx} className={styles.mobileQuoteCard}>
                  <div className={styles.quoteIcon}>“</div>
                  <p className={styles.quoteText}>{item.quote}</p>
                  <div className={styles.quoteAuthor}>
                    <span className={styles.authorName}>{item.author}</span>
                    <span className={styles.authorCompany}>{item.company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.carouselNavButtons}>
            <button
              onClick={handleMobilePrev}
              className={styles.carouselNavBtn}
              disabled={mobileScrollIndex === 0}
              aria-label="Previous quote"
            >
              &larr;
            </button>
            <button
              onClick={handleMobileNext}
              className={styles.carouselNavBtn}
              disabled={mobileScrollIndex === testimonials.length - 1}
              aria-label="Next quote"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>

      <TiltedMarquee />
    </section>
  );
}
