import React from "react";
import { HiStar } from "react-icons/hi";
import { useRouter } from "next/router";

function Desktop() {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center items-center space-x-[3em]">
        <button
          onClick={() => router.push("/quotes")}
          className="text-[24px] whitespace-nowrap"
        >
          get quotes
        </button>
        <button onClick={() => router.push("/about")} className="text-[24px] ">
          about
        </button>
        <button
          onClick={() => router.push("/suggestions")}
          className="text-[24px] "
        >
          suggestions
        </button>
        <a
          href="https://github.com/rlruedas/quotescafe.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiStar className="text-[34px]" />
        </a>
      </div>
    </>
  );
}

export default Desktop;
