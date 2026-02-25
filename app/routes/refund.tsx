import PageLayout from "../components/PageLayout";

export function meta() {
    return [
        { title: "Refund & Cancellation Policy — White Rabbit" },
        {
            name: "description",
            content:
                "Understand the White Rabbit refund and cancellation policy for all our products.",
        },
    ];
}

export default function Refund() {
    return (
        <PageLayout>
            <h1 className="page-title">Refund &amp; Cancellation Policy</h1>
            <p className="page-updated">Last updated: February 25, 2026</p>

            <h2 className="page-section-title">Overview</h2>
            <p className="page-text">
                This Refund and Cancellation Policy applies to all subscriptions and
                purchases made through White Rabbit products, including Gym Rabbit,
                School Bit, and Rabbit Case. We want you to be satisfied with our
                services, and we aim to handle refund requests fairly and transparently.
            </p>

            <h2 className="page-section-title">Free Trial</h2>
            <p className="page-text">
                We offer a free trial period for all our products. During this period,
                you can explore the full functionality of the product at no cost. No
                payment information is required to start a free trial. If you choose not
                to subscribe after the trial, your account will simply be downgraded — no
                charges will apply.
            </p>

            <h2 className="page-section-title">Subscription Cancellation</h2>
            <p className="page-text">You may cancel your subscription at any time:</p>
            <ul className="page-list">
                <li>
                    Cancellations can be initiated through your account settings or by
                    contacting our support team.
                </li>
                <li>
                    Upon cancellation, your subscription will remain active until the end
                    of the current billing period.
                </li>
                <li>
                    You will not be charged for subsequent billing cycles after
                    cancellation.
                </li>
                <li>
                    Your data will be retained for 30 days after the subscription ends,
                    after which it may be permanently deleted.
                </li>
            </ul>

            <h2 className="page-section-title">Refund Eligibility</h2>
            <p className="page-text">
                Refunds are considered on a case-by-case basis under the following
                circumstances:
            </p>
            <ul className="page-list">
                <li>
                    <strong>Within 7 days of purchase</strong> — If you are unsatisfied
                    with the product and have not extensively used the platform, you may
                    request a full refund within 7 days of your first payment.
                </li>
                <li>
                    <strong>Service disruptions</strong> — If our product experiences
                    significant downtime or technical issues that prevent you from using
                    the service, a prorated refund or service credit may be issued.
                </li>
                <li>
                    <strong>Duplicate charges</strong> — If you are charged more than once
                    for the same subscription period, the duplicate charge will be refunded
                    in full.
                </li>
            </ul>

            <h2 className="page-section-title">Non-Refundable Cases</h2>
            <p className="page-text">Refunds will not be granted in the following cases:</p>
            <ul className="page-list">
                <li>After the 7-day refund window has passed</li>
                <li>If the account has been suspended due to a violation of our Terms</li>
                <li>For partial months of service during the billing period</li>
                <li>
                    For add-on features or services that have already been delivered
                </li>
            </ul>

            <h2 className="page-section-title">How to Request a Refund</h2>
            <p className="page-text">
                To request a refund, please contact our support team at{" "}
                <a
                    href="mailto:billing@whiterabbit.dev"
                    style={{ color: "#fff", textDecoration: "underline" }}
                >
                    billing@whiterabbit.dev
                </a>{" "}
                with the following details:
            </p>
            <ul className="page-list">
                <li>Your registered email address</li>
                <li>Product name (Gym Rabbit, School Bit, or Rabbit Case)</li>
                <li>Reason for the refund request</li>
                <li>Transaction or invoice ID (if available)</li>
            </ul>
            <p className="page-text">
                We aim to process all refund requests within 5–7 business days. Approved
                refunds will be credited to the original payment method.
            </p>

            <h2 className="page-section-title">Contact Us</h2>
            <p className="page-text">
                If you have any questions about this policy, please contact us at{" "}
                <a
                    href="mailto:billing@whiterabbit.dev"
                    style={{ color: "#fff", textDecoration: "underline" }}
                >
                    billing@whiterabbit.dev
                </a>
                .
            </p>
        </PageLayout>
    );
}
