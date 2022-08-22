import React from "react";
import Image from "next/image";
import Link from "next/link";

function Guide() {
  return (
    <div className="relative hidden lg:flex flex-col flex-1 h-fit justify-center font-Tenorsans font-bold text-[#87805E]  items-start gap-2">
      <section className="flex flex-col justify-center items-center w-fit h-full gap-2">
        <Image
          src="/projectlogo.webp"
          alt="logo of the website"
          width="88"
          height="88"
        />
        <span className="w-[.3em] min-h-[28em] rounded-sm bg-[#87805E] "></span>
      </section>
      <section className="absolute top-[12em] flex flex-col w-[16em]  text-[12px] gap-5 z-10">
        <span className="bg-[#EDDFB3]">
          Are you experiencing different states of emotion?
        </span>
        <span className="bg-[#EDDFB3]">
          Do you need something to ease your mind or even motivate you for the
          day?
        </span>
        <span className="bg-[#EDDFB3]">
          Looking for words that will uplift your mood?
        </span>
        <span className="bg-[#EDDFB3]">
          press “LUMIKHA” to generate a very random motivational, inspirational,
          and uplifting quotes to boost up your day!
        </span>
        <span className="bg-[#EDDFB3]">
          Just keep on pressing “LUMIKHA” to generate another random quote 😊{" "}
        </span>
      </section>
      <Link href="./suggestions">
        <span className="text-[20px] text-[#464236] cursor-pointer border border-[#464236] rounded-md px-3">
          Suggestions
        </span>
      </Link>
    </div>
  );
}

export default Guide;
