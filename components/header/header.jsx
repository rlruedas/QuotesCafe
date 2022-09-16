import React, { useEffect, useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { useRouter } from "next/router";
import DesktopNavBar from "./desktopnavbar";

function Header() {
  const [active, setActive] = useState(false);
  const { width } = useWindowDimension();
  const router = useRouter();

  const handleMenu = (e) => {
    e.preventDefault();
    setActive(!active);
    document.querySelector("#mobile-menu").classList.toggle("show-menu");
  };

  useEffect(() => {
    if (width >= 1024) {
      setActive(false);
      document.querySelector("#mobile-menu").classList.remove("show-menu");
    }
  }, [width]);

  return (
    <>
      {width >= 1024 ? (
        <>
          <div className="sticky top-0 flex flex-row w-full h-[4em] justify-center items-center space-x-[8em] font-Swanky text-[#855D49] backdrop-blur-sm z-50">
            <button
              onClick={() => router.push("/")}
              className="text-[28px] whitespace-nowrap z-0"
            >
              &quot;Quotes Cafe&quot; ☕
            </button>
            <DesktopNavBar />
          </div>
        </>
      ) : (
        <>
          <div className="sticky top-0 flex flex-row w-full h-[10vh] justify-around overflow-hidden items-center font-Swanky text-[#855D49] z-50">
            <button
              onClick={() => router.push("/")}
              className="text-[28px] whitespace-nowrap"
            >
              &quot;Quotes Cafe&quot; ☕
            </button>
            <button onClick={handleMenu} className="z-20">
              <IoMenuOutline
                className={`text-[28px] ${active ? `hidden` : `static`} `}
              />
              <IoCloseOutline
                className={`text-[28px] ${active ? `static` : `hidden`}`}
              />
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
