import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
  accentClass: string;
}

const AnimatedCounter = ({ target, suffix = "", label, accentClass }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500; // 1.5s
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="flex flex-col">
      <div className={`text-[40px] md:text-[56px] font-extrabold mb-1 tracking-tight ${accentClass}`}>
        {count}{suffix}
      </div>
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-[0.1em]">
        {label}
      </div>
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
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
    <section id="about" className="relative py-32 px-6 md:px-12 lg:px-24 bg-dark-900 border-b border-dark-600">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Top Label */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.1em]">
            Who We Are
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left Column — Stats */}
          <motion.div variants={itemVariants} className="flex flex-col gap-12">
            <AnimatedCounter target={500} suffix="+" label="Lines Of Code" accentClass="text-accent-purple" />
            <AnimatedCounter target={20} suffix="+" label="Features planned for launch" accentClass="text-accent-cyan" />
            <AnimatedCounter target={100} suffix="%" label="GRC Ready" accentClass="text-white" />
          </motion.div>

          {/* Right Column — Mission */}
          <motion.div variants={itemVariants} className="pt-2">
            <h3 className="text-3xl md:text-[40px] font-bold text-white leading-[1.2] mb-8 tracking-tight">
              Empowering the next generation of builders
            </h3>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed max-w-xl">
              <p>
                Shiriix is on a mission to democratize enterprise-grade tools for
                ambitious startups and SMEs. We combine AI-powered automation with
                governance, risk & compliance frameworks — so you can focus on
                building, while we handle the complexity.
              </p>
              <p>
                With pure focus on speed, intelligence, and beautiful design, we
                craft software that accelerates your growth trajectory seamlessly.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
