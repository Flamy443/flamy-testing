const POSTS = [
  { title: "Recognizing a Pet Emergency: When to Seek Immediate Care", category: "Emergency Care", bg: "linear-gradient(135deg,#9a5b6f,#45202a)" },
  { title: "Essential Guide for New Puppy and Kitten Owners", category: "New Pet Owner", bg: "linear-gradient(135deg,#0f6f86,#073b4a)" },
  { title: "Why Dental Health Matters: Preventive Care Tips", category: "Dental Health", bg: "linear-gradient(135deg,#3f7a6b,#143a31)" },
  { title: "Senior Pet Care: Keeping Your Aging Companion Comfortable", category: "Senior Pet Care", bg: "linear-gradient(135deg,#8a6a3d,#3d2d17)" },
];

export default function Blogs() {
  return (
    <section className="blogs-section" id="blog">
      <div className="container relative">
        <div className="blogs-header">
          <h2 className="features-title" style={{ marginBottom: "1rem" }}>Explore Pet Parenting with Our Blog</h2>
          <p style={{ color: "var(--text-light)", marginBottom: "2rem", fontSize: "1.1rem" }}>
            Expert insights, local alerts, and practical advice to help you care for your pet.
          </p>
        </div>
        <div className="blog-grid">
          {POSTS.map((p) => (
            <div className="blog-card" key={p.title}>
              <div className="blog-image-wrapper">
                <div className="blog-image" style={{ background: p.bg }} />
                <div className="blog-tag">
                  <i className="fa-solid fa-heart" /> sample
                </div>
              </div>
              <div className="blog-content">
                <p className="blog-category">{p.category}</p>
                <h3 className="blog-title" style={{ minHeight: "3rem" }}>{p.title}</h3>
                <a href="#" className="blog-btn" style={{ textDecoration: "none", display: "inline-block", textAlign: "center" }}>
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
