import React, { useState } from "react";

import bgimages from "../../../data/imgbackground.json";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Message() {
  const [defaultBG, setDefaultBG] = useState(0);
  const { bgimg } = bgimages;

  return (
    <>
      <div className="flex justify-center items-center w-full h-full">
        <button className="outlines-none">
          <MdNavigateBefore className="w-[2em] h-[2em] text-[#87805E]" />
        </button>
        <section className="flex justify-center items-center relative w-full h-fit">
          <img
            src={bgimg[defaultBG].link}
            alt="Quote Background"
            className="w-[90%] h-full rounded-2xl relative"
          ></img>

          <span className="absolute">Message</span>
          <span className="absolute">Message</span>
        </section>
        <button className="outlines-none">
          <MdNavigateNext className="w-[2em] h-[2em] text-[#87805E]" />
        </button>
      </div>
    </>
  );
}

export default Message;
