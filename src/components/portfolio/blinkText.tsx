"use client";

import { useState, useEffect, useMemo } from "react";
import "@/styles/portfolio/style.css";

export default function BlinkText() {
  const phrases = useMemo(
    () => ["Full-stack Web Developer", "UI/UX Enthusiast"],
    []
  );

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      const updatedText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentPhrase) {
        setIsDeleting(true);
        setTypingSpeed(2000); // Pause
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(1000); // Speed
      } else {
        setTypingSpeed(isDeleting ? 50 : 80); // Typing or deleting speed
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum, phrases]);

  return (
    <div>
      <h3 className="text-3xl text-center text-blue-900 font-semibold">
        I am a {text} <span className="blinking-cursor">|</span>
      </h3>
    </div>
  );
}
