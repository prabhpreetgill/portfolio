import React from "react";
import "../../App.css";
import "../../CSS/font.css";
import svg from "../../Media/Svg/bubbles.svg";
import { Link } from "react-scroll"; // Import Link component from react-scroll

function Navbar() {
  const scrollSettings = {
    duration: 700,
    spy: true,
    smooth: true,
  };

  return (
    <header
      className="absolute w-full tracking-body z-40 top-0"
      style={{ opacity: 1, transform: "none" }}
    >
      <nav className="px-4 sm:px-7 2xl:px-10 pb-2 xl:pb-4 2xl:pb-6 border-opacity-20 mt-6 xl:mt-8 2xl:mt-10 flex items-start justify-between animate-header">
        <div style={{ transform: "none" }}>
          <a aria-label="Back to Home" href="/">
            <img
              alt=""
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              className="w-12 lg:w-14 2xl:w-20"
              style={{ color: "transparent" }}
              src={svg}
            />
          </a>
        </div>
        <div className="flex items-start text-start gap-x-20 text-secondary-300">
          <span className="hidden sm:flex uppercase font-semibold text-xs 2xl:text-base 3xl:text-h6 text-secondary-50">
            Available for work May 2024
          </span>
          <div className="flex items-start flex-col gap-y-1">
            <Link
              to="about"
              className="font-medium block relative overflow-hidden group h-fit leading-base link-text"
              style={{cursor: 'pointer'}}
              {...scrollSettings}
            >
              <span className="link1">About</span>
              <span className="link2">About</span>
            </Link>
            <Link
              to="info"
              className="font-medium block relative overflow-hidden group h-fit leading-base link-text"
              {...scrollSettings}
              style={{cursor: 'pointer'}}
            >
              <span className="link1">My Life</span>
              <span className="link2">My Life</span>
              
            </Link>
            <Link
              to="projects"
              className="font-medium block relative overflow-hidden group h-fit leading-base link-text"
              style={{cursor: 'pointer'}}
              {...scrollSettings}
            >
              <span className="link1">Projects</span>
              <span className="link2">Projects</span>
            </Link>
            <Link
              to="contact"
              className="font-medium block relative overflow-hidden group h-fit leading-base link-text"
              style={{cursor: 'pointer'}}
              {...scrollSettings}
            >
              <span className="link1">Contact</span>
              <span className="link2">Contact</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
