"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ITEMS = [
  { id: 1, title: "Wellness Exams", bg: "linear-gradient(135deg,#0f6f86,#073b4a)" },
  { id: 2, title: "Dental Care", bg: "linear-gradient(135deg,#8a6a3d,#3d2d17)" },
  { id: 3, title: "Soft-Tissue Surgery", bg: "linear-gradient(135deg,#3f7a6b,#143a31)" },
  { id: 4, title: "Emergency Walk-Ins", bg: "linear-gradient(135deg,#9a5b6f,#45202a)" },
  { id: 5, title: "Ultrasound Imaging", bg: "linear-gradient(135deg,#5b6f9a,#1f2a45)" },
  { id: 6, title: "Vaccinations", bg: "linear-gradient(135deg,#2f8f9d,#0d3f47)" },
  { id: 7, title: "Senior Pet Care", bg: "linear-gradient(135deg,#a07b4f,#4a3720)" },
  { id: 8, title: "Puppy & Kitten Care", bg: "linear-gradient(135deg,#6b8f4f,#26391a)" },
];

const R = ITEMS.length;
const C = (2 * Math.PI) / R;

function CenterPlayer({ item, onOpen }) {
  const ringRef = useRef(null);
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      className="ev-center-player-wrapper"
      onClick={() => onOpen(item)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={(e) => {
        if (!ringRef.current) return;
        const r = ringRef.current.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
    >
      <div ref={ringRef} className="ev-center-video-ring">
        <div
          key={item.id}
          className="ev-center-poster-img"
          style={{ background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "1.1rem", textAlign: "center", padding: "0 2rem", animation: "ev-fade-in .35s forwards" }}
        >
          {item.title}
        </div>
        <div
          className={`ev-center-play-badge ${hover ? "visible" : ""}`}
          style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${hover ? 1 : 0.4})` }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="6 4 20 12 6 20 6 4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Showcase() {
  const [mounted, setMounted] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [gridOpen, setGridOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [active, setActive] = useState(0);

  const sectionRef = useRef(null);
  const ringRef = useRef(null);
  const nodesRef = useRef([]);
  const activeRef = useRef(0);
  const offsetRef = useRef(0); // current rotation offset (radians)
  const draggingRef = useRef(false);
  const startYRef = useRef(0);
  const startOffsetRef = useRef(0);

  useEffect(() => setMounted(true), []);

  const lock = lightbox || gridOpen;
  useEffect(() => {
    document.body.style.overflow = lock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lock]);

  const layout = useCallback((offset) => {
    if (!ringRef.current) return;
    if (!nodesRef.current.length) {
      nodesRef.current = Array.from(ringRef.current.querySelectorAll(".ev-orbit-node"));
    }
    const nodes = nodesRef.current;
    const w = window.innerWidth;
    const radius = w <= 768 ? 150 : w <= 1024 ? 220 : 270;
    let best = 0;
    let bestDist = Infinity;
    nodes.forEach((node, i) => {
      const a = -Math.PI / 2 + i * C + offset;
      const x = radius * Math.cos(a);
      const y = radius * Math.sin(a);
      const d = Math.abs(Math.atan2(Math.sin(a + Math.PI / 2), Math.cos(a + Math.PI / 2)));
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
      node.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0)`;
      node.classList.toggle("ev-node-active-top", d < 0.22);
    });
    if (best !== activeRef.current) {
      activeRef.current = best;
      setActive(best);
    }
  }, []);

  // pinned scroll -> rotate the orbit
  useEffect(() => {
    if (!mounted) return;
    gsap.registerPlugin(ScrollTrigger);
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=320%",
      pin: true,
      scrub: 0.6,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        offsetRef.current = self.progress * -(R - 1) * C;
        layout(offsetRef.current);
      },
    });
    layout(0);
    const onResize = () => layout(offsetRef.current);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      st.kill();
    };
  }, [mounted, layout]);

  const rotateTo = useCallback((target, duration = 0.6) => {
    const proxy = { v: offsetRef.current };
    gsap.killTweensOf(proxy);
    gsap.to(proxy, {
      v: target,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        offsetRef.current = proxy.v;
        layout(proxy.v);
      },
    });
  }, [layout]);

  const goTo = (i) => {
    const cur = offsetRef.current;
    const target = -i * C;
    const turns = Math.round((cur - target) / (2 * Math.PI));
    rotateTo(target + 2 * turns * Math.PI, 0.7);
  };

  // vertical drag rotates the ring
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const down = (e) => {
      if (lock || e.target.closest("button")) return;
      draggingRef.current = true;
      startYRef.current = e.clientY || 0;
      startOffsetRef.current = offsetRef.current;
    };
    const move = (e) => {
      if (lock || !draggingRef.current) return;
      const delta = (((e.clientY || 0) - startYRef.current) / 300) * C;
      offsetRef.current = startOffsetRef.current + delta;
      layout(offsetRef.current);
    };
    const up = () => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      rotateTo(Math.round(offsetRef.current / C) * C, 0.45);
    };
    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [lock, layout, rotateTo]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setLightbox(null);
      setGridOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeGrid = () => {
    setClosing(true);
    setTimeout(() => {
      setGridOpen(false);
      setClosing(false);
    }, 320);
  };

  const current = ITEMS[active];
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section ref={sectionRef} className="evercraft-showcase-section ev-theme">
      <div className="ev-bg-grid" />
      <div className="evercraft-showcase-main-layout">
        <div className="ev-showcase-left-info">
          <div className="ev-counter-tag">
            <span className="ev-count-current">{pad(active + 1)}</span>
            <span className="ev-count-divider">/</span>
            <span className="ev-count-total">{pad(R)}</span>
          </div>
          <div className="ev-showcase-text-block">
            <h2 className="ev-title-primary">
              <span className="ev-title-line-1">Our Hospital</span>
              <span className="ev-highlight-amber ev-title-line-2">Showcase</span>
            </h2>
          </div>
        </div>

        <div className="ev-orbital-stage">
          <div className="ev-orbital-track-line" />
          <CenterPlayer item={current} onOpen={setLightbox} />
          <div ref={ringRef} className="ev-orbital-ring-container">
            {ITEMS.map((item, i) => (
              <div
                key={item.id}
                className={`ev-orbit-node ${active === i ? "ev-node-active-top" : ""}`}
                onClick={() => goTo(i)}
                title={item.title}
              >
                <div className="ev-orbit-node-inner">
                  <div
                    className="ev-orbit-thumb-img"
                    style={{ background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700 }}
                  >
                    {pad(i + 1)}
                  </div>
                  <div className="ev-orb-glare" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ev-showcase-right-bar">
          <div className="ev-scroll-indicator">
            <span className="ev-scroll-label">SCROLL TO EXPLORE</span>
            <div className="ev-scroll-track">
              <div className="ev-scroll-pip" style={{ top: `${(active / (R - 1)) * 100}%` }} />
            </div>
            <span className="ev-scroll-number">{pad(active + 1)}</span>
          </div>
        </div>

        <div className="ev-bottom-right-action">
          <button
            type="button"
            className="ev-view-all-projects-btn"
            onClick={(e) => {
              e.stopPropagation();
              setGridOpen(true);
            }}
          >
            <span>VIEW ALL SERVICES</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>

      {mounted && gridOpen &&
        createPortal(
          <div className={`ev-pg-modal-root ev-theme ${closing ? "closing" : "active"}`}>
            <div className="ev-pg-backdrop" onClick={closeGrid} />
            <div className="ev-pg-container">
              <button className="ev-pg-close-btn" onClick={closeGrid} aria-label="Close modal">✕ Close</button>
              <div className="ev-pg-modal-inner">
                <div className="ev-pg-header">
                  <span className="ev-pg-kicker">SERVICE ARCHIVE</span>
                  <h3 className="ev-pg-title">All Showcase Services</h3>
                </div>
                <div className="ev-pg-grid">
                  {ITEMS.map((item, i) => (
                    <div
                      key={item.id}
                      className={`ev-pg-card ${active === i ? "active" : ""}`}
                      onClick={() => {
                        goTo(i);
                        closeGrid();
                        setLightbox(item);
                      }}
                    >
                      <div className="ev-pg-card-thumb">
                        <div className="ev-pg-thumb-img" style={{ background: item.bg }} />
                        <div className="ev-pg-play-badge">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="6 4 20 12 6 20 6 4" />
                          </svg>
                        </div>
                      </div>
                      <div className="ev-pg-card-info">
                        <h4 className="ev-pg-name">{item.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

      {mounted && lightbox &&
        createPortal(
          <div className="ev-lightbox-wrapper ev-theme">
            <div className="ev-lightbox-backdrop" onClick={() => setLightbox(null)} />
            <div className="ev-lightbox-content-box">
              <div className="ev-lightbox-top-bar">
                <button className="ev-lightbox-close-btn" onClick={() => setLightbox(null)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  Close
                </button>
              </div>
              <div
                className="ev-lightbox-container"
                style={{ background: lightbox.bg, color: "#fff", fontSize: "2rem", fontWeight: 700 }}
              >
                {lightbox.title}
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
