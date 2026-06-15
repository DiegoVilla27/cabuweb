"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  className?: string;
}

export default function Typewriter({
  strings,
  typeSpeed = 80,
  backSpeed = 80,
  className = "",
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(typeSpeed);

  useEffect(() => {
    const tick = () => {
      const i = loopNum % strings.length;
      const fullText = strings[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(backSpeed);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(1500); // Pause when full text is displayed
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setDelta(typeSpeed);
      }
    };

    const ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, delta, strings, typeSpeed, backSpeed]);

  return <span className={className}>{text}</span>;
}
