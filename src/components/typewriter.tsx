import { useEffect, useState, useCallback } from "react";

interface TypewriterProps {
  phrases: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

const Typewriter = ({
  phrases,
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
}: TypewriterProps) => {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentPhrase = phrases[phraseIndex];

  const tick = useCallback(() => {
    if (isPaused) return;

    if (!isDeleting) {
      // Typing forward
      setDisplayed(currentPhrase.slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);

      if (charIndex + 1 === currentPhrase.length) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting
      setDisplayed(currentPhrase.slice(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);

      if (charIndex - 1 === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }
  }, [charIndex, currentPhrase, isDeleting, isPaused, pauseDuration, phrases.length]);

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting, deleteSpeed, speed]);

  return (
    <span className="inline-flex items-center text-2xl md:text-3xl font-semibold">
      <span className="gradient-text">{displayed}</span>
      <span className="ml-0.5 w-0.5 h-7 md:h-8 bg-accent-purple animate-blink inline-block" />
    </span>
  );
};

export default Typewriter;
