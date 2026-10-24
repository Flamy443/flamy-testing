import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

export default function Preloader({ onComplete, logo = "/hero-logo/duostech.png" }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {

    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 600);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`${styles.overlay} ${fade ? styles.fadeOut : ""}`}>

      <div className={`${styles.curtain} ${styles.curtainTop} ${fade ? styles.slideUp : ""}`} />

      <div className={`${styles.curtain} ${styles.curtainBottom} ${fade ? styles.slideDown : ""}`} />

      <div className={`${styles.logoContainer} ${fade ? styles.logoFade : ""}`}>
        <img
          src={logo}
          alt="DUOS Technologies Group Logo"
          className={styles.logoImage}
        />
      </div>
    </div>
  );
}
