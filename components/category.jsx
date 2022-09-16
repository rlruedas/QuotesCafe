import React, { useState } from "react";

function Category(props) {
  const [itemIndex, setItemIndex] = useState(0);
  const { setCategory } = props;
  const category = ["motivational", "inspirational", "love", "wisdom", "life","happiness", "change", "competition", "character", "famous-quotes", "friendship", "future" ];

  const handleCategory = (item, index) => {
    setCategory(item);
    setItemIndex(index);
  };

  return (
    <>
      <section className="w-[90%] sm:w-[50%] h-fit flex flex-row flex-wrap items-center lg:items-start  gap-2">
        {category.map((item, index) => (
          <button
            onClick={() => handleCategory(item, index)}
            key={index}
            className={`border border-[#855D49] rounded-md w-fit px-2 ${
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

export default Category;
