import React from "react";
import SnakeHead from "./SnakeHead";

const arr = [
  { x: 0, y: 0 },
  { x: 40, y: 0 },
  { x: 80, y: 0 },
  { x: 120, y: 0 },
];

const SnakeTail = ({ coordArr=arr,prevCoords=[] }) => {
  
  //Map the number of coords based of for fucks sake
  return (
    <div>
      {coordArr.map((coords) => (
        <SnakeHead key={`${coords.x}-${coords.y}`} coords={coords} />
      ))}
    </div>
  );
};

export default SnakeTail;
