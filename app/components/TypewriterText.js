"use client";

import { useState, useEffect } from "react";

export default function TypewriterText({ texts }) {
  const [textIndex, setTextIndex] = useState(0); // which sentence
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentText = texts[textIndex];

  useEffect(() => {
    let timeout;

    // ✍️ Typing
    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 60);
    }

    // ⌫ Deleting
    else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, 40);
    }

    // ⏸ Pause before deleting
    else if (charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    }

    // 🔁 Move to next text
    else if (charIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentText, texts.length]);

  return (
    <h1 className="text-2xl md:text-5xl font-bold mt-4 max-w-4xl mx-auto leading-tight text-white">
      {displayedText}
      <span className="animate-pulse">|</span>
    </h1>
  );
}