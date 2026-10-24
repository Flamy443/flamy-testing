"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ProductsPartnersSection.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const PRODUCT_TILES = [
  {
    id: "racks-cabinets",
    category: "enclosures",
    badge: "Infrastructure",
    title: "Server Racks & Cabinets",
    description: "Secure, heavy-duty server cabinets, cabinet enclosures, open network frame racks, and raised floor solutions built to house critical enterprise servers and switches.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=300&q=80",
    tags: ["Server/Network Racks", "Cabinet Enclosures", "Raised Floor Solutions"]
  },
  {
    id: "pdus",
    category: "power",
    badge: "Power and Cooling",
    title: "Rack PDUs & Distribution",
    description: "Basic, metered, and intelligent rack-mount power strips supplying clean, reliable electrical distribution to network equipment.",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=300&q=80",
    tags: ["Rack PDUs"]
  },
  {
    id: "cable-mgmt",
    category: "enclosures",
    badge: "Infrastructure",
    title: "Cable Management Systems",
    description: "Organizers, D-rings, finger ducts and routing channels to eliminate cable clutter and optimize airflow inside server cabinets.",
    imageUrl: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=300&q=80",
    tags: ["Cable Management"]
  },
  {
    id: "conveyance",
    category: "enclosures",
    badge: "Infrastructure",
    title: "Pathway Conveyance Trays",
    description: "Overhead and under-floor routing trays, steel basket spans, ladder racks, and yellow fiber troughs to safely steer bulk copper and fiber optic runs.",
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=300&q=80",
    tags: ["Ladder Rack", "Basket Tray", "Fiber Trough"]
  },
  {
    id: "optics",
    category: "connectivity",
    badge: "Connectivity",
    title: "Optics & Transceivers",
    description: "High-speed optical transceivers matching legacy and modern specifications for multi-gigabit routing and long-haul connections.",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=300&q=80",
    tags: ["Optics & Transceivers"]
  },
  {
    id: "dac-aoc",
    category: "connectivity",
    badge: "Connectivity",
    title: "Interconnect DAC Cables",
    description: "High-density active and passive direct-attach copper assemblies for top-of-rack switch-to-server linking.",
    imageUrl: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=300&q=80",
    tags: ["DAC & AOC", "Low Latency", "Plug & Play"]
  },
  {
    id: "patch-cords",
    category: "connectivity",
    badge: "Connectivity",
    title: "Copper Patch Cords",
    description: "Cat6, Cat6A, and RJ45 patch cords alongside voice & data cables to satisfy structure-cabling certification standards.",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=300&q=80",
    tags: ["Copper Patch Cords", "Voice & Data Cable"]
  },
  {
    id: "patch-panels",
    category: "connectivity",
    badge: "Connectivity",
    title: "Patch Panels & Frames",
    description: "Angled and flat modular patch panels, keystone jacks, fiber cassettes, and optical distribution frames (ODF) for patch panels and connectivity.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=300&q=80",
    tags: ["Patch Panels & Connectivity"]
  },
  {
    id: "bulk-fiber",
    category: "connectivity",
    badge: "Connectivity",
    title: "Bulk Fiber Optic Cable",
    description: "Spools of loose-tube, tight-buffered, armored, and plenum-rated bulk fiber optic cabling for indoor riser and campus backbones.",
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=300&q=80",
    tags: ["Bulk Fiber Optic Cabling"]
  },
  {
    id: "splicing-hardware",
    category: "connectivity",
    badge: "Connectivity",
    title: "Splicing Hardware Enclosures",
    description: "Fiber splice trays, wall-mount enclosures, heat-shrink sleeves, and splice organizers for splicing hardware and inserts.",
    imageUrl: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=300&q=80",
    tags: ["Splicing Hardware & Inserts", "Splice Protection"]
  },
  {
    id: "trunk-assemblies",
    category: "connectivity",
    badge: "Connectivity",
    title: "Trunk Assemblies & Jumpers",
    description: "Custom pre-terminated copper and multi-fiber trunk cables fitted with pulling eyes for cross connect assemblies & jumpers.",
    imageUrl: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=300&q=80",
    tags: ["Cross Connect Assemblies & Jumpers"]
  },
  {
    id: "power-cables",
    category: "power",
    badge: "Power and Cooling",
    title: "Electrical Wire & Cable",
    description: "SOOW cordage, locking IEC cords, NEMA assemblies, electrical wire, and custom-length colored power cords & whips.",
    imageUrl: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=300&q=80",
    tags: ["Electrical Wire & Cable", "Power Cords & Power Whips"]
  },
  {
    id: "ups-gear",
    category: "power",
    badge: "Power and Cooling",
    title: "Power Gear & UPS",
    description: "Centralized and distributed Double-Conversion online UPS hardware, power distribution, and scalable backup gear + batteries.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=300&q=80",
    tags: ["Power Distribution & UPS", "Gear + Batteries"]
  },
  {
    id: "switchboards",
    category: "power",
    badge: "Power and Cooling",
    title: "Electrical Switchboards",
    description: "Heavy commercial main distribution switchboards, subpanels, electrical switchboards, panelboards, and breakers.",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=300&q=80",
    tags: ["Electrical Switchboards & Panelboards"]
  },
  {
    id: "rpp-sts",
    category: "power",
    badge: "Power and Cooling",
    title: "Power Panels (RPP)",
    description: "Sub-distribution Remote Power Panels (RPP) and instantaneous electronic Static Transfer Switches (STS) that toggle power inputs.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=300&q=80",
    tags: ["Remote Power Panels (RPP)", "Static Transfer Switches (STS)"]
  },
  {
    id: "containment",
    category: "enclosures",
    badge: "Infrastructure",
    title: "Custom Aisle Containment",
    description: "Hot aisle and cold aisle containment ceilings, sliding doors, blanking panels, containment solutions, and vinyl partitions.",
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=300&q=80",
    tags: ["Containment Solutions"]
  },
  {
    id: "caging-security",
    category: "enclosures",
    badge: "Infrastructure",
    title: "Custom Cage Security",
    description: "Heavy-duty wire mesh security cages, custom cage material, keyless lock panels, and whiteboard floor perimeter dividers.",
    imageUrl: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=300&q=80",
    tags: ["Custom Cage Material"]
  },
  {
    id: "cooling",
    category: "power",
    badge: "Power and Cooling",
    title: "Cooling Solutions",
    description: "In-row cooling setups, hot-gas bypass systems, RDHX, CRAH, CRAC units, custom cooling solutions, and overhead venting ducts.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=300&q=80",
    tags: ["RDHX", "CRAH", "CRAC", "Custom Cooling Solutions"]
  },
  {
    id: "testing-equipment",
    category: "connectivity",
    badge: "Connectivity",
    title: "Testing Equipment & Source",
    description: "OTDR test rigs, power meters, fiber testing equipment, copper certifiers, and fiber cleaners to validate channel throughput specs.",
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=300&q=80",
    tags: ["Fiber Testing Equipment", "Fiber Cleaners"]
  },
  {
    id: "facility-consumables",
    category: "operations",
    badge: "Hardware & Accessories",
    title: "Facility Consumables",
    description: "Sticky mats, fiber cleaners, hardware & fittings, threaded rod, strut & fittings, conduit & corrugated innerduct, tools, warehouse supplies, and equipment.",
    imageUrl: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=300&q=80",
    tags: ["Hardware & Fittings", "Threaded Rod & Strut", "Tools", "Conduit & Innerduct", "Clean Mats", "Warehouse Supplies", "Warehouse Equipment", "Velcro & Cable Ties"]
  }
];

const PARTNERS = [
  { id: "apc", name: "APC", img: "/Manufacturer-partners/apc.png" },
  { id: "sumitomo", name: "Sumitomo", img: "/Manufacturer-partners/sumitomo.svg" },
  { id: "airseal", name: "Air-Seal", img: "/Manufacturer-partners/airseal.jpg" },
  { id: "upsite", name: "Upsite", img: "/Manufacturer-partners/upsite.png" },
  { id: "fluke", name: "Fluke", img: "/Manufacturer-partners/fluke.jpg" },
  { id: "airsys", name: "Airsys", img: "/Manufacturer-partners/airsys.jpg" },
  { id: "hubbell", name: "Hubbell", img: "/Manufacturer-partners/hubbell.jpg" },
  { id: "xtreme", name: "Xtreme Power", img: "/Manufacturer-partners/xtreme.jpg" },
  { id: "afl", name: "AFL", img: "/Manufacturer-partners/AFL.jpg" },
  { id: "vertiv", name: "Vertiv", img: "/Manufacturer-partners/vertiv.png" },
  { id: "corning", name: "Corning", img: "/Manufacturer-partners/corning.jpg" },
  { id: "motivair", name: "Motivair", img: "/Manufacturer-partners/motivair.jpg" },
  { id: "panduit", name: "Panduit", img: "/Manufacturer-partners/panduit.png" },
  { id: "nucor", name: "Nucor", img: "/Manufacturer-partners/nucor.jpg" },
  { id: "commscope", name: "CommScope", img: "/Manufacturer-partners/commscope.jpg" },
  { id: "chatsworth", name: "Chatsworth", img: "/Manufacturer-partners/chatsworth.png" },
  { id: "belden", name: "Belden", img: "/Manufacturer-partners/belden.jpg" },
  { id: "nvent", name: "nVent", img: "/Manufacturer-partners/nvent.jpg" },
  { id: "exfo", name: "EXFO", img: "/Manufacturer-partners/exfo.jpg" },
  { id: "raritan", name: "Raritan", img: "/Manufacturer-partners/raritan.jpg" },
  { id: "tripp-lite", name: "Tripp Lite", img: "/Manufacturer-partners/tripp-lite.png" },
  { id: "emka", name: "EMKA", img: "/Manufacturer-partners/emka.jpg" },
  { id: "enet", name: "ENET", img: "/Manufacturer-partners/enet.jpg" },
  { id: "erico", name: "Erico", img: "/Manufacturer-partners/erico.jpg" },
  { id: "lynn", name: "Lynn", img: "/Manufacturer-partners/lynn.jpg" },
  { id: "uline", name: "Uline", img: "/Manufacturer-partners/uline.jpg" },
  { id: "wbt", name: "WBT", img: "/Manufacturer-partners/wbt.jpg" }
];

export default function ProductsPartnersSection() {
  const [activeTab, setActiveTab] = useState("products");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const containerRef = useRef(null);
  const productsTabRef = useRef(null);
  const partnersTabRef = useRef(null);
  const partnersHeaderRef = useRef(null);

  useEffect(() => {
    const activeRef = activeTab === "products" ? productsTabRef.current : partnersTabRef.current;
    if (activeRef) {
      setHighlightStyle({
        left: activeRef.offsetLeft,
        width: activeRef.offsetWidth,
        opacity: 1
      });
    }
  }, [activeTab]);

  useEffect(() => {
    let ctx;
    if (activeTab === "partners" && typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: partnersHeaderRef.current,
            start: "top 90%",
            toggleActions: "restart reset restart reset"
          }
        });
        tl.fromTo(
          `.${styles.productpartnersTitleWrapper}`,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: "power3.out"
          }
        );
      }, containerRef);
    }
    return () => {
      if (ctx) ctx.revert();
    };
  }, [activeTab]);

  const renderItalicizedTitle = (title) => {
    const parts = title.split(" ");
    if (parts.length < 2) return title;
    return (
      <>
        {parts[0]} <i>{parts[1]}</i> {parts.slice(2).join(" ")}
      </>
    );
  };

  const filteredProducts = selectedCategory === "all"
    ? PRODUCT_TILES
    : PRODUCT_TILES.filter(p => p.category === selectedCategory);

  return (
    <div ref={containerRef} className={styles.sectionRoot}>

      <div className={styles.tabContainer}>
        <div className={styles.tabWrapper}>
          <div
            className={styles.slidingHighlight}
            style={{
              transform: `translateX(${highlightStyle.left}px)`,
              width: `${highlightStyle.width}px`,
              opacity: highlightStyle.opacity
            }}
          />
          <button
            ref={productsTabRef}
            className={`${styles.tabButton} ${activeTab === "products" ? styles.tabButtonActive : ""}`}
            onClick={() => {
              setActiveTab("products");
              setSelectedCategory("all");
            }}
          >
            Our Products
          </button>
          <button
            ref={partnersTabRef}
            className={`${styles.tabButton} ${activeTab === "partners" ? styles.tabButtonActive : ""}`}
            onClick={() => setActiveTab("partners")}
          >
            Our Partners
          </button>
        </div>
      </div>

      {activeTab === "products" ? (
        <>

          <div className={styles.accordionsRow}>
            <div
              className={`${styles.accordionPill} ${selectedCategory === "all" ? styles.accordionPillActive : ""}`}
              onClick={() => setSelectedCategory("all")}
            >
              <div className={styles.accordionLabel}>
                <span className={styles.accordionNum}>All</span>
                <span className={styles.accordionName}>View All Products</span>
              </div>
              <span className={styles.accordionIcon}>+</span>
            </div>

            <div
              className={`${styles.accordionPill} ${selectedCategory === "connectivity" ? styles.accordionPillActive : ""}`}
              onClick={() => setSelectedCategory("connectivity")}
            >
              <div className={styles.accordionLabel}>
                <span className={styles.accordionNum}>01</span>
                <span className={styles.accordionName}>Connectivity</span>
              </div>
              <span className={styles.accordionIcon}>+</span>
            </div>

            <div
              className={`${styles.accordionPill} ${selectedCategory === "enclosures" ? styles.accordionPillActive : ""}`}
              onClick={() => setSelectedCategory("enclosures")}
            >
              <div className={styles.accordionLabel}>
                <span className={styles.accordionNum}>02</span>
                <span className={styles.accordionName}>Infrastructure</span>
              </div>
              <span className={styles.accordionIcon}>+</span>
            </div>

            <div
              className={`${styles.accordionPill} ${selectedCategory === "power" ? styles.accordionPillActive : ""}`}
              onClick={() => setSelectedCategory("power")}
            >
              <div className={styles.accordionLabel}>
                <span className={styles.accordionNum}>03</span>
                <span className={styles.accordionName}>Power and Cooling</span>
              </div>
              <span className={styles.accordionIcon}>+</span>
            </div>

            <div
              className={`${styles.accordionPill} ${selectedCategory === "operations" ? styles.accordionPillActive : ""}`}
              onClick={() => setSelectedCategory("operations")}
            >
              <div className={styles.accordionLabel}>
                <span className={styles.accordionNum}>04</span>
                <span className={styles.accordionName}>Hardware & Accessories</span>
              </div>
              <span className={styles.accordionIcon}>+</span>
            </div>
          </div>

          <main className={styles.gridContainer}>
            <div className={styles.tilesGrid}>
              {filteredProducts.map((product) => (
                <div key={product.id} className={styles.tileCard}>

                  <div className={styles.cardNotch}>
                    <span className={styles.tileBadge}>
                      <span className={styles.badgeDot}></span>
                      {product.badge}
                    </span>
                  </div>

                  <div className={styles.tileImageWrapper}>
                    <img src={product.imageUrl} alt={product.title} className={styles.tileImg} />
                  </div>

                  <div className={styles.tileContentWrapper}>
                    <h4 className={styles.tileTitle}>
                      {renderItalicizedTitle(product.title)}
                    </h4>
                    <p className={styles.tileDescription}>{product.description}</p>

                    <div className={styles.tileTagList}>
                      {product.tags.map((tag, tIdx) => (
                        <span key={tIdx} className={styles.tileTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </>
      ) : (
        <section className={styles.partnersSection}>
          <div ref={partnersHeaderRef} className={styles.partnersHeader}>
            <div className={styles.productpartnersTitleWrapper}>
              <h2 className={styles.productpartnersTitle}>
                <span>Manufacturer Partners</span>
                <span>Trusted by Industry Leaders</span>
              </h2>
            </div>
          </div>

          <div className={styles.partnersGridContainer}>
            <div className={styles.partnersGrid}>
              {PARTNERS.map((partner) => {
                return (
                  <div key={partner.id} className={styles.partnerCard}>

                    <span className={`${styles.cornerTick} ${styles.topLeft}`}>+</span>
                    <span className={`${styles.cornerTick} ${styles.topRight}`}>+</span>
                    <span className={`${styles.cornerTick} ${styles.bottomLeft}`}>+</span>
                    <span className={`${styles.cornerTick} ${styles.bottomRight}`}>+</span>

                    <div className={styles.glowContainer}>
                      <div className={styles.partnerGlow} />
                    </div>

                    <div className={styles.partnerLogoWrapper}>
                      {partner.img ? (
                        <img src={partner.img} alt={`${partner.name} logo`} className={styles.partnerImg} />
                      ) : (
                        <span className={styles.partnerPlaceholderText}>{partner.name}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
