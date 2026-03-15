import { BRAND, CONTACT } from "~/data";

function LogoIcon({ size = 28, fill = "#0a0a0c" }: { size?: number; fill?: string }) {
  return (
    <div style={{ width: size, height: size, borderRadius: size * 0.22, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width={size * 0.54} height={size * 0.54} viewBox="0 0 16 16" fill="none">
        <path d="M8 2C5.24 2 3 4.24 3 7c0 1.77.93 3.33 2.34 4.22L5 13h6l-.34-1.78C12.07 10.33 13 8.77 13 7c0-2.76-2.24-5-5-5zm-1 9H6l.2-1.06A4 4 0 014 7c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.46-.79 2.74-1.96 3.44L10.14 11H9v-1H7v1z" fill={fill} />
      </svg>
    </div>
  );
}

export default function Footer() {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <footer id="site-footer" className="animate-footer" aria-label="Site footer" style={{
      background: "#05050a",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      padding: isMobile ? "36px 24px 28px" : "44px 80px 32px",
      fontFamily: "'Space Grotesk', Arial, sans-serif",
      minHeight: 300,
    }}>
      {/* Top row: logo + columns */}
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "220px 1fr 1fr 1fr 1fr", gap: isMobile ? "28px 16px" : 0 }}>

        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <LogoIcon size={26} />
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 18, letterSpacing: "-0.04em", textTransform: "lowercase" }}>{BRAND.name}</span>
          </div>
          <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.32)", lineHeight: 1.65, maxWidth: 180 }}>
            {BRAND.tagline}
          </p>
          {/* Social icons */}
          <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
            {CONTACT.socials.map(s => (
              <a key={s.label} href={s.url} aria-label={s.label}
                style={{ width: 32, height: 32, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "all 0.15s", fontSize: 16 }}
                onMouseEnter={e => { e.currentTarget.style.background="rgba(255,255,255,0.1)"; e.currentTarget.style.color="#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.06)"; e.currentTarget.style.color="rgba(255,255,255,0.5)"; }}
              >
                <div style={{ display: "flex" }}>{s.icon}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {((): [string, { label: string; href?: string }[]][] => {
          const all: [string, { label: string; href?: string }[]][] = [
            ["Product", [
              { label: "Features" }, { label: "Pricing" }, { label: "Integrations" }, { label: "Changelog" }
            ]],
            ["Company", [
              { label: "About" }, { label: "Blog" }, { label: "Careers" }, { label: "Press" }
            ]],
            ["Resources", [
              { label: "Documentation" }, { label: "API Reference" }, { label: "Status" }, { label: "Community" }
            ]],
            ["Legal", [
              { label: "Privacy" }, { label: "Terms" }, { label: "Security" }, { label: "Cookies" }
            ]],
          ];
          return isMobile ? all.slice(0, 2) : all;
        })().map(([heading, links]) => (
          <div key={heading}>
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.25)", marginBottom: 14 }}>{heading}</div>
            {links.map((l: any) => (
              <a key={l.label} href={l.href || "#"}
                style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: 9, transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >{l.label}</a>
            ))}
          </div>
        ))}
      </div>

      {/* Divider + bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>© 2026 {BRAND.name}, Inc. All rights reserved.</span>
        <div style={{ display: "flex", gap: 20 }}>
          {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(l => (
            <a key={l} href="#"
              style={{ fontSize: 12, color: "rgba(255,255,255,0.28)", textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.28)")}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
