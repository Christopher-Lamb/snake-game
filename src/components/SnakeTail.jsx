import React, { useEffect } from "react";
import SnakeHead from "./SnakeHead";
import { useSettings } from "../context/SettingsContext";

// const arr = [
//   { x: 0, y: 0 },
//   { x: 40, y: 0 },
//   { x: 80, y: 0 },
//   { x: 120, y: 0 },
// ];

const SnakeTail = ({ prevCoords = [], length }) => {
  const { snakeBody } = useSettings();
  const coordArr = prevCoords.slice(1, length);

  //Map the number of coords based of for fucks sake
  const createPatterArr = () => {
    let colors = [];
    if (snakeBody)
      snakeBody.forEach(({ color, number }) => {
        for (let i = 0; i < number; i++) {
          colors.push(color);
        }
      });
    return colors;
  };
  //We need to somehow map colores
  //   0   1   2   3     4    5     6     7     8
  // [red red red blue blue green green green green]
  useEffect(() => {
    createPatterArr();
  }, []);
  return (
    <div>
      {coordArr.map((coords, i) => {
        const colors = createPatterArr();
        const colorIdx = i % colors.length;

        return <SnakeHead key={`${coords.x}-${coords.y}-${i}`} coords={coords} color={colors[colorIdx]} />;
      })}
    </div>
  );
};

export default SnakeTail;
