import React from "react";

import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
    <>
      <div className="w-full h-[4em] flex flex-row justify-center items-center absolute bottom-0 space-x-[2em]">
        <div className="h-[1px] w-[30vw] bg-[#855D49]"></div>
        <div className="flex flex-col justify-center items-center w-fit h-fit">
          <h1 className="text-[18px] whitespace-nowrap ">Created by Reister</h1>
          <section className="flex flex-row justify-evenly items-center space-x-[1em]">
            <a
              href="https://www.linkedin.com/in/reisterruedas/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin className="text-[20px] sm:text-[30px]" />
            </a>
            <a
              href="https://github.com/rlruedas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub className="text-[20px] sm:text-[30px]" />
            </a>
            <a
              href="https://www.instagram.com/rlruedas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram className="text-[20px] sm:text-[30px]" />
            </a>
          </section>
        </div>
        <div className="h-[1px] w-[30vw] bg-[#855D49]"></div>
      </div>
    </>
  );
}

export default Footer;
