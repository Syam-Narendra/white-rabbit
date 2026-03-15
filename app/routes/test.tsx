
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_IMAGES = [
  "https://assets.codepen.io/16327/portrait-image-1.jpg",
  "https://assets.codepen.io/16327/portrait-image-2.jpg",
  "https://assets.codepen.io/16327/portrait-image-3.jpg",
  "https://assets.codepen.io/16327/portrait-image-4.jpg",
  "https://assets.codepen.io/16327/portrait-image-5.jpg",
  "https://assets.codepen.io/16327/portrait-image-6.jpg",
  "https://assets.codepen.io/16327/portrait-image-7.jpg",
  "https://assets.codepen.io/16327/portrait-image-8.jpg",
];

function HorizontalScrollGallery({ images = DEFAULT_IMAGES }: { images?: string[] }) {
  const wrapperRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const strip = stripRef.current;
    if (!wrapper || !strip) return;

    const ctx = gsap.context(() => {
      gsap.to(strip, {
        x: () => -(strip.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          pin: wrapper,
          scrub: 1,
          start: "center center",
          end: () => `+=${strip.scrollWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      style={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      <div style={{ width: "100%" }}>
        <div
          ref={stripRef}
          style={{
            display: "flex",
            flexWrap: "nowrap",
            willChange: "transform",
            position: "relative",
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              style={{
                width: "33vw",
                padding: "2rem",
                boxSizing: "content-box",
                flexShrink: 0,
              }}
            >
              <img
                src={src}
                alt={`Gallery item ${i + 1}`}
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




export default function App() {
  return (
    <div style={{ overflowX: "hidden" }}>

      <section style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <h3>Scroll down for the Gallery</h3>
      </section>

      <HorizontalScrollGallery />

      <section style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <h3>That's it!</h3>
      </section>

    </div>
  );
}