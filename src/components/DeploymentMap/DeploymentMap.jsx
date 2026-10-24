"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./DeploymentMap.module.css";
import { USA_STATES } from "./usaStatePaths";

const CITIES = [
  {
    name: "Amarillo R16",
    state: "Texas",
    stateAbbr: "TX",
    type: "Active Pod",
    status: "Operational",
    features: "10MW Capacity",
    details: "High-density active pod configured for immediate edge AI workload support.",
    image: "/why-duos/why-duos-hero.png",
    usaX: 390,
    usaY: 372,
    stateX: 224,
    stateY: 100
  },
  {
    name: "Victoria Pod",
    state: "Texas",
    stateAbbr: "TX",
    type: "Active Pod",
    status: "Operational",
    features: "5MW Capacity",
    details: "Active infrastructure pod supporting regional telecom and municipal network loads.",
    image: "/why-duos/pod2.png",
    usaX: 468,
    usaY: 492,
    stateX: 388,
    stateY: 440
  },
  {
    name: "Hereford Pod",
    state: "Texas",
    stateAbbr: "TX",
    type: "Active Pod",
    status: "Operational",
    features: "5MW Capacity",
    details: "Active edge deployment providing localized low-latency data processing.",
    image: "/why-duos/pod2.png",
    usaX: 370,
    usaY: 420,
    stateX: 196,
    stateY: 137,
    stateLinePoints: "196,137 130,137",
    stateTextX: 45,
    stateTextY: 141,
    usaLinePoints: "300,420 250,420",
    usaTextX: 165,
    usaTextY: 424
  },
  {
    name: "Dumas Pod",
    state: "Texas",
    stateAbbr: "TX",
    type: "Active Pod",
    status: "Operational",
    features: "5MW Capacity",
    details: "Dumas active pod offering secure, high-density edge colocation facility.",
    image: "/why-duos/pod2.png",
    usaX: 380,
    usaY: 360,
    stateX: 223,
    stateY: 60,
    stateLinePoints: "223,60 250,40 300,40",
    stateTextX: 305,
    stateTextY: 44,
    usaLinePoints: "320,404 340,385 380,385",
    usaTextX: 385,
    usaTextY: 389
  },
  {
    name: "Corpus Christi A",
    state: "Texas",
    stateAbbr: "TX",
    type: "Active Pod",
    status: "Operational",
    features: "5MW Capacity",
    details: "Primary coastal modular edge deployment serving local industrial hubs.",
    image: "/why-duos/why-duos-hero.png",
    usaX: 458,
    usaY: 518,
    stateX: 375,
    stateY: 485,
    stateLinePoints: "375,485 340,485",
    stateTextX: 235,
    stateTextY: 489,
    usaLinePoints: "458,518 430,518",
    usaTextX: 320,
    usaTextY: 522
  },
  {
    name: "Corpus Christi B",
    state: "Texas",
    stateAbbr: "TX",
    type: "Active Pod",
    status: "Operational",
    features: "5MW Capacity",
    details: "Secondary modular pod providing backup power and redundant network connectivity.",
    image: "/why-duos/pod2.png",
    usaX: 465,
    usaY: 528,
    stateX: 382,
    stateY: 504,
    stateLinePoints: "382,504 402,514 430,514",
    stateTextX: 435,
    stateTextY: 518,
    usaLinePoints: "465,528 480,538 505,538",
    usaTextX: 510,
    usaTextY: 542
  },
  {
    name: "Waco Pod",
    state: "Texas",
    stateAbbr: "TX",
    type: "Active Pod",
    status: "Operational",
    features: "10MW Capacity",
    details: "Regional central hub node connecting multiple municipal network clusters.",
    image: "/why-duos/2.PNG",
    usaX: 495,
    usaY: 460,
    stateX: 410,
    stateY: 312
  },
  {
    name: "Lubbock A Pod",
    state: "Texas",
    stateAbbr: "TX",
    type: "Active Pod",
    status: "Operational",
    features: "5MW Capacity",
    details: "Modular AI-ready deployment node executing local GPU operations.",
    image: "/why-duos/why-duos-hero.png",
    usaX: 452,
    usaY: 426,
    stateX: 223,
    stateY: 213,
    stateLinePoints: "223,213 180,213",
    stateTextX: 95,
    stateTextY: 217,
    usaLinePoints: "322,436 272,436",
    usaTextX: 185,
    usaTextY: 440
  },
  {
    name: "Lubbock B Pod",
    state: "Texas",
    stateAbbr: "TX",
    type: "Active Pod",
    status: "Operational",
    features: "5MW Capacity",
    details: "Co-located active pod expanding the West Texas regional processing pool.",
    image: "/why-duos/2.PNG",
    usaX: 440,
    usaY: 442,
    stateX: 235,
    stateY: 225,
    stateLinePoints: "235,225 250,235 280,235",
    stateTextX: 285,
    stateTextY: 239,
    usaLinePoints: "330,442 345,452 375,452",
    usaTextX: 380,
    usaTextY: 456
  },
  {
    name: "Abilene Pod",
    state: "Texas",
    stateAbbr: "TX",
    type: "Active Pod",
    status: "Operational",
    features: "5MW Capacity",
    details: "Active edge data center built with pre-fabricated modular design.",
    image: "/why-duos/pod2.png",
    usaX: 435,
    usaY: 432,
    stateX: 280,
    stateY: 262
  },
  {
    name: "Amarillo 2 Pod- Upcoming Installation",
    state: "Texas",
    stateAbbr: "TX",
    type: "Upcoming Pod",
    status: "Upcoming",
    features: "10MW Capacity",
    details: "Planned expansion node providing high-density compute capacity.",
    image: "/why-duos/why-duos-hero.png",
    usaX: 408,
    usaY: 396,
    stateX: 240,
    stateY: 122,
    stateLinePoints: "240,122 280,150 285,150",
    stateTextX: 290,
    stateTextY: 154,
    usaLinePoints: "328,416 350,428 380,428",
    usaTextX: 385,
    usaTextY: 432
  },
  {
    name: "Columbus Data Center",
    state: "Georgia",
    stateAbbr: "GA",
    type: "Data Center Facility",
    status: "Operational",
    features: "Data Center Facility",
    details: "Regional data center facility providing high-capacity digital infrastructure and enterprise colocation.",
    image: "/why-duos/why-duos-hero.png",
    usaX: 680,
    usaY: 415,
    stateX: 165,
    stateY: 280,

    stateTextX: 10,
    stateTextY: 254,
    usaLinePoints: "680,415 650,415",
    usaTextX: 525,
    usaTextY: 419
  }
];

export default function DeploymentMap() {
  const sectionRef = useRef(null);
  const detailCardRef = useRef(null);

  const [activeState, setActiveState] = useState("USA");
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);
  const [hoveredCity, setHoveredCity] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1.0);

  const titleText = "Strategic Edge Deployments";

  useEffect(() => {
    let ctx;
    if (typeof window !== "undefined") {
      const ScrollTrigger = require("gsap/dist/ScrollTrigger").ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
            toggleActions: "restart reset restart reset"
          }
        });

        tl.fromTo(
          `.${styles.secTitleWrapper}`,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out"
          }
        );
      }, sectionRef);
    }
    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 2.5));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.6));
  };

  const handleZoomReset = () => {
    setZoomLevel(1.0);
  };

  const baseSize = 554;
  const size = baseSize / zoomLevel;
  const offset = (baseSize - size) / 2;
  const currentViewBox = `${offset} ${offset} ${size} ${size}`;

  const filteredCities = activeState === "USA" ? CITIES : CITIES.filter(city => city.state === activeState);

  const currentCityIndex = filteredCities.findIndex(c => c.name === selectedCity.name);
  const totalCitiesCount = filteredCities.length;

  const handleStateChange = (stateName) => {
    setActiveState(stateName);
    const matchingCities = stateName === "USA" ? CITIES : CITIES.filter(c => c.state === stateName);
    if (matchingCities.length > 0) {
      handleCitySelect(matchingCities[0]);
    }
  };

  const handleCitySelect = (city) => {
    if (city.name === selectedCity.name) return;

    gsap.to(detailCardRef.current, {
      opacity: 0,
      y: 15,
      duration: 0.25,
      onComplete: () => {
        setSelectedCity(city);
        gsap.to(detailCardRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out"
        });
      }
    });
  };

  const handleNextCity = () => {
    if (totalCitiesCount <= 1) return;
    const nextIdx = (currentCityIndex + 1) % totalCitiesCount;
    handleCitySelect(filteredCities[nextIdx]);
  };

  const handlePrevCity = () => {
    if (totalCitiesCount <= 1) return;
    const prevIdx = (currentCityIndex - 1 + totalCitiesCount) % totalCitiesCount;
    handleCitySelect(filteredCities[prevIdx]);
  };

  return (
    <section ref={sectionRef} className={styles.section} id="deployments">
      <div className={styles.container}>

        <div className={styles.leftCol}>
          <span className={styles.overline}>Markets & Deployment</span>
          <div className={styles.secTitleWrapper}>
            <h2 className={styles.secTitle}>{titleText}</h2>
          </div>
          <p className={styles.secDescription}>
            Duos he next generation of AI and data-driven applications. Explore active locations by state.
          </p>

          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>SELECT STATE</span>
            <div className={styles.btnRow}>
              <button
                className={`${styles.stateBtn} ${activeState === "USA" ? styles.btnActive : styles.btnUnactive}`}
                onClick={() => handleStateChange("USA")}
              >
                USA <span className={styles.countBadge}>{CITIES.length}</span>
              </button>
              <button
                className={`${styles.stateBtn} ${activeState === "Texas" ? styles.btnActive : styles.btnUnactive}`}
                onClick={() => handleStateChange("Texas")}
              >
                Texas <span className={styles.countBadge}>{CITIES.filter(c => c.state === "Texas").length}</span>
              </button>
              <button
                className={`${styles.stateBtn} ${activeState === "Georgia" ? styles.btnActive : styles.btnUnactive}`}
                onClick={() => handleStateChange("Georgia")}
              >
                Georgia <span className={styles.countBadge}>{CITIES.filter(c => c.state === "Georgia").length}</span>
              </button>
            </div>
          </div>

          <div className={styles.infoHint}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.infoIcon}>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span>Select a location to view site details.</span>
          </div>

          <div className={styles.legendBox}>
            <span className={styles.legendTitle}>MAP SETTING</span>

            <div className={styles.zoomControls}>
              <button className={styles.zoomBtn} onClick={handleZoomIn} aria-label="Zoom in">+</button>
              <button className={styles.zoomBtn} onClick={handleZoomOut} aria-label="Zoom out">−</button>
              <button className={styles.resetBtn} onClick={handleZoomReset}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span>Reset view</span>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.centerCol}>

          <div className={styles.miniMapBox}>
            <svg viewBox="0 0 990 627" className={styles.miniUSMap}>
              {USA_STATES.map((state) => {
                const isActiveState = state.name === "Texas" || state.name === "Georgia";
                const isSelectedState = state.name === activeState;
                return (
                  <path
                    key={state.id}
                    d={state.path}
                    className={`${styles.miniStatePath} ${isActiveState ? styles.miniStateActive : ""} ${isSelectedState ? styles.miniStateSelected : ""}`}
                    onClick={() => {
                      if (isActiveState) handleStateChange(state.name);
                    }}
                  />
                );
              })}
            </svg>

            <div className={styles.previewTag}>
              <span className={styles.previewLabel}>{activeState.toUpperCase()} PREVIEW ↓</span>
            </div>
          </div>

          <div className={styles.zoomedMapContainer}>
            {activeState === "USA" ? (
              <svg
                viewBox="0 0 990 627"
                className={styles.zoomedSVG}
                role="img"
                aria-label="USA data center deployment locations"
              >
                <defs>
                  <filter id="glow" x="-300%" y="-300%" width="700%" height="700%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                    <feColorMatrix
                      in="blur"
                      type="matrix"
                      values="1 0 0 0 0
                              0 1 0 0 0
                              0 0 1 0 0
                              0 0 0 0.5 0"
                      result="glowColor"
                    />
                    <feMerge>
                      <feMergeNode in="glowColor" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {USA_STATES.map((state) => {
                  const isHighlightState = state.name === "Texas" || state.name === "Georgia";
                  return (
                    <path
                      key={state.id}
                      d={state.path}
                      className={`${styles.zoomedStatePath} ${isHighlightState ? styles.zoomedStateActiveUSA : ""}`}
                      filter="url(#glow)"
                    />
                  );
                })}

                {CITIES.map((city, idx) => (
                  <g
                    key={idx}
                    className={styles.cityGroup}
                    onClick={() => handleCitySelect(city)}
                    onMouseEnter={() => setHoveredCity(city)}
                    onMouseLeave={() => setHoveredCity(null)}
                  >
                    <circle
                      cx={city.usaX}
                      cy={city.usaY}
                      r="12"
                      className={`${styles.pulseOuter} ${selectedCity.name === city.name ? styles.pulseSelected : ""} ${city.status === "Upcoming" ? styles.pulseUpcoming : ""}`}
                    />
                    <circle
                      cx={city.usaX}
                      cy={city.usaY}
                      r="5.5"
                      className={`${styles.cityDot} ${selectedCity.name === city.name ? styles.dotSelected : ""} ${city.status === "Upcoming" ? styles.dotUpcoming : ""}`}
                    />
                  </g>
                ))}
              </svg>
            ) : activeState === "Texas" ? (
              <svg
                viewBox={currentViewBox}
                className={styles.zoomedSVG}
                role="img"
                aria-label="Texas data center deployment locations"
              >
                <defs>
                  <filter id="glow" x="-300%" y="-300%" width="700%" height="700%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                    <feColorMatrix
                      in="blur"
                      type="matrix"
                      values="1 0 0 0 0
                              0 1 0 0 0
                              0 0 1 0 0
                              0 0 0 0.5 0"
                      result="glowColor"
                    />
                    <feMerge>
                      <feMergeNode in="glowColor" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path
                  id="texas-outline"
                  d="M 171 31 L 167 33 L 166 37 L 165 38 L 165 240 L 164 242 L 161 244 L 31 244 L 30 248 L 32 250 L 32 252 L 34 254 L 35 257 L 42 262 L 42 264 L 44 266 L 46 270 L 50 274 L 51 274 L 54 277 L 55 277 L 58 280 L 59 280 L 64 285 L 65 285 L 66 287 L 75 296 L 75 297 L 76 297 L 83 303 L 86 304 L 95 313 L 100 323 L 100 325 L 101 326 L 101 328 L 103 332 L 103 335 L 104 336 L 104 339 L 105 340 L 107 348 L 112 355 L 112 356 L 117 360 L 118 360 L 121 363 L 125 365 L 128 368 L 131 369 L 133 371 L 136 372 L 143 377 L 148 379 L 157 385 L 163 385 L 165 383 L 166 383 L 172 376 L 175 370 L 175 368 L 177 365 L 177 363 L 178 362 L 178 360 L 180 356 L 184 352 L 191 348 L 193 348 L 194 347 L 202 347 L 203 348 L 217 349 L 218 350 L 222 350 L 223 351 L 227 352 L 250 375 L 250 376 L 252 378 L 252 380 L 254 383 L 254 385 L 258 392 L 258 394 L 267 412 L 269 414 L 271 419 L 274 422 L 274 423 L 277 426 L 277 427 L 282 432 L 286 440 L 289 441 L 295 447 L 296 449 L 296 452 L 297 453 L 297 458 L 298 459 L 299 465 L 301 468 L 301 470 L 303 473 L 304 478 L 307 483 L 307 485 L 309 488 L 309 490 L 312 495 L 312 497 L 315 499 L 317 499 L 325 503 L 327 503 L 331 506 L 333 506 L 335 508 L 339 509 L 341 511 L 343 511 L 344 512 L 346 512 L 350 514 L 353 514 L 354 515 L 365 515 L 371 521 L 373 522 L 379 522 L 381 521 L 385 517 L 386 515 L 385 514 L 385 511 L 384 510 L 383 504 L 381 501 L 380 495 L 378 492 L 378 489 L 377 488 L 377 485 L 376 484 L 376 479 L 375 478 L 375 472 L 376 471 L 376 467 L 378 463 L 378 461 L 375 458 L 380 454 L 381 450 L 382 449 L 382 441 L 381 440 L 380 436 L 381 435 L 387 434 L 389 432 L 391 427 L 393 425 L 396 427 L 397 427 L 399 425 L 399 422 L 400 421 L 400 418 L 401 417 L 401 414 L 402 413 L 408 413 L 414 409 L 415 406 L 411 401 L 412 400 L 431 400 L 432 399 L 438 398 L 442 396 L 447 392 L 448 392 L 471 369 L 472 367 L 472 363 L 469 359 L 468 356 L 472 352 L 474 351 L 476 352 L 476 354 L 475 355 L 475 359 L 477 361 L 480 361 L 481 360 L 484 360 L 488 358 L 495 357 L 499 355 L 506 354 L 510 351 L 510 348 L 509 346 L 515 338 L 515 336 L 516 335 L 516 330 L 517 329 L 517 327 L 516 326 L 516 320 L 515 319 L 515 316 L 516 315 L 516 313 L 518 311 L 521 305 L 521 302 L 522 301 L 522 298 L 523 297 L 523 289 L 522 288 L 522 284 L 521 283 L 520 277 L 516 270 L 516 268 L 514 265 L 514 263 L 510 255 L 509 250 L 505 242 L 505 234 L 504 233 L 504 188 L 505 187 L 505 180 L 504 179 L 503 173 L 499 170 L 490 170 L 489 169 L 486 169 L 482 167 L 477 163 L 476 163 L 470 158 L 466 156 L 464 156 L 463 155 L 459 155 L 458 154 L 456 155 L 452 155 L 451 156 L 439 156 L 438 157 L 434 157 L 433 158 L 431 158 L 430 159 L 428 159 L 424 161 L 421 161 L 418 163 L 416 163 L 413 160 L 409 158 L 403 157 L 402 156 L 399 156 L 395 154 L 392 154 L 388 159 L 387 159 L 385 157 L 379 157 L 378 156 L 376 156 L 375 155 L 373 155 L 369 153 L 364 153 L 362 155 L 359 156 L 356 152 L 356 151 L 351 146 L 349 145 L 347 145 L 346 144 L 327 144 L 326 143 L 320 142 L 314 139 L 308 133 L 304 131 L 300 131 L 299 132 L 294 132 L 293 131 L 291 131 L 289 130 L 285 126 L 284 122 L 283 121 L 283 116 L 282 115 L 282 54 L 283 53 L 283 39 L 282 38 L 282 35 L 281 33 L 277 31 Z"
                  className={styles.zoomedStatePath}
                  filter="url(#glow)"
                />

                {CITIES.filter(c => c.state === "Texas").map((city, idx) => (
                  <g
                    key={idx}
                    className={styles.cityGroup}
                    onClick={() => handleCitySelect(city)}
                    onMouseEnter={() => setHoveredCity(city)}
                    onMouseLeave={() => setHoveredCity(null)}
                  >
                    <circle
                      cx={city.stateX}
                      cy={city.stateY}
                      r="14"
                      className={`${styles.pulseOuter} ${selectedCity.name === city.name ? styles.pulseSelected : ""} ${city.status === "Upcoming" ? styles.pulseUpcoming : ""}`}
                    />
                    <circle
                      cx={city.stateX}
                      cy={city.stateY}
                      r="5.5"
                      className={`${styles.cityDot} ${selectedCity.name === city.name ? styles.dotSelected : ""} ${city.status === "Upcoming" ? styles.dotUpcoming : ""}`}
                    />
                    {city.stateLinePoints && (
                      <polyline
                        points={city.stateLinePoints}
                        className={styles.leaderLine}
                        fill="none"
                      />
                    )}
                    <text
                      x={city.stateTextX !== undefined ? city.stateTextX : city.stateX + 14}
                      y={city.stateTextY !== undefined ? city.stateTextY : city.stateY + 4}
                      className={`${styles.cityText} ${selectedCity.name === city.name ? styles.textSelected : ""}`}
                    >
                      {city.name.replace("- Upcoming Installation", "")}
                    </text>
                  </g>
                ))}
              </svg>
            ) : (
              <svg
                viewBox={currentViewBox}
                className={styles.zoomedSVG}
                role="img"
                aria-label="Georgia data center deployment locations"
              >
                <defs>
                  <filter id="glow" x="-300%" y="-300%" width="700%" height="700%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                    <feColorMatrix
                      in="blur"
                      type="matrix"
                      values="1 0 0 0 0
                              0 1 0 0 0
                              0 0 1 0 0
                              0 0 0 0.5 0"
                      result="glowColor"
                    />
                    <feMerge>
                      <feMergeNode in="glowColor" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path
                  id="georgia-outline"
                  d="m 761.8,414.1 v 1.4 l -4.2,6.2 -1.2,.2 1.5,.5 v 2 l -.9,1.1 -.6,6 -2.3,6.2 .5,2 .7,5.1 -3.6,.3 -4,-.7 -1.7,-.9 -2.2,1.4 v 2.5 l 1.4,2.1 -.5,4.3 -2.1,.6 -1,-1.1 -.6,-3.2 -50.1,3.3 -3.3,-6 -.7,-2.2 -1.5,-1.5 -.5,-1.4 .6,-6.3 -2.4,-5.7 .5,-2.6 .3,-3.7 2.2,-3.8 -.2,-1.1 -1.7,-1 v -3.2 l -1.8,-1.9 -2.9,-6.1 -12.9,-45.8 22.9,-2.9 21.4,-3 -.1,1.9 -1.9,1 -1.4,3.2 .2,1.3 6.1,3.8 2.6,-.3 3.1,4 .4,1.7 4.2,5.1 2.6,1.7 1.4,.2 2.2,1.6 1.1,2.2 2,1.6 1.8,.5 2.7,2.7 .1,1.4 2.6,2.8 5,2.3 3.6,6.7 .3,2.7 3.9,2.1 2.5,4.8 .8,3.1 4.2,.4 z"
                  className={styles.zoomedStatePath}
                  filter="url(#glow)"
                  transform="translate(-2937, -1544) scale(4.5) rotate(5, 714, 400)"
                />

                {CITIES.filter(c => c.state === "Georgia").map((city, idx) => (
                  <g
                    key={idx}
                    className={styles.cityGroup}
                    onClick={() => handleCitySelect(city)}
                    onMouseEnter={() => setHoveredCity(city)}
                    onMouseLeave={() => setHoveredCity(null)}
                  >
                    <circle
                      cx={city.stateX}
                      cy={city.stateY}
                      r="14"
                      className={`${styles.pulseOuter} ${selectedCity.name === city.name ? styles.pulseSelected : ""} ${city.status === "Upcoming" ? styles.pulseUpcoming : ""}`}
                    />
                    <circle
                      cx={city.stateX}
                      cy={city.stateY}
                      r="5.5"
                      className={`${styles.cityDot} ${selectedCity.name === city.name ? styles.dotSelected : ""} ${city.status === "Upcoming" ? styles.dotUpcoming : ""}`}
                    />
                    {city.stateLinePoints && (
                      <polyline
                        points={city.stateLinePoints}
                        className={styles.leaderLine}
                        fill="none"
                      />
                    )}
                    <text
                      x={city.stateTextX !== undefined ? city.stateTextX : city.stateX + 14}
                      y={city.stateTextY !== undefined ? city.stateTextY : city.stateY + 4}
                      className={`${styles.cityText} ${selectedCity.name === city.name ? styles.textSelected : ""}`}
                    >
                      {city.name.replace("- Upcoming Installation", "")}
                    </text>
                  </g>
                ))}
              </svg>
            )}
          </div>
        </div>

        <div className={styles.rightCol}>
          <div ref={detailCardRef} className={styles.detailCard}>
            <div className={styles.cardHeader}>
              <span className={`${styles.activeDot} ${selectedCity.status === "Upcoming" ? styles.upcomingDot : ""}`}></span>
              <span className={styles.activeLabel}>{selectedCity.status.toUpperCase()}</span>
            </div>

            <div className={styles.imageFrame}>
              <img
                src={selectedCity.image}
                alt={`${selectedCity.name} Facility`}
                className={styles.cardImage}
              />
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardCity}>{selectedCity.name}</h3>
              <span className={styles.cardSub}>REGIONAL DEPLOYMENT</span>
              <p className={styles.cardDesc}>{selectedCity.details}</p>

              <div className={styles.metaTable}>
                <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>Type</span>
                  <span className={styles.metaVal}>{selectedCity.type}</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>State</span>
                  <span className={styles.metaVal}>{selectedCity.state}</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>Status</span>
                  <span className={styles.metaVal}>{selectedCity.status}</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>Features</span>
                  <span className={styles.metaVal}>{selectedCity.features}</span>
                </div>
              </div>

              <div className={styles.mediaLinksRow}>
                <a href="#photos" className={styles.mediaLink} onClick={(e) => e.preventDefault()}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span>Link to Photos</span>
                </a>
                <a href="#videos" className={styles.mediaLink} onClick={(e) => e.preventDefault()}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                  <span>Link to Videos</span>
                </a>
              </div>

              <div className={styles.cardPagination}>
                <button
                  className={styles.pageArrow}
                  onClick={handlePrevCity}
                  aria-label="Previous Location"
                >
                  ←
                </button>
                <span className={styles.pageIndicator}>
                  {String(currentCityIndex + 1).padStart(2, "0")} / {String(totalCitiesCount).padStart(2, "0")}
                </span>
                <button
                  className={styles.pageArrow}
                  onClick={handleNextCity}
                  aria-label="Next Location"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
