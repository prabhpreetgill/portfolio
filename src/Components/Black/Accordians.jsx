import React, { useState } from "react";
import Parallax from "../../scripts/Parralax";
import AnimatedText from "../../scripts/GenerateTextAnimation";
function Accord() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const openArrow1 =
    "transform origin-center transition duration-500 ease-out !rotate-180";
  const closeArrow1 =
    "transform origin-center transition duration-500 ease-out false";

  const openArrow2 =
    "transform origin-center rotate-90 transition duration-500 ease-out !rotate-180";
  const closeArrow2 =
    "transform origin-center rotate-90 transition duration-500 ease-out false";

  const openTextStyle =
    "grid text-sm overflow-hidden px-7 transition-all relative duration-1000 ease-expo grid-rows-[1fr] opacity-100 text-secondary-200 ";
  const closeTextStyle =
    "grid text-sm overflow-hidden px-7 transition-all relative duration-1000 ease-expo grid-rows-[0fr] opacity-0  text-secondary-50";

  const svgOpenStyle = " fill-secondary-300 shrink-0 ml-8";
  const svgCloseStyle = " fill-secondary-50 shrink-0 ml-8";

  const buttonOpenStyle =
    "text-secondary-300 px-7 group flex items-center justify-between w-full text-left font-extrabold py-5 sm:py-5 3xl:py-7 text-h4 sm:text-h2 xl:text-h1 tracking-heading duration-700 ease-expo";
  const buttonCloseStyle =
    "text-accent-500 px-0 group flex items-center justify-between w-full text-left font-extrabold py-5 sm:py-5 3xl:py-7 text-h4 sm:text-h2 xl:text-h1 tracking-heading duration-700 ease-expo";

  const divOpenStyle =
    "bg-accent-400 rounded-lg border-none  relative transition-all duration-700 ease-expo";
  const divCloseStyle =
    "border-b-2 3xl:border-b-4 border-b-secondary-300 bg-transparent  relative transition-all duration-700 ease-expo";

  const up = Parallax(0.03, -1);
  const down = Parallax(0.04, 1);

  // Function to toggle accordion state
  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
  };

  const toggleAccordion2 = () => {
    setIsOpen1(false);
    setIsOpen2(!isOpen2);
    setIsOpen3(false);
  };

  const toggleAccordion3 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(!isOpen3);
  };

  return (
    <section
      id="info"
      className="bg-secondary-400 section-padding flex flex-col lg:flex-row items-start gap-x-12 "
    >
      <div
        className="flex flex-col gap-y-2 xl:gap-y-3 2xl:gap-y-4 w-full lg:w-1/2"
        style={up}
      >
        <h2 className="section-heading text-accent-400">
          <AnimatedText text="My Life." />
        </h2>
        <p className="pl-1 text-secondary-50 font-medium body-text max-w-[35ch]">
          My obsession is to deliver a digital experience that not only serves a
          great purpose but gives your business an unfair advantage.
        </p>
      </div>
      <div
        className="flex justify-between w-full mt-12 lg:mt-0 lg:w-1/2"
        style={down}
      >
        <div className="w-full">
          {/* Web Development Accordion */}
          <div className={isOpen1 ? divOpenStyle : divCloseStyle}>
            <h2>
              <button
                aria-label="Web Development accordion button"
                className={isOpen1 ? buttonOpenStyle : buttonCloseStyle}
                aria-expanded={isOpen1 ? "true" : "false"}
                aria-controls="accordion-text-0"
                onClick={toggleAccordion1}
              >
                <span className="sm:group-hover:translate-x-2 duration-700 ease-expo leading-tight">
                  Education
                </span>
                <svg
                  className={isOpen1 ? svgOpenStyle : svgCloseStyle}
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={isOpen1 ? openArrow1 : closeArrow1}
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={isOpen1 ? openArrow2 : closeArrow2}
                  ></rect>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-text-0"
              role="region"
              aria-labelledby="accordion-title-0"
              className={isOpen1 ? openTextStyle : closeTextStyle}
            >
              <div className="overflow-hidden">
                <p className="pb-6 3xl:pb-9 text-base xl:text-h6 2xl:text-h5 max-w-[54ch] font-medium">
                  <div className="flex justify-between items-baseline pb-2">
                    <strong className="text-left">Computer Science</strong>
                    <span className="text-right">April 2024</span>
                  </div>
                  <p className="pb-2">York University</p>
                  <div>
                    <strong className="block text-md">Coursework:</strong>
                    <p className="text-sm list-disc list-inside">
                      Artificial Ingelligence&nbsp;&nbsp;&nbsp;&nbsp;Machine
                      Learning and Pattern Recognition &nbsp;&nbsp;&nbsp;&nbsp;
                      Design Patterns
                      <br />
                      Data Structures and
                      Algorithms&nbsp;&nbsp;&nbsp;&nbsp;Advanced Object Oriented
                      Programming
                    </p>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className={isOpen2 ? divOpenStyle : divCloseStyle}>
            <h2>
              <button
                aria-label="Web Development accordion button"
                className={isOpen2 ? buttonOpenStyle : buttonCloseStyle}
                aria-expanded={isOpen2 ? "true" : "false"}
                aria-controls="accordion-text-0"
                onClick={toggleAccordion2}
              >
                <span className="sm:group-hover:translate-x-2 duration-700 ease-expo leading-tight">
                  Experience
                </span>
                <svg
                  className={isOpen2 ? svgOpenStyle : svgCloseStyle}
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={isOpen2 ? openArrow1 : closeArrow1}
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={isOpen2 ? openArrow2 : closeArrow2}
                  ></rect>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-text-0"
              role="region"
              aria-labelledby="accordion-title-0"
              className={isOpen2 ? openTextStyle : closeTextStyle}
            >
              <div className="overflow-hidden">
                <p className="pb-6 3xl:pb-9 text-base xl:text-h6 2xl:text-h5 max-w-[54ch] font-medium">
                  <div className="flex justify-between items-baseline pb-2">
                    <strong className="text-left">Software Developer</strong>
                    <span className="text-right">Feb 2023 - Current</span>
                  </div>
                  <p className="pb-2">Gobind Sarvar Brampton</p>
                  <p className="text-sm list-disc list-inside">
                    Led the creation of a school management system featuring
                    attendance, payment tracking, class creation, and
                    enrollment, enhancing operational efficiency and user
                    engagement through a Material-UI and React frontend, and
                    robust backend with Heroku PostgreSQL. Streamlined travel
                    procedures, significantly saving time and reducing stress
                    with a comprehensive travel management program.
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className={isOpen3 ? divOpenStyle : divCloseStyle}>
            <h2>
              <button
                aria-label="Web Development accordion button"
                className={isOpen3 ? buttonOpenStyle : buttonCloseStyle}
                aria-expanded={isOpen3 ? "true" : "false"}
                aria-controls="accordion-text-0"
                onClick={toggleAccordion3}
              >
                <span className="sm:group-hover:translate-x-2 duration-700 ease-expo leading-tight">
                  Skills
                </span>
                <svg
                  className={isOpen3 ? svgOpenStyle : svgCloseStyle}
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={isOpen3 ? openArrow1 : closeArrow1}
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={isOpen3 ? openArrow2 : closeArrow2}
                  ></rect>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-text-0"
              role="region"
              aria-labelledby="accordion-title-0"
              className={isOpen3 ? openTextStyle : closeTextStyle}
            >
              <div className="overflow-hidden">
                <p className="pb-6 text-base xl:text-h6 2xl:text-h5 max-w-[54ch] font-medium">  
                <strong className="block text-md">Languages:</strong>
                    <p className="text-sm list-disc list-inside">
                      Java&nbsp;&nbsp;&nbsp;&nbsp;Python&nbsp;&nbsp;&nbsp;&nbsp;Javascript
                      &nbsp;&nbsp;&nbsp;&nbsp;Typescript&nbsp;&nbsp;&nbsp;&nbsp;HTML/CSS&nbsp;&nbsp;&nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;&nbsp;
                      MySQL&nbsp;&nbsp;&nbsp;&nbsp;MongoDB&nbsp;&nbsp;&nbsp;&nbsp;Bash
                    </p>
                </p>
                <p className="pb-6 text-base xl:text-h6 2xl:text-h5 max-w-[54ch] font-medium">  
                <strong className="block text-md">Frameworks:</strong>
                    <p className="text-sm list-disc list-inside">
                      ReactJs&nbsp;&nbsp;&nbsp;&nbsp;NodeJs&nbsp;&nbsp;&nbsp;&nbsp;ExpressJs
                      &nbsp;&nbsp;&nbsp;&nbsp;Materials UI&nbsp;&nbsp;&nbsp;&nbsp;Bootstrap
                      &nbsp;&nbsp;&nbsp;&nbsp;Mongoose&nbsp;&nbsp;&nbsp;&nbsp;NumPy
                      &nbsp;&nbsp;&nbsp;&nbsp;Pandas&nbsp;&nbsp;&nbsp;&nbsp;Scikit-Learn
                      &nbsp;&nbsp;&nbsp;&nbsp;TensorFlow
                    </p>
                </p>
                <p className="pb-6 3xl:pb-9 text-base xl:text-h6 2xl:text-h5 max-w-[54ch] font-medium">  
                <strong className="block text-md">Tools:</strong>
                    <p className="text-sm list-disc list-inside">
                      Git&nbsp;&nbsp;&nbsp;&nbsp;GitHub&nbsp;&nbsp;&nbsp;&nbsp;VS Code
                      &nbsp;&nbsp;&nbsp;&nbsp;Eclipse&nbsp;&nbsp;&nbsp;&nbsp;IntelliJ
                      &nbsp;&nbsp;&nbsp;&nbsp;Unix Command Line
                    </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accord;
