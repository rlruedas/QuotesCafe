import React from "react";

import { IoTriangleSharp } from "react-icons/io5";
import { IoMdReturnLeft } from "react-icons/io";
import { useWindowDimension } from "../hooks/useWindowDimension";

function Suggestions() {
  const { width } = useWindowDimension();

  return (
    <>
      {width > 768 && (
        <div className="relative flex flex-col justify-center items-center w-full min-h-screen font-Swanky !overflow-hidden">
          <IoTriangleSharp className="absolute top-0  -translate-y-[20%] w-[15em] h-[15em] lg:-translate-y-[50%] lg:w-[40em] lg:h-[40em] fill-[#855D49] z-0" />
          <IoTriangleSharp className="absolute bottom-0 left-0 -translate-x-[30%] translate-y-[30%]  rotate-180  w-[20em] h-[20em]  lg:translate-y-[60%] lg:-translate-x-[8em] lg:w-[50em] lg:h-[50em] fill-[#855D49] z-0" />
          <IoTriangleSharp className="absolute bottom-0 right-0 translate-x-[15%] translate-y-[15%] rotate-180 w-[10em] h-[10em] lg:w-[25em] lg:h-[25em] fill-[#855D49] z-0" />
          <section className="absolute flex justify-center items-center top-0 right-0 -translate-x-[5em] translate-y-[2em] text-black z-10 gap-3">
            <IoMdReturnLeft className="w-[1.2em] h-[1.2em]" />
            <button onClick={() => history.back()}>return</button>
          </section>
          <section className="flex flex-col justify-center items-center w-screen h-full z-40  gap-[2em]">
            <span className="text-[20px] sm:text-[30px] text-[#EDDFB3]">
              Do you have any suggestions?
            </span>
            <div className="flex flex-col justify-center items-start w-[80%] sm:w-[40%]  h-[50%] gap-5">
              <textarea
                className="text-[.8em] w-full min-h-[20em] max-h-[20em] outline-none p-5 bg-white  placeholder-black  text-justify rounded-lg "
                type="text"
                required
                minLength="1"
                placeholder="Write your message here! 😊"
              ></textarea>
              <button
                className="rounded-md text-[1.2em]  text-[#87805E] bg-white  text-center px-3"
                type="submit"
                value="Send Message"
                onClick={() => alert("Sorry this feature is not yet available")}
              >
                send
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default Suggestions;
