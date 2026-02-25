import PageLayout from "../components/PageLayout";

export function meta() {
    return [
        { title: "Privacy Policy — White Rabbit" },
        {
            name: "description",
            content:
                "Read the White Rabbit privacy policy to understand how we collect, use, and protect your data.",
        },
    ];
}

export default function Privacy() {
    return (
        <PageLayout>
            <h1 className="page-title">Privacy Policy</h1>
            <p className="page-updated">Last updated: February 25, 2026</p>

            <h2 className="page-section-title">Introduction</h2>
            <p className="page-text">
                White Rabbit ("Company", "we", "us", or "our") is committed to
                protecting your personal information and your right to privacy. This
                Privacy Policy explains what information we collect, how we use it, and
                what rights you have in relation to it.
            </p>
            <p className="page-text">
                This policy applies to all information collected through our products —
                Gym Rabbit, School Bit, and Rabbit Case — as well as our website and any
                related services, sales, marketing, or events.
            </p>

            <h2 className="page-section-title">Information We Collect</h2>
            <p className="page-text">
                We collect information that you voluntarily provide to us when you
                register for our products, express interest in obtaining information
                about us or our products, or otherwise contact us.
            </p>
            <ul className="page-list">
                <li>Name and contact details (email address, phone number)</li>
                <li>Account credentials (username, password)</li>
                <li>Billing and payment information</li>
                <li>Business information relevant to the product you use</li>
                <li>Usage data and analytics within our platforms</li>
            </ul>

            <h2 className="page-section-title">How We Use Your Information</h2>
            <p className="page-text">We use the information we collect to:</p>
            <ul className="page-list">
                <li>Provide, operate, and maintain our products</li>
                <li>Process transactions and manage your account</li>
                <li>Send administrative information, updates, and security alerts</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our products, services, marketing, and user experience</li>
                <li>Comply with legal obligations</li>
            </ul>

            <h2 className="page-section-title">Cookies and Tracking</h2>
            <p className="page-text">
                We use cookies and similar tracking technologies to collect and track
                information and to improve and analyze our products. You can instruct
                your browser to refuse all cookies or to indicate when a cookie is being
                sent.
            </p>

            <h2 className="page-section-title">Data Retention</h2>
            <p className="page-text">
                We retain your personal information for as long as necessary to fulfill
                the purposes outlined in this privacy policy, unless a longer retention
                period is required or permitted by law.
            </p>

            <h2 className="page-section-title">Data Security</h2>
            <p className="page-text">
                We implement appropriate technical and organizational security measures
                to protect your personal information. However, no method of transmission
                over the Internet is 100% secure, and we cannot guarantee absolute
                security.
            </p>

            <h2 className="page-section-title">Your Rights</h2>
            <p className="page-text">
                Depending on your location, you may have certain rights regarding your
                personal information, including the right to access, correct, delete, or
                restrict the processing of your data. To exercise these rights, please
                contact us at{" "}
                <a
                    href="mailto:privacy@whiterabbit.dev"
                    style={{ color: "#fff", textDecoration: "underline" }}
                >
                    privacy@whiterabbit.dev
                </a>
                .
            </p>

            <h2 className="page-section-title">Contact Us</h2>
            <p className="page-text">
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a
                    href="mailto:privacy@whiterabbit.dev"
                    style={{ color: "#fff", textDecoration: "underline" }}
                >
                    privacy@whiterabbit.dev
                </a>
                .
            </p>
        </PageLayout>
    );
}
