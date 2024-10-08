import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <div className={`${path === "/notes" ? "hidden" : ""} bg-cream flex flex-col gap-4 h-full w-full`}>
        <div className="w-full h-auto flex flex-row justify-between items-center px-6 sm:px-10 pt-4">
          <span className="text-text-300 text-xs xxs:text-sm xs:text-lg sm:text-xl font-rubik">
            © 2024 iNotebook
          </span>
          <span className="text-text-300 text-xs xxs:text-sm xs:text-lg sm:text-xl font-rubik">
            All Rights Reserved.
          </span>
        </div>
        <div className="h-auto w-full flex items-end justify-center border border-solid border-t-text-300 relative">
          <div className="h-full text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-center font-serif text-text-300 after:content-['TM'] after:text-lg sm:after:text-xl md:after:text-2xl lg:after:text-4xl after:font-serif after:absolute after:top-[25%] sm:after:top-[22%] md:after:top-[20%] pt-5">
            iNOTEBOOK
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
