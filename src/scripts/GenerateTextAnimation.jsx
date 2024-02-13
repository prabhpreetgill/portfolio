import React, { useEffect, useState, useRef } from "react";

const AnimatedText = ({ text = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false); // Ref to track if the animation has already occurred
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) { // Check if element is intersecting and hasn't animated yet
            setIsVisible(true);
            hasAnimated.current = true; // Mark as animated
            observer.unobserve(entry.target); // Stop observing to prevent future animations
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const generateAnimatedChars = (text) => {
    return String(text).split("").map((char, index) => {
      const style = isVisible
        ? {
            animation: `letters 0.5s ease forwards ${index * 0.05 + 0.5}s`,
            opacity: 0
          }
        : {opacity: 0};

      return (
        <span key={index} className="inline-block" style={style}>
          {char}
          {char === ' ' && <span className="inline-block">&nbsp;</span>}
        </span>
      );
    });
  };

  return (
    <div ref={sectionRef}>
      {generateAnimatedChars(text)}
    </div>
  );
};

export default AnimatedText;
