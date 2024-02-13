import React from "react";
import "../../App.css";
import "../../CSS/font.css";
import pic from '../../Media/Pictures/arrow.svg'

function BotFooter() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This enables the smooth scrolling
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-10 mt-14 items-end">
      <span className="text-center-sm order-last sm:order-first md:col-span-6 col-span-8 lg:col-span-6 font-bold leading-[85%] text-h3 sm:text-h1 lg:text-display-3 tracking-heading text-secondary-400">
        PRABH GILL
      </span>
      <div className="gap-x-3 md:col-span-3 col-span-4 mb-3 sm:mb-0 lg:col-span-3 flex flex-col link-text text-center-sm">
        <span className="font-bold uppercase">Toronto</span>
        <span className="font-medium text-secondary-100 uppercase">Canada</span>
      </div>
      <div className="w-full md:col-span-3 lg:col-span-3 h-fit flex justify-end">
        <div>
          <button
            aria-label="Scroll to top"
            className="w-fit hidden p-10 hover:scale-90 duration-1000 ease-expo bg-accent-500 group md:flex flex-col relative items-center justify-center rounded-full overflow-hidden"
            onClick={scrollToTop}
          >
            <span className="absolute flex group-hover:-translate-y-20 transition-all ease-in-out-cubic duration-500">
              <img
                alt=""
                loading="lazy"
                width="26"
                height="28"
                decoding="async"
                style={{ color: "transparent" }}
                src={pic}
              />
            </span>
            <span className="absolute flex translate-y-20 group-hover:translate-y-0 transition-all ease-in-out-cubic duration-500">
              <img
                alt=""
                loading="lazy"
                width="26"
                height="28"
                decoding="async"
                style={{ color: "transparent" }}
                src={pic}
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BotFooter;
