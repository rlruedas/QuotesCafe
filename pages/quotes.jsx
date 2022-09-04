import React, { useCallback, useState } from "react";

import Header from "../components/header/header";
import Guide from "../components/guide";
import Content from "../components/quotes/content";
import SocialMedia from "../components/socialmedia";

function Quotes() {
  const [category, setCategory] = useState("motivational");

  const set = useCallback(
    (item) => {
      setCategory(item);
    },
    []
  );

  return (
    <>
      <div className="relative flex flex-col items-center w-full min-h-screen overflow-hidden">
        <Header setCategory={set} />
        <div className="h-[90vh] flex justify-center">
          <div className=" flex flex-row place-self-center self-center justify-center items-center w-full min-h-fit !overflow-hidden  quote-container">
            <Guide setCategory={set} />
            <Content filter={category} />
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  );
}

export default Quotes;
