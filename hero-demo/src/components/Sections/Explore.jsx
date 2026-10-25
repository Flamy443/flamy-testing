"use client";

import { useState } from "react";

const TABS = [
  { id: "facilities", label: "Modern Facilities", bg: "linear-gradient(135deg,#0f6f86,#073b4a)" },
  { id: "team", label: "Expert Team", bg: "linear-gradient(135deg,#8a6a3d,#3d2d17)" },
  { id: "surgery", label: "Surgical Services", bg: "linear-gradient(135deg,#3f7a6b,#143a31)" },
];
const SIDE = [
  { bg: "linear-gradient(135deg,#5b6f9a,#1f2a45)", tag: "More options" },
  { bg: "linear-gradient(135deg,#9a5b6f,#45202a)" },
];

export default function Explore() {
  const [active, setActive] = useState("facilities");
  const tab = TABS.find((t) => t.id === active);

  return (
    <section className="infra-section" id="services">
      <div className="container">
        <div className="infra-header">
          <h2 className="features-title" style={{ marginBottom: 0 }}>Explore Our Veterinary Services</h2>
        </div>
        <div className="infra-tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`tab-btn ${active === t.id ? "active" : ""}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="infra-grid">
          <div className="main-image-wrapper" style={{ background: tab.bg, cursor: "pointer" }}>
            <div className="feature-overlay">
              <span className="overlay-text">Explore {tab.label}</span>
            </div>
          </div>
          <div className="side-images-col">
            {SIDE.map((s, i) => (
              <a href="#" className="side-image-wrapper" style={{ background: s.bg }} key={i}>
                {s.tag && <div className="feature-tag">{s.tag}</div>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
