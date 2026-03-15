import { useState, useEffect, useRef } from "react";
import { TEAM, BRAND, NAV_DROPDOWNS } from "~/data";
import type { NavItem } from "~/data";

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

export function LogoIcon({
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

export default function Navbar({
  scrolled,
  isMobile,
  mobileOpen,
  setMobileOpen,
}: {
  scrolled: boolean;
  isMobile: boolean;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  return (
    <>
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
    </>
  );
}
