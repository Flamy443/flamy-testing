"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHeroSlide, setActiveHeroSlide] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedMenus, setMobileExpandedMenus] = useState({});
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleSlideChange = (e) => {
      if (pathname === "/") {
        setActiveHeroSlide(e.detail.slideIndex);
      } else {
        setActiveHeroSlide(null);
      }
    };

    window.addEventListener("hero-slide-change", handleSlideChange);
    return () => window.removeEventListener("hero-slide-change", handleSlideChange);
  }, [pathname]);


  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const getPath = (target) => {
    if (target.startsWith("http")) return target;
    if (pathname === "/") return target;
    return `/${target}`;
  };

  let navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "#" },
    { name: "Duos Edge AI", path: getPath("#why-duos") },
    { name: "Technology Solutions", path: getPath("#technology-solutions") },
    { name: "Leadership", path: getPath("#leadership") },
    { name: "News & Investors", path: "https://ir.duostechnologies.com/" },
    { name: "Contact", path: "#contact" }
  ];

  if (pathname === "/edge-ai") {
    navLinks = [
      { name: "Home", path: "/" },
      { name: "About", path: "#" },
      { name: "Duos Edge AI", path: "/edge-ai" },

      { name: "Deployments", path: "#deployments" },
      { name: "Leadership", path: "/#leadership" },
      { name: "News & Investors", path: "https://ir.duostechnologies.com/" },
      { name: "Contact", path: "#contact" }
    ];
  } else if (pathname === "/tech-solutions" || pathname === "/products") {
    const getTechPath = (target) => {
      if (pathname === "/tech-solutions") return target;
      return `/tech-solutions${target}`;
    };

    navLinks = [
      { name: "Home", path: "/" },
      { name: "About", path: "#" },
      { name: "Technology Solutions", path: "/tech-solutions" },

      { name: "Products & Partners", path: getTechPath("#products-partners") },
      { name: "Leadership", path: "/#leadership" },
      { name: "News & Investors", path: "https://ir.duostechnologies.com/" },
      { name: "Contact", path: "#contact" }
    ];
  }

  let logoSrc = "/hero-logo/duostech.png";
  let isCustomBranded = false;

  if (pathname === "/edge-ai") {
    logoSrc = "/hero-logo/edgeai.png";
    isCustomBranded = true;
  } else if (pathname === "/tech-solutions" || pathname === "/products") {
    logoSrc = "/hero-logo/duostechsolution.png";
    isCustomBranded = true;
  } else if (pathname === "/" && !scrolled && activeHeroSlide !== null) {
    if (activeHeroSlide === 0) {
      logoSrc = "/hero-logo/duostechsolution.png";
      isCustomBranded = true;
    } else if (activeHeroSlide === 1) {
      logoSrc = "/hero-logo/edgeai.png";
      isCustomBranded = true;
    } else if (activeHeroSlide === 2) {
      logoSrc = "/hero-logo/duostech.png";
      isCustomBranded = true;
    }
  }
  const headerStyle = {};
  if (pathname === "/" && !scrolled && activeHeroSlide !== null) {
    headerStyle["--hero-logo-offset"] = `${activeHeroSlide * 90}px`;
    headerStyle["--hero-nav-offset"] = `${(activeHeroSlide - 1) * 90}px`;
    headerStyle["--hero-ticker-offset"] = `-${(2 - activeHeroSlide) * 90}px`;
  } else {
    headerStyle["--hero-logo-offset"] = "0px";
    headerStyle["--hero-nav-offset"] = "0px";
    headerStyle["--hero-ticker-offset"] = "0px";
  }

  let rightButton = { name: "NASDAQ: DUOT", path: "#", isPill: false };

  if (pathname === "/" && !scrolled && activeHeroSlide !== null) {
    if (activeHeroSlide === 0) {
      rightButton = { name: "Duos Edge AI", path: "#", isPill: true };
    } else if (activeHeroSlide === 1) {
      rightButton = { name: "Duos Technology Solutions", path: "#", isPill: true };
    }
  }

  const dropdownManifesto = [
    {
      name: "Edge AI Overview",
      desc: "Duos Edge AI designs, deploys, and operates modular facilities engineered for GPU-intensive AI workloads.",
      icon: (
        <img src="/hero-logo/edgeai.png" alt="Duos Edge AI Logo" className={styles.dropdownLogo} />
      ),
      path: "/edge-ai"
    },
    {
      name: "Technology Solutions",
      desc: "Data center physical configuration, procurement, structured cabling, cooling, and preventive maintenance services.",
      icon: (
        <img src="/hero-logo/duostechsolution.png" alt="Duos Technology Solutions Logo" className={styles.dropdownLogo} />
      ),
      path: "/tech-solutions"
    }
  ];

  const toggleMobileMenu = (menuName) => {
    setMobileExpandedMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <header
      className={`${styles.header} ${pathname !== "/" && !scrolled ? styles.headerSubpage : ""} ${scrolled ? styles.headerScrolled : ""} ${menuOpen ? styles.menuOpen : ""}`}
      style={headerStyle}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className={styles.container}>

        <Link
          href="/"
          className={styles.logoLink}
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <img
            src={logoSrc}
            alt="DUOS"
            className={`${styles.logoImage} ${isCustomBranded ? styles.logoCustom : styles.logoDefault}`}
          />
        </Link>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <span className={styles.closeIcon}>✕</span>
          ) : (
            <span className={styles.hamburger}></span>
          )}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>

          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            const hasDropdown = link.name === "About";
            const isMobileExpanded = mobileExpandedMenus[link.name];

            return (

              <div key={link.name} className={styles.navLinkWrapper}>
                <div
                  className={styles.navLinkFlexRow}
                  onMouseEnter={() => {
                    if (window.innerWidth > 1024 && hasDropdown) {
                      setActiveDropdown(link.name);
                    } else {
                      setActiveDropdown(null);
                    }
                  }}
                >
                  <Link
                    href={link.path}
                    target={(link.path.startsWith("http") || ((link.name === "Duos Edge AI" || link.name === "Technology Solutions") && pathname !== "/")) ? "_blank" : undefined}
                    rel={(link.path.startsWith("http") || ((link.name === "Duos Edge AI" || link.name === "Technology Solutions") && pathname !== "/")) ? "noopener noreferrer" : undefined}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""} ${activeDropdown === link.name ? styles.navLinkHovered : ""}`}
                    onClick={(e) => {
                      if (link.path.startsWith("#") && (pathname === "/" || pathname === "/tech-solutions")) {
                        e.preventDefault();
                        const el = document.querySelector(link.path);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        }
                        setMenuOpen(false);
                        setActiveDropdown(null);
                      } else if (link.name === "Contact" || link.name === "Contact Us") {
                        e.preventDefault();
                        if (window.innerWidth <= 1124) {
                          setMenuOpen(false);
                          setActiveDropdown(null);
                          router.push("/contact");
                        } else {
                          window.dispatchEvent(new CustomEvent("open-contact-modal"));
                        }
                      } else {
                        if (window.innerWidth <= 1024 && hasDropdown) {
                          toggleMobileMenu(link.name);
                        } else {
                          setMenuOpen(false);
                          setActiveDropdown(null);
                        }
                      }
                    }}
                  >
                    <span className={styles.linkText}>{link.name}</span>
                  </Link>

                  {hasDropdown && (
                    <button
                      className={styles.mobileDropdownBtn}
                      onClick={() => toggleMobileMenu(link.name)}
                      aria-label="Toggle Submenu"
                    >
                      {isMobileExpanded ? "−" : "+"}
                    </button>
                  )}
                </div>

                {hasDropdown && isMobileExpanded && (
                  <div className={styles.mobileCollapsibleContainer}>
                    <div className={styles.mobileItemsList}>
                      {dropdownManifesto.map((item) => (
                        <Link
                          href={item.path}
                          key={item.name}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.mobileSubItem}
                          onClick={() => {
                            setMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          <div className={styles.mobileSubIcon}>{item.icon}</div>
                          <div className={styles.mobileSubContent}>
                            <span className={styles.mobileSubName}>{item.name}</span>
                            <span className={styles.mobileSubDesc}>{item.desc}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            );
          })}

          <div className={styles.mobileLegalLinks}>
            <Link href="/privacy-policy" className={styles.mobileLegalLink} onClick={() => setMenuOpen(false)}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className={styles.mobileLegalLink} onClick={() => setMenuOpen(false)}>
              Terms of Use
            </Link>
          </div>

          <div className={styles.mobileSocials}>
            <a href="https://www.linkedin.com/company/duos-technologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialIcon} aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialIcon} aria-label="X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

          </div>
        </nav>

        <Link
          href={rightButton.path}
          className={`${styles.stockTicker} ${rightButton.isPill ? styles.actionPill : ""}`}
          onClick={() => {
            setMenuOpen(false);
            setActiveDropdown(null);
          }}
        >
          {!rightButton.isPill && <span className={styles.tickerDot}></span>}
          <span className={styles.tickerText}>{rightButton.name}</span>
        </Link>
      </div>

      <div
        className={`${styles.dropdownMenu} ${activeDropdown ? styles.dropdownOpen : ""}`}
        onMouseEnter={() => setActiveDropdown(activeDropdown)}
      >
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownGrid}>
            {dropdownManifesto.map((item) => (
              <Link
                href={item.path}
                key={item.name}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.dropdownItem}
                onClick={() => {
                  setActiveDropdown(null);
                  setMenuOpen(false);
                }}
              >
                <div className={styles.itemIcon}>{item.icon}</div>
                <div className={styles.itemContent}>
                  <h5 className={styles.itemName}>{item.name}</h5>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
