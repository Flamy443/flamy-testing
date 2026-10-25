const ITEMS = [
  { icon: "fa-solid fa-hand-holding-heart", title: "Expert Care", description: "We prioritize clear direction, preventive education, and building trusted relationships with pet owners." },
  { icon: "fa-solid fa-square-plus", title: "Advanced Technology", description: "Modern facilities equipped with the latest diagnostic and treatment tools." },
  { icon: "fa-solid fa-stethoscope", title: "Certified Veterinarians", description: "A highly skilled and compassionate veterinary team dedicated to animal wellness and client education." },
  { icon: "fa-solid fa-shield-dog", title: "Comfort-First Environment", description: "A welcoming, calm, and supportive space for pets and their families." },
];

export default function MissionFeatures() {
  return (
    <section className="mission-features-section">
      <div className="container">
        <div className="mission-features-grid">
          {ITEMS.map((item, i) => (
            <div className="mission-feature-item" key={item.title}>
              <div className="feature-icon-wrapper">
                <i className={item.icon} />
              </div>
              <h3 className="mission-feature-title">{item.title}</h3>
              <p className="mission-feature-description">{item.description}</p>
              {i < ITEMS.length - 1 && <div className="vertical-divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
