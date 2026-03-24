import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!form.current) return;
    const formData = new FormData(form.current);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${import.meta.env.VITE_CONTACT_EMAIL || "shiriix9@gmail.com"}`,
        { method: "POST", body: formData }
      );
      if (response.ok) {
        form.current.reset();
        setPopup({ message: "Message submitted successfully!", type: "success" });
      } else {
        setPopup({ message: "Failed to send message.", type: "error" });
      }
    } catch {
      setPopup({ message: "Something went wrong.", type: "error" });
    }
    setLoading(false);
    setTimeout(() => setPopup(null), 3000);
  };

  return (
    <>
      {popup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm">
          <div className={`px-10 py-6 rounded-xl shadow-2xl text-white font-medium ${popup.type === "success" ? "bg-accent-purple" : "bg-red-600"}`}>
            {popup.message}
          </div>
        </div>
      )}

      <section id="contact" className="py-32 px-6 md:px-12 bg-[#0A0A0A] border-b border-dark-600">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.1em] mb-6">
              Get In Touch
            </h2>
            <h3 className="text-3xl md:text-[48px] font-bold text-white tracking-tight leading-tight">
              Let's Build Something<br />
              <span className="gradient-text">Together.</span>
            </h3>
          </motion.div>

          {/* Form Card */}
          <motion.form
            variants={itemVariants}
            ref={form}
            onSubmit={handleSubmit}
            className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col gap-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Inquiry via Shiriix Website" />

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest pl-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-5 py-4 text-white placeholder-gray-600 
                  focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest pl-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-5 py-4 text-white placeholder-gray-600 
                  focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest pl-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-5 py-4 text-white placeholder-gray-600 
                  focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full bg-accent-purple hover:bg-purple-700 text-white font-semibold rounded-xl py-4 
                transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message →"}
            </button>
          </motion.form>

          <motion.div variants={itemVariants} className="mt-10 text-center text-sm text-gray-400">
            ✉️ Or email us directly at{" "}
            <a href="mailto:shiriix9@gmail.com" className="text-accent-purple hover:text-white transition-colors">
              shiriix9@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
