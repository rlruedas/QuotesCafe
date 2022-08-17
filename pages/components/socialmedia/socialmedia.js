import React from "react";

import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";

function SocialMedia() {
  return (
    <>
      <div className="relative hidden lg:flex flex-col flex-1 h-fit justify-end items-end gap-2 font-Tenorsans font-bold">
        <section className="flex flex-col gap-[1em] justify-center items-center ">
          <button>
            <GrFacebookOption className="w-[3em] h-[3em] p-2 text-[#87805E] bg-[#D8CCA3] rounded-full" />
          </button>
          <button>
            <GrTwitter className="w-[3em] h-[3em] p-2 text-[#87805E] bg-[#D8CCA3] rounded-full" />
          </button>
          <button>
            <RiInstagramFill className="w-[3em] h-[3em] p-2 text-[#87805E] bg-[#D8CCA3] rounded-full" />
          </button>
          <span className="w-[.3em] min-h-[20em] rounded-sm bg-[#87805E] relative ">
            <section className="absolute bottom-[20%] w-[15em] flex flex-col justify-end -translate-x-[16em] gap-5 text-[#464236]">
              <p className="text-end text-[12px]">
                Generate a random quote today!
              </p>
              <p className="text-end text-[12px]">
                Choose a different background for the quote you received!
              </p>
              <p className="text-end text-[12px]">
                Share it to your social media stories!
              </p>
            </section>
          </span>
        </section>
        <Link href="./about">
          <span className="text-[20px] text-[#87805E] cursor-pointer border border-[#87805E] rounded-md px-3 ">
            About
          </span>
        </Link>
      </div>
    </>
  );
}

export default SocialMedia;
