import React from "react";

const Apple = (coords = { x: 0, y: 0 }) => {
  return <div className="absolute h-[18px] w-[18px] bg-[#f51a1a]" style={{ top: `${coords.y}px`, left: `${coords.x}px` }} />;
};

export default Apple;
