import React from "react";
import Mike from "../../Media/Pictures/MikeTyson.jpg";
import Parallax from "../../scripts/Parralax";
import AnimatedText from "../../scripts/GenerateTextAnimation";

function About() {
  const imgStyle = Parallax(0.05, 1);
  const textStyle = Parallax(0.001, -1)

  // State to track visibility


  return (
    <section id="about" className="bg-secondary-400 section-padding">
      <div className="relative">
        <h2 className="relative text-accent-400 section-heading dark:text-accent-400 -mb-5 md:-mb-20 z-30" style={textStyle}>
          <span aria-hidden="true">
          <AnimatedText text="About Me." />
          </span>
        </h2>
        <svg
          className="absolute mt-16 left-1/2 opacity-10 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden sm:block w-full max-w-2xl 2xl:max-w-4xl 3xl:max-w-5xl xl:mt-20 2xl:mt-28"
          viewBox="0 0 709 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="709" height="300" rx="169.963" fill="#AFAF9D"></rect>
        </svg>
        <svg
          className="absolute left-1/2 mt-16 opacity-10 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden sm:block w-full max-w-xl 2xl:max-w-3xl 3xl:max-w-4xl xl:mt-20 2xl:mt-28"
          viewBox="0 0 594 209"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="594"
            y="209"
            width="594"
            height="209"
            rx="126.5"
            transform="rotate(-180 594 209)"
            fill="#E8E8E3"
          ></rect>
        </svg>
        <div style={imgStyle}>
          <div
            className="overflow-hidden z-0 max-w-sm 2xl:max-w-lg 3xl:max-w-xl relative mx-auto pointer-events-none"
            style={{transform: "translateY(11.2344%) translateZ(0px)" }}
          >
            {/* Placeholder for image since srcSet isn't directly usable in React without next/image */}
            <img
              alt="Personal portrait of Prabh Gill"
              loading="lazy"
              width="1536"
              height="2040"
              className="mx-auto rounded 2xl:rounded-2xl aspect-square sm:aspect-auto object-cover"
              style={{ color: "transparent" }}
              src={Mike} // Example path, replace with actual
            />
            <div className="h-full w-full top-0 bg-gradient-to-t from-secondary-400 opacity-80 xl:opacity-75 to-transparent absolute rounded 2xl:rounded-2xl"></div>
          </div>
        </div>
      </div>
      <div style={textStyle}>
        <p className="body-text indent-4 sm:indent-12 text-balance text-secondary-50 font-medium items-end flex justify-end w-full relative -mt-8 sm:-mt-12">
          <span className="max-w-[43ch]">
            As a passionate computer science student, I am eager to join a
            forward-thinking company where I can contribute my skills and grow
            professionally. My enthusiasm for technology drives me to seek
            innovative solutions and continuously expand my knowledge in this
            dynamic field.
          </span>
        </p>
      </div>
    </section>
  );
}

export default About;
