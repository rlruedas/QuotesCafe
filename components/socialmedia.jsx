import React from "react";

import { IoShareSocialSharp } from "react-icons/io5";
import Link from "next/link";
import { useWindowDimension } from "../hooks/useWindowDimension";

function SocialMedia() {
  const { width } = useWindowDimension();

  return (
    <>
      <div
        className={`relative flex flex-col w-[30vw] justify-end items-end gap-2 font-Swanky font-bold ${
          width <= 768 ? `hidden` : `block`
        }`}
      >
        <section className="flex flex-col gap-[1em] justify-center items-center ">
          <button className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#e2c193] ">
            <IoShareSocialSharp className="text-[30px] text-[#855D49] " />
          </button>
          <span className="w-[2px] h-[70vh] rounded-sm bg-[#855D49] relative ">
            <section className="absolute bottom-[20%] w-[15em] flex flex-col justify-end -translate-x-[16em] gap-5 text-[#855D49]">
              <p className="text-end text-[15px]">
                Generate a random quote today!
              </p>
              <p className="text-end text-[15px]">
                Choose a different background for the quote you received!
              </p>
              <p className="text-end text-[15px]">
                Share it to your social media as stories!
              </p>
            </section>
          </span>
        </section>
      </div>
    </>
  );
}

export default SocialMedia;
