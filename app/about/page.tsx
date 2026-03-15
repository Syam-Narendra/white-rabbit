import { useState, useEffect } from "react";
import { BRAND, NAV_DROPDOWNS, ABOUT_PAGE } from "../welcome/data";
import Footer from "../welcome/footer";

function LogoIcon({ size = 28, fill = "#0a0a0c" }: { size?: number; fill?: string }) {
  return (
    <div style={{ width: size, height: size, borderRadius: size * 0.22, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width={size * 0.54} height={size * 0.54} viewBox="0 0 16 16" fill="none">
        <path d="M8 2C5.24 2 3 4.24 3 7c0 1.77.93 3.33 2.34 4.22L5 13h6l-.34-1.78C12.07 10.33 13 8.77 13 7c0-2.76-2.24-5-5-5zm-1 9H6l.2-1.06A4 4 0 014 7c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.46-.79 2.74-1.96 3.44L10.14 11H9v-1H7v1z" fill={fill} />
      </svg>
    </div>
  );
}

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    // Simple intersection observer for fade up
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.animate-fade-up, .animate-bento-card, .animate-footer').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ minHeight: "100vh", color: "#fff", background: "#0a0a0c", fontFamily: "'Space Grotesk', Arial, sans-serif" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .nav-link {
          display: flex; align-items: center; font-size: 14px; font-weight: 500; padding: 8px 12px; border-radius: 8px; text-decoration: none; color: rgba(255,255,255,0.7); background: transparent; transition: all 0.15s;
        }
        .nav-link:hover { color: #fff; background: rgba(255,255,255,0.06); }
        .btn-primary {
          border: 0; color: #fff; cursor: pointer; font-family: inherit; font-weight: 600; border-radius: 100px; padding: 14px 30px; font-size: 15px; background: #3b82f6; box-shadow: 0 8px 28px rgba(59,130,246,0.28); transition: all 0.15s;
        }
        .btn-primary:hover { background: #2563eb; transform: translateY(-1px); }
        
        .btn-ghost {
          cursor: pointer; font-family: inherit; font-weight: 500; border-radius: 100px; padding: 14px 30px; font-size: 15px; background: transparent; color: rgba(255,255,255,0.7); border: 1px solid rgba(255,255,255,0.18); transition: all 0.15s;
        }
        .btn-ghost:hover { color: #fff; border-color: rgba(255,255,255,0.35); background: rgba(255,255,255,0.05); }

        .animate-fade-up {
          opacity: 0; transform: translateY(50px); transition: opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-bento-card {
           opacity: 0; transform: translateY(80px) scale(0.95); transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-bento-card:nth-child(1) { transition-delay: 0s; }
        .animate-bento-card:nth-child(2) { transition-delay: 0.2s; }
        .animate-bento-card:nth-child(3) { transition-delay: 0.4s; }
        .is-visible { opacity: 1 !important; transform: translateY(0) scale(1) !important; }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 40, display: "flex", alignItems: "center", height: 60, padding: "0 32px", background: scrolled ? "rgba(10,10,12,0.88)" : "rgba(0,0,0,0.18)", backdropFilter: scrolled ? "blur(20px)" : "blur(8px)", WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(8px)", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent", transition: "all 0.3s" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", flexShrink: 0, marginRight: 32 }}>
          <LogoIcon size={28} />
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 17, letterSpacing: "-0.04em", textTransform: "lowercase" }}>{BRAND.name}</span>
        </a>
        <div style={{ display: isMobile ? "none" : "flex", alignItems: "center", gap: 4, flex: 1 }}>
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link" style={{ color: "#fff", background: "rgba(255,255,255,0.06)" }}>About</a>
          <a href="/contact" className="nav-link">Contact</a>
        </div>
      </nav>

      {/* ── HEADER CONTENT ── */}
      <section style={{ paddingTop: 160, paddingBottom: 80, paddingLeft: isMobile ? 24 : 32, paddingRight: isMobile ? 24 : 32, background: "linear-gradient(to bottom, #111116, #0a0a0c)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h1 className="animate-fade-up is-visible" style={{ fontSize: isMobile ? 40 : 64, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 24 }}>
            {ABOUT_PAGE.mission.heading}
          </h1>
          <div className="animate-fade-up is-visible" style={{ display: "flex", flexDirection: "column", gap: 16, transitionDelay: "0.2s" }}>
            {ABOUT_PAGE.mission.paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: isMobile ? 18 : 22, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section style={{ padding: isMobile ? "64px 24px" : "100px 32px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div className="animate-fade-up" style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#10b981", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Our Approach</div>
            <h2 style={{ fontSize: isMobile ? 32 : 48, fontWeight: 700, letterSpacing: "-0.03em" }}>{ABOUT_PAGE.approach.heading}</h2>
            <p style={{ marginTop: 16, fontSize: 18, color: "rgba(255,255,255,0.6)" }}>We follow three principles when building products:</p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 24 }}>
            {ABOUT_PAGE.approach.pillars.map((pillar, i) => (
              <div key={i} className="animate-bento-card" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: "40px 32px" }}>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{pillar.title}</h3>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY & DIFFERENCE ── */}
      <section style={{ padding: isMobile ? "64px 24px" : "100px 32px", background: "#0e0e14", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 64 : 80 }}>
          
          <div className="animate-fade-up">
            <h2 style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 24 }}>Our Software Philosophy</h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", marginBottom: 24 }}>We believe that software should:</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {ABOUT_PAGE.philosophy.list.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 17, color: "rgba(255,255,255,0.85)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-up">
            <h2 style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 24 }}>What Makes Us Different</h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", marginBottom: 24 }}>Unlike traditional software vendors, we focus on product-first innovation. Our solutions are:</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {ABOUT_PAGE.difference.list.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 17, color: "rgba(255,255,255,0.85)" }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 10px #10b981" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section style={{ padding: isMobile ? "80px 24px" : "120px 32px" }}>
        <div className="animate-fade-up" style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", padding: isMobile ? "40px 24px" : "64px", background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.15)", borderRadius: 32 }}>
          <h2 style={{ fontSize: isMobile ? 32 : 48, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 20 }}>{ABOUT_PAGE.contact.heading}</h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", marginBottom: 40, maxWidth: 600, margin: "0 auto 40px" }}>{ABOUT_PAGE.contact.subheading}</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
             <a href="/contact" style={{ display: "inline-block", textDecoration: "none" }}>
              <button className="btn-primary" style={{ padding: "16px 36px", fontSize: 16 }}>{ABOUT_PAGE.contact.primaryCta}</button>
            </a>
            <button className="btn-ghost" style={{ padding: "16px 36px", fontSize: 16 }}>{ABOUT_PAGE.contact.secondaryCta}</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
