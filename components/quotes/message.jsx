import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";

function Message(props) {
  const [countBG, setCountBG] = useState(0);
  const { message, modal } = props;

  const bgimg = [
    {
      link: "/quotebackgrounds/webp/paper-0.webp",
    },
    {
      link: "/quotebackgrounds/webp/paper-1.webp",
    },
    {
      link: "/quotebackgrounds/webp/paper-2.webp",
    },
    {
      link: "/quotebackgrounds/webp/paper-3.webp",
    },
    {
      link: "/quotebackgrounds/webp/paper-4.webp",
    },
    {
      link: "/quotebackgrounds/webp/paper-5.webp",
    },
    {
      link: "/quotebackgrounds/webp/paper-6.webp",
    },
    {
      link: "/quotebackgrounds/webp/paper-7.webp",
    },
  ];

  return (
    <>
      <div className="relative flex justify-center items-center w-full h-full">
        <button
          className="outlines-none"
          onClick={() =>
            countBG <= 0
              ? setCountBG(bgimg.length - 1)
              : setCountBG(countBG - 1)
          }
        >
          <MdNavigateBefore className="w-[2em] h-[2em] text-[#87805E]" />
        </button>

        <section className="relative flex flex-col w-fit h-fit justify-center items-center">
          <section
            className="flex justify-center items-center relative w-fit h-fit font-Vollkorn bg-transparent bg-opacity-0"
            id="message"
          >
            <img
              src={bgimg[countBG]?.link}
              alt="Quote Background"
              className="w-[100%] h-[70vh] relative"
            ></img>

            <span className="absolute w-[60%] text-[10px] sm:text-[15px] ">
              &quot;{message.content}&quot;
            </span>
            <span className="absolute bottom-[3em] right-[3em] text-[15px] sm:text-[18px]">
              -🐱‍🚀
            </span>
          </section>
          <button
            onClick={modal}
            className="absolute bottom-2 left-2  flex justify-center items-center w-[50px] h-[50px] z-30 rounded-full bg-[#e2c193] "
          >
            <IoShareSocialSharp className="text-[30px] text-[#855D49] " />
          </button>
        </section>

        <button
          className="outlines-none"
          onClick={() =>
            countBG >= bgimg.length - 1
              ? setCountBG(0)
              : setCountBG(countBG + 1)
          }
        >
          <MdNavigateNext className="w-[2em] h-[2em] text-[#87805E]" />
        </button>
      </div>
    </>
  );
}

export default Message;
