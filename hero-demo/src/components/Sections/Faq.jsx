"use client";

import { useState } from "react";

const FAQS = [
  { question: "How much does a vet visit cost?", answer: "The cost of a veterinary visit depends on your pet's condition and the services required. Contact us for an estimate based on your pet's needs." },
  { question: "How much does microchipping cost?", answer: "Microchipping is a safe and permanent way to identify your pet. Contact us for current pricing and appointment availability." },
  { question: "Do you offer affordable spay and neuter services?", answer: "Yes. We provide professional spay and neuter procedures as part of our preventive veterinary care." },
  { question: "Do you provide affordable pet surgery?", answer: "Yes. Our experienced veterinary team performs a wide range of pet surgeries with compassionate care and transparent treatment planning." },
];

function Item({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <h3>{question}</h3>
        <span className="faq-icon" style={{ transition: "transform .3s", transform: open ? "rotate(45deg)" : "none" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      {open && (
        <div className="faq-answer-wrapper">
          <p className="faq-answer">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <span className="faq-subtitle">Common Queries</span>
          <h2>Frequently Asked Questions</h2>
          <p className="text-body">Everything you need to know about our services and pet care.</p>
        </div>
        <div className="faq-list">
          {FAQS.map((f) => (
            <Item key={f.question} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
