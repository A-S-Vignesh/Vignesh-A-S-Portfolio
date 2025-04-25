import React from "react";

const Tag = ({ text }) => {
  return (
    <div
      className="inline-flex items-center rounded-full bg-custom-tagcolor text-white px-2.5 py-1 shadow-xs text-xs font-medium space-x-1.5 dark:bg-sky-500 transition-all duration-300 hover:scale-105 hover:shadow-sm"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="400"
      data-aos-easing="ease-out-cubic"
      data-aos-offset="10"
    >
      <span
        className="w-2 h-2 bg-white rounded-full transition-transform duration-300 group-hover:scale-110"
        data-aos="zoom-in"
        data-aos-delay="200"
      ></span>
      <span
        className="truncate max-w-[100px] text-sm"
        data-aos="fade-left"
        data-aos-delay="150"
      >
        {text}
      </span>
    </div>
  );
};

export default Tag;
