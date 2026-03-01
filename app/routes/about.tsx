import PageLayout from "../components/PageLayout";

export function meta() {
    return [
        { title: "About Us — White Rabbit Tech" },
        {
            name: "description",
            content:
                "Learn about White Rabbit Tech, a product-based software company building Gym Rabbit, School Bit, and Rabbit Case.",
        },
    ];
}

export default function About() {
    return (
        <PageLayout>
            <h1 className="page-title">About White Rabbit Tech</h1>
            <p className="page-updated">Who we are and what we build</p>

            <h2 className="page-section-title">Our Mission</h2>
            <p className="page-text">
                White Rabbit Tech is a product-based software company on a mission to build
                powerful, purpose-built management tools that help real businesses run
                smarter. We believe great software should be simple, reliable, and
                designed for the people who use it every day.
            </p>

            <h2 className="page-section-title">What We Do</h2>
            <p className="page-text">
                We design, develop, and maintain industry-specific SaaS platforms that
                solve real operational challenges. Our team combines deep domain
                expertise with modern engineering to deliver tools that businesses can
                depend on.
            </p>

            <h2 className="page-section-title">Our Products</h2>
            <div className="about-products-grid">
                <div className="about-product-card">
                    <span className="about-product-icon">🐰</span>
                    <div className="about-product-name">Gym Rabbit</div>
                    <div className="about-product-tag">Gym Management Software</div>
                </div>
                <div className="about-product-card">
                    <span className="about-product-icon">📚</span>
                    <div className="about-product-name">School Bit</div>
                    <div className="about-product-tag">Schools Management Software</div>
                </div>
                <div className="about-product-card">
                    <span className="about-product-icon">⚖️</span>
                    <div className="about-product-name">Rabbit Case</div>
                    <div className="about-product-tag">AI Powered Legal Management</div>
                </div>
            </div>

            <h2 className="page-section-title">Our Values</h2>
            <ul className="page-list">
                <li>
                    <strong>Simplicity</strong> — We strip away complexity so users can
                    focus on what matters.
                </li>
                <li>
                    <strong>Reliability</strong> — Our platforms are built to work
                    flawlessly, every single day.
                </li>
                <li>
                    <strong>Impact</strong> — We measure success by the real-world
                    difference our tools make.
                </li>
                <li>
                    <strong>Innovation</strong> — We leverage cutting-edge technologies
                    like AI to stay ahead of industry needs.
                </li>
            </ul>
        </PageLayout>
    );
}
