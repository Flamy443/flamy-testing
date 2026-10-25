"use client";

import { useEffect, useState } from "react";

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => setOpen((v) => !v);

  return (
    <>
      <nav className={`navbar ${scrolled ? "shadow" : ""}`}>
        <div className="header-container">
          <div className="logo-area">
            <a href="#" className="logo-link logo-text">
              SAMPLE ANIMAL HOSPITAL
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
            <button className="hamburger-btn" onClick={toggle} aria-label="Open menu">
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu-overlay ${open ? "open" : ""}`}>
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
