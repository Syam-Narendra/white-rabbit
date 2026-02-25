import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "White Rabbit — Building Software That Powers Businesses" },
    {
      name: "description",
      content:
        "White Rabbit is a product-based software company building Gym Rabbit, School Bit, and Rabbit Case — powerful management tools for businesses.",
    },
    { name: "theme-color", content: "#000000" },
  ];
}

/* ── Pill Button ────────────────────────────────────────── */
function PillButton({
  label,
  variant = "dark",
  href,
}: {
  label: string;
  variant?: "dark" | "light";
  href?: string;
}) {
  const inner = (
    <>
      <span className="pill-btn-glow" />
      <span
        className={`pill-btn-inner ${variant === "light" ? "pill-btn-inner--light" : "pill-btn-inner--dark"
          }`}
      >
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <a className="pill-btn-outer" href={href}>
        {inner}
      </a>
    );
  }
  return <button className="pill-btn-outer">{inner}</button>;
}

/* ── Products Data ──────────────────────────────────────── */
const PRODUCTS = [
  {
    icon: "🐰",
    name: "Gym Rabbit",
    tagline: "Gym Management Software",
    desc: "A complete solution for gym owners — manage memberships, track attendance, automate billing, and keep your fitness community thriving with effortless tools.",
  },
  {
    icon: "📚",
    name: "School Bit",
    tagline: "Schools Management Software",
    desc: "Simplify school administration from admissions to report cards. Manage students, teachers, fees, timetables, and parent communication in one unified platform.",
  },
  {
    icon: "⚖️",
    name: "Rabbit Case",
    tagline: "AI Powered Management for Lawyers",
    desc: "An intelligent case management system for legal professionals. AI-powered document analysis, deadline tracking, client management, and billing — all in one place.",
  },
];

/* ── Page ────────────────────────────────────────────────── */
export default function Home() {
  const VIDEO_URL =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4";

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <div className="hero-wrapper">
        <video
          className="hero-video"
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay" />

        <div className="hero-content-wrapper">
          {/* ── Navbar ──────────────────────────────────── */}
          <nav className="navbar">
            <div className="navbar-left">
              <Link to="/" className="navbar-logo">
                <span className="navbar-logo-icon">🐇</span>
                WHITE RABBIT
              </Link>
              <div className="nav-links">
                <a className="nav-link" href="#products">
                  Products
                </a>
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
            <PillButton
              label="Get Started"
              variant="dark"
              href="#products"
            />
          </nav>

          {/* ── Hero Content ────────────────────────────── */}
          <section className="hero-section">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span className="hero-badge-text-muted">
                Product-based software company
              </span>
              <span className="hero-badge-text-white">Est. 2026</span>
            </div>

            <h1 className="hero-heading">
              Building Software That Powers Businesses
            </h1>

            <p className="hero-subtitle">
              White Rabbit crafts powerful, purpose-built management tools for
              gyms, schools, and legal professionals — helping businesses run
              smarter, faster, and with confidence.
            </p>

            <PillButton
              label="Explore Products"
              variant="light"
              href="#products"
            />
          </section>
        </div>
      </div>

      {/* ═══════════ PRODUCTS ═══════════ */}
      <section className="products-section" id="products">
        <p className="section-label">Our Products</p>
        <h2 className="section-heading">
          Tools Built for the Real World
        </h2>
        <p className="section-subtitle">
          Three powerful platforms — each designed to solve real problems for the
          industries that matter most.
        </p>

        <div className="products-grid">
          {PRODUCTS.map((p) => (
            <div className="product-card" key={p.name}>
              <span className="product-icon">{p.icon}</span>
              <h3 className="product-name">{p.name}</h3>
              <p className="product-tagline">{p.tagline}</p>
              <p className="product-desc">{p.desc}</p>
              <span className="product-link">
                Learn More{" "}
                <span className="product-link-arrow">→</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name">
              <span>🐇</span> White Rabbit
            </div>
            <p className="footer-brand-desc">
              A product-based software company building tools that help
              businesses operate at their best.
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">Products</h4>
            <ul className="footer-links">
              <li>
                <a className="footer-link" href="#products">
                  Gym Rabbit
                </a>
              </li>
              <li>
                <a className="footer-link" href="#products">
                  School Bit
                </a>
              </li>
              <li>
                <a className="footer-link" href="#products">
                  Rabbit Case
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li>
                <Link className="footer-link" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Legal</h4>
            <ul className="footer-links">
              <li>
                <Link className="footer-link" to="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/terms">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/refund">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            © {new Date().getFullYear()} White Rabbit. All rights reserved.
          </span>
          <div className="footer-bottom-links">
            <Link className="footer-bottom-link" to="/privacy">
              Privacy
            </Link>
            <Link className="footer-bottom-link" to="/terms">
              Terms
            </Link>
            <Link className="footer-bottom-link" to="/refund">
              Refund
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
