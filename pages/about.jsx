import React from "react";

import { IoMdReturnLeft } from "react-icons/io";

// Test Dummy

function About() {
  return (
    <>
      <div className="relative flex justify-center items-center w-full min-h-screen font-Swanky !overflow-clip">
        <section className="absolute flex justify-center items-center top-0 right-0 -translate-x-[2em]  lg:-translate-x-[6em] translate-y-[2em] text-black z-10 gap-3">
          <IoMdReturnLeft className="w-[1.2em] h-[1.2em]" />
          <button onClick={() => history.back()}>return</button>
        </section>
        <section className="absolute flex flex-col justify-end items-end top-0 left-0 w-[20%] h-[50%] lg:w-[40%] lg:h-[60%] bg-[#855D49]">
          <span className="text-[#EDDFB3] text-[1em] lg:text-[8em]">About</span>
        </section>
        <section className="absolute flex flex-col justify-center items-center bottom-0 right-0 lg:right-[5em] w-[80%] h-[70%] lg:w-[50%] lg:h-[70%] bg-[#855D49]">
          <span className="w-[80%] lg:text-[1.5em] text-[#EDDFB3]">
            This website was created for people who wants to receive a burst of
            wisdom to get their focus back. Quotes are also one way of offering
            an inspiration needed by a person for the day or in any time of
            life. People want to get motivated, inspired, and encourage
            especially those who are doubting themselves. Reading quotes
            affirm what we already know about ourselves.{" "}
          </span>
        </section>
      </div>
    </>
  );
}

export default About;
