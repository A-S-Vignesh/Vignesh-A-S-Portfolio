import React from "react";

const Tag = ({ text }) => {
  return (
    <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1.5 shadow-sm text-sm font-semibold space-x-2">
      <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
      <span>{text}</span>
    </div>
  );
};

export default Tag;
