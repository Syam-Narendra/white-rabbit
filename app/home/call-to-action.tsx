import { CTA_SECTION } from "~/data";

export default function CallToAction({ isMobile }: { isMobile: boolean }) {
  return (
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
  );
}
