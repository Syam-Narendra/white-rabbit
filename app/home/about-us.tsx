import { ABOUT_US } from "~/data";

export default function AboutUs({ isMobile }: { isMobile: boolean }) {
  return (
    <section
      style={{
        padding: isMobile ? "64px 24px" : "100px 32px",
        background: "#0a0a0c",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 40 : 80,
          alignItems: "center",
        }}
      >
        <div>
          <div
            className="animate-fade-up"
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#3b82f6",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 16,
            }}
          >
            About Us
          </div>
          <h2
            className="animate-fade-up"
            style={{
              fontSize: isMobile ? 32 : 48,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            {ABOUT_US.heading}
          </h2>
        </div>
        <div
          className="animate-fade-up"
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          {ABOUT_US.paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
