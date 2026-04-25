import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowLeft, Maximize, Shield, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";

const Explore = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Scalability",
      description:
        "Our platform grows with your business, handling large volumes of data and expanding operations without compromising performance.",
      icon: Maximize,
      color: "accent-purple",
    },
    {
      title: "Security",
      description:
        "Advanced encryption, role-based access, and continuous monitoring ensure your data remains protected and regulatory-compliant.",
      icon: Shield,
      color: "accent-cyan",
    },
    {
      title: "Intelligence",
      description:
        "Leverage AI-driven insights and analytics to make proactive decisions, automate workflows, and optimize governance processes.",
      icon: Brain,
      color: "accent-violet",
    },
  ];

  const exploreJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Explore Shiriix — Vision & Innovation",
    "url": "https://shiriix.com/explore",
    "description":
      "Discover how Shiriix is transforming enterprise governance, risk, and compliance with a scalable, secure, and AI-driven platform.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Shiriix",
      "url": "https://shiriix.com",
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Scalability",
        "description":
          "Enterprise platform that grows with your business, handling large data volumes without compromising performance.",
      },
      {
        "@type": "Thing",
        "name": "Security",
        "description":
          "Advanced encryption, role-based access control, and continuous monitoring for data protection.",
      },
      {
        "@type": "Thing",
        "name": "Intelligence",
        "description":
          "AI-driven insights and analytics for proactive decision-making and automated governance workflows.",
      },
    ],
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <SEO
        title="Explore Shiriix | Scalable Enterprise GRC Platform"
        description="Discover how Shiriix is transforming enterprise governance, risk, and compliance with a scalable, secure, and AI-driven platform. Explore our vision for intelligent GRC automation."
        keywords="enterprise GRC platform, scalable compliance solution, AI-driven governance, intelligent risk management, secure enterprise platform, compliance analytics, automated compliance workflows, GRC innovation, enterprise security platform"
        canonicalUrl="https://shiriix.com/explore"
        jsonLd={exploreJsonLd}
      />
      <section className="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden bg-dark-900">
        {/* Gradient Orbs */}
        <div className="orb-purple animate-orb-float opacity-40" style={{ top: "10%", left: "-10%" }} />
        <div className="orb-cyan animate-orb-float-reverse opacity-30" style={{ bottom: "10%", right: "-10%" }} />
        
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-30" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-all cursor-pointer mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </button>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center md:text-left mb-16"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Our Vision & <span className="gradient-text">Innovation</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-3xl text-lg md:text-xl leading-relaxed text-gray-400"
            >
              We are building a powerful enterprise-grade platform designed to
              transform governance, risk, and compliance operations through
              intelligent automation, scalable architecture, and modern infrastructure
              strategies.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-dark-800 border border-dark-600 rounded-2xl p-8
                    hover:border-accent-purple/50 hover:bg-dark-700/50 hover:-translate-y-1
                    transition-all duration-300 group relative overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-${feature.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-${feature.color}/10 text-${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Explore;
