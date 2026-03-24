import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import AiChatDemo from "./AiChatDemo";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[120vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-32 pb-40 bg-dark-900"
    >
      {/* Slow Animated Radial Orbs (20s CSS Loop) */}
      <div 
        className="absolute animate-orb-purple rounded-full blur-[120px] pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          top: "20%",
          left: "30%",
          background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)"
        }}
      />
      <div 
        className="absolute animate-orb-cyan rounded-full blur-[120px] pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          bottom: "20%",
          right: "20%",
          background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)"
        }}
      />

      {/* Content */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center"
      >
        {/* Top Label */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="border border-white/10 bg-white/5 text-white/60 text-xs rounded-full px-4 py-1.5 flex items-center gap-2 backdrop-blur-sm">
            <span className="text-accent-purple">✦</span>
            Now with AI Automation
          </div>
        </motion.div>

        {/* Hero Heading Split */}
        <motion.h1
          variants={itemVariants}
          className="text-[52px] md:text-[72px] font-extrabold text-white mb-6 leading-[1.1] tracking-tight"
        >
          AI-Powered Tools for
          <br />
          <span className="gradient-text">Ambitious Startups.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-10"
        >
          Shiriix helps you scale, automate, and stay compliant — all in one
          platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
        >
          <a
            href="#explore"
            className="px-6 py-3 text-sm font-semibold text-black bg-white rounded-full
              hover:bg-accent-purple hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
          >
            Explore Platform
          </a>
          <a
            href="#services"
            className="px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-full
              hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center"
          >
            See How It Works
          </a>
        </motion.div>

        {/* AI Chat Demo Component */}
        <motion.div variants={itemVariants} className="w-full mt-8">
          <AiChatDemo />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
