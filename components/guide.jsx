import React, { useCallback, useState } from "react";
import { useWindowDimension } from "../hooks/useWindowDimension";
import Filters from "./filter";

function Guide(props) {
  const { setCategory } = props;
  const { width } = useWindowDimension();

  return (
    <div
      className={`relative w-[30vw] h-full flex flex-col font-Swanky text-[#855D49] space-y-[3em] ${
        width <= 768 ? `hidden` : `block`
      }`}
    >
      <section className=" flex flex-col w-full text-[16px] z-10">
        <span className="rounded-sm text-[45px]">A simple guide</span>
        Just press &apos;Get Quote&apos; to generate your random quote 😊
      </section>

      <section className="flex flex-col w-full justify-center items-start">
        <h1 className="text-[30px]">Filters</h1>
        <Filters setCategory={setCategory} />
      </section>
    </div>
  );
}

export default Guide;
