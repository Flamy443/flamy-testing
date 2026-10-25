"use client";

import { useEffect, useRef, useState } from "react";

const SERVICES = [
  "Wellness Exam",
  "Vaccination & Preventive Care",
  "Surgery",
  "Ultrasounds & Endoscopy",
  "Technician Appointments",
  "Emergency Walk-Ins",
  "Dental Care",
  "Senior Pet Care",
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  // one passive, rAF-throttled scroll listener: shadow state + hide on scroll down / show on scroll up
  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      setScrolled((v) => (v === y > 50 ? v : y > 50));
      const goingDown = y > lastY.current && y > 200;
      setHidden((v) => (v === goingDown ? v : goingDown));
      lastY.current = y;
      ticking.current = false;
    };
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock page scroll while the mobile menu is open; close on Escape or when resized to desktop
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1224 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const toggle = () => setOpen((v) => !v);

  return (
    <>
      <nav className={`navbar ${scrolled ? "shadow" : ""} ${hidden && !open ? "nav-hidden" : ""}`}>
        <div className="header-container">
          <div className="logo-area">
            <a href="#" className="logo-link" aria-label="Flamy home">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/flamy-logo.png`}
                alt="Flamy"
                className="header-logo-img flamy-logo"
              />
            </a>
          </div>
          <div className="middle-area">
            <div className="desktop-nav-pill">
              <a href="#about" className="nav-link">ABOUT</a>
              <div className="nav-item-dropdown">
                <a href="#services" className="nav-link">SERVICES</a>
                <div className="dropdown-menu">
                  <a href="#services" className="dropdown-link" style={{ fontWeight: "bold" }}>
                    All Services <span>→</span>
                  </a>
                  <div className="dropdown-divider" />
                  {SERVICES.map((s) => (
                    <a
                      key={s}
                      href="#services"
                      className={s === "Surgery" ? "dropdown-link-surgery" : "dropdown-link"}
                    >
                      {s} <span>→</span>
                    </a>
                  ))}
                </div>
              </div>
              <a href="#surgery" className="nav-link">SURGERY</a>
              <a href="#blog" className="nav-link">BLOG</a>
              <a href="#contact-footer" className="nav-link">CONTACT</a>
            </div>
          </div>
          <div className="cta-area">
            <a href="tel:5550000000" className="header-phone-link">Call (555) 000-0000</a>
            <a href="#contact-footer" className="cta-link">REQUEST A VISIT</a>
          </div>
          <div className="mobile-controls">
            <button className="hamburger-btn" onClick={toggle} aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu">
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
        </div>
      </nav>

      <div id="mobile-menu" aria-hidden={!open} className={`mobile-menu-overlay ${open ? "open" : ""}`}>
        <div className="mobile-header">
          <span className="mobile-menu-title">MENU</span>
          <button className="close-btn" onClick={toggle} aria-label="Close menu">✕</button>
        </div>
        <div className="mobile-links">
          {[
            ["01", "Home", "#"],
            ["02", "About", "#about"],
            ["03", "Services", "#services"],
            ["04", "Blog", "#blog"],
            ["05", "Contact", "#contact-footer"],
          ].map(([n, label, href]) => (
            <div className="mobile-link-item" key={n}>
              <span className="mobile-link-number">{n}</span>
              <a href={href} className="mobile-link" onClick={toggle}>{label}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
