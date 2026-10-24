"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./LinkedInFeed.module.css";

export default function LinkedInFeed() {
  const containerRef = useRef(null);
  const titleText = "Latest from LinkedIn";

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
      }, containerRef);
    }
    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  const posts = [
    {
      id: 1,
      author: "Duos Technologies",
      handle: "@duostech",
      time: "2 days ago",
      content: "🚀 Exciting news from our Edge AI division! Our latest modular edge data center in Waco, Texas is now fully operational. Delivering low-latency compute and robust infrastructure closer to where it's needed most. #EdgeComputing #AI #DigitalInfrastructure",
      likes: 142,
      comments: 18,
      shares: 12,
      tag: "Company Update"
    },
    {
      id: 2,
      author: "Duos Technologies",
      handle: "@duostech",
      time: "1 week ago",
      content: "🔒 Patented Clean Room entryways protect our Duos Pods from extreme weather and onsite airborne contaminants. Engineering reliability into every modular deployment. Read our latest technology brief on duosedge.ai/news.",
      likes: 89,
      comments: 7,
      shares: 5,
      tag: "Tech Innovation"
    },
    {
      id: 3,
      author: "Duos Technologies",
      handle: "@duostech",
      time: "2 weeks ago",
      content: "🤝 Partnering with regional utilities and enterprise campuses to modernize compute infrastructure across North America. See how our Edge AI architectures deliver efficiency and scalability at every touchpoint.",
      likes: 215,
      comments: 31,
      shares: 24,
      tag: "Announcement"
    }
  ];

  return (
    <section ref={containerRef} className={styles.section} id="social-feed">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>Social Feed</span>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>{titleText}</h2>
          </div>
          <p className={styles.subtitle}>
            Stay up to date with Duos Technologies announcements, deployments, and digital infrastructure insights.
          </p>
        </div>

        <div className={styles.feedCard}>

          <div className={styles.profileHeader}>
            <div className={styles.profileInfo}>
              <div className={styles.logoWrapper}>
                <img src="/hero-logo/edgeai.png" alt="Duos Logo" className={styles.profileLogo} />
              </div>
              <div className={styles.profileNameGroup}>
                <h3 className={styles.profileName}>Duos Technologies</h3>
                <span className={styles.profileMeta}>1,850+ followers • Technology, Information and Internet</span>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/company/duos-technologies/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.followBtn}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
              Follow
            </a>
          </div>

          <div className={styles.postsGrid}>
            {posts.map((post) => (
              <div key={post.id} className={styles.postCard}>
                <div className={styles.postHeader}>
                  <div className={styles.authorLogo}>D</div>
                  <div className={styles.authorMeta}>
                    <span className={styles.authorName}>{post.author}</span>
                    <span className={styles.postTime}>{post.time}</span>
                  </div>
                  <span className={styles.postTag}>{post.tag}</span>
                </div>

                <p className={styles.postContent}>{post.content}</p>

                <div className={styles.postStats}>
                  <span className={styles.statItem}>
                    👍 {post.likes}
                  </span>
                  <span className={styles.statRight}>
                    {post.comments} comments • {post.shares} shares
                  </span>
                </div>

                <div className={styles.postActions}>
                  <a
                    href="https://www.linkedin.com/company/duos-technologies/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionBtn}
                  >
                    <span>Like</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/duos-technologies/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionBtn}
                  >
                    <span>Comment</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/duos-technologies/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionBtn}
                  >
                    <span>Share</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
