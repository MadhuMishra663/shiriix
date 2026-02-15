import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    const formData = new FormData(form.current);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${import.meta.env.VITE_CONTACT_EMAIL}`,
        {
          method: "POST",
          body: formData,
        },
      );

      if (response.ok) {
        form.current.reset();
        showPopup("Message submitted successfully!", "success");
      } else {
        showPopup("Failed to send message.", "error");
      }
    } catch (error) {
      console.error(error);
      showPopup("Something went wrong.", "error");
    }

    setLoading(false);
  };

  const showPopup = (message: string, type: "success" | "error") => {
    setPopup({ message, type });

    setTimeout(() => {
      setPopup(null);
    }, 3000);
  };

  return (
    <>
      {/* CENTER POPUP MODAL */}
      {popup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm">
          <div
            className={`px-10 py-6 rounded-xl shadow-2xl text-white text-lg font-medium animate-scaleIn ${
              popup.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {popup.message}
          </div>
        </div>
      )}

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-24 text-center px-6 animate-pastelMove bg-[length:200%_200%]"
        style={{
          backgroundImage: "linear-gradient(270deg, #fbcfe8, #bfdbfe, #e9d5ff)",
        }}
      >
        <h2 className="text-4xl font-bold mb-10 text-gray-900">Contact</h2>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto flex flex-col gap-6"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New Message from Portfolio Website"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 rounded-lg bg-white/70 backdrop-blur-sm text-gray-900 focus:ring-2 focus:ring-gray-400 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 rounded-lg bg-white/70 backdrop-blur-sm text-gray-900 focus:ring-2 focus:ring-gray-400 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="p-4 rounded-lg bg-white/70 backdrop-blur-sm text-gray-900 focus:ring-2 focus:ring-gray-400 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="py-3 bg-gray-900/70 hover:bg-gray-900/80 text-white rounded-lg transition shadow-lg disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
