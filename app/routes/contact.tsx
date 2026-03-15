import { useState } from "react";
import { CONTACT, BRAND, APPS } from "~/welcome/data";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us – White Rabbit" },
    { name: "description", content: "Get in touch with the White Rabbit team. We'd love to hear from you." },
  ];
}

function LogoIcon({ size = 28, fill = "#0a0a0c" }: { size?: number; fill?: string }) {
  return (
    <div style={{ width: size, height: size, borderRadius: size * 0.22, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width={size * 0.54} height={size * 0.54} viewBox="0 0 16 16" fill="none">
        <path d="M8 2C5.24 2 3 4.24 3 7c0 1.77.93 3.33 2.34 4.22L5 13h6l-.34-1.78C12.07 10.33 13 8.77 13 7c0-2.76-2.24-5-5-5zm-1 9H6l.2-1.06A4 4 0 014 7c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.46-.79 2.74-1.96 3.44L10.14 11H9v-1H7v1z" fill={fill} />
      </svg>
    </div>
  );
}

const INFO_CARDS = [
  {
    icon: "✉️",
    label: "Email us",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    color: "#3b82f6",
  },
  {
    icon: "📞",
    label: "Call us",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone}`,
    color: "#10b981",
  },
  {
    icon: "📍",
    label: "Visit us",
    value: CONTACT.address,
    href: "https://www.google.com/maps",
    color: "#f59e0b",
  },
  {
    icon: "🕐",
    label: "Business hours",
    value: CONTACT.hours,
    href: null,
    color: "#8b5cf6",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSent(true); setSubmitting(false); }, 1200);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 12, padding: "14px 16px", fontSize: 14, color: "#fff",
    fontFamily: "'Space Grotesk', Arial, sans-serif", outline: "none", transition: "border-color 0.15s",
    boxSizing: "border-box",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0c", color: "#fff", fontFamily: "'Space Grotesk', Arial, sans-serif" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
        input:focus, textarea:focus, select:focus { border-color: rgba(59,130,246,0.6) !important; }
        a { color: inherit; }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 40,
        display: "flex", alignItems: "center", height: 60,
        padding: "0 32px", gap: 12,
        background: "rgba(10,10,12,0.9)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <LogoIcon size={30} />
          <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: "-0.04em", color: "#fff" }}>white rabbit</span>
        </a>
        <div style={{ flex: 1 }} />
        <a href="/" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none", padding: "6px 14px", borderRadius: 8, transition: "color 0.15s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
        >← Back to Home</a>
      </nav>

      {/* ── HERO ── */}
      <section style={{ padding: "80px 32px 48px", maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)", borderRadius: 100, padding: "6px 18px", fontSize: 12, fontWeight: 600, color: "#60a5fa", marginBottom: 24, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          📞 Contact Us
        </div>
        <h1 style={{ fontWeight: 700, fontSize: "clamp(32px,5vw,64px)", lineHeight: 1.08, letterSpacing: "-0.035em", marginBottom: 18 }}>
          {CONTACT.heading}
        </h1>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>
          {CONTACT.subheading}
        </p>
      </section>

      {/* ── INFO CARDS + FORM GRID ── */}
      <section style={{ padding: "0 32px 80px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 32, alignItems: "start" }}>

          {/* Left — info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {INFO_CARDS.map(card => (
              <div key={card.label}
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "22px 24px", display: "flex", gap: 16, alignItems: "flex-start", transition: "border-color 0.2s" }}
                onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.14)")}
                onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)")}
              >
                <div style={{ width: 42, height: 42, borderRadius: 12, background: `${card.color}18`, border: `1px solid ${card.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                  {card.icon}
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>
                    {card.label}
                  </div>
                  {card.href ? (
                    <a href={card.href} style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", textDecoration: "none", lineHeight: 1.55, transition: "color 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                    >{card.value}</a>
                  ) : (
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.55 }}>{card.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Apps quick links */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "22px 24px" }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.3)", marginBottom: 14 }}>Our Products</div>
              {APPS.map(app => (
                <div key={app.slug} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: app.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>
                    {app.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.82)" }}>{app.name}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{app.tagline}</div>
                  </div>
                  {app.status === "coming-soon" && (
                    <span style={{ marginLeft: "auto", fontSize: 9, background: "rgba(245,158,11,0.15)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.3)", borderRadius: 100, padding: "2px 8px", fontWeight: 700, letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
                      SOON
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — contact form */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 24, padding: "36px 36px" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 52, marginBottom: 20 }}>🐇</div>
                <h2 style={{ fontWeight: 700, fontSize: 26, marginBottom: 12 }}>Message sent!</h2>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, lineHeight: 1.7 }}>
                  Thanks for reaching out. We'll get back to you within 1–2 business days.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  style={{ marginTop: 28, padding: "12px 28px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.15)", background: "transparent", color: "rgba(255,255,255,0.7)", fontSize: 14, fontFamily: "inherit", cursor: "pointer", transition: "all 0.15s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
                >Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <h2 style={{ fontWeight: 700, fontSize: 22, marginBottom: 4 }}>Send us a message</h2>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", lineHeight: 1.6, marginBottom: 8 }}>
                  Fill in the details below and we'll respond as soon as possible.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.45)", display: "block", marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>Name *</label>
                    <input required name="name" value={form.name} onChange={handleChange} placeholder="Your full name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.45)", display: "block", marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>Email *</label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.45)", display: "block", marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>Subject *</label>
                  <select required name="subject" value={form.subject} onChange={handleChange} style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                    <option value="" disabled>Select a topic…</option>
                    <option value="demo">Request a Demo</option>
                    <option value="billing">Bill Rabbit – Sales / Pricing</option>
                    <option value="gym">Gym Rabbit – Early Access</option>
                    <option value="school">School Rabbit – Early Access</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership / Integration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.45)", display: "block", marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>Message *</label>
                  <textarea required name="message" value={form.message} onChange={handleChange} placeholder="Tell us how we can help…" rows={6} style={{ ...inputStyle, resize: "vertical", minHeight: 140 }} />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  style={{ padding: "15px 0", borderRadius: 100, border: 0, background: "linear-gradient(135deg,#2563eb,#3b82f6)", color: "#fff", fontSize: 15, fontWeight: 700, fontFamily: "inherit", cursor: submitting ? "not-allowed" : "pointer", opacity: submitting ? 0.7 : 1, transition: "all 0.2s", letterSpacing: "-0.01em" }}
                >
                  {submitting ? "Sending…" : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── SIMPLE FOOTER ── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>{BRAND.copyright}</span>
        <a href="/" style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.15s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
        >← Back to Home</a>
      </footer>
    </div>
  );
}
