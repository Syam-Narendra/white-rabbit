import { Link } from "react-router";

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
            <Link className="pill-btn-outer" to={href}>
                {inner}
            </Link>
        );
    }
    return <button className="pill-btn-outer">{inner}</button>;
}

/* ── Shared Page Layout ─────────────────────────────────── */
export default function PageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="page-container">
            {/* Navbar */}
            <nav className="navbar page-navbar">
                <div className="navbar-left">
                    <Link to="/" className="navbar-logo">
                        <span className="navbar-logo-icon">🐇</span>
                        WHITE RABBIT
                    </Link>
                    <div className="nav-links">
                        <Link className="nav-link" to="/#products">
                            Products
                        </Link>
                        <Link className="nav-link" to="/about">
                            About Us
                        </Link>
                        <Link className="nav-link" to="/contact">
                            Contact
                        </Link>
                    </div>
                </div>
                <PillButton label="Get Started" variant="dark" href="/#products" />
            </nav>

            {/* Page Content */}
            <main className="page-content">{children}</main>

            {/* Footer */}
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
                                <Link className="footer-link" to="/#products">
                                    Gym Rabbit
                                </Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/#products">
                                    School Bit
                                </Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/#products">
                                    Rabbit Case
                                </Link>
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
        </div>
    );
}
