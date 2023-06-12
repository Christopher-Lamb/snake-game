import React, { useEffect, useRef, useState } from "react";
import SnakeHead from "../components/SnakeHead";
import SnakeTail from "../components/SnakeTail";
import useCoordSetter from "../hooks/useCoordSetter";
import Apple from "../components/Apple";

const SnakeGame = () => {
  // const [coords, setCoords] = useState({ x: 0, y: 0 });
  // const prevPos = useRef([]);
  const { coord, prevCoords, dispatch } = useCoordSetter();
  const [snakeLen, setSnakeLen] = useState(6);
  //set coords to return

  useEffect(() => {
    window.addEventListener("keydown", (event) => keyHandler(event.key));
    return () => window.removeEventListener("keydown", (e) => {});
  }, []);

  const randomCoord = () => {
    console.log(Math.floor(window.outerWidth / 20));
    console.log(Math.floor(window.outerHeight / 20));
  
  };

  const keyHandler = (key) => {
    switch (key) {
      case "ArrowUp":
        dispatch({ type: "Up" });
        break;
      case "ArrowDown":
        dispatch({ type: "Down" });
        break;
      case "ArrowLeft":
        dispatch({ type: "Left" });
        break;
      case "ArrowRight":
        dispatch({ type: "Right" });
        break;
      default:
        break;
    }
    // console.log(currentCoord);
  };

  return (
    <main className="relative w-[100vw] h-[100vh]">
      <button className="absolute top-[100px] left-[300px] bg-green-500 text-white px-2 py-1 text-lg active:translate-y-1" onClick={() => randomCoord()}>
        Test
      </button>
      <SnakeHead coords={coord} />
      <SnakeTail prevCoords={prevCoords} length={snakeLen} />
      <Apple />
    </main>
  );
};

export default SnakeGame;

export const Head = () => <title>Snake Game</title>;
