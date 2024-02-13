import React, { useEffect, useState } from "react";
import "../../App.css";
import "../../CSS/font.css";
import NavigationMenu from "./NavMenu";

function Landing() {
  // Ensure SVG styles are correctly formatted for React
  const svgStyle = {
    position: "fixed", // Use fixed instead of absolute
    width: "83.3333333%", // Equivalent to 5/6 for wide screens
    maxWidth: "40%", // Adjust based on your design, equivalent to lg:w-2/5
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 0,
    pointerEvents: "none",
  };

  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      setOffsetY(window.pageYOffset);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove scroll event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const halfwayPoint = window.innerHeight / 2;

  // Calculate the text's vertical position and opacity based on scroll position
  const textStyle = {
    transform: `translateY(${offsetY * 0.5}px)`, // Move text up slower than the scroll speed
    opacity: 1 - Math.min(0.002 * offsetY, 1), // Reduce opacity as you scroll down
  };

  return (
    <section id="home" className="mb-[-100svh py-0]">
    {NavigationMenu(offsetY >= halfwayPoint)}
      <div className="h-svh flex items-end sm:items-center section-padding sticky top-0">
        <svg
          width="1186"
          height="1186"
          viewBox="0 0 1186 1186"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-5/6 sm:w-3/5 lg:w-2/5 left-1/2 top-1/2 z-0 pointer-events-none animate-grow"
          style={{ ...svgStyle, transform: "translate(-50%, -50%) scale(1)" }} // Ensure the ending state of the transform matches the 'to' in the animation
        >
          <circle
            cx="593"
            cy="593"
            r="593"
            fill="url(#paint0_linear_4949_267)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_4949_267"
              x1="593"
              y1="0"
              x2="593"
              y2="1186"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DDDDD5" />
              <stop offset="1" stopColor="#DDDDD5" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div style={textStyle} className="w-full z-10 relative">
          <div className="flex flex-col gap-y-3 sm:mb-0 sm:gap-y-8 items-start sm:items-center">
            <h1 className="sr-only">Hi there, I'm Prabh Gill.</h1>
            <h1
              aria-hidden="true"
              className="leading-[90%] uppercase text-h2 xs:text-h2 sm:text-display-0 font-bold text-secondary-300 w-full relative flex flex-col whitespace-nowrap duration-500"
            >
              <span
                aria-hidden="true"
                className="sm:pl-[13%] 2xl:pl-[15%] 4xl:pl-[23%]"
              >
                {"Hi there, I'm".split("").map((char, index) => (
                  <span key={index} className="inline-block">
                    <span
                      className="pb-1 sm:pb-2 relative overflow-hidden inline-flex"
                      style={{
                        animation: `letters 0.5s ease forwards`,
                        animationDelay: `${0.03 * index + 2.2}s`, // Delay increases with each character
                        display: "inline-block", // Necessary for animation to apply individually
                        opacity: 0, // Start with character invisible
                      }}
                    >
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        {char}
                      </span>
                    </span>
                    {char === " " && (
                      <span className="inline-block">&nbsp;</span>
                    )}
                  </span>
                ))}
              </span>
              <span
                aria-hidden="true"
                className="sm:pr-[13%] 2xl:pr-[15%] 4xl:pr-[23%] sm:text-right"
              >
                {"Prabh Gill.".split("").map((char, index) => (
                  <span key={index} className="inline-block">
                    <span
                      className="pb-1 sm:pb-2 relative overflow-hidden inline-flex"
                      style={{
                        animation: `letters 0.5s ease forwards`,
                        animationDelay: `${0.03 * index + 2.2}s`, // Delay increases with each character
                        display: "inline-block", // Necessary for animation to apply individually
                        opacity: 0, // Start with character invisible
                      }}
                    >
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        {char}
                      </span>
                    </span>
                    {char === " " && (
                      <span className="inline-block">&nbsp;</span>
                    )}
                  </span>
                ))}
              </span>
            </h1>
            <p className="font-medium text-secondary-100 max-w-[38ch] sm:text-center text-start text-base xl:text-h6 2xl:text-h5 pl-1 sm:pl-0 animate-bio">
              Software Engineer <br/> Specializing in Artificial Intelligence & Machine Learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
