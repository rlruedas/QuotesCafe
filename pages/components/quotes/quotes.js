import React from "react";

import Message from "./message";
import { TbArrowLeftTail, TbArrowRightTail } from "react-icons/tb";

function Quotes() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-[2em] ">
      <span className="font-Tenorsans font-bold text-[#87805E] text-[30px] sm:text-[50px] ">
        Quotes Cafe
      </span>
      <span className="font-Tenorsans font-bold text-[#87805E] text-[12px] text-justify lg:hidden">
        “Get a very random motivational, insipirational, uplifiting quotes to
        boost your day” <br />
        -Someone
      </span>
      <Message />
      <section className="flex flex-row justify-center items-center w-full h-fit gap-[2em]">
        <TbArrowRightTail className="w-[2em] h-[2em] text-[#87805E]" />
        <button className="font-Tenorsans font-bold text-[#87805E] text-[25px]">
          LUMIKHA
        </button>
        <TbArrowLeftTail className="w-[2em] h-[2em] text-[#87805E]" />
      </section>
    </div>
  );
}

export default Quotes;
