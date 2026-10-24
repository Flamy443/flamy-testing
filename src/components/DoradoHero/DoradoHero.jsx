import Link from "next/link";
import styles from "./DoradoHero.module.css";

export default function DoradoHero() {
  return (
    <main className={styles.heroMain}>
      <div className={styles.curvedMask}>
        <div className={styles.curveLeftBlock} aria-hidden="true" />
        <div className={styles.curveLeftTransition} aria-hidden="true">
          <svg viewBox="0 0 120 105" preserveAspectRatio="none">
            <path d="M 0,0 L 0,105 C 60,105 60,0 120,0 Z" fill="#fffaf0" />
          </svg>
        </div>
        <div className={styles.curveRightTransition} aria-hidden="true">
          <svg viewBox="0 0 120 105" preserveAspectRatio="none">
            <path d="M 120,0 L 120,105 C 60,105 60,0 0,0 Z" fill="#fffaf0" />
          </svg>
        </div>
        <div className={styles.curveRightBlock} aria-hidden="true" />
        <div className={styles.curveLeftOuter} aria-hidden="true" />
        <div className={styles.curveRightOuter} aria-hidden="true" />

        <div className={styles.videoLayer}>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/dorado/hero-fallback.png"
            src="/dorado/hero.mp4"
            className={styles.video}
          >
            Your browser does not support the video tag.
          </video>
          <div className={styles.gradientLeft} />
          <div className={styles.gradientBottom} />
        </div>

        <div className={styles.ring} />

        <div className={styles.textContent}>
          <div className={styles.taglineWrap}>
            <span className={styles.taglineText}>ANIMAL HOSPITAL + SURGICAL CENTER</span>
          </div>
          <h1 className={styles.title}>Trusted Veterinary Hospital in Oceanside, CA</h1>
          <p className={styles.subtitle}>
            Dorado Animal Hospital &amp; Surgical Center provides comprehensive, affordable
            veterinary care for dogs and cats.
          </p>
          <div className={styles.ctaWrap}>
            <Link href="/contact" className={styles.btnPrimary}>
              <span>REQUEST AN APPOINTMENT</span>
              <svg
                className={styles.arrow}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
            <Link href="/services" className={styles.linkSecondary}>
              EXPLORE OUR SERVICES
            </Link>
          </div>
        </div>

        <div className={styles.footerStrip}>
          <div className={styles.metaWrap}>
            <div className={styles.metaItem}>
              <div className={styles.metaIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className={styles.metaInfo}>
                <span className={styles.metaLabel}>HOURS</span>
                <span className={styles.metaValue}>Tue–Fri 8–6 • Sat 8–4</span>
              </div>
            </div>
            <div className={styles.metaItem}>
              <div className={styles.metaIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                </svg>
              </div>
              <div className={styles.metaInfo}>
                <span className={styles.metaLabel}>LOCATION</span>
                <span className={styles.metaValue}>Oceanside, California</span>
              </div>
            </div>
          </div>
          <div className={styles.motto}>
            <span>COMPASSION MEETS PRECISION</span>
          </div>
        </div>
      </div>
    </main>
  );
}
