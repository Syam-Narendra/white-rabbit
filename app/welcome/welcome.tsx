import { useState, useEffect, useRef } from "react";
import { TEAM, BRAND, NAV_DROPDOWNS, HERO, AI_ASSISTANTS, ABOUT_US, PLATFORM_PILLARS, WHY_CHOOSE_US, INDUSTRIES, CTA_SECTION } from "~/data";


import Footer from "~/home/footer";

interface Employee {
  role: string;
  name: string;
  color: string;
}
interface NavItem {
  icon: string;
  label: string;
  desc: string;
}
interface Feature {
  icon: string;
  label: string;
  desc: string;
}

function Avatar({
  name,
  color,
  size = 36,
}: {
  name: string;
  color: string;
  size?: number;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg,${color}bb,${color})`,
        fontSize: size * 0.38,
        border: "2px solid rgba(255,255,255,0.12)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.35)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontWeight: 700,
        color: "#fff",
      }}
    >
      {name[0]}
    </div>
  );
}

function LogoIcon({
  size = 28,
  fill = "#0a0a0c",
}: {
  size?: number;
  fill?: string;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.22,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg
        width={size * 0.54}
        height={size * 0.54}
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8 2C5.24 2 3 4.24 3 7c0 1.77.93 3.33 2.34 4.22L5 13h6l-.34-1.78C12.07 10.33 13 8.77 13 7c0-2.76-2.24-5-5-5zm-1 9H6l.2-1.06A4 4 0 014 7c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.46-.79 2.74-1.96 3.44L10.14 11H9v-1H7v1z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      style={{
        width: 12,
        height: 12,
        flexShrink: 0,
        transform: open ? "rotate(180deg)" : "none",
        transition: "transform .2s",
      }}
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M2 4l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const GLOSSY: React.CSSProperties = {
  background: "rgba(18,18,28,0.55)",
  backdropFilter: "blur(24px) saturate(1.4)",
  WebkitBackdropFilter: "blur(24px) saturate(1.4)",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow:
    "0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.09)",
};

function useDropdown() {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const show = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const hide = () => {
    timer.current = setTimeout(() => setOpen(false), 180);
  };
  return { open, show, hide };
}

function ProductsDropdown() {
  const { open, show, hide } = useDropdown();
  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          border: 0,
          fontSize: 14,
          fontWeight: 500,
          cursor: "pointer",
          padding: "8px 12px",
          borderRadius: 8,
          fontFamily: "inherit",
          transition: "all 0.15s",
          background: open ? "rgba(255,255,255,0.08)" : "transparent",
          color: open ? "#fff" : "rgba(255,255,255,0.7)",
        }}
      >
        Products <Chevron open={open} />
      </button>
      <div
        style={{
          position: "absolute",
          top: "calc(100% + 4px)",
          left: 0,
          zIndex: 200,
          transform: open ? "translateY(0)" : "translateY(-8px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity .18s, transform .18s",
        }}
        onMouseEnter={show}
        onMouseLeave={hide}
      >
        <div style={{ ...GLOSSY, borderRadius: 20, padding: 20, width: 460 }}>
          <div
            style={{
              textAlign: "center",
              paddingBottom: 14,
              marginBottom: 12,
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>
              Full Team
            </div>
            <div
              style={{
                fontSize: 10,
                marginTop: 2,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              Sintra X
            </div>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}
          >
            {TEAM.map((emp) => (
              <a
                key={emp.name}
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  borderRadius: 12,
                  textDecoration: "none",
                  background: "transparent",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.07)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <Avatar name={emp.name} color={emp.color} size={32} />
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      lineHeight: 1.3,
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    {emp.role}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      marginTop: 2,
                      color: "rgba(255,255,255,0.28)",
                    }}
                  >
                    {emp.name}
                  </div>
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
    <div
      style={{ position: "relative" }}
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          border: 0,
          fontSize: 14,
          fontWeight: 500,
          cursor: "pointer",
          padding: "8px 12px",
          borderRadius: 8,
          fontFamily: "inherit",
          transition: "all 0.15s",
          background: open ? "rgba(255,255,255,0.08)" : "transparent",
          color: open ? "#fff" : "rgba(255,255,255,0.7)",
        }}
      >
        {label} <Chevron open={open} />
      </button>
      <div
        style={{
          position: "absolute",
          top: "calc(100% + 4px)",
          left: 0,
          zIndex: 200,
          width: 230,
          transform: open ? "translateY(0)" : "translateY(-8px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity .18s, transform .18s",
        }}
        onMouseEnter={show}
        onMouseLeave={hide}
      ></div>
    </div>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggle = (s: string) => setExpanded((p) => (p === s ? null : s));
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          background: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(4px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.25s",
        }}
      />
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 95,
          width: 300,
          maxWidth: "88vw",
          display: "flex",
          flexDirection: "column",
          background: "#111119",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform .28s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {/* Mobile menu header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            height: 60,
            padding: "0 20px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <LogoIcon size={26} />
            <span
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: "-0.04em",
                textTransform: "lowercase",
              }}
            >
              {BRAND.name}
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: 0,
              background: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: 12 }}>
          <button
            onClick={() => toggle("Products")}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 16px",
              borderRadius: 10,
              border: 0,
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "inherit",
              background: "transparent",
              color: "rgba(255,255,255,0.7)",
              transition: "background 0.15s",
            }}
          >
            Products <Chevron open={expanded === "Products"} />
          </button>
          {expanded === "Products" && (
            <div
              style={{
                marginLeft: 12,
                paddingLeft: 12,
                marginBottom: 4,
                borderLeft: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {TEAM.slice(0, 6).map((emp) => (
                <a
                  key={emp.name}
                  href="#"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 12px",
                    borderRadius: 8,
                    textDecoration: "none",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.55)",
                    background: "transparent",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(255,255,255,0.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <Avatar name={emp.name} color={emp.color} size={24} />{" "}
                  {emp.role}
                </a>
              ))}
            </div>
          )}

          {Object.entries(NAV_DROPDOWNS).map(([section, items]) => (
            <div key={section}>
              <button
                onClick={() => toggle(section)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  borderRadius: 10,
                  border: 0,
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "inherit",
                  background: "transparent",
                  color: "rgba(255,255,255,0.7)",
                  transition: "background 0.15s",
                }}
              >
                {section} <Chevron open={expanded === section} />
              </button>
              {expanded === section && (
                <div
                  style={{
                    marginLeft: 12,
                    paddingLeft: 12,
                    marginBottom: 4,
                    borderLeft: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {items.map((item) => (
                    <a
                      key={item.label}
                      href="#"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "8px 12px",
                        borderRadius: 8,
                        textDecoration: "none",
                        fontSize: 13,
                        color: "rgba(255,255,255,0.5)",
                        background: "transparent",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          "rgba(255,255,255,0.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      <span>{item.icon}</span> {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {["Pricing", "Careers"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                display: "flex",
                padding: "12px 16px",
                borderRadius: 10,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                color: "rgba(255,255,255,0.7)",
                background: "transparent",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              {item}
            </a>
          ))}
        </div>

        <div
          style={{
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            flexShrink: 0,
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <button
            style={{
              width: "100%",
              padding: "12px 0",
              borderRadius: 12,
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "inherit",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "transparent",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Log in
          </button>
          <button
            style={{
              width: "100%",
              padding: "12px 0",
              borderRadius: 12,
              border: 0,
              color: "#fff",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "inherit",
              background: "#3b82f6",
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default function Homepage() {
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const fadeElements = document.querySelectorAll(
      ".animate-fade-up, .animate-bento-card, .animate-footer",
    );
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isTablet =
    typeof window !== "undefined" &&
    window.innerWidth > 768 &&
    window.innerWidth <= 1100;

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          color: "#fff",
          background: "#0a0a0c",
          fontFamily: "'Space Grotesk', Arial, sans-serif",
        }}
      >
        <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp  { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }

        .a1 { animation: fadeUp 1.2s ease both .1s; }
        .a2 { animation: fadeUp 1.2s ease both .3s; }
        .a3 { animation: fadeUp 1.2s ease both .5s; }
        .a4 { animation: fadeUp 1.2s ease both .7s; }
        .a5 { animation: fadeUp 1.2s ease both .9s; }

        .animate-fade-up, .animate-footer {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-bento-card {
           opacity: 0;
           transform: translateY(80px) scale(0.95);
           transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-bento-card:nth-child(1) { transition-delay: 0s; }
        .animate-bento-card:nth-child(2) { transition-delay: 0.2s; }
        .animate-bento-card:nth-child(3) { transition-delay: 0.4s; }

        .is-visible {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }

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
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 40,
            display: "flex",
            alignItems: "center",
            height: 60,
            padding: "0 32px",
            background: scrolled ? "rgba(10,10,12,0.88)" : "rgba(0,0,0,0.18)",
            backdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
            WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
            borderBottom: scrolled
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid transparent",
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
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              width: 36,
              height: 36,
              borderRadius: 8,
              border: 0,
              cursor: "pointer",
              flexShrink: 0,
              background: "rgba(255,255,255,0.05)",
            }}
          >
            <span
              style={{
                display: "block",
                width: 18,
                height: 1.5,
                borderRadius: 2,
                background: "rgba(255,255,255,0.85)",
              }}
            />
            <span
              style={{
                display: "block",
                width: 18,
                height: 1.5,
                borderRadius: 2,
                background: "rgba(255,255,255,0.85)",
              }}
            />
            <span
              style={{
                display: "block",
                width: 13,
                height: 1.5,
                borderRadius: 2,
                background: "rgba(255,255,255,0.85)",
              }}
            />
          </button>

          {/* Logo */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              flexShrink: 0,
              marginRight: 32,
              marginLeft: isMobile ? "auto" : 0,
            }}
          >
            <LogoIcon size={28} />
            <span
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: 17,
                letterSpacing: "-0.04em",
                textTransform: "lowercase",
              }}
            >
              {BRAND.name}
            </span>
          </a>

          {/* Desktop nav links */}
          <div
            className="desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: 4, flex: 1 }}
          >
            <ProductsDropdown />
            <SimpleDropdown label="Features" items={NAV_DROPDOWNS.Features} />
            <a href="#" className="nav-link">
              Pricing
            </a>
            <SimpleDropdown label="Resources" items={NAV_DROPDOWNS.Resources} />
            <a href="#" className="nav-link">
              Careers
            </a>
          </div>

          {/* Desktop CTA */}
          <div
            className="desktop-nav nav-cta"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginLeft: "auto",
              flexShrink: 0,
            }}
          >
            <button
              style={{
                padding: "8px 18px",
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 500,
                fontFamily: "inherit",
                cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.18)",
                background: "transparent",
                color: "rgba(255,255,255,0.7)",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                const b = e.currentTarget;
                b.style.borderColor = "rgba(255,255,255,0.35)";
                b.style.background = "rgba(255,255,255,0.05)";
                b.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                const b = e.currentTarget;
                b.style.borderColor = "rgba(255,255,255,0.18)";
                b.style.background = "transparent";
                b.style.color = "rgba(255,255,255,0.7)";
              }}
            >
              Log in
            </button>
            <button
              style={{
                padding: "8px 18px",
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                cursor: "pointer",
                border: 0,
                color: "#fff",
                background: "#3b82f6",
                boxShadow: "0 6px 20px rgba(59,130,246,0.3)",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                const b = e.currentTarget;
                b.style.background = "#2563eb";
                b.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                const b = e.currentTarget;
                b.style.background = "#3b82f6";
                b.style.transform = "none";
              }}
            >
              Get Started
            </button>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            minHeight: "100vh",
            overflow: "hidden",
          }}
        >
          <video
            src="https://d1oil5daeuar1j.cloudfront.net/vizzy_waving.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              zIndex: 0,
            }}
          />
          {/* <div style={{ position: "absolute", inset: 0, background: "rgba(6,6,10,0.52)", zIndex: 1 }} /> */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right,rgba(6,6,10,0.82) 0%,rgba(6,6,10,0.45) 50%,transparent 100%)",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "55%",
              background:
                "linear-gradient(to top,rgba(6,6,10,0.95) 0%,rgba(6,6,10,0.6) 50%,transparent 100%)",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 100,
              background: "linear-gradient(to top,#0a0a0c,transparent)",
              zIndex: 3,
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 10,
              padding: isMobile ? "0 24px 48px" : "0 80px 80px",
              maxWidth: isMobile ? "100%" : 680,
              opacity: heroVisible ? 1 : 0,
              transition: "opacity .1s",
            }}
          >
            <div
              className="hero-badge a1"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                borderRadius: 100,
                padding: "6px 14px",
                marginBottom: 20,
                background: "rgba(59,130,246,0.12)",
                border: "1px solid rgba(59,130,246,0.25)",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: "#4ade80",
                  boxShadow: "0 0 7px #4ade80",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  color: "#93c5fd",
                }}
              >
                {HERO.badge}: {HERO.badgeDetail}
              </span>
            </div>

            <h1
              className="a2"
              style={{
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                fontSize: "clamp(26px,3.8vw,64px)",
                whiteSpace: "pre-line",
              }}
            >
              {HERO.heading}
            </h1>

            <p
              className="a3"
              style={{
                marginTop: 22,
                color: "rgba(255,255,255,0.72)",
                fontSize: "clamp(15px,1.2vw,18px)",
                lineHeight: 1.7,
                maxWidth: isMobile ? "100%" : 560,
              }}
            >
              {HERO.subheading}
            </p>

            <div
              className="a4"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 32,
              }}
            >
              <button className="btn-primary">{HERO.primaryCta}</button>
              <button className="btn-ghost hero-watch-btn">
                {HERO.secondaryCta} →
              </button>
            </div>

            <div
              className="hero-social a5"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginTop: 40,
              }}
            >
              <div style={{ display: "flex" }}>
                {["#8b5cf6", "#3b82f6", "#22c55e", "#f97316", "#d946ef"].map(
                  (c, i) => (
                    <div
                      key={i}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        background: c,
                        border: "2.5px solid #0a0a0c",
                        marginLeft: i > 0 ? -8 : 0,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                      }}
                    />
                  ),
                )}
              </div>
              <div>
                <div style={{ display: "flex", gap: 2, marginBottom: 3 }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} style={{ fontSize: 12, color: "#fbbf24" }}>
                      ★
                    </span>
                  ))}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.32)" }}>
                  {HERO.socialProof}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── AI ASSISTANTS CAROUSEL ── */}
        <section
          style={{
            position: "relative",
            padding: isMobile ? "40px 0" : "80px 0",
            background: "#0a0a0c",
            overflow: "hidden",
            zIndex: 10,
          }}
        >
          <div
            style={{
              maxWidth: 1160,
              margin: "0 auto",
              padding: isMobile ? "0 24px" : "0 32px",
              marginBottom: 32,
            }}
          >
            <h2
              className="animate-fade-up"
              style={{
                fontSize: isMobile ? 32 : 48,
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              Meet your AI workforce.
            </h2>
            <p
              className="animate-fade-up"
              style={{
                marginTop: 16,
                fontSize: 18,
                color: "rgba(255,255,255,0.6)",
                maxWidth: 600,
              }}
            >
              Supercharge your team with intelligent, specialized AI assistants
              ready to take on your most complex tasks.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 1300,
              margin: "0 auto",
              padding: isMobile ? "0 0 20px" : "0 70px",
            }}
          >
            <div
              id="ai-carousel"
              onScroll={(e) => {
                const carousel = e.currentTarget;
                if (carousel.scrollLeft <= 0) {
                  // If scrolled to the very left, jump to the middle (start of second set)
                  carousel.scrollLeft = carousel.scrollWidth / 2;
                } else if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
                  // If scrolled past the first set, jump back to start
                  carousel.scrollLeft = 1;
                }
              }}
              style={{
                display: "flex",
                gap: 24,
                padding: isMobile ? "0 24px" : "0",
                overflowX: "auto",
                overflowY: "hidden",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {/* Render the list twice for infinite scrolling effect */}
              {[...AI_ASSISTANTS, ...AI_ASSISTANTS].map((ai, i) => (
                <div
                  key={`${ai.name}-${i}`}
                  className="animate-fade-up"
                  style={{
                    width: isMobile ? 300 : "calc((100% - 48px) / 3)",
                    flexShrink: 0,
                    background: "rgba(255,255,255,0)",
                    borderRadius: 24,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={ai.image}
                    alt={ai.name}
                    style={{
                      width: "100%",
                      height: isMobile ? 360 : 400,
                      objectFit: "cover",
                      borderRadius: 20,
                    }}
                  />
                  <div style={{ padding: "20px 8px" }}>
                    <h3 style={{ fontSize: 24, fontWeight: 700 }}>{ai.name}</h3>
                    <p
                      style={{
                        marginTop: 10,
                        fontSize: 15,
                        color: "rgba(255,255,255,0.55)",
                        lineHeight: 1.6,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {ai.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Nav arrows */}
            {!isMobile && (
              <>
                <button
                  onClick={() => {
                    const c = document.getElementById("ai-carousel");
                    if (c) {
                      const w = c.children[0].clientWidth + 24;
                      c.scrollBy({ left: -w, behavior: "smooth" });
                    }
                  }}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "40%",
                    transform: "translateY(-50%)",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "rgba(20,20,20,0.8)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    backdropFilter: "blur(12px)",
                    zIndex: 10,
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(40,40,40,0.9)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(20,20,20,0.8)")
                  }
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => {
                    const c = document.getElementById("ai-carousel");
                    if (c) {
                      const w = c.children[0].clientWidth + 24;
                      c.scrollBy({ left: w, behavior: "smooth" });
                    }
                  }}
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "40%",
                    transform: "translateY(-50%)",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "rgba(20,20,20,0.8)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    backdropFilter: "blur(12px)",
                    zIndex: 10,
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(40,40,40,0.9)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(20,20,20,0.8)")
                  }
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Hide scrollbar with css for webkit */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
          #ai-carousel::-webkit-scrollbar { display: none; }
        `,
            }}
          />
        </section>

        {/* ── ABOUT US ── */}
        <section
          style={{
            padding: isMobile ? "64px 24px" : "100px 32px",
            background: "#0a0a0c",
          }}
        >
          <div
            style={{
              maxWidth: 1160,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? 40 : 80,
              alignItems: "center",
            }}
          >
            <div>
              <div
                className="animate-fade-up"
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#3b82f6",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 16,
                }}
              >
                About Us
              </div>
              <h2
                className="animate-fade-up"
                style={{
                  fontSize: isMobile ? 32 : 48,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.15,
                  marginBottom: 24,
                }}
              >
                {ABOUT_US.heading}
              </h2>
            </div>
            <div
              className="animate-fade-up"
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              {ABOUT_US.paragraphs.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: 17,
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.7,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR PRODUCTS (APPS + PILLARS) ── */}
        <section
          style={{
            padding: isMobile ? "64px 24px" : "100px 32px",
            background: "#0e0e14",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div
              className="animate-fade-up"
              style={{ textAlign: "center", marginBottom: 64 }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#10b981",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 16,
                }}
              >
                Our Products
              </div>
              <h2
                style={{
                  fontSize: isMobile ? 32 : 48,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  marginBottom: 16,
                }}
              >
                Solutions Designed for
                <br />
                Real Business Problems
              </h2>
              <p
                style={{
                  fontSize: 18,
                  color: "rgba(255,255,255,0.6)",
                  maxWidth: 600,
                  margin: "0 auto",
                }}
              >
                Our product ecosystem is designed to cover multiple operational
                needs of modern businesses.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: 16,
                overflowX: "auto",
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE and Edge
                paddingBottom: 24, // Give some breathing room for potential scrollbar interaction if visible
              }}
            >
              {PLATFORM_PILLARS.map((pillar, i) => (
                <div
                  key={i}
                  className="animate-bento-card"
                  style={{
                    borderRadius: 28,
                    overflow: "hidden",
                    position: "relative",
                    background: pillar.gradient,
                    padding: isMobile ? "36px 28px" : "44px 40px",
                    minHeight: isMobile ? 320 : 380,
                    minWidth: isMobile ? "85vw" : "350px", // Give cards fixed width for horizontal scrolling
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      flexWrap: "wrap",
                      marginBottom: 20,
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        background: "rgba(255,255,255,0.15)",
                        borderRadius: 100,
                        padding: "5px 14px",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#fff",
                      }}
                    >
                      <span style={{ fontSize: 14 }}>{pillar.icon}</span>
                      {"Platform Pillar"}
                    </div>
                  </div>

                  <div style={{ fontSize: 40, marginBottom: 20, position: "relative", zIndex: 1 }}>
                    {pillar.icon}
                  </div>

                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      maxWidth: "100%",
                    }}
                  >
                    <h2
                      style={{
                        fontWeight: 700,
                        fontSize: "clamp(20px,2vw,28px)",
                        color: "#fff",
                        lineHeight: 1.25,
                        marginBottom: 16,
                      }}
                    >
                      {pillar.title}
                    </h2>
                    <p
                      style={{
                        fontSize: 15,
                        color: "rgba(255,255,255,0.85)",
                        lineHeight: 1.65,
                      }}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      right: -60,
                      bottom: -60,
                      width: 250,
                      height: 250,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.12)",
                      filter: "blur(60px)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section
          style={{
            padding: isMobile ? "64px 24px" : "100px 32px",
            background: "#0a0a0c",
          }}
        >
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div className="animate-fade-up" style={{ marginBottom: 56 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#f59e0b",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 16,
                }}
              >
                Why Choose Us
              </div>
              <h2
                style={{
                  fontSize: isMobile ? 32 : 48,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                }}
              >
                Built for Performance & Scale.
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
                gap: 24,
              }}
            >
              {WHY_CHOOSE_US.map((reason, i) => (
                <div
                  key={i}
                  className="animate-fade-up"
                  style={{
                    padding: 32,
                    borderRadius: 20,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: `rgba(${parseInt(reason.color.slice(1, 3), 16)},${parseInt(reason.color.slice(3, 5), 16)},${parseInt(reason.color.slice(5, 7), 16)},0.15)`,
                      border: `1px solid ${reason.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: reason.color,
                      marginBottom: 24,
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3
                    style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.6,
                    }}
                  >
                    {reason.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES WE SERVE ── */}
        <section
          style={{
            padding: isMobile ? "64px 24px" : "100px 32px",
            background: "#0e0e14",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div
            style={{ maxWidth: 1160, margin: "0 auto", textAlign: "center" }}
          >
            <h2
              className="animate-fade-up"
              style={{
                fontSize: isMobile ? 28 : 36,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                marginBottom: 16,
              }}
            >
              Industries We Serve
            </h2>
            <p
              className="animate-fade-up"
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.6)",
                marginBottom: 48,
              }}
            >
              Our software products support businesses across multiple sectors:
            </p>

            <div
              className="animate-fade-up"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 12,
              }}
            >
              {INDUSTRIES.map((ind, i) => (
                <div
                  key={i}
                  style={{
                    padding: "12px 24px",
                    borderRadius: 100,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontSize: 15,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  {ind}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CALL TO ACTION ── */}
        <section
          style={{
            padding: isMobile ? "80px 24px" : "120px 32px",
            background: "linear-gradient(to bottom, #0a0a0c, #050508)",
          }}
        >
          <div
            className="animate-fade-up"
            style={{
              maxWidth: 800,
              margin: "0 auto",
              textAlign: "center",
              padding: isMobile ? "40px 24px" : "64px",
              background: "rgba(59,130,246,0.05)",
              border: "1px solid rgba(59,130,246,0.15)",
              borderRadius: 32,
              boxShadow: "0 20px 80px rgba(59,130,246,0.07)",
            }}
          >
            <h2
              style={{
                fontSize: isMobile ? 32 : 48,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              {CTA_SECTION.heading}
            </h2>
            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.7)",
                marginBottom: 40,
                maxWidth: 600,
                margin: "0 auto 40px",
              }}
            >
              {CTA_SECTION.subheading}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 16,
              }}
            >
              <button
                className="btn-primary"
                style={{ padding: "16px 36px", fontSize: 16 }}
              >
                {CTA_SECTION.primaryCta}
              </button>
              <button
                className="btn-ghost"
                style={{ padding: "16px 36px", fontSize: 16 }}
              >
                {CTA_SECTION.secondaryCta}
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
