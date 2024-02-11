import React from "react";
import "../../App.css";
import "../../CSS/font.css";

function MidFooter() {
  return (
    <div class="px-6 sm:px-[4%] 3xl:px-[10%] pb-8 3xl:pb-16 pt-8 sm:pt-[5%] relative">
      <div className="grid grid-cols-2 gap-y-7 gap-x-7 lg:gap-y-10 md:grid-cols-12 md:gap-x-10">
        <div className="md:col-span-6 lg:col-span-6 flex flex-col">
          <span className="flex border-b-[1.5px] link-text border-accent-500 pb-1 font-bold uppercase text-secondary-300 mb-3">
            Navigation
          </span>
          <div className="flex flex-col gap-y-2 md:gap-y-1">
            <a
              className="leading-base font-medium block relative overflow-hidden group h-fit link-text text-secondary-100 w-fit"
              href="/"
            >
              <span className="link1">Home</span>
              <span className="link2">Home</span>
            </a>
            <a
              className="leading-base font-medium block relative overflow-hidden group h-fit link-text text-secondary-100 w-fit"
              href="#about"
            >
              <span className="link1">About</span>
              <span className="link2">About</span>
            </a>
            <a
              className="leading-base font-medium block relative overflow-hidden group h-fit link-text text-secondary-100 w-fit"
              href="#info"
            >
              <span className="link1">Info</span>
              <span className="link2">Info</span>
            </a>
            <a
              className="leading-base font-medium block relative overflow-hidden group h-fit link-text text-secondary-100 w-fit"
              href="#projects"
            >
              <span className="link1">Projects</span>
              <span className="link2">Projects</span>
            </a>
            <a
              className="leading-base font-medium block relative overflow-hidden group h-fit link-text text-secondary-100 w-fit"
              href="#contact"
            >
              <span className="link1">Contact</span>
              <span className="link2">Contact</span>
            </a>
            {/* More navigation links */}
          </div>
        </div>

        <div className="md:col-span-3 lg:col-span-3 flex flex-col">
          <span className="flex border-b-[1.5px] border-accent-500 pb-1 font-bold uppercase link-text text-secondary-300 mb-3">
            Contact
          </span>
          <div className="flex flex-col gap-y-2 md:gap-y-1">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium block relative overflow-hidden group h-fit link-text leading-base text-secondary-100 w-fit"
              href="https://www.linkedin.com/in/prabhpreet-gill-sd/"
            >
              <span className="link1">Linkedin</span>
              <span className="link2">Linkedin</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium block relative overflow-hidden group h-fit link-text leading-base text-secondary-100 w-fit"
              href="https://github.com/prabhpreetgill?tab=overview&from=2024-02-01&to=2024-02-10"
            >
              <span className="link1">GitHub</span>
              <span className="link2">GitHub</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium block relative overflow-hidden group h-fit link-text leading-base text-secondary-100 w-fit"
              href="mailto:prabhsgill22@email.com"
            >
              <span className="link1">Email</span>
              <span className="link2">Email</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium block relative overflow-hidden group h-fit link-text leading-base text-secondary-100 w-fit"
              href="tel:+16477710322"
            >
              <span className="link1">Phone</span>
              <span className="link2">Phone</span>
            </a>
            {/* More social links */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidFooter;
