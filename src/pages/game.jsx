import React, { useEffect, useState, useCallback, useRef } from "react";
import SnakeHead from "../components/SnakeHead";
import SnakeTail from "../components/SnakeTail";
import ScoreBoard from "../components/ScoreBoard";
import useCoordSetter from "../hooks/useCoordSetter";
import Apple from "../components/Apple";

const gameHeight = 400;
const gameWidth = 400;
const tickSpeed = 100;

//Need a function that checks if a coord in an array of coords
//Returns bool
function coordInArrChecker(coord, arr = []) {
  const x1 = coord.x;
  const y1 = coord.y;
  let res = false;
  arr.forEach(({ x, y }) => {
    if (x === x1 && y === y1) res = true;
  });

  return res;
}

const SnakeGame = () => {
  // const [coords, setCoords] = useState({ x: 0, y: 0 });
  // const prevPos = useRef([]);
  const [appleCoords, setAppleCoords] = useState({ x: 20, y: 20 });
  const { coord, prevCoords, snakeLen, dispatch } = useCoordSetter();
  // const [direction, setDirection] = useState("");
  const direction = useRef("");
  const gameIntervalId = useRef(0);
  const backgroundIntervalId = useRef(0);
  // const

  useEffect(() => {
    window.addEventListener("keydown", (event) => keyHandler(event.key));
    randomApple();
    return () => {
      window.removeEventListener("keydown", (e) => {});
    };
  }, []);

  const randomApple = () => {
    let cnt = 0;
    const width = Math.floor(gameWidth / 20);
    const height = Math.floor(gameHeight / 20);
    while (true) {
      cnt = cnt + 1;
      console.log("Gen apple");
      const appleX = Math.floor(Math.random() * width) * 20;
      const appleY = Math.floor(Math.random() * height) * 20;
      const res = coordInArrChecker({ x: appleX, y: appleY }, prevCoords);
      console.log(res);
      if (cnt > 100) break;
      if (!res) {
        setAppleCoords({ x: appleX, y: appleY });
        break;
      }
    }
  };

  const snakeEatsApple = () => {
    //Game tick logic for apple
    if (appleCoords.x === coord.x && appleCoords.y === coord.y) {
      console.log(true);
      dispatch({ type: "add" });
      randomApple();
    }

    if (coord.x < 0 || coord.y < 0 || coord.x >= gameWidth || coord.y >= gameHeight) {
      // dispatch({ type: "stop" });
      // console.log("STOP");
      gameStop();
    }

    const bodyNoHead = prevCoords.slice(1, prevCoords.length);
    console.log(Array.isArray(bodyNoHead));
    console.log(bodyNoHead);
    const res = coordInArrChecker(coord, bodyNoHead);
    if (res) {
      console.log("Bit Body");
      clearInterval(gameIntervalId.current);
    }
  };

  const keyHandler = (key) => {
    switch (key) {
      case "ArrowUp":
        direction.current = "Up";
        // dispatch({ type: "Up" });
        break;
      case "ArrowDown":
        // dispatch({ type: "Down" });
        direction.current = "Down";
        break;
      case "ArrowLeft":
        // dispatch({ type: "Left" });
        direction.current = "Left";
        break;
      case "ArrowRight":
        // dispatch({ type: "Right" });
        direction.current = "Right";
        break;
      default:
        break;
    }
  };

  const gameStart = () => {
    clearInterval(gameIntervalId.current);
    clearInterval(backgroundIntervalId.current);
    // dispatch({ type: "start" });
    handleSnake();
  };

  const gameStop = () => {
    // dispatch({ type: "stop" });
    clearInterval(gameIntervalId.current);
    clearInterval(backgroundIntervalId.current);
  };

  const handleSnake = () => {
    gameIntervalId.current = setInterval(() => {
      //Game
      switch (direction.current) {
        case "Up":
          dispatch({ type: "Up" });
          break;
        case "Down":
          dispatch({ type: "Down" });
          break;
        case "Left":
          dispatch({ type: "Left" });
          break;
        case "Right":
          dispatch({ type: "Right" });
          break;
        default:
          break;
      }

      //Wait for user input
    }, tickSpeed);
  };

  snakeEatsApple();
  return (
    <main className="flex justify-center items-center h-[100vh]">
        <ScoreBoard />
      <div className={`relative w-[${gameWidth}px] h-[${gameHeight}px] bg-gray-300`}>
        {/* <button className="absolute top-[-80px] left-[230px] bg-green-500 text-white px-2 py-1 text-lg active:translate-y-1" onClick={gameStart}>
          Start
        </button>
        <button className="absolute top-[-80px] left-[320px] bg-red-500 text-white px-2 py-1 text-lg active:translate-y-1" onClick={gameStop}>
          Stop
        </button> */}
        {/* <div>{JSON.stringify(appleCoords)}</div>
      <div>{JSON.stringify(coord)}</div> */}
        <SnakeHead coords={coord} />
        <SnakeTail prevCoords={prevCoords} length={snakeLen} />
        <Apple coords={appleCoords} />
      </div>
    </main>
  );
};

export default SnakeGame;

export const Head = () => <title>Snake Game</title>;
