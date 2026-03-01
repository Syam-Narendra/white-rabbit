import PageLayout from "../components/PageLayout";

export function meta() {
    return [
        { title: "Contact Us — White Rabbit Tech" },
        {
            name: "description",
            content:
                "Get in touch with the White Rabbit Tech team. We'd love to hear from you.",
        },
    ];
}

export default function Contact() {
    return (
        <PageLayout>
            <h1 className="page-title">Contact Us</h1>
            <p className="page-updated">We'd love to hear from you</p>

            <div className="contact-grid">
                <div className="contact-card">
                    <span className="contact-card-icon">📧</span>
                    <div className="contact-card-label">Email</div>
                    <div className="contact-card-value">
                        <a href="mailto:hello@whiterabbit.dev">hello@whiterabbit.dev</a>
                    </div>
                </div>

                <div className="contact-card">
                    <span className="contact-card-icon">📍</span>
                    <div className="contact-card-label">Location</div>
                    <div className="contact-card-value">
                        Hyderabad, India
                    </div>
                </div>

                <div className="contact-card">
                    <span className="contact-card-icon">🕐</span>
                    <div className="contact-card-label">Working Hours</div>
                    <div className="contact-card-value">
                        Mon – Fri, 9:00 AM – 6:00 PM IST
                    </div>
                </div>

                <div className="contact-card">
                    <span className="contact-card-icon">💬</span>
                    <div className="contact-card-label">Support</div>
                    <div className="contact-card-value">
                        <a href="mailto:support@whiterabbit.dev">
                            support@whiterabbit.dev
                        </a>
                    </div>
                </div>
            </div>

            <h2 className="page-section-title">General Inquiries</h2>
            <p className="page-text">
                For partnership opportunities, media requests, or general questions,
                reach out to us at{" "}
                <a
                    href="mailto:hello@whiterabbit.dev"
                    style={{ color: "#fff", textDecoration: "underline" }}
                >
                    hello@whiterabbit.dev
                </a>
                . We typically respond within 24 hours on business days.
            </p>

            <h2 className="page-section-title">Product Support</h2>
            <p className="page-text">
                If you need help with any of our products — Gym Rabbit, School Bit, or
                Rabbit Case — please contact our dedicated support team at{" "}
                <a
                    href="mailto:support@whiterabbit.dev"
                    style={{ color: "#fff", textDecoration: "underline" }}
                >
                    support@whiterabbit.dev
                </a>
                . Include your product name and account details for faster assistance.
            </p>
        </PageLayout>
    );
}
