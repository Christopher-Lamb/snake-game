import React, { useEffect, useState, useCallback } from "react";
import SnakeHead from "../components/SnakeHead";
import SnakeTail from "../components/SnakeTail";
import useCoordSetter from "../hooks/useCoordSetter";
import Apple from "../components/Apple";

const SnakeGame = () => {
  // const [coords, setCoords] = useState({ x: 0, y: 0 });
  // const prevPos = useRef([]);
  const [appleCoords, setAppleCoords] = useState({ x: 20, y: 20 });
  const { coord, prevCoords, snakeLen, dispatch } = useCoordSetter();
  // const [snakeLen, setSnakeLen] = useState(6);
  //set coords to return

  useEffect(() => {
    window.addEventListener("keydown", (event) => keyHandler(event.key));
    return () => window.removeEventListener("keydown", (e) => {});
  }, []);

  const randomApple = () => {
    const width = Math.floor(window.outerWidth / 40);
    const appleX = Math.floor(Math.random() * width) * 20;

    const height = Math.floor(window.outerHeight / 40);
    const appleY = Math.floor(Math.random() * height) * 20;
    // console.log(appleCoords);

    setAppleCoords({ x: appleX, y: appleY });

    // dispatch({ type: "add" });
  };

  const snakeEatsApple = () => {
    //Game tick logic for apple
    if (appleCoords.x === coord.x && appleCoords.y === coord.y) {
      dispatch({ type: "add" });
      randomApple();
    }
    // console.log(appleCoords, coord);
  };
  
  snakeEatsApple();


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
      <button className="absolute top-[100px] left-[300px] bg-green-500 text-white px-2 py-1 text-lg active:translate-y-1" onClick={() => randomApple()}>
        Test
      </button>
      <div>{JSON.stringify(appleCoords)}</div>
      <div>{JSON.stringify(coord)}</div>
      <SnakeHead coords={coord} />
      <SnakeTail prevCoords={prevCoords} length={snakeLen} />
      <Apple coords={appleCoords} />
    </main>
  );
};

export default SnakeGame;

export const Head = () => <title>Snake Game</title>;
