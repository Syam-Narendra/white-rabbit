import { useState, useEffect, useRef } from "react";

interface Employee { role: string; name: string; color: string; }
interface NavItem  { icon: string; label: string; desc: string; }
interface Feature  { icon: string; label: string; desc: string; }

const AI_EMPLOYEES: Employee[] = [
  { role: "Social Media Manager", name: "Soshie",  color: "#8b5cf6" },
  { role: "Customer Support",     name: "Cassie",  color: "#3b82f6" },
  { role: "Data Analyst",         name: "Dexter",  color: "#f97316" },
  { role: "Business Strategist",  name: "Buddy",   color: "#0ea5e9" },
  { role: "Email Marketer",       name: "Emmie",   color: "#f59e0b" },
  { role: "Personal Growth",      name: "Gigi",    color: "#22c55e" },
  { role: "Recruiter",            name: "Scouty",  color: "#14b8a6" },
  { role: "Copywriter",           name: "Penn",    color: "#10b981" },
  { role: "eCom Specialist",      name: "Commet",  color: "#ef4444" },
  { role: "Sales Strategist",     name: "Milli",   color: "#d946ef" },
  { role: "SEO Mastermind",       name: "Seomi",   color: "#84cc16" },
  { role: "Virtual Assistant",    name: "Vizzy",   color: "#eab308" },
];

const FEATURES: Feature[] = [
  { icon: "📱", label: "Social Media",      desc: "Grow and manage all your social channels automatically" },
  { icon: "📧", label: "Inbox & Email",     desc: "Handle customer emails and outreach at scale" },
  { icon: "🌐", label: "Website & Content", desc: "Generate and publish fresh content continuously" },
  { icon: "🎧", label: "Customer Support",  desc: "24/7 support agents that never miss a ticket" },
  { icon: "📊", label: "Sales Operations",  desc: "Automate your entire sales pipeline end to end" },
  { icon: "🔍", label: "SEO & Growth",      desc: "Rank higher and drive organic traffic on autopilot" },
];

const NAV_DROPDOWNS: Record<string, NavItem[]> = {
  Features: [
    { icon: "🤖", label: "Automation",    desc: "Set tasks on autopilot" },
    { icon: "📊", label: "Analytics",     desc: "Real-time dashboards" },
    { icon: "⚙️", label: "Workflows",     desc: "Custom AI pipelines" },
    { icon: "👥", label: "Collaboration", desc: "Team workspaces" },
  ],
  Resources: [
    { icon: "📝", label: "Blog",         desc: "Insights & updates" },
    { icon: "📖", label: "Docs",         desc: "Technical guides" },
    { icon: "🏆", label: "Case Studies", desc: "Customer stories" },
    { icon: "💬", label: "Community",    desc: "Join our Discord" },
  ],
};

function Avatar({ name, color, size = 36 }: { name: string; color: string; size?: number }) {
  return (
    <div
      style={{
        width: size, height: size,
        background: `linear-gradient(135deg,${color}bb,${color})`,
        fontSize: size * 0.38,
        border: "2px solid rgba(255,255,255,0.12)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.35)",
        borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
        fontWeight: 700, color: "#fff",
      }}
    >
      {name[0]}
    </div>
  );
}

function LogoIcon({ size = 28, fill = "#0a0a0c" }: { size?: number; fill?: string }) {
  return (
    <div style={{ width: size, height: size, borderRadius: size * 0.22, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width={size * 0.54} height={size * 0.54} viewBox="0 0 16 16" fill="none">
        <rect x="2" y="2" width="5" height="5" rx="1" fill={fill} />
        <rect x="9" y="2" width="5" height="5" rx="1" fill={fill} />
        <rect x="2" y="9" width="5" height="5" rx="1" fill={fill} />
        <rect x="9" y="9" width="5" height="5" rx="1" fill={fill} />
      </svg>
    </div>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg style={{ width: 12, height: 12, flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform .2s" }} viewBox="0 0 12 12" fill="none">
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const GLOSSY: React.CSSProperties = {
  background: "rgba(18,18,28,0.55)",
  backdropFilter: "blur(24px) saturate(1.4)",
  WebkitBackdropFilter: "blur(24px) saturate(1.4)",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.09)",
};

function useDropdown() {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const show = () => { if (timer.current) clearTimeout(timer.current); setOpen(true); };
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 180); };
  return { open, show, hide };
}

function ProductsDropdown() {
  const { open, show, hide } = useDropdown();
  return (
    <div style={{ position: "relative" }} onMouseEnter={show} onMouseLeave={hide}>
      <button
        style={{
          display: "flex", alignItems: "center", gap: 4,
          border: 0, fontSize: 14, fontWeight: 500, cursor: "pointer",
          padding: "8px 12px", borderRadius: 8, fontFamily: "inherit",
          transition: "all 0.15s",
          background: open ? "rgba(255,255,255,0.08)" : "transparent",
          color: open ? "#fff" : "rgba(255,255,255,0.7)",
        }}
      >
        Products <Chevron open={open} />
      </button>
      <div
        style={{
          position: "absolute", top: "calc(100% + 4px)", left: 0, zIndex: 200,
          transform: open ? "translateY(0)" : "translateY(-8px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity .18s, transform .18s",
        }}
        onMouseEnter={show}
        onMouseLeave={hide}
      >
        <div style={{ ...GLOSSY, borderRadius: 20, padding: 20, width: 460 }}>
          <div style={{ textAlign: "center", paddingBottom: 14, marginBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <div style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>Full Team</div>
            <div style={{ fontSize: 10, marginTop: 2, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)" }}>Sintra X</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
            {AI_EMPLOYEES.map(emp => (
              <a key={emp.name} href="#"
                style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 12, textDecoration: "none", background: "transparent", transition: "background 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <Avatar name={emp.name} color={emp.color} size={32} />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 500, lineHeight: 1.3, color: "rgba(255,255,255,0.85)" }}>{emp.role}</div>
                  <div style={{ fontSize: 10, marginTop: 2, color: "rgba(255,255,255,0.28)" }}>{emp.name}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SimpleDropdown({ label, items }: { label: string; items: NavItem[] }) {
  const { open, show, hide } = useDropdown();
  return (
    <div style={{ position: "relative" }} onMouseEnter={show} onMouseLeave={hide}>
      <button
        style={{
          display: "flex", alignItems: "center", gap: 4,
          border: 0, fontSize: 14, fontWeight: 500, cursor: "pointer",
          padding: "8px 12px", borderRadius: 8, fontFamily: "inherit",
          transition: "all 0.15s",
          background: open ? "rgba(255,255,255,0.08)" : "transparent",
          color: open ? "#fff" : "rgba(255,255,255,0.7)",
        }}
      >
        {label} <Chevron open={open} />
      </button>
      <div
        style={{
          position: "absolute", top: "calc(100% + 4px)", left: 0, zIndex: 200, width: 230,
          transform: open ? "translateY(0)" : "translateY(-8px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity .18s, transform .18s",
        }}
        onMouseEnter={show}
        onMouseLeave={hide}
      >
        <div style={{ ...GLOSSY, borderRadius: 16, padding: 8 }}>
          {items.map(item => (
            <a key={item.label} href="#"
              style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: 10, textDecoration: "none", background: "transparent", transition: "background 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <div style={{ width: 32, height: 32, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0, background: "rgba(255,255,255,0.06)" }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.3, color: "rgba(255,255,255,0.88)" }}>{item.label}</div>
                <div style={{ fontSize: 11, marginTop: 2, color: "rgba(255,255,255,0.32)" }}>{item.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggle = (s: string) => setExpanded(p => p === s ? null : s);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 90,
          background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)",
          opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.25s",
        }}
      />
      <div
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 95,
          width: 300, maxWidth: "88vw",
          display: "flex", flexDirection: "column",
          background: "#111119", borderLeft: "1px solid rgba(255,255,255,0.08)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform .28s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {/* Mobile menu header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0, height: 60, padding: "0 20px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <LogoIcon size={26} />
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 16, letterSpacing: "-0.04em" }}>sintra</span>
          </div>
          <button onClick={onClose}
            style={{ width: 32, height: 32, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: 0, background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)" }}
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
          </button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: 12 }}>
          <button onClick={() => toggle("Products")}
            style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderRadius: 10, border: 0, cursor: "pointer", fontSize: 14, fontWeight: 500, fontFamily: "inherit", background: "transparent", color: "rgba(255,255,255,0.7)", transition: "background 0.15s" }}
          >
            Products <Chevron open={expanded === "Products"} />
          </button>
          {expanded === "Products" && (
            <div style={{ marginLeft: 12, paddingLeft: 12, marginBottom: 4, borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
              {AI_EMPLOYEES.slice(0, 6).map(emp => (
                <a key={emp.name} href="#"
                  style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderRadius: 8, textDecoration: "none", fontSize: 13, color: "rgba(255,255,255,0.55)", background: "transparent", transition: "background 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <Avatar name={emp.name} color={emp.color} size={24} /> {emp.role}
                </a>
              ))}
            </div>
          )}

          {Object.entries(NAV_DROPDOWNS).map(([section, items]) => (
            <div key={section}>
              <button onClick={() => toggle(section)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderRadius: 10, border: 0, cursor: "pointer", fontSize: 14, fontWeight: 500, fontFamily: "inherit", background: "transparent", color: "rgba(255,255,255,0.7)", transition: "background 0.15s" }}
              >
                {section} <Chevron open={expanded === section} />
              </button>
              {expanded === section && (
                <div style={{ marginLeft: 12, paddingLeft: 12, marginBottom: 4, borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
                  {items.map(item => (
                    <a key={item.label} href="#"
                      style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 8, textDecoration: "none", fontSize: 13, color: "rgba(255,255,255,0.5)", background: "transparent", transition: "background 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                    >
                      <span>{item.icon}</span> {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {["Pricing", "Careers"].map(item => (
            <a key={item} href="#"
              style={{ display: "flex", padding: "12px 16px", borderRadius: 10, textDecoration: "none", fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.7)", background: "transparent", transition: "background 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              {item}
            </a>
          ))}
        </div>

        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8, flexShrink: 0, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <button style={{ width: "100%", padding: "12px 0", borderRadius: 12, cursor: "pointer", fontSize: 14, fontWeight: 500, fontFamily: "inherit", border: "1px solid rgba(255,255,255,0.12)", background: "transparent", color: "rgba(255,255,255,0.65)" }}>Log in</button>
          <button style={{ width: "100%", padding: "12px 0", borderRadius: 12, border: 0, color: "#fff", cursor: "pointer", fontSize: 14, fontWeight: 600, fontFamily: "inherit", background: "#3b82f6" }}>Get Started</button>
        </div>
      </div>
    </>
  );
}

export default function Homepage() {
  const [scrolled, setScrolled]       = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [isMobile, setIsMobile]       = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); };
  }, []);

  const isTablet = typeof window !== "undefined" && window.innerWidth > 768 && window.innerWidth <= 1100;

  return (
    <div style={{ minHeight: "100vh", color: "#fff", background: "#0a0a0c", fontFamily: "'GT Walsheim Pro', Arial, sans-serif" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp  { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }

        .a1 { animation: fadeUp .55s ease both .05s; }
        .a2 { animation: fadeUp .55s ease both .14s; }
        .a3 { animation: fadeUp .55s ease both .23s; }
        .a4 { animation: fadeUp .55s ease both .32s; }
        .a5 { animation: fadeUp .55s ease both .41s; }

        .shimmer-txt {
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 40%, #f472b6 70%, #60a5fa 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .nav-link {
          display: flex; align-items: center;
          font-size: 14px; font-weight: 500;
          padding: 8px 12px; border-radius: 8px;
          text-decoration: none;
          color: rgba(255,255,255,0.7);
          background: transparent;
          transition: all 0.15s;
        }
        .nav-link:hover { color: #fff; background: rgba(255,255,255,0.06); }

        .btn-primary {
          border: 0; color: #fff; cursor: pointer; font-family: inherit;
          font-weight: 600; border-radius: 100px;
          padding: 14px 30px; font-size: 15px;
          background: #3b82f6;
          box-shadow: 0 8px 28px rgba(59,130,246,0.28);
          transition: all 0.15s;
        }
        .btn-primary:hover { background: #2563eb; transform: translateY(-1px); }

        .btn-ghost {
          cursor: pointer; font-family: inherit; font-weight: 500;
          border-radius: 100px; padding: 14px 30px; font-size: 15px;
          background: transparent; color: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.18);
          transition: all 0.15s;
        }
        .btn-ghost:hover { color: #fff; border-color: rgba(255,255,255,0.35); background: rgba(255,255,255,0.05); }

        .card {
          border-radius: 18px; cursor: pointer;
          background: rgba(255,255,255,0.027);
          border: 1px solid rgba(255,255,255,0.07);
          transition: all 0.2s;
        }
        .card:hover {
          background: rgba(255,255,255,0.052);
          border-color: rgba(255,255,255,0.12);
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: flex !important; }
          .nav-cta { display: none !important; }
          .hero-badge { display: none !important; }
          .hero-social { display: none !important; }
          .hero-watch-btn { display: none !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: 1fr 1fr !important; }
          .cta-row { flex-direction: column !important; }
          .cta-row > * { width: 100% !important; }
          .footer-inner { flex-direction: column !important; gap: 16px !important; text-align: center; }
          .footer-links { justify-content: center !important; }
        }
        @media (max-width: 480px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* ── NAV ── */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 40,
          display: "flex", alignItems: "center", height: 60,
          padding: "0 32px",
          background: scrolled ? "rgba(10,10,12,0.88)" : "rgba(0,0,0,0.18)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
          transition: "all 0.3s",
          gap: 0,
        }}
      >
        {/* Burger — mobile only */}
        <button
          className="mobile-burger"
          onClick={() => setMobileOpen(true)}
          style={{
            display: "none", // overridden by media query class
            flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5,
            width: 36, height: 36, borderRadius: 8, border: 0, cursor: "pointer", flexShrink: 0,
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <span style={{ display: "block", width: 18, height: 1.5, borderRadius: 2, background: "rgba(255,255,255,0.85)" }} />
          <span style={{ display: "block", width: 18, height: 1.5, borderRadius: 2, background: "rgba(255,255,255,0.85)" }} />
          <span style={{ display: "block", width: 13, height: 1.5, borderRadius: 2, background: "rgba(255,255,255,0.85)" }} />
        </button>

        {/* Logo */}
        <a href="#"
          style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", flexShrink: 0, marginRight: 32, marginLeft: isMobile ? "auto" : 0 }}
        >
          <LogoIcon size={28} />
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 17, letterSpacing: "-0.04em" }}>sintra</span>
        </a>

        {/* Desktop nav links */}
        <div className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: 4, flex: 1 }}
        >
          <ProductsDropdown />
          <SimpleDropdown label="Features" items={NAV_DROPDOWNS.Features} />
          <a href="#" className="nav-link">Pricing</a>
          <SimpleDropdown label="Resources" items={NAV_DROPDOWNS.Resources} />
          <a href="#" className="nav-link">Careers</a>
        </div>

        {/* Desktop CTA */}
        <div className="desktop-nav nav-cta"
          style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: "auto", flexShrink: 0 }}
        >
          <button
            style={{ padding: "8px 18px", borderRadius: 100, fontSize: 14, fontWeight: 500, fontFamily: "inherit", cursor: "pointer", border: "1px solid rgba(255,255,255,0.18)", background: "transparent", color: "rgba(255,255,255,0.7)", transition: "all 0.15s" }}
            onMouseEnter={e => { const b = e.currentTarget; b.style.borderColor="rgba(255,255,255,0.35)"; b.style.background="rgba(255,255,255,0.05)"; b.style.color="#fff"; }}
            onMouseLeave={e => { const b = e.currentTarget; b.style.borderColor="rgba(255,255,255,0.18)"; b.style.background="transparent"; b.style.color="rgba(255,255,255,0.7)"; }}
          >Log in</button>
          <button
            style={{ padding: "8px 18px", borderRadius: 100, fontSize: 14, fontWeight: 600, fontFamily: "inherit", cursor: "pointer", border: 0, color: "#fff", background: "#3b82f6", boxShadow: "0 6px 20px rgba(59,130,246,0.3)", transition: "all 0.15s" }}
            onMouseEnter={e => { const b = e.currentTarget; b.style.background="#2563eb"; b.style.transform="translateY(-1px)"; }}
            onMouseLeave={e => { const b = e.currentTarget; b.style.background="#3b82f6"; b.style.transform="none"; }}
          >Get Started</button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", minHeight: "100vh", overflow: "hidden" }}>
        <video
          src="https://d1oil5daeuar1j.cloudfront.net/vizzy_waving.mp4"
          autoPlay loop muted playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0 }}
        />
        {/* <div style={{ position: "absolute", inset: 0, background: "rgba(6,6,10,0.52)", zIndex: 1 }} /> */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(6,6,10,0.82) 0%,rgba(6,6,10,0.45) 50%,transparent 100%)", zIndex: 2 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "55%", background: "linear-gradient(to top,rgba(6,6,10,0.95) 0%,rgba(6,6,10,0.6) 50%,transparent 100%)", zIndex: 2 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 100, background: "linear-gradient(to top,#0a0a0c,transparent)", zIndex: 3 }} />

        <div
          style={{
            position: "relative", zIndex: 10,
            padding: isMobile ? "0 24px 48px" : "0 80px 80px",
            maxWidth: isMobile ? "100%" : 680,
            opacity: heroVisible ? 1 : 0, transition: "opacity .1s",
          }}
        >
          <div className="hero-badge a1"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 100, padding: "6px 14px", marginBottom: 20, background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)" }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", flexShrink: 0, background: "#4ade80", boxShadow: "0 0 7px #4ade80" }} />
            <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.07em", color: "#93c5fd" }}>AI Employees Available 24/7</span>
          </div>

          <h1 className="a2" style={{ fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.03em", fontSize: "clamp(26px,3.8vw,52px)" }}>
            AI Employees:{" "}
            <span style={{ display: "block" }}>Your First Digital</span>
            <span style={{ display: "block" }}>Workers Team That</span>
            <span style={{ display: "block" }}>Never Sleep</span>
          </h1>

          <p className="a3"
            style={{ marginTop: 18, color: "rgba(255,255,255,0.72)", fontSize: "clamp(14px,1.1vw,16px)", lineHeight: 1.7, maxWidth: isMobile ? "100%" : 490 }}
          >
            Hire AI employees today — get your first 24/7 digital team that runs your socials, inbox, website, content, customer support, and business and sales operations without adding extra headcount.
          </p>

          <div className="a4" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
            <button className="btn-primary">Get Sintra</button>
            <button className="btn-ghost hero-watch-btn">Watch Demo →</button>
          </div>

          <div className="hero-social a5" style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 36 }}>
            <div style={{ display: "flex" }}>
              {["#8b5cf6","#3b82f6","#22c55e","#f97316","#d946ef"].map((c, i) => (
                <div key={i} style={{ width: 30, height: 30, borderRadius: "50%", background: c, border: "2.5px solid #0a0a0c", marginLeft: i > 0 ? -8 : 0, boxShadow: "0 2px 8px rgba(0,0,0,0.5)" }} />
              ))}
            </div>
            <div>
              <div style={{ display: "flex", gap: 2, marginBottom: 3 }}>
                {[1,2,3,4,5].map(s => <span key={s} style={{ fontSize: 12, color: "#fbbf24" }}>★</span>)}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.32)" }}>
                Trusted by{" "}<strong style={{ fontWeight: 600, color: "rgba(255,255,255,0.65)" }}>50,000+</strong>{" "}businesses
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ padding: isMobile ? "52px 20px" : isTablet ? "64px 40px" : "80px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", borderRadius: 100, padding: "5px 14px", fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 16, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.45)" }}>What We Do</div>
          <h2 style={{ fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, fontSize: "clamp(26px,4vw,48px)" }}>
            Your entire business,{" "}<span style={{ color: "rgba(255,255,255,0.28)" }}>on autopilot.</span>
          </h2>
          <p style={{ fontSize: 15, marginTop: 12, maxWidth: 420, marginLeft: "auto", marginRight: "auto", color: "rgba(255,255,255,0.36)" }}>
            Everything your company needs to operate and grow, powered by AI.
          </p>
        </div>
        <div
          className="features-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, maxWidth: 1000, margin: "0 auto" }}
        >
          {FEATURES.map(f => (
            <div key={f.label} className="card" style={{ padding: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 14, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>{f.icon}</div>
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 8, color: "rgba(255,255,255,0.88)" }}>{f.label}</div>
              <div style={{ fontSize: 13, lineHeight: 1.65, color: "rgba(255,255,255,0.38)" }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding: isMobile ? "52px 20px" : isTablet ? "64px 40px" : "80px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.012)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: "inline-flex", alignItems: "center", borderRadius: 100, padding: "5px 14px", fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 16, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.45)" }}>The Team</div>
            <h2 style={{ fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, fontSize: "clamp(26px,4vw,48px)" }}>Meet your AI employees</h2>
            <p style={{ fontSize: 15, marginTop: 10, maxWidth: 400, color: "rgba(255,255,255,0.36)" }}>
              A full team of specialists, trained for their exact role — ready from day one.
            </p>
          </div>
          <div
            className="team-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}
          >
            {AI_EMPLOYEES.map(emp => (
              <div key={emp.name} className="card"
                style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px" }}
              >
                <Avatar name={emp.name} color={emp.color} size={40} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: "rgba(255,255,255,0.82)" }}>{emp.role}</div>
                  <div style={{ fontSize: 11, marginTop: 2, color: "rgba(255,255,255,0.28)" }}>{emp.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36, textAlign: "center" }}>
            <button className="btn-primary">Hire Your Team Today</button>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: isMobile ? "52px 20px" : isTablet ? "64px 40px" : "80px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ position: "relative", borderRadius: 28, textAlign: "center", overflow: "hidden", padding: isMobile ? "36px 20px" : "64px 48px", border: "1px solid rgba(255,255,255,0.08)", background: "linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))" }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: 28, pointerEvents: "none", background: "linear-gradient(135deg,rgba(59,130,246,0.07),transparent 50%,rgba(139,92,246,0.07))" }} />
            <h2 style={{ position: "relative", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, fontSize: "clamp(24px,4vw,44px)", marginBottom: 14 }}>
              Start building your{" "}<span className="shimmer-txt">AI team today.</span>
            </h2>
            <p style={{ position: "relative", fontSize: 15, lineHeight: 1.7, maxWidth: 380, margin: "0 auto 32px", color: "rgba(255,255,255,0.38)" }}>
              No hiring, no onboarding, no overhead. Just results — around the clock.
            </p>
            <div className="cta-row" style={{ position: "relative", display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <button className="btn-primary">Get Sintra Free</button>
              <button className="btn-ghost">Talk to Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: isMobile ? "24px 20px" : "28px 80px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="footer-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <LogoIcon size={22} />
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>© 2026 Sintra. All rights reserved.</span>
          </div>
          <div className="footer-links" style={{ display: "flex", gap: 22 }}>
            {["Privacy","Terms","Contact","Blog"].map(l => (
              <a key={l} href="#"
                style={{ fontSize: 13, textDecoration: "none", color: "rgba(255,255,255,0.28)", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.28)")}
              >{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}