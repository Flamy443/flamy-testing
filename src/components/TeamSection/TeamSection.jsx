"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import styles from "./TeamSection.module.css";

export default function TeamSection() {
  const containerRef = useRef(null);
  const router = useRouter();
  const [activeModalMember, setActiveModalMember] = useState(null);

  useEffect(() => {
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

        gsap.fromTo(
          `.${styles.card}`,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 95%"
            }
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

  const team = [
    {
      id: "doug",
      name: "Doug Recker",
      role: "Chief Executive Officer",
      subRole: "Co-Founder",
      company: "Duos Technologies Group, Inc.",
      image: "/team/DougRecker.png",
      linkedin: "https://linkedin.com/in/doug-recker",
      bio: "Doug Recker is a seasoned digital infrastructure executive and telecommunications industry veteran with more than 30 years of experience building, scaling, and operating data center, fiber, and edge computing platforms across the United States. He currently serves as CEO of Duos Technologies Group, Inc. (Nasdaq: DUOT) and Duos Edge AI, where he leads the company’s strategy and execution for deploying patented, modular Edge Data Centers that deliver secure, low-latency compute to underserved and high-growth markets. At Duos Edge AI, Mr. Recker is responsible for driving the design, deployment, and expansion of multi-access Edge Data Center infrastructure supporting education, healthcare, carriers, municipalities, and enterprise customers. Under his leadership, Duos Edge AI has rapidly expanded its footprint across Texas and into new markets, while introducing differentiated technology protected by U.S. patents, including the company’s patented modular data center entryway designed for secure, clean-room-level equipment protection. Mr. Recker is a repeat entrepreneur with a strong track record of value creation. He founded Edge Presence in 2017, which was acquired by Ubiquity in 2023, and previously founded Colo5 Data Centers, which was acquired by Cologix, Inc. in 2014. Earlier in his career, he played a key role in the early development of the fiber and telecom industry, leading and supporting high-performing sales and operational teams during periods of rapid infrastructure growth. His leadership and entrepreneurial success have been widely recognized. Mr. Recker has received multiple industry honors, including the Jacksonville Business Journal’s Ultimate CEO Award, BizTech Innovations’ Best CEO Award, and inclusion in Inc. Magazine’s list of the 500 fastest-growing companies. He was also named to the Jacksonville Business Journal’s \"Top 40 Under 40.\" A respected industry thought leader, Mr. Recker is a frequent speaker at major telecommunications, data center, and digital infrastructure conferences, where he shares insights on edge computing, AI infrastructure, and scalable deployment models. He began his professional career serving in the United States Marine Corps, an experience that shaped his leadership philosophy and enduring focus on teamwork, discipline, and execution.",
      operationalRole: "Corporate Strategy | Growth | Capital Allocation | Executive Leadership"
    },
    {
      id: "dipan",
      name: "Dipan Patel",
      role: "Chief Operating Officer",
      subRole: "",
      company: "Duos Technologies Group, Inc.",
      image: "/team/Dipan-patel.png",
      linkedin: "https://www.linkedin.com/in/dipanpatelphd?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      bio: "As Chief Operating Officer of Duos Technologies Group, Inc., Dipan Patel leads the company's growth strategy and has full operational accountability for the deployment of Edge AI data centers and GPU-as-a-Service platforms across the United States. Working directly with the CEO and CFO, he drives performance across the business and is building the leadership and operational infrastructure to deliver on Duos' ambitions as a next-generation AI infrastructure platform.\n\nPrior to joining Duos, Mr. Patel served as Digital Infrastructure Solutions Executive at Telstra InfraCo, where he was responsible for product strategy, solution innovation and commercial monetization across InfraCo's $25 billion-plus national portfolio of data centers, fiber networks, exchange facilities and critical communications infrastructure.\n\nPreviously, he served as EVP of Strategy, Technology and New Business Initiatives at SBA Communications, where he founded the corporate growth division, deploying more than $200 million in capital across edge data centers, fiber and infrastructure adjacencies. Prior to SBA, he was a senior executive at Cox Communications and began his career at Accenture.\n\nMr. Patel holds a Ph.D. in Digital Communications and a BEng in Information Systems Engineering from Imperial College London. He is a Senior Member of the IEEE and holds 12 granted domestic and international patents.",
      operationalRole: "Growth Strategy | Data Center Deployment | Operational Execution | Digital Infrastructure"
    },
    {
      id: "chris",
      name: "Christopher “Chris” DeAlmeida",
      role: "Chief Financial Officer",
      subRole: "",
      company: "Duos Technologies Group, Inc.",
      image: "/team/Chris.png",
      linkedin: "https://www.linkedin.com/in/christopherdealmeida?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      bio: "Christopher “Chris” DeAlmeida serves as Chief Financial Officer of Duos Technologies Group, Inc. He is a strategic financial executive with more than 20 years of experience leading finance, operations and corporate development for NYSE- and Nasdaq-listed companies, private equity-backed platforms and high-growth ventures.\n\nPrior to joining Duos, Mr. DeAlmeida served as President and Chief Financial Officer of SaferMobility and as a Financial Advisor to the Founder and CEO of Odilia Holdings. Previously, he served as Chief Financial Officer of Wrap Technologies, Inc., a Nasdaq-listed global public safety technology and services company, and Chief Financial Officer of Encore Drilling Partners, a private equity-backed marine infrastructure platform. Earlier in his career, he held increasingly senior positions at Orion Group Holdings, Inc., culminating as Chief Financial Officer, Treasurer and Executive Vice President.\n\nMr. DeAlmeida holds a Bachelor of Science in Finance from the University of Houston-Clear Lake.",
      operationalRole: "Financial Strategy | Capital Management | Corporate Development | Financial Operations"
    },
    {
      id: "kristen",
      name: "Kristen Sanderson",
      role: "Senior Vice President",
      subRole: "Infrastructure Lead",
      company: "Duos Technology Solutions, Inc.",
      image: "/team/KristenSanderson.jpg",
      linkedin: "https://www.linkedin.com/in/kristen-sanderson-b221999/",
      bio: "Kristen Sanderson is a senior technology and infrastructure executive with more than 20 years of experience navigating the full data center ecosystem, from hyperscale AI environments to edge and modular deployments in supply-constrained markets. As Senior Vice President at Duos Technologies, Inc., she leads strategic growth initiatives across North America, advising customers on resilient procurement strategies, data center deployments, and execution models that mitigate manufacturing delays, labor shortages, and supply chain volatility. Throughout her career, Kristen has built deep working relationships with leading AI hyperscaler and data center manufacturers across power, cooling, connectivity, networking, and infrastructure deployments. Her vendor-agnostic approach enables organizations to preserve basis-of-design integrity while activating pre-approved alternates based on lead time, availability, or cost—without compromising reliability, performance, or standardization. This expertise is especially critical as AI infrastructure demand competes for constrained manufacturing capacity within the Data Center markets. Prior to joining Duos Technologies, Kristen spent more than a decade at Accu-Tech Corporation as Director of Data Center Solutions, where she led enterprise and multi-tenant deployments spanning white space infrastructure, high-density power and cooling systems, custom enclosures, fiber and network architecture, DAS, security, and integrated services. She regularly partnered with hyperscaler-grade manufacturers while tailoring solutions for smaller operators who cannot absorb 50–70 week component lead times. Kristen is widely recognized for her expertise in supply chain resilience for AI and edge data centers, including dual sourcing frameworks, creative procurement alternatives, and materials management strategies that reduce onsite labor requirements. Her experience with phased delivery and construction-aligned logistics has helped eliminate 20–40% of onsite labor hours on complex deployments. She is a strong advocate for modular data center strategies that future-proof AI infrastructure—enabling phased capital deployment, shorter lead times, reduced power and water dependencies, and faster execution compared to large hyperscale builds. Kristen is especially focused on empowering mid-market operators, regional clouds, enterprises, and public sector organizations that are often crowded out of the supply chain by hyperscalers. A multiple-time recipient of Accu-Tech’s President’s Club and the Staples Sales Excellence Award, Kristen is known for translating complex ecosystem dynamics into practical decision frameworks for IT leaders, engineers, and procurement teams. She holds a Bachelor of Science in Business Administration from the University of Colorado Boulder and is a frequent speaker on AI data center supply chain resilience, procurement agility, and execution efficiency.",
      operationalRole: "Technology Solutions | Strategic Growth | Infrastructure Solutions | Partnerships"
    },
    {
      id: "bill",
      name: "Bill Radford",
      role: "Founding Chief Technology Officer",
      subRole: "Co-Founder",
      company: "Duos Edge AI, Inc.",
      image: "/team/BillRadford.jpg",
      linkedin: "https://www.linkedin.com/in/billradford",
      bio: "Bill Radford is a seasoned technology executive with over 31 years of experience in executive leadership, business development, and cybersecurity across MSP, telephony, call center, and data center infrastructures. He currently serves at Duos Edge AI, where he is helping to redefine the future of modular and edge data center deployment for AI, high-density compute, and 5G environments. Recognized as a thought leader in infrastructure consolidation and standardization, Bill has a proven track record of designing and implementing scalable, secure technology ecosystems that enable rapid growth and operational efficiency. He has led global initiatives for regulatory compliance and has developed certification programs for ISO 27001, SOC 2, PCI, and HIPAA. Bill’s deep expertise spans international business development, data warehousing, IT infrastructure strategy, program management, and risk management—making him a key driver in delivering transformative, resilient technologies that power today’s digital economy.",
      operationalRole: "Formulates systems architecture, cybersecurity protocols, and next-generation edge compute designs."
    },
    {
      id: "shamar",
      name: "Shamar Gray",
      role: "VP of Operations",
      subRole: "Operations Lead",
      company: "Duos Edge AI, Inc.",
      image: "/team/ShamarGray.jpg",
      linkedin: "https://www.linkedin.com/company/duos-technologies/",
      bio: "Shamar D. Gray is a decorated U.S. Navy veteran with over 34 years of leadership experience in large-scale infrastructure operations, maintenance, and modernization— he led initiatives focused on operational excellence and technical project delivery across complex, high-security environments. Mr. Gray has deep expertise in managing and modernizing advanced fleet assets and supporting mission-critical facilities across the defense sector. Over the course of his naval career, Mr. Gray held senior positions within submarine force commands, naval shipyards, and fleet readiness centers. He successfully led multimillion-dollar modernization programs for U.S. Navy fast-attack and ballistic missile submarines, ensuring precision execution across maintenance cycles, technology integration, and operational planning. At Duos Edge AI, Mr. Gray applies his decades of expertise in mission-critical infrastructure to support the planning and deployment of Edge Data Center (EDC) solutions in underserved and remote areas. His ability to lead complex operations and cross-functional teams will help Duos Edge AI deliver systems at the highest standards of reliability, scalability, and security. Mr. Gray holds a Master of Science in Management with an emphasis in Project Management.",
      operationalRole: "Manages day-to-day operations, hardware integration pipelines, and on-site facility deployments."
    },
    {
      id: "erich",
      name: "Erich Recker",
      role: "Vice President, Marketing & Communications",
      subRole: "",
      company: "Duos Technologies Group, Inc.",
      image: "/team/placeholder.jpg",
      linkedin: "#",
      bio: "Erich Recker serves as Vice President of Marketing and Communications for Duos Technologies Group, Inc., where he leads corporate communications, brand strategy, media relations and stakeholder communications. An award-winning storyteller and communications strategist, he translates complex technologies and business strategies into compelling narratives that increase brand awareness, strengthen market positioning and support growth.\n\nThroughout his career, Mr. Recker has developed and produced strategic content for studios and networks including Paramount, Warner Bros., A&E, Discovery and The CW, and for consumer brands including KIND, Natural Balance and Quest Nutrition. A sampling of his credits includes “Criss Angel Mindfreak” and “Dr. Phil,” as well as a feature documentary created in collaboration with the United States Marine Corps about Major James Capers Jr. His work has earned an Emmy Award and multiple Telly Awards.",
      operationalRole: "Corporate Communications | Brand Strategy | Media Relations | Stakeholder Communications"
    },
    {
      id: "rochelle",
      name: "Rochelle Price",
      role: "Director of Operations",
      subRole: "",
      company: "Duos Edge AI, Inc.",
      image: "/team/Rochelle.png",
      linkedin: "https://www.linkedin.com/in/rochellebaileypricedba/",
      bio: "Rochelle Price brings more than 15 years of executive leadership experience across the data center, technology and business services sectors. Her expertise includes operational strategy, financial management, compliance and business process improvement. At Duos Edge AI, she led the company's SOC 1 and SOC 2 compliance initiatives, supporting operational excellence, security and customer trust.",
      operationalRole: "Operational Strategy | Compliance | Financial Management | Business Process Improvement"
    },
    {
      id: "mike",
      name: "Mike Ellison",
      role: "VP of Sales",
      subRole: "Sales Lead",
      company: "Duos Technology Solutions, Inc.",
      image: "/team/MikeEllison.jpg",
      linkedin: "https://www.linkedin.com/company/duos-technologies/",
      bio: "Mike Ellison brings more than 28 years of experience in the telecommunications industry, with a proven track record of leadership across both enterprise and public sector markets. Throughout his career, he has developed innovative technology solutions and built strategic partnerships that strengthen community engagement, expand educational opportunities, and support economic development. His expertise includes navigating complex communications environments and helping organizations leverage technology to achieve business objectives. Mike is passionate about creating meaningful impact by advancing initiatives that help bridge the digital divide and empower underserved communities. By combining deep technical knowledge with a strong understanding of customer and community needs, he has consistently led teams in delivering solutions that drive long-term value. Mike is also a proud veteran of the United States Marine Corps.",
      operationalRole: "Guides the commercial sales strategy, client relations, and market expansion channels."
    },
    {
      id: "kimberly",
      name: "Kimberly Watson",
      role: "Carrier Sales Director",
      subRole: "Carrier Sales Lead",
      company: "Duos Edge AI, Inc.",
      image: "/team/KimberlyWatson.jpg",
      linkedin: "https://www.linkedin.com/in/kimberly-watson-salesprofessional/",
      bio: "Kimberly is a Carrier Sales Director with more than 20 years of experience driving revenue growth, market expansion, and strategic account development across complex, carrier-grade network environments. She brings deep expertise in core network infrastructure, delivering scalable solutions for carriers, service providers, partners, and enterprise customers. A strategic and adaptable leader, Kimberly specializes in core network expansion, cross-functional alignment, and translating evolving customer needs into actionable growth strategies. Her disciplined execution and clear communication consistently deliver measurable business impact. Her experience spans fiber transport, wireless networks, cloud and edge connectivity, cybersecurity, managed services, and complex contract negotiations. A multiple-time President’s Club and Chairman’s Club award recipient, Kimberly has held senior roles at ICG, EarthLink, Comcast, and Crown Castle. She holds degrees in Communications and Marketing.",
      operationalRole: "Directs carrier relations, telecommunication partnerships, and connectivity accounts."
    },
    {
      id: "matt",
      name: "Matt Leach",
      role: "Vice President",
      subRole: "",
      company: "Duos Technology Solutions, Inc.",
      image: "/team/MattLeach.png",
      linkedin: "https://www.linkedin.com/in/carlmatthewleach/",
      bio: "Biography details for Matt Leach will be updated soon.",
      operationalRole: ""
    }
  ];

  const titleText = "Leadership Driving Infrastructure Innovation";

  return (
    <section ref={containerRef} className={styles.section} id="leadership">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>Meet the Team</span>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>{titleText}</h2>
          </div>
          <p className={styles.description}>
            Our leadership team combines decades of experience in infrastructure, engineering, operations, and technology. Together, they are guiding Duos as it expands next-generation AI infrastructure designed to meet the growing demands of enterprise computing.
          </p>
          <div className={styles.overlineDecoBar}></div>
        </div>

        <div className={styles.grid}>
          {team.map((member, index) => (
            <div
              key={index}
              onClick={() => {
                if (typeof window !== "undefined" && window.innerWidth <= 768) {
                  router.push(`/teamSection/${member.id}`);
                } else {
                  setActiveModalMember(member);
                }
              }}
              className={styles.card}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.imageWrapper}>
                <img src={member.image} alt={member.name} className={styles.avatar} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>

                {member.company && <p className={styles.company} style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>{member.company}</p>}
                <div className={styles.socials} onClick={(e) => e.stopPropagation()}>
                  <a href={member.linkedin} className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModalMember && (
        <div className={styles.modalOverlay} onClick={() => setActiveModalMember(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setActiveModalMember(null)} aria-label="Close details">
              ✕
            </button>
            <div className={styles.modalGrid}>
              <div className={styles.modalLeft}>
                <div className={styles.modalImageWrapper}>
                  <img src={activeModalMember.image} alt={activeModalMember.name} className={styles.modalAvatar} />
                </div>
                <h3 className={styles.modalName}>{activeModalMember.name}</h3>
                <p className={styles.modalRole}>{activeModalMember.role}</p>

                {activeModalMember.company && <p className={styles.modalCompany} style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '6px', fontWeight: '500' }}>{activeModalMember.company}</p>}
                <div className={styles.modalSocials}>
                  <a href={activeModalMember.linkedin} className={styles.modalSocialLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                </div>
              </div>
              <div className={styles.modalRight}>
                <div className={styles.modalSection}>
                  <h4 className={styles.modalSecTitle}>Biography</h4>
                  <p className={styles.modalBio} style={{ whiteSpace: 'pre-wrap' }}>{activeModalMember.bio}</p>
                </div>
                <div className={styles.modalSection}>
                  <h4 className={styles.modalSecTitle}>Operational Focus</h4>
                  <p className={styles.modalFocus}>{activeModalMember.operationalRole}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
