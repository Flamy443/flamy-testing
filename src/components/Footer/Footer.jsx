"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>

        <div className={styles.dividerLine}></div>

        <div className={styles.footerGrid}>

          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink}>
              <img src="/hero-logo/duostech.png" alt="DUOS Edge AI Logo" className={styles.logoImage} />
            </Link>
          </div>

          <div className={styles.menuCol}>
            <ul className={styles.menuList}>
              <li><Link href="/">HOME</Link></li>

              <li><a href="https://duosedge.ai/events" target="_blank" rel="noopener noreferrer">EVENTS</a></li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent("open-contact-modal"));
                  }}
                >
                  CONTACT
                </a>
              </li>
              <li><a href="https://ir.duostechnologies.com/" target="_blank" rel="noopener noreferrer">NEWS AND INVESTOR</a></li>
            </ul>
          </div>

          <div className={styles.socialCol}>
            <a href="https://www.linkedin.com/company/duos-technologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

          </div>
        </div>

        <div className={styles.dividerLine}></div>

        <div className={styles.copyrightBar}>
          <span>
            &copy; {currentYear} Duos Technologies Group, Inc. All rights reserved.
          </span>
          <div className={styles.footerLegalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className={styles.legalDivider}>|</span>
            <Link href="/terms-of-use">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
