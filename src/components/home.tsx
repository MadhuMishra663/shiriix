import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

import Navbar from "./navbar";
import Hero from "./hero";
import About from "./about";
import Services from "./service";
import Contact from "./contact";
import Footer from "./footer";
import SEO from "./SEO";

const MarqueeLogos = () => {
  const logos = ["Nexlify", "Buildora", "Stackwise", "Venturix", "Complix", "Auditly"];
  // Double array for infinite scroll
  const scrollItems = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full bg-[#0A0A0A] py-16 overflow-hidden border-b border-dark-600">
      <div className="relative flex whitespace-nowrap marquee-mask">
        <div className="flex animate-marquee min-w-max">
          {scrollItems.map((logo, index) => (
            <span
              key={index}
              className="mx-12 text-2xl md:text-3xl font-extrabold text-[#374151] uppercase tracking-wider select-none"
              style={{ fontFamily: index % 2 === 0 ? "Inter" : "JetBrains Mono" }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0A0A0A] border-b border-dark-600">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="h-[380px] bg-[#E8E8F0] text-[#0A0A0A] rounded-2xl p-10 flex flex-col justify-between shadow-xl">
            <h3 className="text-3xl md:text-[36px] font-bold leading-tight tracking-tight mt-4">
              "Shiriix transformed our compliance workflow overnight."
            </h3>
            <div className="text-sm font-semibold tracking-wide uppercase mt-8 text-black/70">
              Rohan M., CTO at Nexlify
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="h-[380px] bg-[#CCFF00] text-[#0A0A0A] rounded-2xl p-10 flex flex-col justify-between shadow-xl">
            <h3 className="text-3xl md:text-[36px] font-bold leading-tight tracking-tight mt-4">
              "Their AI tools cut our audit prep time by 70%."
            </h3>
            <div className="text-sm font-semibold tracking-wide uppercase mt-8 text-black/70">
              Priya S., Founder at Buildora
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const ClosingCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="py-40 px-6 bg-[#0A0A0A] text-center flex flex-col items-center justify-center border-b border-dark-600">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-5xl md:text-[80px] font-extrabold text-white leading-tight tracking-tight mb-12"
        >
          Built for the future.<br />
          Available today.
        </motion.h2>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <a
            href="#contact"
            className="px-8 py-4 text-sm font-semibold text-black bg-white rounded-full
              hover:bg-accent-purple hover:text-white transition-all duration-300 min-w-[160px]"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="px-8 py-4 text-sm font-semibold text-white border border-white/20 rounded-full
              hover:bg-white/10 transition-all duration-300 min-w-[160px]"
          >
            Contact Sales
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] selection:bg-accent-purple/30 selection:text-white">
      <SEO 
        title="Shiriix | AI-Powered Tools for Ambitious Startups"
        description="Shiriix helps you scale, automate, and stay compliant with enterprise-grade GRC tools and intelligent AI automation built for startups."
        keywords="ai automation, compliance, grc startup, risk management software"
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <MarqueeLogos />
        <Testimonials />
        <Contact />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
