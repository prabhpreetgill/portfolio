import React from "react";
import "../../App.css";
import AnimatedText from "../../scripts/GenerateTextAnimation";
import Keeper from '../../Media/Pictures/Keeper.png'
import WC from '../../Media/Pictures/WorldCup.png'
import AI from '../../Media/Pictures/AI.png'
import Fitness from '../../Media/Pictures/Fitness.png'

function Projects() {

  return (
    <section id="projects" className="bg-secondary-400 section-padding">
      <h2 className="relative text-accent-400 section-heading dark:text-accent-400 pb-8">
        <span aria-hidden="true">
          <AnimatedText text="Projects."/>
        </span>
      </h2>
      <div class="grid grid-cols-1 gap-x-14 xl:gap-x-18 2xl:gap-x-20 3xl:gap-x-24 gap-y-10 md:gap-y-20 pb-20 md:grid-cols-12">
        <div className="work-0 container">
          <a
            className="group"
            target="_blank"
            href="https://github.com/prabhpreetgill/C02-Emissions-Predictor"
            rel="noopener noreferrer"
          >
            <div className="overflow-hidden group-hover:rounded-xl transition-all duration-300 rounded mb-4 xl:mb-5 2xl:mb-6 3xl:mb-7">
              <img
                alt="AI thumbnail"
                loading="lazy"
                width="1000"
                height="1000"
                className="w-full group-hover:scale-105 ease-expo transition-all duration-[1200ms]"
                style={{ color: "transparent" }}
                srcSet= {`${AI} 1080w, ${AI} 2048w`}
                src={AI}
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-between mt-3 gap-y-4">
              <h3 className="text-h4 w-fit 2xl:text-h3 3xl:text-h2 text-accent-300 font-bold">
                CO2 Emissions Predictor
              </h3>
              <div className="text-sm 2xl:text-base flex font-medium tracking-base text-secondary-50 items-center uppercase">
                <span className="gap-x-2 flex h-fit items-center justify-center">
                  <span className="border px-3 rounded-full border-secondary-50">
                    AI/ML
                  </span>
                  <span className="border px-3 rounded-full border-secondary-50">
                    Python
                  </span>
                </span>
                <span className="ml-2 border h-fit px-3 rounded-full border-secondary-50 bg-secondary-50 text-secondary-400 flex justify-center items-center">
                  2023
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="work-1 container">
          <a
            className="group"
            target="_blank"
            href="https://prabh-world-cup.vercel.app/"
            rel="noopener noreferrer"
          >
            <div className="overflow-hidden group-hover:rounded-xl transition-all duration-300 rounded mb-4 xl:mb-5 2xl:mb-6 3xl:mb-7">
              <img
                alt="World Cup thumbnail"
                loading="lazy"
                width="1000"
                height="1000"
                className="w-full group-hover:scale-105 ease-expo transition-all duration-[1200ms]"
                style={{ color: "transparent" }}
                src={WC}
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-between mt-3 gap-y-4">
              <h3 className="text-h4 w-fit 2xl:text-h3 3xl:text-h2 text-accent-300 font-bold">
                World Cup Tracker
              </h3>
              <div className="text-sm 2xl:text-base flex font-medium tracking-base text-secondary-50 items-center uppercase">
                <span className="gap-x-2 flex h-fit items-center justify-center">
                  <span className="border px-3 rounded-full border-secondary-50">
                    FullStack
                  </span>
                  <span className="border px-3 rounded-full border-secondary-50">
                    MERN
                  </span>
                </span>
                <span className="ml-2 border h-fit px-3 rounded-full border-secondary-50 bg-secondary-50 text-secondary-400 flex justify-center items-center">
                  2022
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="work-2 container">
          <a
            className="group"
            target="_blank"
            href="https://github.com/prabhpreetgill/MyFitnessBuddy"
            rel="noopener noreferrer"
          >
            <div className="overflow-hidden group-hover:rounded-xl transition-all duration-300 rounded mb-4 xl:mb-5 2xl:mb-6 3xl:mb-7">
              <img
                alt="Fitness thumbnail"
                loading="lazy"
                width="1000"
                height="1000"
                className="w-full group-hover:scale-105 ease-expo transition-all duration-[1200ms]"
                style={{ color: "transparent" }}
                srcSet={`${Fitness} 1080w, ${Fitness} 2048w`}
                src={Fitness}
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-between mt-3 gap-y-4">
              <h3 className="text-h4 w-fit 2xl:text-h3 3xl:text-h2 text-accent-300 font-bold">
                MyFitness Buddy
              </h3>
              <div className="text-sm 2xl:text-base flex font-medium tracking-base text-secondary-50 items-center uppercase">
                <span className="gap-x-2 flex h-fit items-center justify-center">
                  <span className="border px-3 rounded-full border-secondary-50">
                    FullStack
                  </span>
                  <span className="border px-3 rounded-full border-secondary-50">
                    Java
                  </span>
                </span>
                <span className="ml-2 border h-fit px-3 rounded-full border-secondary-50 bg-secondary-50 text-secondary-400 flex justify-center items-center">
                  2023
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="work-3 container">
          <a
            className="group"
            target="_blank"
            href="https://prabh-keeper.vercel.app/"
            rel="noopener noreferrer"
          >
            <div className="overflow-hidden group-hover:rounded-xl transition-all duration-300 rounded mb-4 xl:mb-5 2xl:mb-6 3xl:mb-7">
              <img
                alt="Keeper thumbnail"
                loading="lazy"
                width="1000"
                height="1000"
                className="w-full group-hover:scale-105 ease-expo transition-all duration-[1200ms]"
                style={{ color: "transparent" }}
                src={Keeper}
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-between mt-3 gap-y-4">
              <h3 className="text-h4 w-fit 2xl:text-h3 3xl:text-h2 text-accent-300 font-bold">
                Keeper
              </h3>
              <div className="text-sm 2xl:text-base flex font-medium tracking-base text-secondary-50 items-center uppercase">
                <span className="gap-x-2 flex h-fit items-center justify-center">
                  <span className="border px-3 rounded-full border-secondary-50">
                    FullStack
                  </span>
                  <span className="border px-3 rounded-full border-secondary-50">
                    Mern
                  </span>
                </span>
                <span className="ml-2 border h-fit px-3 rounded-full border-secondary-50 bg-secondary-50 text-secondary-400 flex justify-center items-center">
                  2023
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
