import React, { useCallback, useState } from "react";

function Filters(props) {
  const [itemIndex, setItemIndex] = useState(0);
  const { setCategory } = props;
  const category = ["motivational", "inspirational", "love", "wisdom", "life"];

  const handleCategory = useCallback((item, index) => {
    setCategory(item);
    setItemIndex(index);
  }, []);

  return (
    <>
      <section className="w-full h-fit flex flex-col items-start space-y-2">
        {category.map((item, index) => (
          <button
            onClick={() => handleCategory(item, index)}
            key={index}
            className={`border border-[#855D49] rounded-md w-fit p-2 ${
              itemIndex === index ? "bg-[#855D49] text-[#ebb194]" : ""
            } `}
          >
            {item}
          </button>
        ))}
      </section>
    </>
  );
}

export default Filters;
