import React from "react";
import { useRouter } from "next/router";
import { HiStar } from "react-icons/hi";
import Filters from "../filter";

function Mobile(props) {
  const { active, setCategory } = props;
  const router = useRouter();

  return (
    <>
      <div
        className={`absolute top-0 pt-[3em] flex flex-col justify-center items-center !overflow-y-scroll w-full min-h-full  gap-5 font-Swanky text-[#34180B] bg-[#E5D0B3] z-40 duration-200 ${
          active ? `translate-x-0` : `translate-x-full hidden`
        }`}
      >
        <button onClick={() => router.push("/quotes")} className="text-[24px] ">
          get quotes
        </button>
        <button onClick={() => router.push("/about")} className="text-[24px] ">
          about
        </button>
        <button
          onClick={() => router.push("/suggestions")}
          className="text-[24px]"
        >
          suggestions
        </button>
        <a
          href="https://github.com/rlruedas/quotescafe.git"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <HiStar className="text-[34px]" />
          Star Me!
        </a>
        <div className="flex flex-col items-center">
          {router.pathname === "/quotes" && (
            <>
              <h1 className="text-[24px]">Filter</h1>
              <Filters setCategory={setCategory} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Mobile;
