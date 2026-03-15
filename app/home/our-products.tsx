import { PLATFORM_PILLARS } from "~/data";

export default function OurProducts({ isMobile }: { isMobile: boolean }) {
  return (
    <section
      style={{
        padding: isMobile ? "64px 24px" : "100px 32px",
        background: "#0e0e14",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div
          className="animate-fade-up"
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#10b981",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 16,
            }}
          >
            Our Products
          </div>
          <h2
            style={{
              fontSize: isMobile ? 32 : 48,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              marginBottom: 16,
            }}
          >
            Solutions Designed for
            <br />
            Real Business Problems
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Our product ecosystem is designed to cover multiple operational
            needs of modern businesses.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            overflowX: "auto",
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE and Edge
            paddingBottom: 24, // Give some breathing room for potential scrollbar interaction if visible
          }}
        >
          {PLATFORM_PILLARS.map((pillar, i) => (
            <div
              key={i}
              className="animate-bento-card"
              style={{
                borderRadius: 28,
                overflow: "hidden",
                position: "relative",
                background: pillar.gradient,
                padding: isMobile ? "36px 28px" : "44px 40px",
                minHeight: isMobile ? 320 : 380,
                minWidth: isMobile ? "85vw" : "350px", // Give cards fixed width for horizontal scrolling
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flexWrap: "wrap",
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: 100,
                    padding: "5px 14px",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  <span style={{ fontSize: 14 }}>{pillar.icon}</span>
                  {"Platform Pillar"}
                </div>
              </div>

              <div style={{ fontSize: 40, marginBottom: 20, position: "relative", zIndex: 1 }}>
                {pillar.icon}
              </div>

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  maxWidth: "100%",
                }}
              >
                <h2
                  style={{
                    fontWeight: 700,
                    fontSize: "clamp(20px,2vw,28px)",
                    color: "#fff",
                    lineHeight: 1.25,
                    marginBottom: 16,
                  }}
                >
                  {pillar.title}
                </h2>
                <p
                  style={{
                    fontSize: 15,
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.65,
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
              <div
                style={{
                  position: "absolute",
                  right: -60,
                  bottom: -60,
                  width: 250,
                  height: 250,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.12)",
                  filter: "blur(60px)",
                  pointerEvents: "none",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
