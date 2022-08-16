import React, { useState } from "react";
import axios from "axios";
import Message from "./message";
import { TbArrowLeftTail, TbArrowRightTail } from "react-icons/tb";

function Quotes() {
  const [quote, setQuote] = useState([]);

  const fetchQuotes = async () => {
    const response = await axios.get(
      "https://api.quotable.io/random?tags=life|inspirational|motivational|love|happiness"
    );
    const data = await response.data;
    setQuote(data);
  };

  return (
    <div className="flex flex-col w-full lg:w-[50%] h-full justify-center items-center gap-[2em] ">
      <span className="font-Tenorsans font-bold text-[#87805E] text-[30px] sm:text-[50px] ">
        Quotes Cafe
      </span>
      <span className="font-Tenorsans font-bold text-[#87805E] text-[12px] text-justify lg:hidden">
        “Get a very random motivational, insipirational, uplifiting quotes to
        boost your day” <br />
        -Someone
      </span>
      <Message message={quote} />
      <section className="flex flex-row justify-center items-center w-full h-fit gap-[2em]">
        <TbArrowRightTail className="w-[2em] h-[2em] text-[#87805E]" />
        <button
          onClick={() => fetchQuotes()}
          className="font-Tenorsans font-bold text-[#87805E] text-[25px]"
        >
          LUMIKHA
        </button>
        <TbArrowLeftTail className="w-[2em] h-[2em] text-[#87805E]" />
      </section>
    </div>
  );
}

export default Quotes;
