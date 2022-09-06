import React from "react";
import { HiStar } from "react-icons/hi";
import { useRouter } from "next/router";

function Desktop() {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center items-center space-x-[3em]">
        <a
          href={"/quotes"}
          onClick={() => router.push("/quotes")}
          className="text-[24px] whitespace-nowrap"
        >
          get quotes
        </a>
        <a
          href={"/about"}
          onClick={() => router.push("/about")}
          className="text-[24px] "
        >
          about
        </a>
        <a
          href={"/suggestions"}
          onClick={() => router.push("/suggestions")}
          className="text-[24px] "
        >
          suggestions
        </a>
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
