import React from "react";
import { useRouter } from "next/router";
import { HiStar } from "react-icons/hi";
import Filters from "./category";

function Menu(props) {
  const { setCategory } = props;
  const router = useRouter();

  return (
    <>
      <div
        className={`absolute top-0 left-0 flex flex-col justify-center items-center w-full h-screen gap-5 font-Swanky text-[#34180B] bg-[#E5D0B3] translate-x-full duration-200 z-0 `}
        id="mobile-menu"
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

export default Menu;
