import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

const AnimatedTerminal = () => {
  const [lines, setLines] = useState<string[]>([]);
  const fullLines = [
    "> Scanning growth metrics...",
    "> Risk score: LOW ✓",
    "> Recommended actions: 3",
    "> Generating report... done."
  ];

  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let currentLine = 0;
    let currentChar = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeChar = () => {
      if (currentLine >= fullLines.length) return;

      const lineText = fullLines[currentLine];

      setLines(prev => {
        const newLines = [...prev];
        if (newLines[currentLine] === undefined) {
          newLines[currentLine] = "";
        }
        newLines[currentLine] = lineText.slice(0, currentChar + 1);
        return newLines;
      });

      currentChar++;

      if (currentChar >= lineText.length) {
        currentLine++;
        currentChar = 0;
        timeoutId = setTimeout(typeChar, 400); // Wait before next line
      } else {
        timeoutId = setTimeout(typeChar, 40); // 40ms per char
      }
    };

    timeoutId = setTimeout(typeChar, 600); // Initial delay

    return () => clearTimeout(timeoutId);
  }, [isInView]);

  return (
    <div ref={inViewRef} className="w-full bg-[#0D0D0D] border border-dark-600 rounded-xl p-6 shadow-2xl overflow-hidden font-mono text-[13px] leading-relaxed">
      {/* Mac window dots */}
      <div className="flex gap-2 mb-6 opacity-30">
        <div className="w-3 h-3 rounded-full bg-white" />
        <div className="w-3 h-3 rounded-full bg-white" />
        <div className="w-3 h-3 rounded-full bg-white" />
      </div>

      <div className="text-gray-400 mb-2">
        <span className="text-green-500 font-medium">~/shiriix</span> $ shiriix analyze --startup acme-corp
      </div>

      <div className="flex flex-col gap-1 text-gray-300">
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        <div className="flex items-center">
          <span className="w-2 h-[15px] bg-gray-400 animate-blink inline-block ml-1 mt-1" />
        </div>
      </div>
    </div>
  );
};

const WorkflowDiagram = () => {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-between px-4 md:px-10">
      {/* Dashed background lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <path
          d="M 150 150 L 50% 150 L calc(100% - 150px) 150"
          fill="none"
          stroke="#1F1F1F"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <path
          d="M 150 150 L 50% 150 L calc(100% - 150px) 150"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="2"
          className="flow-path opacity-50"
        />
      </svg>

      {/* Boxes */}
      <div className="relative z-10 w-28 h-28 bg-[#111] border border-dark-600 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-xl">
        <div className="text-accent-purple font-mono text-xs">01</div>
        <div className="text-sm font-medium text-white">Input Data</div>
      </div>

      <div className="relative z-10 w-32 h-32 bg-[#0A0A0A] border border-accent-purple/30 glow-purple rounded-full flex flex-col items-center justify-center gap-2 shadow-2xl">
        <div className="w-8 h-8 rounded-full border border-accent-purple animate-pulse flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-accent-purple" />
        </div>
        <div className="text-sm font-bold text-white">AI Engine</div>
      </div>

      <div className="relative z-10 w-28 h-28 bg-[#111] border border-dark-600 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-xl">
        <div className="text-accent-cyan font-mono text-xs">03</div>
        <div className="text-sm font-medium text-white">Output</div>
      </div>
    </div>
  );
};

const GrcDashboardMockup = () => {
  return (
    <div className="w-full bg-[#0A0A12] border border-accent-cyan/20 rounded-xl p-8 shadow-2xl">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-dark-600">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan" />
          <span className="text-white font-medium">Early Access Insights</span>
        </div>
        <div className="border border-green-500/20 bg-green-500/10 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">
          ✓ Passed
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-xs text-gray-400 font-medium mb-2 uppercase tracking-wide">
            <span>Feature Development</span>
            <span className="text-accent-cyan">70%</span>
          </div>
          <div className="w-full h-1.5 bg-dark-700 rounded-full overflow-hidden">
            <div className="h-full bg-accent-cyan rounded-full" style={{ width: "70%" }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs text-gray-400 font-medium mb-2 uppercase tracking-wide">
            <span>UI/UX Completion</span>
            <span className="text-accent-purple">80%</span>
          </div>
          <div className="w-full h-1.5 bg-dark-700 rounded-full overflow-hidden">
            <div className="h-full bg-accent-purple rounded-full" style={{ width: "80%" }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs text-gray-400 font-medium mb-2 uppercase tracking-wide">
            <span>Beta Readiness</span>
            <span className="text-blue-500">60%</span>
          </div>
          <div className="w-full h-1.5 bg-dark-700 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: "60%" }} />
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="bg-dark-800 border border-dark-600 rounded-lg p-4">
          <div className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold mb-1">Targeted Users</div>
          <div className="text-2xl font-bold text-white">100</div>
        </div>
        <div className="bg-dark-800 border border-dark-600 rounded-lg p-4">
          <div className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold mb-1">Modules Created</div>
          <div className="text-2xl font-bold text-accent-cyan">6</div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const SectionWrapper = ({ children, border = true }: { children: React.ReactNode, border?: boolean }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
      <div ref={ref} className={`py-32 px-6 md:px-12 lg:px-24 ${border ? "border-b border-dark-600" : ""}`}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {children}
        </motion.div>
      </div>
    );
  };

  return (
    <section id="services" className="bg-dark-900 border-b border-dark-600">
      {/* Intro */}
      <div className="py-32 px-6 md:px-12 lg:px-24 border-b border-dark-600 text-center">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.1em] mb-6">
          What We Do
        </h2>
        <h3 className="text-4xl md:text-[48px] font-bold text-white tracking-tight">
          Smart tools for every stage of growth
        </h3>
      </div>

      {/* Band 1: AI Growth Tools */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <span className="text-gray-500 text-sm font-medium mb-6 block">
              1.0 AI Growth Tools →
            </span>
            <h3 className="text-3xl md:text-[36px] font-bold text-white mb-6 leading-tight tracking-tight">
              Scale faster with intelligent automation.
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              Smart analytics and automation to accelerate your startup's growth
              trajectory. Data-driven decisions, faster.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <AnimatedTerminal />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Band 2: Business Automation */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div variants={itemVariants}>
            <WorkflowDiagram />
          </motion.div>
          <motion.div variants={itemVariants}>
            <span className="text-gray-500 text-sm font-medium mb-6 block">
              2.0 Business Automation →
            </span>
            <h3 className="text-3xl md:text-[36px] font-bold text-white mb-6 leading-tight tracking-tight">
              Automate repetitive workflows seamlessly.
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              Streamline operations and free your team to focus on what matters most.
              Our AI engine handles the heavy lifting instantly.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Band 3: GRC Platform */}
      <SectionWrapper border={false}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <span className="text-accent-cyan text-sm font-medium mb-6 block">
              3.0 GRC Platform →
            </span>
            <h3 className="text-3xl md:text-[36px] font-bold text-white mb-8 leading-tight tracking-tight">
              Enterprise-Grade GRC.<br /> Built for Startups.
            </h3>
            <ul className="space-y-5">
              {[
                "Real-time risk monitoring",
                "Policy management & approvals",
                "Compliance automation",
                "Audit trail dashboard"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="text-accent-cyan text-lg">✓</span>
                  <span className="text-gray-300 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <GrcDashboardMockup />
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Services;
