import React, { useState } from "react";
import axios from "axios";
import Message from "./message";
import { TbArrowLeftTail, TbArrowRightTail } from "react-icons/tb";
import { useWindowDimension } from "../../hooks/useWindowDimension";

function Content(props) {
  const [quote, setQuote] = useState([]);
  const { width } = useWindowDimension();
  const { modal, filter } = props;

  const fetchQuotes = async () => {
    const response = await axios.get(
      `https://api.quotable.io/random?tags=${filter}`
    );
    const data = await response.data;
    setQuote(data);
  };

  return (
    <div
      className={`static flex flex-col justify-center items-center min-h-fit !overflow-hidden space-y-6 z-0 ${
        width <= 768 ? `w-full` : `w-[30vw]`
      }`}
    >
      <Message message={quote} modal={modal} />

      <section className="relative flex flex-row justify-center items-center w-[100%] h-fit ">
        <TbArrowRightTail className="w-[2em] h-[2em] text-[#34180B]" />
        <button
          onClick={() => fetchQuotes()}
          className="font-Swanky text-[#34180B] text-[40px] px-3 "
        >
          Get Quote
        </button>
        <TbArrowLeftTail className="w-[2em] h-[2em] text-[#34180B]" />
      </section>
    </div>
  );
}

export default Content;
