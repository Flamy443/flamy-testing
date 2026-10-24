"use client";

import { useState, useEffect } from "react";
import styles from "./privacy.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function PrivacyPolicyPage() {
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

      <header className={styles.hero}>
        <span className={styles.subtitle}>Legal Documentation</span>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{splitText("Privacy Policy")}</h1>
        </div>
        <p className={styles.description}>
          Your Privacy is Critically Important to Us. Read about how Duos Technologies Inc. collects, protects, and handles your information.
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
            <p className={styles.sectionLabel}>Overview</p>
            <div className={styles.sectionTitleWrapper}>
              <h2 className={styles.sectionTitle}>{splitText("Privacy Commitment")}</h2>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.sectionBody}>

              <p>
                We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy ("Privacy Policy") on November 18th, 2019 (the "Effective Date"), to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties.
              </p>
              <p>
                This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.
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
            <p className={styles.sectionLabel}>Audience & Scope</p>
            <div className={styles.sectionTitleWrapper}>
              <h2 className={styles.sectionTitle}>{splitText("Website Visitors")}</h2>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.sectionBody}>
              <p>
                Like most website operators, Duos Technologies Inc. collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request.
              </p>
              <p>
                Duos Technologies Inc.'s purpose in collecting non-personally identifying information is to better understand how Duos Technologies Inc.'s visitors use its website. From time to time, Duos Technologies Inc. may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.
              </p>
              <p>
                Duos Technologies Inc. also collects potentially personally-identifying information like Internet Protocol (IP) addresses.
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
            <p className={styles.sectionLabel}>Data Collection</p>
            <div className={styles.sectionTitleWrapper}>
              <h2 className={styles.sectionTitle}>{splitText("Gathering of Personally-Identifying Info")}</h2>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.sectionBody}>
              <p>
                Certain visitors to Duos Technologies Inc.'s website choose to interact with Duos Technologies Inc. in ways that require Duos Technologies Inc. to gather personally-identifying information. The amount and type of information that Duos Technologies, Inc. gathers depends on the nature of the interaction.
              </p>
              <p>
                For example, we ask visitors who message us on our contact forms or sign up to our email marketing at https://www.duostechnologies.com/ to provide name, business, and email address. Opt-out options are found on the bottom of any emails sent by Duos Technologies Inc.
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
            <p className={styles.sectionLabel}>Security Measures</p>
            <div className={styles.sectionTitleWrapper}>
              <h2 className={styles.sectionTitle}>{splitText("Information Security & Advertising")}</h2>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.sectionBody}>
              <p>
                The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
              </p>
              <p>
                Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer.
              </p>
              <p>
                This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by Duos Technologies Inc. and does not cover the use of cookies by any advertisers.
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
            <p className={styles.sectionLabel}>Third-Party & Stats</p>
            <div className={styles.sectionTitleWrapper}>
              <h2 className={styles.sectionTitle}>{splitText("Links to External Sites & Statistics")}</h2>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.sectionBody}>
              <p>
                Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit. We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.
              </p>
              <p>
                Duos Technologies, Inc. may collect statistics about the behavior of visitors to its website. Duos Technologies, Inc. may display this information publicly or provide it to others. However, Duos Technologies, Inc. does not disclose your personally-identifying information.
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
            <p className={styles.sectionLabel}>Cookies Policy</p>
            <div className={styles.sectionTitleWrapper}>
              <h2 className={styles.sectionTitle}>{splitText("Cookies & Preferences")}</h2>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.sectionBody}>
              <p>
                To enrich and perfect your online experience, Duos Technologies Inc. uses "Cookies", similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.
              </p>
              <p>
                A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. Duos Technologies Inc. uses cookies to help Duos Technologies Inc. identify and track visitors, their usage of https:
              </p>
              <p>
                Duos Technologies Inc. visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Duos Technologies Inc.'s websites, with the drawback that certain features of Duos Technologies Inc.'s websites may not function properly without the aid of cookies.
              </p>
              <p>
                By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to Duos Technologies Inc.'s use of cookies.
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
            <p className={styles.sectionLabel}>Updates & Contact</p>
            <div className={styles.sectionTitleWrapper}>
              <h2 className={styles.sectionTitle}>{splitText("Policy Changes & Contact Info")}</h2>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.sectionBody}>
              <p>
                Duos Technologies Inc. may change its Privacy Policy from time to time in its sole discretion. Duos Technologies, Inc. encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.
              </p>
              <p>
                <strong>Duos Technologies, Inc.</strong><br />
                6651 Gate Parkway, 4th Floor<br />
                Jacksonville, FL 32256
              </p>
              <p>
                Phone: +1 904.296.2807<br />
                Email: info@duostech.com
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
