import React, { useState } from "react";
import {
  IoMenuOutline,
  IoCloseOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";

function Header() {
  const [menu, setMenu] = useState(false);

  const handleMenuClick = (e) => {
    e.preventDefault();

    setMenu(!menu);

    if (menu === false) {
      document.querySelector(".open-menu").classList.replace("block", "hidden");
      document.querySelector(".close-menu").classList.replace("hidden", "block");
      document.querySelector(".menu").classList.replace("translate-x-full", "translate-x-0");
    } else {
      document.querySelector(".close-menu").classList.replace("block", "hidden");
      document.querySelector(".open-menu").classList.replace("hidden", "block");
      document.querySelector(".menu").classList.replace("translate-x-0", "translate-x-full");
    }
  };

  return (
    <div className="sticky top-0 flex flex-row w-full h-[5em] px-[3em] justify-between items-center font-Tenorsans bg-[#EDDFB3] text-[#87805E] z-20 lg:hidden">
      <img
        src={"/projectlogo.webp"}
        alt="logo of the website"
        className="w-[4em] h-[4em]"
      />
      <button className="block z-50 open-menu" onClick={handleMenuClick}>
        <IoMenuOutline className="w-[2em] h-[2em]" />
      </button>
      <button className="hidden z-50 close-menu" onClick={handleMenuClick}>
        <IoCloseOutline className="w-[2em] h-[2em]" />
      </button>
      <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full min-h-screen transform duration-200 translate-x-full bg-[#EDDFB3] gap-[4em] z-20 menu">
        <span className="text-[24px]">Share on!</span>
        <section className="flex flex-row gap-5">
          <IoLogoFacebook className="w-[2em] h-[2em] rounded-full fill-[#87805E]" />
          <IoLogoInstagram className="w-[2em] h-[2em] rounded-full fill-[#87805E]" />
          <IoLogoTwitter className="w-[2em] h-[2em] rounded-full fill-[#87805E]" />
        </section>
        <span className="text-[24px]">About</span>
        <span className="text-[24px]">Suggestions</span>
      </div>
    </div>
  );
}

export default Header;
