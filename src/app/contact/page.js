"use client";

import styles from "./contact.module.css";
import FinalCTA from "@/components/FinalCTA/FinalCTA";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.bannerContainer}>
        <img src="/why-duos/2.PNG" alt="Contact Duos" className={styles.bannerImage} />
        <div className={styles.bannerOverlay}>
          <h1 className={styles.bannerTitle}>Contact Us</h1>
          <p className={styles.bannerSubtitle}>Have inquiries regarding Edge AI installations, technical solutions, or investor updates?</p>
        </div>
      </div>

      <FinalCTA />
    </div>
  );
}
