const MESSAGES = [
  "Dental Checkups Available 🦷",
  "Advanced Surgical Care 🏥✨",
  "Walk-Ins Welcome for Urgent Care 🚨",
  "Call Now 📞",
];

export default function Announcement() {
  const items = Array.from({ length: 8 }).flatMap(() => MESSAGES);
  return (
    <div className="announcement-marquee-container">
      <div className="announcement-marquee-content">
        {items.map((text, i) => (
          <span key={i} style={{ display: "contents" }}>
            <span className="announcement-item">{text}</span>
            {i !== items.length - 1 && <span className="announcement-separator">•</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
