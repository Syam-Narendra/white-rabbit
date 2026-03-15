import { INDUSTRIES } from "~/data";

export default function IndustriesWeServe({ isMobile }: { isMobile: boolean }) {
  return (
    <section
      style={{
        padding: isMobile ? "64px 24px" : "100px 32px",
        background: "#0e0e14",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{ maxWidth: 1160, margin: "0 auto", textAlign: "center" }}
      >
        <h2
          className="animate-fade-up"
          style={{
            fontSize: isMobile ? 28 : 36,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: 16,
          }}
        >
          Industries We Serve
        </h2>
        <p
          className="animate-fade-up"
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 48,
          }}
        >
          Our software products support businesses across multiple sectors:
        </p>

        <div
          className="animate-fade-up"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
          }}
        >
          {INDUSTRIES.map((ind, i) => (
            <div
              key={i}
              style={{
                padding: "12px 24px",
                borderRadius: 100,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                fontSize: 15,
                fontWeight: 500,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {ind}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
