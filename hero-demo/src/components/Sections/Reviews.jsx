"use client";

import { useRef } from "react";

const REVIEWS = [
  { name: "John Doe", pet: "Oreo", rating: "5.0", text: "Prompt response, even at 1am. They treated him immediately at night and within a couple of days he is ok, he's now fit and fine." },
  { name: "Jane Smith", pet: "Jacky", rating: "4.9", text: "I would like to thank the vet for treating my dog and explaining how to take care of him. Highly recommend to all pet parents." },
  { name: "Britney", pet: "Rosy", rating: "5.0", text: "Our cat was diagnosed and treated here. The clinic is well equipped, very neat and clean. All staff are very polite and know how to handle cats." },
  { name: "Michael Brown", pet: "Bruno", rating: "4.8", text: "Friendly staff and immense care for pets. Bruno loves visiting here. The vibe is very positive and welcoming." },
  { name: "Sarah Connor", pet: "Terminator", rating: "5.0", text: "Best veterinary services in the city. The detail with which they diagnosed my dog's skin issue was commendable." },
  { name: "David Kim", pet: "Mochi", rating: "4.9", text: "Clean, professional, and very caring. Mochi usually hates the vet but seems quite comfortable here. Pricing is transparent." },
];

export default function Reviews() {
  const ref = useRef(null);
  const scroll = (dir) =>
    ref.current?.scrollBy({ left: dir === "left" ? -350 : 350, behavior: "smooth" });

  return (
    <section className="reviews-section">
      <div className="container">
        <div className="reviews-header">
          <div>
            <h2 className="testimonial-title">What Our Clients Say</h2>
            <p className="section-subtitle">Real experiences from our pet parents</p>
            <div className="rating-display" />
          </div>
          <div className="slider-nav">
            <button onClick={() => scroll("left")} className="nav-btn prev-btn" aria-label="Previous Review">
              <i className="fa-solid fa-arrow-left" />
            </button>
            <button onClick={() => scroll("right")} className="nav-btn next-btn" aria-label="Next Review">
              <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>
        <div className="reviews-grid" ref={ref}>
          {REVIEWS.map((r) => (
            <div className="review-card" key={r.name}>
              <div className="review-header">
                <div
                  className="reviewer-avatar"
                  style={{
                    background: "#00566b",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  {r.name[0]}
                </div>
                <div>
                  <h4 className="reviewer-name">{r.name}</h4>
                  <p className="pet-name">{r.pet}</p>
                </div>
                <div className="review-badge">★ {r.rating}</div>
              </div>
              <p className="review-text">&quot;{r.text}&quot;</p>
            </div>
          ))}
          <div className="review-card read-more-card">
            <div className="read-more-content">
              <h3>More Reviews</h3>
              <p>Check out what more than 100+ pet parents have to say about us.</p>
              <a href="#" className="read-more-btn">Read More Reviews</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
