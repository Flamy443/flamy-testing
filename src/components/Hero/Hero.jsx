"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const bgRef = useRef(null);
  const containerRef = useRef(null);

  const textLine1 = "Fast AI Infrastructure.";
  const textLine2 = "Built For the Edge.";

  const [typedLine1, setTypedLine1] = useState("");
  const [typedLine2, setTypedLine2] = useState("");
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [showSubText, setShowSubText] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const checkPreloader = () => {
      const isDone = document.documentElement.classList.contains("preloader-done");
      if (isDone) {
        setIsInView(true);
      } else {
        const observer = new MutationObserver(() => {
          if (document.documentElement.classList.contains("preloader-done")) {
            setIsInView(true);
            observer.disconnect();
          }
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
      }
    };

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          checkPreloader();
        } else {
          setIsInView(false);

          setTypedLine1("");
          setTypedLine2("");
          setShowSubText(false);
          setShowCursor1(true);
          setShowCursor2(false);
        }
      },
      { threshold: 0.1 }
    );

    const containerEl = containerRef.current;
    if (containerEl) {
      intersectionObserver.observe(containerEl);
    }

    return () => {
      if (containerEl) {
        intersectionObserver.unobserve(containerEl);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let isCancelled = false;

    const runAnimation = async () => {

      setShowCursor1(true);
      setShowCursor2(false);
      for (let i = 0; i <= textLine1.length; i++) {
        if (isCancelled) return;
        setTypedLine1(textLine1.substring(0, i));
        await new Promise((r) => setTimeout(r, 60));
      }
      setShowCursor1(false);
      setShowCursor2(true);

      for (let i = 0; i <= textLine2.length; i++) {
        if (isCancelled) return;
        setTypedLine2(textLine2.substring(0, i));
        await new Promise((r) => setTimeout(r, 60));
      }

      if (isCancelled) return;
      setShowSubText(true);

      await new Promise((r) => setTimeout(r, 5000));
      if (isCancelled) return;

      setShowSubText(false);
      await new Promise((r) => setTimeout(r, 400));

      setShowCursor2(true);
      for (let i = textLine2.length; i >= 0; i--) {
        if (isCancelled) return;
        setTypedLine2(textLine2.substring(0, i));
        await new Promise((r) => setTimeout(r, 30));
      }
      setShowCursor2(false);
      setShowCursor1(true);

      for (let i = textLine1.length; i >= 0; i--) {
        if (isCancelled) return;
        setTypedLine1(textLine1.substring(0, i));
        await new Promise((r) => setTimeout(r, 30));
      }
      setShowCursor1(false);
    };

    runAnimation();

    return () => {
      isCancelled = true;
    };
  }, [isInView]);

  return (
    <section ref={containerRef} className={styles.heroSection}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.heroVideoBg}
        ref={bgRef}
      >
        <source src="/video/hero-vid.mp4" type="video/mp4" />
      </video>
      <div className={styles.bgOverlay}></div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={`${styles.line} ${styles.lineLight}`}>
            {typedLine1}
            {showCursor1 && <span className={styles.cursor}>|</span>}
          </span>
          <span className={`${styles.line} ${styles.lineBold}`}>
            {typedLine2}
            {showCursor2 && <span className={styles.cursor}>|</span>}
          </span>
        </h1>
      </div>
    </section>
  );
}
