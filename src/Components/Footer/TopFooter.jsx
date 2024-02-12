import React from "react";
import "../../App.css";
import "../../CSS/font.css";
import pic from '../../Media/Pictures/contact.svg'

function TopFooter() {
  return (
    <div className="px-6 sm:px-[4%] 3xl:px-[10%] w-full flex flex-col mt-32" id="contact">
      <span className="mx-auto text-secondary-100 font-bold mb-5 lg:text-h6 2xl:text-h5 3xl:text-h4">
        Looking for your next gem?
      </span>
      <a
        aria-label="Get in touch"
        className="relative underline-transition"
        href="mailto:prabhsgill22@email.com"
      >
        <img
          alt=""
          loading="lazy"
          width="896"
          height="104"
          className="w-full"
          style={{ color: 'transparent' }}
          src={pic}
        />
      </a>
    </div>
  );
}

export default TopFooter;

