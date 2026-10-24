"use client";

import React, { useState } from "react";
import gsap from "gsap";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Sales — Edge AI deployments",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        projectType: "Sales — Edge AI deployments",
        message: ""
      });
    }, 3000);
  };

  const containerRef = React.useRef(null);
  const titleText = "Let's Build the Future of AI Infrastructure Together";

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
    <section ref={containerRef} className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.splitLayout}>

          <div className={styles.infoCol}>
            <span className={styles.overline}>CONTACT US</span>
            <div className={styles.titleWrapper}>
              <h2 className={styles.finaltitle}>{titleText}</h2>
            </div>
            <p className={styles.description}>
              Whether you're planning new AI deployments, expanding regional capacity, or looking for trusted infrastructure expertise, our team is ready to help.
            </p>
            <p className={styles.description}>
              Speak with our experts to discuss your project requirements and discover how Duos Edge AI can support your next deployment.
            </p>
          </div>

          <div className={styles.ctaCol}>

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
                  <a href="tel:9047308000" className={styles.contactLink}>
                    📞 (904) 730-8000
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
                  <a href="tel:9047308000" className={styles.contactLink}>
                    📞 (904) 730-8000
                  </a>
                  <a href="mailto:solutions@duostech.com" className={styles.contactLink}>
                    ✉️ solutions@duostech.com
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.formContainer}>
              <h4 className={styles.formHeading}>Get in touch</h4>
              {submitted ? (
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
                    <option value="Edge Data Centers">Edge Data Centers</option>
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
      </div>
    </section>
  );
}
