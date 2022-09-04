import React, { useCallback, useState } from "react";

import Header from "../components/header/header";
import Guide from "../components/guide";
import Content from "../components/quotes/content";
import SocialMedia from "../components/socialmedia";
import html2canvas from "html2canvas";

function Quotes() {
  const [category, setCategory] = useState("motivational");
  const [shareURL, setShareURL] = useState("");

  const set = useCallback((item) => {
    setCategory(item);
  }, []);

  const openModal = () => {
    html2canvas(document.querySelector("#message"), {
      backgroundColor: null,
    }).then((canvas) => {
      document.getElementById("modal").appendChild(canvas);
      setShareURL(canvas.toDataURL());
    });

    document
      .querySelector("#ModalContainer")
      .classList.replace("hidden", "flex");
  };

  const handleExit = () => {
    const list = document.getElementById("modal");

    list.removeChild(list.firstChild);

    document
      .querySelector("#ModalContainer")
      .classList.replace("flex", "hidden");
  };

  const handleShareImage = () => {
    const createEl = document.createElement("a");
    createEl.href = shareURL;
    createEl.download = "QuoteImage";
    createEl.click();
    createEl.remove();
  };

  return (
    <>
      <div className="relative round flex flex-col items-center w-full min-h-screen overflow-hidden font-Swanky">
        <Header setCategory={set} />
        <div className="h-[90vh] flex justify-center">
          <div className=" flex flex-row place-self-center self-center justify-center items-center w-full min-h-fit !overflow-hidden  quote-container">
            <Guide setCategory={set} />
            <Content filter={category} modal={openModal} />
            <SocialMedia />
          </div>
        </div>
        <div
          className="absolute top-0 left-0 hidden flex-col w-full min-h-screen justify-center items-center bg-black bg-opacity-50 z-50"
          id="ModalContainer"
        >
          <div id="modal" className="z-[60] bg-transparent"></div>
          <div className="w-[100vw] md:w-[30vw] flex flex-row justify-around items-center z-[60]">
            <button
              onClick={handleShareImage}
              className=" text-white text-[20px]"
            >
              Share Image
            </button>
            <button onClick={handleExit} className="text-white text-[20px]">
              Exit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quotes;
