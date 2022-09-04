import React from "react";

import Header from "../components/header/header";
import Footer from "../components/footer";
import { useWindowDimension } from "../hooks/useWindowDimension";

function Landing() {
  const { width, height } = useWindowDimension();

  return (
    <>
      <div className="relative w-full min-h-screen !overflow-clip bg-[url('/coffee-bg.jpg')] text-[#855D49] bg-no-repeat bg-center bg-cover font-Swanky">
        <Header />
        <div className={`w-full flex justify-center items-center bg-transparent pt-[3em]`}>
          <h1 className="w-[80vw] md:w-[70vw] lg:w-[50vw] text-[24px] lg:text-[40px]  text-center">
            "COLLECTIONS OF ENCOURAGING QUOTES TO KEEP YOU GET GOING!"
          </h1>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Landing;
