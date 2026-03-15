import { WHY_CHOOSE_US } from "~/data";

export default function WhyChooseUs({ isMobile }: { isMobile: boolean }) {
  return (
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
  );
}
