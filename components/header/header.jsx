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
      {width <= 768 ? (
        <>
          <div className="sticky top-0 flex flex-row w-full h-[10vh] justify-around items-center font-Swanky text-[#855D49] z-50 backdrop-blur-sm">
            <button onClick={() => router.push("/")} className="text-[28px] whitespace-nowrap">
            &quot;Quotes Cafe&quot; ☕
            </button>
            <button onClick={() => setActive(!active)} className="z-50">
              <IoMenuOutline
                className={`text-[28px] ${active ? `hidden` : `block`} `}
              />
              <IoCloseOutline
                className={`text-[28px] ${active ? `block` : `hidden`}`}
              />
            </button>
          </div>
          <MobileNavBar active={active} setCategory={setCategory} />
        </>
      ) : (
        <>
          <div className="sticky top-0 flex flex-row w-full h-[4em] justify-center items-center space-x-[8em] font-Swanky text-[#855D49] backdrop-blur-sm z-50">
            <button onClick={() => router.push("/")} className="text-[28px] whitespace-nowrap">
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
