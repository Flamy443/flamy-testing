"use client";

import React from "react";
import styles from "./TiltedMarquee.module.css";

export default function TiltedMarquee() {
  const row1Images = [
    { src: "/market-location/corpus-christi.png" },
    { src: "/market-location/dumas-isd.png" },
    { src: "/market-location/hereford-isd.png" },
    { src: "/market-location/lubbock.png" },
    { src: "/market-location/pampa.png" },
    { src: "/market-location/potter-county.png" },
    { src: "/market-location/region-12.png" }
  ];

  const row2Images = [
    { src: "/market-location/potter-county.png" },
    { src: "/market-location/region-14.png" },
    { src: "/market-location/region-16.png" },
    { src: "/market-location/region-3.png" },
    { src: "/market-location/west-40.png" },
    { src: "/market-location/corpus-christi.png" },
    { src: "/market-location/hereford-isd.png" }
  ];

  const row1Doubled = [...row1Images, ...row1Images, ...row1Images];
  const row2Doubled = [...row2Images, ...row2Images, ...row2Images];

  return (
    <section className={styles.marqueeSection}>
      <div className={styles.perspectiveContainer}>

        <div className={styles.marqueeRow}>
          <div className={styles.marqueeTrackLeft}>
            {row1Doubled.map((img, idx) => (
              <div key={idx} className={styles.cardItem}>
                <img src={img.src} alt="Deployment Node" className={styles.cardImage} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.marqueeRow}>
          <div className={styles.marqueeTrackRight}>
            {row2Doubled.map((img, idx) => (
              <div key={idx} className={styles.cardItem}>
                <img src={img.src} alt="Deployment Node" className={styles.cardImage} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
