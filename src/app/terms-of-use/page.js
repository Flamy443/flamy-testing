"use client";

import { useState, useEffect } from "react";
import styles from "./terms.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function TermsOfUsePage() {
  const [scrolledPast, setScrolledPast] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});

  const splitText = (text) => {
    return text;
  };

  useEffect(() => {
    let ctx;
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {

        gsap.fromTo(
          `.${styles.titleWrapper}`,
          { opacity: 0, y: 45 },
          { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" }
        );

        const sectionTitleWrappers = document.querySelectorAll(`.${styles.sectionTitleWrapper}`);
        sectionTitleWrappers.forEach((wrapperEl) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: wrapperEl,
              start: "top 90%",
              toggleActions: "restart reset restart reset"
            }
          });
          tl.fromTo(
            wrapperEl,
            { opacity: 0, y: 45 },
            { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" }
          );
        });
      });
    }

    const handleScroll = () => {

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);

      const sections = document.querySelectorAll("section[data-section]");
      const newScrolledPast = {};
      sections.forEach((section) => {
        const num = section.getAttribute("data-section");
        const rect = section.getBoundingClientRect();
        if (rect.top < 140) {
          newScrolledPast[num] = true;
        } else {
          newScrolledPast[num] = false;
        }
      });
      setScrolledPast(newScrolledPast);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const num = entry.target.getAttribute("data-section");
            setVisibleSections((prev) => ({ ...prev, [num]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const sections = document.querySelectorAll("section[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div className={styles.page}>

      <div className={styles.scrollProgress}>
        <div
          className={styles.scrollProgressBar}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className={styles.hero}>
        <span className={styles.subtitle}>Legal Documentation</span>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{splitText("Terms of Use")}</h1>
        </div>
        <p className={styles.description}>
          Duos Technologies, Inc. Terms of Service. By accessing this website, you agree to be bound by these terms.
        </p>
      </header>

      <div className={styles.container}>

        <section className={`${styles.section} ${visibleSections["01"] ? styles.sectionVisible : ""}`} data-section="01">
          <div className={styles.sectionNumberWrap}>
            <div className={`${styles.sectionNumber} ${scrolledPast["01"] ? styles.sectionNumberScrolledPast : ""}`}>
              01
            </div>
          </div>
          <div className={styles.sectionContent}>
            <p className={styles.sectionLabel}>Introduction</p>
            <div className={styles.sectionTitleWrapper}>
              <h2 className={styles.sectionTitle}>{splitText("1. Terms")}</h2>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.sectionBody}>
              <p>
                By accessing the website at https:
              </p>
              <p>
                If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${visibleSections["02"] ? styles.sectionVisible : ""}`} data-section="02">
          <div className={styles.sectionNumberWrap}>
            <div className={`${styles.sectionNumber} ${scrolledPast["02"] ? styles.sectionNumberScrolledPast : ""}`}>
              02
            </div>
          </div>
          <div className={styles.sectionContent}>
            <p className={styles.sectionLabel}>Usage Rights</p>
            <div className={styles.sectionTitleWrapper}>
              <h2 className={styles.sectionTitle}>{splitText("2. Use License")}</h2>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.sectionBody}>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Duos Technologies, Inc.'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on Duos Technologies, Inc.'s website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Duos Technologies, Inc. at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${visibleSections["03"] ? styles.sectionVisible : ""}`} data-section="03">
          <div className={styles.sectionNumberWrap}>
            <div className={`${styles.sectionNumber} ${scrolledPast["03"] ? styles.sectionNumberScrolledPast : ""}`}>
              03
            </div>
          </div>
          <div className={styles.sectionContent}>
            <p className={styles.sectionLabel}>Warranties</p>
            <div className={styles.sectionTitleWrapper}>
              <h2 className={styles.sectionTitle}>{splitText("3. Disclaimer")}</h2>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.sectionBody}>
              <p>
                The materials on Duos Technologies, Inc.'s website are provided on an 'as is' basis. Duos Technologies, Inc. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p>
                Further, Duos Technologies, Inc. does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${visibleSections["04"] ? styles.sectionVisible : ""}`} data-section="04">
          <div className={styles.sectionNumberWrap}>
            <div className={`${styles.sectionNumber} ${scrolledPast["04"] ? styles.sectionNumberScrolledPast : ""}`}>
              04
            </div>
          </div>
          <div className={styles.sectionContent}>
            <p className={styles.sectionLabel}>Liabilities</p>
            <div className={styles.sectionTitleWrapper}>
              <h2 className={styles.sectionTitle}>{splitText("4. Limitations")}</h2>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.sectionBody}>
              <p>
                In no event shall Duos Technologies, Inc. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Duos Technologies, Inc.'s website, even if Duos Technologies, Inc. or a Duos Technologies, Inc. authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              <p>
                Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${visibleSections["05"] ? styles.sectionVisible : ""}`} data-section="05">
          <div className={styles.sectionNumberWrap}>
            <div className={`${styles.sectionNumber} ${scrolledPast["05"] ? styles.sectionNumberScrolledPast : ""}`}>
              05
            </div>
          </div>
          <div className={styles.sectionContent}>
            <p className={styles.sectionLabel}>Revisions</p>
            <div className={styles.sectionTitleWrapper}>
              <h2 className={styles.sectionTitle}>{splitText("5. Accuracy of Materials")}</h2>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.sectionBody}>
              <p>
                The materials appearing on Duos Technologies, Inc.'s website could include technical, typographical, or photographic errors. Duos Technologies, Inc. does not warrant that any of the materials on its website are accurate, complete or current.
              </p>
              <p>
                Duos Technologies, Inc. may make changes to the materials contained on its website at any time without notice. However Duos Technologies, Inc. does not make any commitment to update the materials.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${visibleSections["06"] ? styles.sectionVisible : ""}`} data-section="06">
          <div className={styles.sectionNumberWrap}>
            <div className={`${styles.sectionNumber} ${scrolledPast["06"] ? styles.sectionNumberScrolledPast : ""}`}>
              06
            </div>
          </div>
          <div className={styles.sectionContent}>
            <p className={styles.sectionLabel}>External Links</p>
            <div className={styles.sectionTitleWrapper}>
              <h2 className={styles.sectionTitle}>{splitText("6. Links")}</h2>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.sectionBody}>
              <p>
                Duos Technologies, Inc. has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Duos Technologies, Inc. of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${visibleSections["07"] ? styles.sectionVisible : ""}`} data-section="07">
          <div className={styles.sectionNumberWrap}>
            <div className={`${styles.sectionNumber} ${scrolledPast["07"] ? styles.sectionNumberScrolledPast : ""}`}>
              07
            </div>
          </div>
          <div className={styles.sectionContent}>
            <p className={styles.sectionLabel}>Updates & Changes</p>
            <div className={styles.sectionTitleWrapper}>
              <h2 className={styles.sectionTitle}>{splitText("7. Modifications")}</h2>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.sectionBody}>
              <p>
                Duos Technologies, Inc. may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${visibleSections["08"] ? styles.sectionVisible : ""}`} data-section="08">
          <div className={styles.sectionNumberWrap}>
            <div className={`${styles.sectionNumber} ${scrolledPast["08"] ? styles.sectionNumberScrolledPast : ""}`}>
              08
            </div>
          </div>
          <div className={styles.sectionContent}>
            <p className={styles.sectionLabel}>Jurisdiction</p>
            <div className={styles.sectionTitleWrapper}>
              <h2 className={styles.sectionTitle}>{splitText("8. Governing Law")}</h2>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.sectionBody}>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Florida, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
