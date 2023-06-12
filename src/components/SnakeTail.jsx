import React from "react";
import SnakeHead from "./SnakeHead";

// const arr = [
//   { x: 0, y: 0 },
//   { x: 40, y: 0 },
//   { x: 80, y: 0 },
//   { x: 120, y: 0 },
// ];

const SnakeTail = ({ prevCoords = [], length }) => {
  const coordArr = prevCoords.slice(0,length);

  //Map the number of coords based of for fucks sake
  return (
    <div>
      {coordArr.map((coords, i) => (
        <SnakeHead key={`${coords.x}-${coords.y}-${i}`} coords={coords} />
      ))}
    </div>
  );
};

export default SnakeTail;
