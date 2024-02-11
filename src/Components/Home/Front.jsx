import React from "react";
import "../../App.css";
import "../../CSS/font.css";

function Front() {
  return (
    <div className="h-svh fixed w-screen bg-secondary-400 z-[999] text-h4 text-accent-300 tracking-heading lg:text-h3 2xl:text-h2 3xl:text-h1 font-bold leading-[115%] scrollUp" style={{zIndex: 200}}>
      <div className="flex-col flex justify-center items-center h-full">
        <span className="overflow-hidden">
          <span className="flex animate-lift animate-during-lift">
            Prabh Gill
          </span>
        </span>
        <span className="text-accent-500 overflow-hidden">
          <span className="flex animate-lift-delay animate-during-lift">
            © 2024
          </span>
        </span>
      </div>
    </div>
  );
}

export default Front;
