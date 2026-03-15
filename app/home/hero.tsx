import { HERO } from "~/data";

export default function HeroSection({ isMobile, heroVisible }: { isMobile: boolean; heroVisible: boolean }) {
  return (
    <section
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <video
        src="https://d1oil5daeuar1j.cloudfront.net/vizzy_waving.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          zIndex: 0,
        }}
      />
      {/* <div style={{ position: "absolute", inset: 0, background: "rgba(6,6,10,0.52)", zIndex: 1 }} /> */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right,rgba(6,6,10,0.82) 0%,rgba(6,6,10,0.45) 50%,transparent 100%)",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "55%",
          background:
            "linear-gradient(to top,rgba(6,6,10,0.95) 0%,rgba(6,6,10,0.6) 50%,transparent 100%)",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 100,
          background: "linear-gradient(to top,#0a0a0c,transparent)",
          zIndex: 3,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: isMobile ? "0 24px 48px" : "0 80px 80px",
          maxWidth: isMobile ? "100%" : 680,
          opacity: heroVisible ? 1 : 0,
          transition: "opacity .1s",
        }}
      >
        <div
          className="hero-badge a1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            borderRadius: 100,
            padding: "6px 14px",
            marginBottom: 20,
            background: "rgba(59,130,246,0.12)",
            border: "1px solid rgba(59,130,246,0.25)",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              flexShrink: 0,
              background: "#4ade80",
              boxShadow: "0 0 7px #4ade80",
            }}
          />
          <span
            style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              color: "#93c5fd",
            }}
          >
            {HERO.badge}: {HERO.badgeDetail}
          </span>
        </div>

        <h1
          className="a2"
          style={{
            fontWeight: 700,
            lineHeight: 1.06,
            letterSpacing: "-0.03em",
            fontSize: "clamp(26px,3.8vw,64px)",
            whiteSpace: "pre-line",
          }}
        >
          {HERO.heading}
        </h1>

        <p
          className="a3"
          style={{
            marginTop: 22,
            color: "rgba(255,255,255,0.72)",
            fontSize: "clamp(15px,1.2vw,18px)",
            lineHeight: 1.7,
            maxWidth: isMobile ? "100%" : 560,
          }}
        >
          {HERO.subheading}
        </p>

        <div
          className="a4"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            marginTop: 32,
          }}
        >
          <button className="btn-primary">{HERO.primaryCta}</button>
          <button className="btn-ghost hero-watch-btn">
            {HERO.secondaryCta} →
          </button>
        </div>

        <div
          className="hero-social a5"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 40,
          }}
        >
          <div style={{ display: "flex" }}>
            {["#8b5cf6", "#3b82f6", "#22c55e", "#f97316", "#d946ef"].map(
              (c, i) => (
                <div
                  key={i}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: c,
                    border: "2.5px solid #0a0a0c",
                    marginLeft: i > 0 ? -8 : 0,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                  }}
                />
              ),
            )}
          </div>
          <div>
            <div style={{ display: "flex", gap: 2, marginBottom: 3 }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} style={{ fontSize: 12, color: "#fbbf24" }}>
                  ★
                </span>
              ))}
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.32)" }}>
              {HERO.socialProof}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
