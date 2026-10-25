export default function Footer() {
  return (
    <footer className="footer" id="contact-footer">
      <div className="container footer-layout">
        <div className="footer-map-column">
          <div
            className="footer-map-wrapper"
            style={{
              background: "linear-gradient(135deg,#0b6a80,#06303b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 250,
              opacity: 0.9,
            }}
          >
            <span style={{ opacity: 0.7, letterSpacing: "0.1em" }}>MAP PLACEHOLDER</span>
          </div>
          <div className="footer-map-info">
            <p className="map-address">
              <i className="fa-solid fa-location-dot" /> 123 Sample Street, Your City, ST 00000
            </p>
          </div>
        </div>
        <div className="footer-content-column">
          <div className="footer-brand">
            <span style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "0.04em" }}>
              SAMPLE ANIMAL HOSPITAL
            </span>
          </div>
          <div className="footer-grid">
            <div className="footer-brand-section">
              <div className="footer-info-text">
                <p>Sample Animal Hospital</p>
                <p>Phone: <a href="tel:5550000000" style={{ color: "inherit", textDecoration: "none" }}>(555) 000-0000</a></p>
                <p>Email: <a href="mailto:info@example.com" style={{ color: "inherit", textDecoration: "none" }}>info@example.com</a></p>
                <br />
                <strong>Business Hours:</strong>
                <br />
                Tuesday – Friday: 8:00 AM – 6:00 PM
                <br />
                Saturday: 8:00 AM – 4:00 PM
                <br />
                Sunday &amp; Monday: Closed
                <br />
              </div>
            </div>
            <div className="footer-company-section">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="#about" className="footer-link">About Us</a></li>
                <li><a href="#contact-footer" className="footer-link">Contact Us</a></li>
                <li><a href="#services" className="footer-link">Services</a></li>
              </ul>
              <div className="footer-actions-container">
                <div className="footer-socials">
                  <a href="#" className="social-icon" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
                  <a href="#" className="social-icon" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
                </div>
                <a href="tel:5550000000" className="footer-cta-button">Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">© 2026 Sample Animal Hospital. Layout demo with placeholder content.</div>
    </footer>
  );
}
