import React, { useEffect, useState } from "react";

import bgimages from "../../../data/imgbackground.json";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Message(props) {
  const [countBG, setCountBG] = useState(0);
  const { bgimg } = bgimages;
  const { message } = props;

  return (
    <>
      <div className="flex justify-center items-center w-full h-full">
        <button
          className="outlines-none"
          onClick={() =>
            countBG <= 0
              ? setCountBG(bgimg.length - 1)
              : setCountBG(countBG - 1)
          }
        >
          <MdNavigateBefore className="w-[2em] h-[2em] text-[#87805E]" />
        </button>
        <section className="flex justify-center items-center relative w-fit h-fit font-Vollkorn">
          <img
            src={bgimg[countBG]?.link ?? ""}
            alt="Quote Background"
            className="w-[25em] h-[20em] md:h-[30em] rounded-2xl relative"
          ></img>

          <span className="absolute w-[60%] text-[10px] sm:text-[15px] ">"{message.content}"</span>
          <span className="absolute bottom-[3em] right-[3em]">-😊</span>
        </section>
        <button
          className="outlines-none"
          onClick={() =>
            countBG >= bgimg.length - 1
              ? setCountBG(0)
              : setCountBG(countBG + 1)
          }
        >
          <MdNavigateNext className="w-[2em] h-[2em] text-[#87805E]" />
        </button>
      </div>
    </>
  );
}

export default Message;
