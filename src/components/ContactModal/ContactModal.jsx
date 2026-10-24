"use client";

import React, { useState, useEffect } from "react";
import styles from "./ContactModal.module.css";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Sales — Edge AI deployments",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSubmitted(false);
    };
    window.addEventListener("open-contact-modal", handleOpen);
    return () => window.removeEventListener("open-contact-modal", handleOpen);
  }, []);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setFormData({ name: "", email: "", projectType: "Sales — Edge AI deployments", message: "" });
    }, 2000);
  };

  return (
    <div className={styles.overlay} onClick={() => setIsOpen(false)}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>

        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>✕</button>

        <h2 className={styles.title}>Contact Duos</h2>
        <p className={styles.subtitle}>Get in touch with our operating divisions or send us a message below.</p>

        <div className={styles.entityGrid}>

          <div className={styles.entityCard}>
            <div className={styles.entityHeader}>
              <div className={styles.iconWrapperEdge}>
                <img src="/hero-logo/edgeai.png" alt="Duos Edge AI Logo" className={styles.entityLogo} />
              </div>
              <h3 className={styles.entityName}>Duos Edge AI</h3>
            </div>
            <p className={styles.entityDesc}>Modular edge data centers and AI compute capacity.</p>
            <div className={styles.contactDetails}>
              <a href="tel:8005551010" className={styles.contactLink}>
                📞 (800) 555-1010
              </a>
              <a href="mailto:edgeai@duostech.com" className={styles.contactLink}>
                ✉️ edgeai@duostech.com
              </a>
            </div>
          </div>

          <div className={styles.entityCard}>
            <div className={styles.entityHeader}>
              <div className={styles.iconWrapperTech}>
                <img src="/hero-logo/duostechsolution.png" alt="Duos Technology Solutions Logo" className={styles.entityLogo} />
              </div>
              <h3 className={styles.entityName}>Duos Technology Solutions</h3>
            </div>
            <p className={styles.entityDesc}>Infrastructure engineering, integration, and support services.</p>
            <div className={styles.contactDetails}>
              <a href="tel:8005552020" className={styles.contactLink}>
                📞 (800) 555-2020
              </a>
              <a href="mailto:solutions@duostech.com" className={styles.contactLink}>
                ✉️ solutions@duostech.com
              </a>
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <h4 className={styles.formHeading}>Get in touch</h4>
          {isSubmitted ? (
            <div className={styles.successMessage}>
              ✓ Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="Sales — Edge AI deployments">Sales — Edge AI deployments</option>
                <option value="Colocation Services">Colocation Services</option>
                <option value="Technology Solutions">Technology Solutions</option>
                <option value="Strategic Partnerships">Strategic Partnerships</option>
                <option value="Other">Other</option>
              </select>

              <textarea
                name="message"
                required
                rows="3"
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
              />

              <button type="submit" className={styles.submitBtn}>
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
