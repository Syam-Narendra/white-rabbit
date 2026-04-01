import { motion } from "framer-motion";
import { useState } from "react";
import { siteData } from "~/data";
import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: siteData.seo.title },
    { name: "description", content: siteData.seo.description },
    { name: "keywords", content: siteData.seo.keywords.join(", ") },
  ];
}

/* ---- Framer Motion variants ---- */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (d: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      delay: d,
    },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Home() {
  const { brand, hero, products, features, stats, testimonials, faq, footer } =
    siteData;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] selection:bg-[#1a1a1a] selection:text-white font-sans overflow-x-hidden">
      {/* ==================== NAVBAR ==================== */}
      <nav className="absolute top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 py-3.5 sm:px-5 sm:py-4 md:px-7 md:py-4 lg:px-14 lg:py-5.5 transition-all duration-300">
        <a
          href="/"
          className="flex items-center gap-2 text-[#1a1a1a] shrink-0 hover:opacity-80 transition-opacity"
        >
          <div className="w-[34px] h-[34px] bg-[#1a1a1a] text-white rounded-md flex items-center justify-center text-lg shadow-sm">
            {brand.logo.icon}
          </div>
          <span className="text-[17px] font-bold leading-tight tracking-[-0.3px]">
            {brand.name}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-6 list-none bg-white backdrop-blur-md px-6 py-2.5 rounded-full border border-white/40 shadow-sm">
          {["Products", "Features", "Customers", "FAQ"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[#1a1a1a] text-[13.5px] font-medium hover:opacity-60 transition-opacity"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-1.5 text-[#1a1a1a] ml-auto hover:bg-white/20 rounded-md transition-colors"
          aria-label="Open menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <a
          href="#contact"
          className="hidden md:inline-flex bg-[#1a1a1a] text-white px-[22px] py-2.5 rounded-full text-[13px] font-medium hover:bg-[#333] hover:-translate-y-[1px] transition-all shadow-md shrink-0 whitespace-nowrap"
        >
          {hero.ctas[0].label}
        </a>
      </nav>

      {/* ==================== HERO ==================== */}
      <section
        className="relative w-full min-h-[500px] lg:min-h-[640px] overflow-hidden flex flex-col justify-end"
        id="hero"
      >
        {/* Background Image with Responsive Positioning */}
        <div className="absolute inset-0 z-0 bg-[url('/lander-bg.png')] bg-cover bg-[center_top] sm:bg-[25%_top] md:bg-[30%_top] lg:bg-[center_top] bg-no-repeat" />

        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-5 md:px-7 lg:px-14 pt-[100px] pb-8 md:pb-12 lg:pb-16 flex flex-col justify-end min-h-[500px] lg:min-h-[640px]">
          <motion.h1
            className="text-[36px] sm:text-[40px] md:text-[48px] lg:text-[64px] font-normal leading-[1.08] text-[#1a1a1a] max-w-full md:max-w-[500px] lg:max-w-[680px] tracking-[-1px] lg:tracking-[-1.5px] mb-8 md:mb-12 lg:mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.2}
          >
            {hero.headline.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-8"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.5}
          >
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-5 max-w-full sm:max-w-[280px] lg:max-w-[320px]">
              <div className="text-[13px] sm:text-[14px] leading-[1.6] text-[#444] font-medium mix-blend-color-burn">
                {hero.subheadline}
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 text-[12px] sm:text-[13px] text-[#555] whitespace-nowrap shrink-0 self-end sm:self-auto bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-sm">
              <span className="font-bold text-[#1a1a1a]">
                {stats[3].value} / 5
              </span>
              <div className="flex gap-[1px] text-[#d42b2b]">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="text-[#666] font-medium hidden sm:inline">
                {hero.socialProof}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== MISSION ==================== */}
      <motion.section
        className="px-4 py-12 sm:px-5 sm:py-16 md:px-7 md:py-24 lg:px-14 lg:py-28 bg-white/60 backdrop-blur-lg flex justify-center border-y border-white/40 shadow-sm"
        id="mission"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        custom={0.1}
      >
        <p className="text-[22px] sm:text-[26px] md:text-[34px] lg:text-[44px] font-normal leading-[1.4] md:leading-[1.3] text-[#2a2a2a] max-w-full lg:max-w-[840px] tracking-[-0.5px] mx-auto text-center md:text-left">
          We help businesses{" "}
          <span className="bg-gradient-to-br from-[#f8d8a0] to-[#f0c878] px-1.5 md:px-2.5 py-0.5 rounded-[4px] md:rounded-md shadow-sm whitespace-nowrap inline-flex items-center">
            streamline operations <span className="text-[0.55em] ml-1">⚡</span>
          </span>
          , improve{" "}
          <span className="bg-gradient-to-br from-[#f0b8d0] to-[#e898b8] px-1.5 md:px-2.5 py-0.5 rounded-[4px] md:rounded-md shadow-sm whitespace-nowrap inline-flex items-center">
            workflows <span className="text-[0.55em] ml-1">🔄</span>
          </span>
          , and{" "}
          <span className="bg-gradient-to-br from-[#b0e0b8] to-[#88d098] px-1.5 md:px-2.5 py-0.5 rounded-[4px] md:rounded-md shadow-sm whitespace-nowrap inline-flex items-center">
            scale smarter <span className="text-[0.55em] ml-1">📈</span>
          </span>{" "}
          with powerful software—so they can{" "}
          <span className="bg-gradient-to-br from-[#d0bef0] to-[#c0a8e8] px-1.5 md:px-2.5 py-0.5 rounded-[4px] md:rounded-md shadow-sm whitespace-nowrap inline-flex items-center">
            grow faster <span className="text-[0.55em] ml-1">🚀</span>
          </span>{" "}
          without the chaos. That's our promise.
        </p>
      </motion.section>

      {/* ==================== STATS BAR ==================== */}
      <motion.section
        className="bg-white border-b border-[#eee]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={stagger}
      >
        <div
          className="grid grid-cols-2 md:grid-cols-4 max-w-[1000px] mx-auto"
          id="stats"
        >
          {stats.map((s, i) => (
            <motion.div
              className="flex flex-col items-center py-8 md:py-12 px-4 border-r border-[#eee] border-b md:border-b-0 last:border-b-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r md:last:border-r-0 hover:bg-[#fafafa] transition-colors"
              key={i}
              variants={scaleIn}
            >
              <span className="text-[32px] md:text-[40px] font-bold text-[#1a1a1a] tracking-tight">
                {s.value}
                <span className="font-semibold text-[#888]">{s.suffix}</span>
              </span>
              <span className="text-[13px] text-[#777] mt-1 text-center font-medium uppercase tracking-wider">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ==================== PRODUCTS ==================== */}
      <section
        className="bg-[#f8f8fb] px-4 py-16 sm:px-5 sm:py-20 md:px-7 md:py-24 lg:px-14 lg:py-32"
        id="products"
      >
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            className="text-center mb-12 flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            custom={0}
          >
            <span className="inline-block text-[11px] font-bold uppercase tracking-[2.5px] text-[#666] mb-4 bg-white px-3 py-1 rounded-full border border-[#e5e5e5] shadow-sm">
              Products
            </span>
            <h2 className="text-[32px] md:text-[42px] font-normal tracking-[-0.5px] text-[#1a1a1a] mb-4">
              Tools that run your business
            </h2>
            <p className="text-[15px] text-[#666] max-w-[500px] mx-auto leading-[1.6]">
              Three powerful products. One unified platform. Built for teams
              that move fast and hate friction.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {products.map((product) => (
              <motion.div
                className="bg-white border border-[#e5e5e9] rounded-2xl p-7 flex flex-col shadow-sm transition-all duration-300 hover:border-[#ccc] hover:shadow-xl hover:-translate-y-1.5"
                key={product.slug}
                id={`product-${product.slug}`}
                variants={scaleIn}
              >
                <div className="w-12 h-12 rounded-xl bg-[#f4f4f6] flex items-center justify-center text-[24px] mb-5 border border-[#eee]">
                  {product.icon}
                </div>
                <h3 className="text-[22px] font-bold text-[#1a1a1a] tracking-[-0.3px] mb-1">
                  {product.name}
                </h3>
                <p className="text-[14px] text-[#888] font-medium mb-4">
                  {product.tagline}
                </p>
                <p className="text-[14.5px] leading-[1.6] text-[#555] mb-7">
                  {product.description}
                </p>
                <ul className="flex flex-col gap-3.5 mb-8 grow">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="bg-[#fafafa] p-1 rounded-full border border-[#eee] mt-0.5 shrink-0">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={product.color}
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-[13.5px] text-[#444] leading-[1.5]">
                        <strong className="text-[#1a1a1a] font-semibold">
                          {f.title}
                        </strong>{" "}
                        — {f.description}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={product.cta.href}
                  className="inline-flex items-center gap-2 text-[14px] font-bold transition-opacity hover:opacity-70 mt-auto pt-4 border-t border-[#f4f4f4]"
                  style={{ color: product.color }}
                >
                  {product.cta.label}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section
        className="bg-white px-4 py-16 sm:px-5 sm:py-20 md:px-7 md:py-24 lg:px-14 lg:py-32"
        id="features"
      >
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            className="text-center mb-16 flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            custom={0}
          >
            <span className="inline-block text-[11px] font-bold uppercase tracking-[2.5px] text-[#666] mb-4 bg-[#f4f4f6] px-3 py-1 rounded-full shadow-inner">
              Why {brand.name}
            </span>
            <h2 className="text-[32px] md:text-[42px] font-normal tracking-[-0.5px] text-[#1a1a1a] mb-4">
              Built different. Built better.
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.6]">
              Every detail is obsessed over so you can focus on what matters —
              growing your business.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {features.map((feat, i) => (
              <motion.div
                className="bg-white border border-[#eaeaea] rounded-[18px] p-8 transition-all duration-300 hover:border-[#b0b0bb] hover:shadow-lg hover:-translate-y-1"
                key={i}
                id={`feature-${i}`}
                variants={scaleIn}
              >
                <div className="w-12 h-12 rounded-full bg-[#f8f8fb] flex items-center justify-center text-[24px] mb-5 border border-[#eee]">
                  {feat.icon}
                </div>
                <h3 className="text-[17px] font-bold text-[#1a1a1a] mb-2">
                  {feat.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-[#777]">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section
        className="bg-[#f0f0f4] px-4 py-16 sm:px-5 sm:py-20 md:px-7 md:py-24 lg:px-14 lg:py-32"
        id="testimonials"
      >
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            className="text-center mb-16 flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            custom={0}
          >
            <span className="inline-block text-[11px] font-bold uppercase tracking-[2.5px] text-[#666] mb-4">
              Testimonials
            </span>
            <h2 className="text-[32px] md:text-[42px] font-normal tracking-[-0.5px] text-[#1a1a1a]">
              Loved by teams everywhere
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {testimonials.map((t, i) => (
              <motion.div
                className="bg-white border border-[#e8e8ea] rounded-[20px] p-8 flex flex-col shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                key={i}
                id={`testimonial-${i}`}
                variants={scaleIn}
              >
                <div className="flex gap-1 text-[15px] text-[#f59e0b] mb-5 tracking-tighter">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <span key={s}>★</span>
                  ))}
                </div>
                <blockquote className="text-[15px] leading-[1.65] text-[#444] mb-8 grow italic font-medium">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-4 pt-5 border-t border-[#f0f0f0]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#444] flex items-center justify-center text-[13px] font-bold text-white shrink-0 shadow-sm">
                    {t.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-[14.5px] font-bold text-[#1a1a1a]">
                      {t.author}
                    </div>
                    <div className="text-[12px] text-[#777] font-medium">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section
        className="bg-white px-4 py-16 sm:px-5 sm:py-20 md:px-7 md:py-24 lg:px-14 lg:py-32"
        id="faq"
      >
        <div className="max-w-[700px] mx-auto">
          <motion.div
            className="text-center mb-12 flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            custom={0}
          >
            <span className="inline-block text-[11px] font-bold uppercase tracking-[2.5px] text-[#666] mb-4">
              FAQ
            </span>
            <h2 className="text-[32px] md:text-[42px] font-normal tracking-[-0.5px] text-[#1a1a1a]">
              Questions? Answers.
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {faq.map((item, i) => (
              <motion.div
                className={`bg-white border rounded-[12px] overflow-hidden transition-all duration-300 ${openFaq === i ? "border-[#b0b0bb] shadow-md ring-2 ring-[#f0f0f4]" : "border-[#e0e0e4] hover:border-[#ccc]"}`}
                key={i}
                id={`faq-${i}`}
                variants={scaleIn}
              >
                <button
                  className="w-full flex items-center justify-between p-5 lg:p-6 bg-transparent border-none text-[15px] font-semibold text-[#1a1a1a] cursor-pointer text-left transition-colors hover:text-[#555]"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="pr-4">{item.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#f4f4f6] flex items-center justify-center shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180 bg-[#1a1a1a] text-white" : "text-[#888]"}`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>
                <motion.div
                  className="overflow-hidden bg-[#fafafa]"
                  initial={false}
                  animate={{
                    height: openFaq === i ? "auto" : 0,
                    opacity: openFaq === i ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                  }}
                >
                  <p className="px-5 lg:px-6 pb-6 text-[14px] leading-[1.7] text-[#666]">
                    {item.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== CTA BAND ==================== */}
      <motion.section
        className="bg-gradient-to-br from-[#f5d98b] via-[#d4cff5] to-[#cfe0f9] text-center px-4 py-20 lg:py-[100px] border-y border-[#d4cff5]"
        id="cta-band"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        custom={0}
      >
        <div className="max-w-[640px] mx-auto bg-white/30 backdrop-blur-md p-10 lg:p-14 rounded-3xl border border-white/40 shadow-xl">
          <h2 className="text-[36px] md:text-[42px] font-normal text-[#1a1a1a] tracking-[-0.5px] leading-[1.1] mb-5">
            Ready to move faster?
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#444] mb-10 leading-[1.6]">
            Join{" "}
            <strong>
              {stats[0].value}
              {stats[0].suffix} businesses
            </strong>{" "}
            already using {brand.name}. Start free — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={hero.ctas[0].href}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1a1a1a] text-white px-8 py-3.5 rounded-full text-[14px] font-bold transition-all duration-200 hover:bg-[#333] hover:-translate-y-1 hover:shadow-lg shadow-md"
            >
              {hero.ctas[0].label}
            </a>
            <a
              href={hero.ctas[1].href}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white/70 backdrop-blur-sm text-[#1a1a1a] px-8 py-3.5 rounded-full text-[14px] font-bold border border-[#1a1a1a]/20 transition-all duration-200 hover:border-[#1a1a1a]/50 hover:bg-white hover:-translate-y-1 shadow-sm gap-2"
            >
              {hero.ctas[1].label}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </motion.section>

      {/* ==================== FOOTER ==================== */}
      <footer
        className="bg-[#111] text-white border-t-4 border-[#1a1a1a]"
        id="site-footer"
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-10 lg:gap-8 px-5 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20 max-w-[1300px] mx-auto border-b border-white/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {/* Brand column */}
          <motion.div
            className="flex flex-col md:col-span-2 lg:col-span-1 lg:pr-6"
            variants={fadeUp}
          >
            <a
              href="/"
              className="flex items-center gap-3 text-white mb-5 hover:opacity-80 transition-opacity"
            >
              <span className="w-8 h-8 bg-white text-[#1a1a1a] rounded flex items-center justify-center text-lg shadow-md">
                {brand.logo.icon}
              </span>
              <span className="text-[18px] font-bold tracking-[-0.3px]">
                {brand.name}
              </span>
            </a>
            <p className="text-[14px] leading-[1.65] text-white/50 mb-7">
              Software that scales with you. No chaos, just growth.
            </p>
            <div className="flex gap-2">
              {footer.social.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 transition-all duration-200 hover:bg-white/15 hover:text-white hover:-translate-y-1 border border-white/10"
                  aria-label={s.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon === "twitter" && (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {s.icon === "linkedin" && (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {s.icon === "github" && (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  )}
                  {s.icon === "instagram" && (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns from data */}
          {footer.columns.map((col) => (
            <motion.div
              className="flex flex-col"
              key={col.title}
              variants={fadeUp}
            >
              <h4 className="text-[12px] font-bold uppercase tracking-[1.5px] text-white/40 mb-5">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3.5 list-none">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-white/70 hover:text-white hover:translate-x-1 block transition-all"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact column */}
          <motion.div className="flex flex-col" variants={fadeUp}>
            <h4 className="text-[12px] font-bold uppercase tracking-[1.5px] text-white/40 mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 list-none">
              <li className="flex items-center gap-3 text-[14px]">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-white/60"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {footer.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[14px]">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-white/60"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-white/50">{footer.contact.location}</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-6 md:px-10 lg:px-14 max-w-[1300px] mx-auto">
          <p className="text-[13px] text-white/30">{footer.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            {footer.legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-white/30 hover:text-white/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
