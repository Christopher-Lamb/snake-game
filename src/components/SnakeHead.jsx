import * as React from "react";

const SnakeHead = ({ coords = { x: 100, y: 100 } }) => {
  // console.log(coords)
  return <div className="absolute h-[18px] w-[18px] bg-[#45b800] z-[1]" style={{ top: `${coords.y}px`, left: `${coords.x}px` }} />;
};

export default SnakeHead;
