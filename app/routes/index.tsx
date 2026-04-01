import { useState, useEffect } from "react";

import Navbar from "~/home/navbar";
import HeroSection from "~/home/hero";
import AiAssistants from "~/home/ai-assistants";
import AboutUs from "~/home/about-us";
import OurProducts from "~/home/our-products";
import WhyChooseUs from "~/home/why-choose-us";
import IndustriesWeServe from "~/home/industries-we-serve";
import CallToAction from "~/home/call-to-action";
import Footer from "~/home/footer";

export function meta() {
  return [
    { title: "White Rabbit" },
    { name: "description", content: "Welcome to White Rabbit Tech!" },
  ];
}
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const fadeElements = document.querySelectorAll(
      ".animate-fade-up, .animate-bento-card, .animate-footer",
    );
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          color: "#fff",
          background: "#0a0a0c",
          fontFamily: "'Space Grotesk', Arial, sans-serif",
        }}
      >
        <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp  { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }

        .a1 { animation: fadeUp 1.2s ease both .1s; }
        .a2 { animation: fadeUp 1.2s ease both .3s; }
        .a3 { animation: fadeUp 1.2s ease both .5s; }
        .a4 { animation: fadeUp 1.2s ease both .7s; }
        .a5 { animation: fadeUp 1.2s ease both .9s; }

        .animate-fade-up, .animate-footer {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-bento-card {
           opacity: 0;
           transform: translateY(80px) scale(0.95);
           transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-bento-card:nth-child(1) { transition-delay: 0s; }
        .animate-bento-card:nth-child(2) { transition-delay: 0.2s; }
        .animate-bento-card:nth-child(3) { transition-delay: 0.4s; }

        .is-visible {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }

        .shimmer-txt {
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 40%, #f472b6 70%, #60a5fa 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .nav-link {
          display: flex; align-items: center;
          font-size: 14px; font-weight: 500;
          padding: 8px 12px; border-radius: 8px;
          text-decoration: none;
          color: rgba(255,255,255,0.7);
          background: transparent;
          transition: all 0.15s;
        }
        .nav-link:hover { color: #fff; background: rgba(255,255,255,0.06); }

        .btn-primary {
          border: 0; color: #fff; cursor: pointer; font-family: inherit;
          font-weight: 600; border-radius: 100px;
          padding: 14px 30px; font-size: 15px;
          background: #3b82f6;
          box-shadow: 0 8px 28px rgba(59,130,246,0.28);
          transition: all 0.15s;
        }
        .btn-primary:hover { background: #2563eb; transform: translateY(-1px); }

        .btn-ghost {
          cursor: pointer; font-family: inherit; font-weight: 500;
          border-radius: 100px; padding: 14px 30px; font-size: 15px;
          background: transparent; color: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.18);
          transition: all 0.15s;
        }
        .btn-ghost:hover { color: #fff; border-color: rgba(255,255,255,0.35); background: rgba(255,255,255,0.05); }

        .card {
          border-radius: 18px; cursor: pointer;
          background: rgba(255,255,255,0.027);
          border: 1px solid rgba(255,255,255,0.07);
          transition: all 0.2s;
        }
        .card:hover {
          background: rgba(255,255,255,0.052);
          border-color: rgba(255,255,255,0.12);
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: flex !important; }
          .nav-cta { display: none !important; }
          .hero-badge { display: none !important; }
          .hero-social { display: none !important; }
          .hero-watch-btn { display: none !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: 1fr 1fr !important; }
          .cta-row { flex-direction: column !important; }
          .cta-row > * { width: 100% !important; }
          .footer-inner { flex-direction: column !important; gap: 16px !important; text-align: center; }
          .footer-links { justify-content: center !important; }
        }
        @media (max-width: 480px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

        <Navbar
          scrolled={scrolled}
          isMobile={isMobile}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        <HeroSection isMobile={isMobile} heroVisible={heroVisible} />

        <AiAssistants isMobile={isMobile} />

        <AboutUs isMobile={isMobile} />

        <OurProducts isMobile={isMobile} />

        <WhyChooseUs isMobile={isMobile} />

        <IndustriesWeServe isMobile={isMobile} />

        <CallToAction isMobile={isMobile} />
      </div>
      <Footer />
    </>
  );
}
