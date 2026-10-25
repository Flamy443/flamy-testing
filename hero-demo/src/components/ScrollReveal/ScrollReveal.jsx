"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WORDS = [
  { text: "CARING" },
  { text: "FOR" },
  { text: "EVERY" },
  { text: "PET" },
  { text: "WITH" },
  { text: "LOVE", isBrand: true },
  { text: "AND" },
  { text: "CARE." },
];
const FLIPS = ["flip-cw", "flip-ccw", "flip-x", "flip-x-ccw"];
const ROWS = [
  { cls: "rv-row-left", words: WORDS.slice(0, 2), offset: 0 },
  { cls: "rv-row-right", words: WORDS.slice(2, 5), offset: 2 },
  { cls: "rv-row-left-2", words: WORDS.slice(5, 8), offset: 5 },
];

export default function ScrollReveal() {
  const sectionRef = useRef(null);
  const wrapRef = useRef(null);
  const textGroupRef = useRef(null);
  const indicatorRef = useRef(null);
  const underlayRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [bannerShown, setBannerShown] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=380%",
          scrub: 1.2,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          refreshPriority: 10,
        },
      });

      if (indicatorRef.current) tl.to(indicatorRef.current, { opacity: 0, y: -30, duration: 0.2 }, 0);
      tl.to(textGroupRef.current, {
        scale: isMobile ? 18 : 28,
        transformOrigin: "center center",
        ease: "power3.inOut",
        duration: 1,
      }, 0);
      tl.to(wrapRef.current, { opacity: 0, ease: "power2.inOut", duration: 0.6 }, 0.4);
      tl.add(() => setBannerShown(true), 0.65);
      tl.to(underlayRef.current, { pointerEvents: "auto", duration: 0.1 }, 0.9);

      const words = gsap.utils.toArray(".rv-word");
      let end = 1;
      words.forEach((word, wi) => {
        const chars = word.querySelectorAll(".rv-char-wrapper");
        const base = 1 + 0.04 * wi;
        chars.forEach((c, ci) => {
          let to = {};
          if (c.classList.contains("flip-cw")) to = { rotateY: 180 };
          else if (c.classList.contains("flip-ccw")) to = { rotateY: -180 };
          else if (c.classList.contains("flip-x")) to = { rotateX: 180 };
          else if (c.classList.contains("flip-x-ccw")) to = { rotateX: -180 };
          const at = base + 0.005 * ci;
          tl.to(c, { ...to, duration: 0.15, ease: "power1.out" }, at);
          const back = c.querySelector(".rv-char-back");
          if (back) {
            tl.to(back, { color: "var(--rv-accent)", duration: 0.04 }, at);
            if (word.dataset.word !== "LOVE") {
              tl.to(back, { color: "var(--rv-charcoal)", duration: 0.1, ease: "power1.out" }, at + 0.1);
            }
          }
        });
        end = base + 0.005 * chars.length;
      });

      const sub = document.querySelector(".rv-subheading");
      if (sub) {
        tl.fromTo(
          sub,
          { opacity: 0, y: 20, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5, ease: "power2.out" },
          end + 0.15
        );
      }
      const lefts = document.querySelectorAll(".rv-row-left, .rv-row-left-2");
      const right = document.querySelector(".rv-row-right");
      if (lefts.length) tl.to(lefts, { x: -10, ease: "none" }, end + 0.15);
      if (right) tl.to(right, { x: 10, ease: "none" }, end + 0.15);
    }, sectionRef);

    const t = setTimeout(() => ScrollTrigger.refresh(), 150);
    return () => {
      clearTimeout(t);
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [mounted, isMobile]);

  return (
    <section className="rv-hero" ref={sectionRef} aria-label="Scroll reveal hero">
      <div className="rv-underlay" ref={underlayRef}>
        <section className="rv-banner" aria-label="Brand Banner">
          <h2 className="rv-heading">
            {ROWS.map((row) => (
              <div className={`rv-heading-row ${row.cls}`} key={row.cls}>
                {row.words.map((w, wi) => {
                  const flip = FLIPS[(wi + row.offset) % FLIPS.length];
                  return (
                    <span
                      className="rv-word"
                      data-word={w.text}
                      key={w.text}
                      style={{
                        display: "inline-flex",
                        marginRight: "0.28em",
                        fontFamily: w.isBrand ? "Times New Roman, Times, serif" : "inherit",
                        fontStyle: w.isBrand ? "italic" : "inherit",
                      }}
                    >
                      {w.text.split("").map((ch, ci) => (
                        <span
                          className={`rv-char-wrapper ${flip}`}
                          key={ci}
                          style={{ color: w.isBrand ? "var(--rv-accent)" : "inherit" }}
                        >
                          <span className="rv-char rv-char-front">{ch}</span>
                          <span className="rv-char rv-char-back">{ch}</span>
                        </span>
                      ))}
                    </span>
                  );
                })}
              </div>
            ))}
          </h2>
          <p className="rv-subheading" style={{ opacity: bannerShown ? undefined : 0 }}>
            Gentle, expert veterinary care that connects your family with the pets they love,
            at every stage of life.
          </p>
        </section>
      </div>

      <div className="rv-interactive" ref={wrapRef}>
        <div className="rv-video" />
        <svg className="rv-svg-overlay" width="100%" height="100%">
          <defs>
            <mask id="rv-reveal-mask" maskUnits="userSpaceOnUse">
              <rect width="100%" height="100%" fill="white" />
              <g ref={textGroupRef} fill="black" className="rv-svg-text-group">
                <text x="50%" y={isMobile ? "43%" : "40%"} textAnchor="middle" dominantBaseline="middle" className="rv-svg-text">
                  HAPPY
                </text>
                <text x="50%" y={isMobile ? "55%" : "67%"} textAnchor="middle" dominantBaseline="middle" className="rv-svg-text">
                  PETS
                </text>
              </g>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="var(--rv-cream)" mask="url(#rv-reveal-mask)" />
        </svg>
        <div className="rv-scroll-indicator" ref={indicatorRef}>
          <span>scroll</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </div>
    </section>
  );
}
