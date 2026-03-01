import PageLayout from "../components/PageLayout";

export function meta() {
    return [
        { title: "Terms and Conditions — White Rabbit Tech" },
        {
            name: "description",
            content:
                "Read the terms and conditions for using White Rabbit Tech products and services.",
        },
    ];
}

export default function Terms() {
    return (
        <PageLayout>
            <h1 className="page-title">Terms and Conditions</h1>
            <p className="page-updated">Last updated: February 25, 2026</p>

            <h2 className="page-section-title">Agreement to Terms</h2>
            <p className="page-text">
                By accessing or using any product or service provided by White Rabbit Tech
                ("Company"), including Gym Rabbit, School Bit, and Rabbit Case, you
                agree to be bound by these Terms and Conditions. If you disagree with
                any part of these terms, you may not access our services.
            </p>

            <h2 className="page-section-title">Use of Our Products</h2>
            <p className="page-text">
                Our products are provided on a subscription basis. You are granted a
                limited, non-exclusive, non-transferable license to use our software for
                your business operations in accordance with the plan you have
                subscribed to.
            </p>
            <ul className="page-list">
                <li>
                    You must not use our products for any unlawful or unauthorized purpose.
                </li>
                <li>
                    You are responsible for maintaining the confidentiality of your account
                    credentials.
                </li>
                <li>
                    You must not attempt to reverse-engineer, decompile, or disassemble
                    our software.
                </li>
                <li>
                    You must not resell, redistribute, or sublicense access to our
                    products without written consent.
                </li>
            </ul>

            <h2 className="page-section-title">Accounts and Registration</h2>
            <p className="page-text">
                To use our products, you must create an account with accurate, complete,
                and current information. You are solely responsible for all activity that
                occurs under your account. You must notify us immediately of any
                unauthorized use of your account.
            </p>

            <h2 className="page-section-title">Payment Terms</h2>
            <p className="page-text">
                Subscription fees are billed in advance on a monthly or annual basis,
                depending on the plan selected. All fees are non-refundable except as
                expressly stated in our Refund/Cancellation Policy. We reserve the right
                to change pricing with 30 days' notice.
            </p>

            <h2 className="page-section-title">Intellectual Property</h2>
            <p className="page-text">
                All content, features, functionality, and design of our products are
                owned by White Rabbit Tech and are protected by copyright, trademark, and
                other intellectual property laws. You retain ownership of the data you
                input into our platforms.
            </p>

            <h2 className="page-section-title">Limitation of Liability</h2>
            <p className="page-text">
                To the maximum extent permitted by law, White Rabbit Tech shall not be liable
                for any indirect, incidental, special, consequential, or punitive
                damages arising out of or relating to your use of our products. Our
                total liability shall not exceed the amount paid by you in the 12 months
                preceding the event giving rise to the claim.
            </p>

            <h2 className="page-section-title">Termination</h2>
            <p className="page-text">
                We may suspend or terminate your account if you violate these Terms. You
                may terminate your account at any time by contacting our support team.
                Upon termination, your right to use our products will cease immediately.
            </p>

            <h2 className="page-section-title">Governing Law</h2>
            <p className="page-text">
                These Terms shall be governed by and construed in accordance with the
                laws of India. Any disputes arising from these terms shall be subject to
                the exclusive jurisdiction of the courts in Bengaluru, India.
            </p>

            <h2 className="page-section-title">Contact Us</h2>
            <p className="page-text">
                If you have any questions about these Terms and Conditions, please
                contact us at{" "}
                <a
                    href="mailto:legal@whiterabbit.dev"
                    style={{ color: "#fff", textDecoration: "underline" }}
                >
                    legal@whiterabbit.dev
                </a>
                .
            </p>
        </PageLayout>
    );
}
