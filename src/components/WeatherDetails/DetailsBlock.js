import React from "react";


const DetailsBlock = ({ category, value, unit }) => {
  return (
    <div className="text-white px-5 md:px-5 lg:px-6 py-3 backdrop-blur-md border border-white/20 rounded-md bg-black/[0.03]">
      <div className="text-3xl sm:text-4xl pb-2">{value}<span>{unit}</span> </div>
      <div className="font-bold opacity-80 text-sm">{category}</div>
    </div>
  );
};

export default DetailsBlock;