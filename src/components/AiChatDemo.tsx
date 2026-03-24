import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AiChatDemo = () => {
  const [phase, setPhase] = useState<0 | 1 | 2>(0);
  const [typedText, setTypedText] = useState("");
  
  const fullText = "Great question! Shiriix's GRC platform automatically monitors your compliance posture, flags risks in real-time, and generates audit-ready reports — so your team can focus on building, not paperwork. Want to see a live demo?";
  
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    // Animation sequence loop
    const runSequence = () => {
      setPhase(0);
      setTypedText("");
      
      // 1. Show user message
      timeout = setTimeout(() => {
        setPhase(1);
        
        // 2. Start typing AI reply after 800ms delay
        timeout = setTimeout(() => {
          let i = 0;
          const typingInterval = setInterval(() => {
            setTypedText(fullText.slice(0, i + 1));
            i++;
            if (i === fullText.length) {
              clearInterval(typingInterval);
              // 3. Show quick reply pills
              setPhase(2);
              
              // 4. Idle for 4 seconds, then reset
              timeout = setTimeout(runSequence, 4000);
            }
          }, 30); // 30ms per character
          
        }, 800);
      }, 500);
    };

    runSequence();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mt-16 bg-dark-800 border border-dark-600 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-dark-600 bg-dark-800">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="font-mono text-xs text-gray-500 font-medium">Shiriix AI</div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-gray-400 font-medium">Live</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="p-6 min-h-[240px] flex flex-col gap-5 text-sm md:text-base font-inter">
        
        {/* User Message */}
        <AnimatePresence>
          {phase >= 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-[#1E1E2E] text-white rounded-xl px-4 py-3 max-w-[80%] self-end shadow-sm"
            >
              How can Shiriix help my startup stay compliant?
            </motion.div>
          )}
        </AnimatePresence>

        {/* AI Reply */}
        <AnimatePresence>
          {(phase >= 1 && typedText.length > 0) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0F0F1A] border border-accent-purple/20 rounded-xl px-4 py-3 max-w-[85%] self-start shadow-sm"
            >
              <div className="text-accent-purple text-xs font-mono mb-1 font-medium">Shiriix AI</div>
              <div className="text-gray-300 leading-relaxed">
                {typedText}
                {phase < 2 && <span className="inline-block w-1.5 h-4 ml-0.5 bg-gray-400 animate-blink align-middle" />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Reply Pills */}
        <AnimatePresence>
          {phase === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-2 mt-2"
            >
              <button className="border border-white/10 bg-white/5 text-white/60 text-xs rounded-full px-3 py-1.5 hover:border-accent-purple/50 hover:text-white transition-colors cursor-default">
                Yes, show me →
              </button>
              <button className="border border-white/10 bg-white/5 text-white/60 text-xs rounded-full px-3 py-1.5 hover:border-accent-purple/50 hover:text-white transition-colors cursor-default">
                Tell me more
              </button>
              <button className="border border-white/10 bg-white/5 text-white/60 text-xs rounded-full px-3 py-1.5 hover:border-accent-purple/50 hover:text-white transition-colors cursor-default">
                What's the pricing?
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default AiChatDemo;
