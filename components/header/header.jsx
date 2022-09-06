import React, { useCallback, useEffect, useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { useRouter } from "next/router";
import MobileNavBar from "./mobilenavbar";
import DesktopNavBar from "./desktopnavbar";

function Header(props) {
  const [active, setActive] = useState(false);
  const { width } = useWindowDimension();
  const { setCategory } = props;
  const router = useRouter();

  return (
    <>
      {width <= 769 ? (
        <>
          <div className="sticky top-0 flex flex-row w-full h-[10vh] justify-around overflow-hidden items-center font-Swanky text-[#855D49] z-50 backdrop-blur-sm">
            <button
              onClick={() => router.push("/")}
              className="text-[28px] whitespace-nowrap"
            >
              &quot;Quotes Cafe&quot; ☕
            </button>
            <button onClick={() => setActive(!active)} className="z-50">
              <IoMenuOutline
                className={`text-[28px] ${active ? `hidden` : `static`} `}
              />
              <IoCloseOutline
                className={`text-[28px] ${active ? `static` : `hidden`}`}
              />
            </button>
          </div>
          <div
            className={`absolute top-0 pt-[10vh] left-0 w-full h-[100vh]  flex flex-col overflow-hidden ${active? "overflow-y-scroll" : "overflow-hidden"}`}
          >
            <MobileNavBar active={active} setCategory={setCategory} />
          </div>
        </>
      ) : (
        <>
          <div className="sticky top-0 flex flex-row w-full h-[4em] justify-center items-center space-x-[8em] font-Swanky text-[#855D49] backdrop-blur-sm z-50">
            <button
              onClick={() => router.push("/")}
              className="text-[28px] whitespace-nowrap"
            >
              &quot;Quotes Cafe&quot; ☕
            </button>
            <DesktopNavBar />
          </div>
        </>
      )}
    </>
  );
}

export default Header;
