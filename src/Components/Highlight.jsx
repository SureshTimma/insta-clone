import React from "react";

const Highlight = (props) => {
  const { highlightData } = props;
  const { image } = highlightData;
  console.log(highlightData);
  return (
    <div className="flex flex-col items-center">
      <img
        src={image} // Replace with the actual image URL
        alt="Highlight"
        className="h-20 w-20 rounded-full border-2 border-gray-300"
      />
    </div>
  );
};

export default Highlight;
