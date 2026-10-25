export default function Surgery() {
  return (
    <section className="home-surgery-section" id="surgery">
      <div className="container">
        <div className="home-surgery-grid">
          <div className="home-surgery-image-col">
            <div
              className="surgery-image-wrapper"
              style={{ minHeight: 420, background: "linear-gradient(135deg,#0f6f86,#073b4a)" }}
            />
          </div>
          <div className="home-surgery-content-col">
            <h2 className="surgery-highlight-title">Veterinary Surgical Services You Can Trust</h2>
            <p className="surgery-highlight-description">
              We provide comprehensive veterinary surgical care supported by modern technology
              and an experienced medical team — from low-cost spay and neuter surgery to more
              complex procedures, plus routine services like microchipping. Our focus is on
              safety, careful monitoring, and personalized treatment plans—supporting your pet
              from consultation through recovery.
            </p>
            <div className="surgery-cta-group">
              <a href="#" className="surgery-primary-btn">Surgery Services</a>
              <a href="#" className="surgery-secondary-link">See Pricing &amp; Cost Guide</a>
              <a href="tel:5550000000" className="surgery-secondary-link">
                Call Now for a Surgical Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
