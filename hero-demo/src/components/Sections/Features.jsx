const ITEMS = [
  {
    number: "01",
    tag: "COMPASSION",
    title: "Compassion Veterinary Care",
    description: "Our team of experienced veterinarians treats every pet with the same love and attention as their own.",
    bg: "linear-gradient(135deg,#0f6f86,#073b4a)",
  },
  {
    number: "02",
    tag: "PERSONALIZED",
    title: "Personalized Treatment Plans",
    description: "We create tailored treatment plans based on your pet’s specific needs, ensuring they receive the best possible care.",
    bg: "linear-gradient(135deg,#8a6a3d,#3d2d17)",
  },
  {
    number: "03",
    tag: "SAFETY",
    title: "Prioritized Pet Safety",
    description: "Your pet’s safety is our top priority. We follow strict protocols during every procedure to ensure their well-being.",
    bg: "linear-gradient(135deg,#3f7a6b,#143a31)",
  },
  {
    number: "04",
    tag: "COMMUNICATION",
    title: "Clear, Open Communication",
    description: "We guide you through every step—from consultation to recovery—keeping you informed and confident.",
    bg: "linear-gradient(135deg,#5b6f9a,#1f2a45)",
  },
];
const SPANS = ["card-large", "card-tall", "card-standard", "card-standard"];

export default function Features() {
  return (
    <section className="features-section" id="about">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">WHY PET OWNERS TRUST SAMPLE ANIMAL HOSPITAL</h2>
          <div className="features-desc">
            <p className="desc-para">
              We provide comprehensive veterinary and surgical care supported by modern
              technology and an experienced medical team. From routine procedures to complex
              surgeries, your pet’s safety is always our top priority – supported by careful
              monitoring and tailored treatment plans.
            </p>
            <p className="desc-para">
              We believe in clear, open communication, guiding you through every step - from
              initial consultation to recovery - so you always feel informed, supported, and
              confident in your pet’s care.
            </p>
          </div>
        </div>
        <div className="features-grid">
          {ITEMS.map((item, i) => (
            <div className={`feature-card ${SPANS[i]}`} key={item.number}>
              <span className="feature-number">{item.number}</span>
              <div className="feature-tag">{item.tag}</div>
              <div className="feature-image-wrapper">
                <div className="feature-image-bg" style={{ backgroundImage: item.bg }} />
                <div className="feature-image" style={{ backgroundImage: item.bg }} />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
