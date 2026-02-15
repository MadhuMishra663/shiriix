import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // ms per character
}

const Typewriter = ({ text, speed = 200 }: TypewriterProps) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === text.length) setDeleting(true);
      } else {
        setDisplayed(text.slice(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) setDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, deleting, text, speed]);

  return (
    <span className="inline-block relative text-2xl md:text-3xl font-semibold text-gray-900">
      <span className="bg-white/50 backdrop-blur-sm px-3 py-1 rounded-md shadow-sm inline-block">
        {displayed}
      </span>
      <span className="absolute right-0 top-0 h-full border-r-2 border-gray-900 animate-blink ml-1"></span>
    </span>
  );
};

export default Typewriter;
