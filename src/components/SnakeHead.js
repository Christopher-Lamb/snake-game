import * as React from "react";

const SnakeHead = ({ coords = { x: 100, y: 100 } }) => {
  return <div className="absolute h-5 w-5 bg-black" style={{ top: `${coords.y}px`, left: `${coords.x}px` }} />;
};

export default SnakeHead;
