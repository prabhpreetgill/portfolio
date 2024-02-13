import React, { useEffect, useRef, useState } from "react";
import menuSvg from "../../Media/Svg/menu.svg"; // Make sure the path is correct
import "../../App.css";
import { Link } from "react-scroll";

function NavigationMenu(half) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref to the menu for detecting outside clicks
  const buttonRef = useRef(null); // Ref for the toggle button to exclude from outside clicks

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Define the navigation links
  const navLinks = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
    { href: "info", text: "My Life" },
    { href: "projects", text: "Projects" },
    { href: "contact", text: "Contact" },
  ];

  // Define the social links
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/prabhpreet-gill-sd/",
      text: "LinkedIn",
    },
    {
      href: "https://github.com/prabhpreetgill",
      text: "GitHub",
    },
  ];

  const buttonStyle = {
    transform: half ? "scale(1)" : "scale(0)",
    transition: "transform 0.5s ease", // Smooth transition for scaling
    // Keep the rest of your button styling here
  };

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Styles for the button spans based on the menu state
  const spanStyle1 = isMenuOpen
    ? { transform: "rotate(45deg) translateY(0)" }
    : { transform: "rotate(0) translateY(-0.5rem)" };

  const spanStyle2 = isMenuOpen
    ? { transform: "rotate(-45deg) translateY(0)" }
    : { transform: "rotate(0) translateY(0.5rem)" };

  const scrollSettings = {
    duration: 700,
    spy: true,
    smooth: true,
  };

  return (
    <div>
      <button
        ref={buttonRef}
        aria-label="Menu Navigation Button"
        aria-expanded={isMenuOpen}
        aria-controls="menu"
        class="flex h-16 w-16 2xl:w-20 2xl:h-20 flex-col items-center justify-center rounded-full bg-accent-500 ease-expo hover:scale-90 fixed left-6 top-6 sm:left-8 sm:top-8 transition-all duration-1000 group scale-0 shrink"
        style={{...buttonStyle, zIndex: 150}}
        onClick={toggleMenu}
      >
        <span
          class="absolute h-[2px] w-7 2xl:w-9 rounded-full bg-secondary-400 transition-all duration-300 ease-in-out-circ -translate-y-1 rotate-0"
          style={spanStyle1}
        ></span>
        <span
          class="absolute h-[2px] w-7 2xl:w-9 rounded-full bg-secondary-400 transition-all duration-300 ease-in-out-circ translate-y-1 -rotate-0"
          style={spanStyle2}
        ></span>
      </button>
      <div
        ref={menuRef} // Apply ref to the menu container
        className={`fixed z-50 flex h-screen w-screen pointer-events-none text-accent-200 ${
          isMenuOpen ? "navMenu-open" : "navMenu-close"
        }`}
        style={{ pointerEvents: isMenuOpen ? "auto" : "none" }} // Prevent clicks when menu is closed
      >
        <div
          className="relative z-20 m-2 flex max-w-lg 2xl:max-w-xl 3xl:max-w-3xl flex-col justify-between rounded-md py-10 overflow-hidden bg-secondary-300 pointer-events-auto"
          style={{ width: "inherit", opacity: 1 }}
        >
          <div
            className={`top-0 right-0 absolute ${
              isMenuOpen ? "navMenu-circle" : "navMenu-circle-close"
            }`}
            style={{ opacity: 0, visibility: "hidden" }}
          >
            <img
              alt="Menu Icon"
              loading="lazy"
              width="245"
              height="327"
              decoding="async"
              className="2xl:w-72 3xl:w-96"
              src={menuSvg}
            />
          </div>
          {/* Navigation Links */}
            <nav className="flex flex-col justify-center px-8 sm:px-14 h-full text-h2 sm:text-h2 xl:text-h1 2xl:px-20 font-bold text-cream relative leading-base">
              {navLinks.map((link, index) => (
                <div
                  className="group flex w-fit cursor-pointer items-center gap-x-4"
                  style={{
                    opacity: 0,
                    animation: "letters 1s ease forwards",
                    animationDelay: `${index * 0.05 + 0.5}s`,
                  }}
                >
                  <span className="invisible inline-block h-3 w-3 rounded-full bg-accent-200 opacity-0 scale-0 transition-all group-hover:visible group-hover:opacity-100 group-hover:scale-100 ease-expo duration-700"></span>
                  <div className="w-fit overflow-hidden">
                    <Link
                      className={`mb-2 hover:text-accent-500 transition duration-300 ease-in-out`}
                      style={{ cursor: "pointer" }}
                      {...scrollSettings}
                      to={link.href}
                    >
                      {link.text}
                    </Link>
                  </div>
                </div>
              ))}
            </nav>

          {/* Social Links */}
          {isMenuOpen && (
            <ul className="flex justify-end gap-x-8 px-14 text-accent-500">
              {socialLinks.map((social, index) => (
                <div
                  key={index}
                  style={{
                    opacity: 0,
                    animation: "fadeFull 0.5s ease forwards",
                    animationDelay: `${0.3 * index + 0.5}s`,
                  }}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium block relative overflow-hidden group h-fit leading-base link-text"
                  >
                    <span className="link1">{social.text}</span>
                    <span className="link2">{social.text}</span>
                  </a>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavigationMenu;
