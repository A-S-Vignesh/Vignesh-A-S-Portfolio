import React from "react";

const Tag = ({ text }) => {
  return (
    <div className="flex items-center">
      {/* Left Arrow (Triangle) */}
      <div className="w-0 h-0 border-y-[20px] border-y-transparent border-r-[20px] border-r-custom-tagcolor "></div>

      {/* Main Tag Body */}
      <div className="bg-custom-tagcolor text-white px-6 py-2 text-base font-medium flex items-center text-nowrap">
        {/* White Dot at the Start of the Rectangle */}
        <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
        {text}
      </div>
    </div>
  );
};

export default Tag;
