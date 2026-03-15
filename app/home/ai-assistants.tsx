import { AI_ASSISTANTS } from "~/data";

export default function AiAssistants({ isMobile }: { isMobile: boolean }) {
  return (
    <section
      style={{
        position: "relative",
        padding: isMobile ? "40px 0" : "80px 0",
        background: "#0a0a0c",
        overflow: "hidden",
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: isMobile ? "0 24px" : "0 32px",
          marginBottom: 32,
        }}
      >
        <h2
          className="animate-fade-up"
          style={{
            fontSize: isMobile ? 32 : 48,
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Meet your AI workforce.
        </h2>
        <p
          className="animate-fade-up"
          style={{
            marginTop: 16,
            fontSize: 18,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 600,
          }}
        >
          Supercharge your team with intelligent, specialized AI assistants
          ready to take on your most complex tasks.
        </p>
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1300,
          margin: "0 auto",
          padding: isMobile ? "0 0 20px" : "0 70px",
        }}
      >
        <div
          id="ai-carousel"
          onScroll={(e) => {
            const carousel = e.currentTarget;
            if (carousel.scrollLeft <= 0) {
              // If scrolled to the very left, jump to the middle (start of second set)
              carousel.scrollLeft = carousel.scrollWidth / 2;
            } else if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
              // If scrolled past the first set, jump back to start
              carousel.scrollLeft = 1;
            }
          }}
          style={{
            display: "flex",
            gap: 24,
            padding: isMobile ? "0 24px" : "0",
            overflowX: "auto",
            overflowY: "hidden",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Render the list twice for infinite scrolling effect */}
          {[...AI_ASSISTANTS, ...AI_ASSISTANTS].map((ai, i) => (
            <div
              key={`${ai.name}-${i}`}
              className="animate-fade-up"
              style={{
                width: isMobile ? 300 : "calc((100% - 48px) / 3)",
                flexShrink: 0,
                background: "rgba(255,255,255,0)",
                borderRadius: 24,
                overflow: "hidden",
              }}
            >
              <img
                src={ai.image}
                alt={ai.name}
                style={{
                  width: "100%",
                  height: isMobile ? 360 : 400,
                  objectFit: "cover",
                  borderRadius: 20,
                }}
              />
              <div style={{ padding: "20px 8px" }}>
                <h3 style={{ fontSize: 24, fontWeight: 700 }}>{ai.name}</h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.6,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {ai.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Nav arrows */}
        {!isMobile && (
          <>
            <button
              onClick={() => {
                const c = document.getElementById("ai-carousel");
                if (c) {
                  const w = c.children[0].clientWidth + 24;
                  c.scrollBy({ left: -w, behavior: "smooth" });
                }
              }}
              style={{
                position: "absolute",
                left: 0,
                top: "40%",
                transform: "translateY(-50%)",
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "rgba(20,20,20,0.8)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backdropFilter: "blur(12px)",
                zIndex: 10,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(40,40,40,0.9)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(20,20,20,0.8)")
              }
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={() => {
                const c = document.getElementById("ai-carousel");
                if (c) {
                  const w = c.children[0].clientWidth + 24;
                  c.scrollBy({ left: w, behavior: "smooth" });
                }
              }}
              style={{
                position: "absolute",
                right: 0,
                top: "40%",
                transform: "translateY(-50%)",
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "rgba(20,20,20,0.8)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backdropFilter: "blur(12px)",
                zIndex: 10,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(40,40,40,0.9)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(20,20,20,0.8)")
              }
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Hide scrollbar with css for webkit */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          #ai-carousel::-webkit-scrollbar { display: none; }
        `,
        }}
      />
    </section>
  );
}
