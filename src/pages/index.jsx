import React, { useEffect, useState, useCallback, useRef } from "react";
import SnakeHead from "../components/SnakeHead";
import SnakeTail from "../components/SnakeTail";
import ScoreBoard from "../components/ScoreBoard";
import Settings from "../components/Settings";
import useSnakeSetter from "../hooks/useSnakeSetter";
import Apple from "../components/Apple";
import { SettingsProvider, useSettings, useSettingsDispatch } from "../context/SettingsContext";

// const gameHeight = 400;
// const gameWidth = 400;
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
  const [isScoreBoard, setIsScoreBoard] = useState(true);
  const [isSettings, setIsSettings] = useState(false);
  const [appleCoords, setAppleCoords] = useState({ x: 20, y: 20 });
  const { coord, prevCoords, snakeLen, dispatch } = useSnakeSetter();
  // const [direction, setDirection] = useState("");
  const direction = useRef("");
  const gameIntervalId = useRef(0);
  const settings = useSettings();
  const settingsDispatch = useSettingsDispatch();

  const gameWidth = parseInt(settings.gridWidth) * (parseInt(settings.snakeSize) + 2);
  const gameHeight = parseInt(settings.gridHeight) * (parseInt(settings.snakeSize) + 2);

  // const

  useEffect(() => {
    window.addEventListener("keydown", (event) => keyHandler(event.key));
    randomApple();

    let storedSettings = localStorage.getItem("snake-settings");
    if (Object.is(storedSettings, null)) {
      localStorage.setItem("snake-settings", JSON.stringify(settings));
      storedSettings = settings;
    }
    settingsDispatch({ type: "update-all", payload: JSON.parse(storedSettings) });

    return () => {
      window.removeEventListener("keydown", (e) => {});
    };
  }, []);

  const randomApple = () => {
    let cnt = 0;
    const width = parseInt(settings.gridWidth);
    const height = parseInt(settings.gridHeight);
    const block = parseInt(settings.snakeSize) + 2;

    while (true) {
      cnt = cnt + 1;
      // //$&
      const appleX = Math.floor(Math.random() * width) * block;
      const appleY = Math.floor(Math.random() * height) * block;
      const res = coordInArrChecker({ x: appleX, y: appleY }, prevCoords);
      // //$&
      if (cnt > 100) break;
      if (!res) {
        setAppleCoords({ x: appleX, y: appleY });
        break;
      }
    }
  };

  const handleSnakeInteraction = () => {
    //Game tick logic for apple
    if (appleCoords.x === coord.x && appleCoords.y === coord.y) {
      //$&
      dispatch({ type: "add" });
      randomApple();
    }

    if (coord.x < 0 || coord.y < 0 || coord.x >= gameWidth || coord.y >= gameHeight) {
      // dispatch({ type: "stop" });
      // //$&
      gameStop();
    }

    const bodyNoHead = prevCoords.slice(1, prevCoords.length);
    //$&
    //$&
    const res = coordInArrChecker(coord, bodyNoHead);
    if (res) {
      //$&
      clearInterval(gameIntervalId.current);
      gameStop();
    }
  };

  useEffect(() => {
    handleSnakeInteraction();
  }, [coord, appleCoords, isScoreBoard, prevCoords]);

  const keyHandler = (key) => {
    switch (key) {
      case "ArrowUp":
        direction.current = "Up";
        break;
      case "ArrowDown":
        direction.current = "Down";
        break;
      case "ArrowLeft":
        direction.current = "Left";
        break;
      case "ArrowRight":
        direction.current = "Right";
        break;
      default:
        break;
    }
  };
  // //$&

  const gameStart = () => {
    clearInterval(gameIntervalId.current);
    dispatch({ type: "reset" });
    direction.current = "";
    setIsScoreBoard(false);
    handleSnake();
    randomApple();
  };

  const gameStop = () => {
    clearInterval(gameIntervalId.current);
    setIsScoreBoard(true);
  };

  const handleSnake = () => {
    gameIntervalId.current = setInterval(() => {
      //Game
      switch (direction.current) {
        case "Up":
          dispatch({ type: "Up", increment: parseInt(settings.snakeSize) + 2 });
          break;
        case "Down":
          dispatch({ type: "Down", increment: parseInt(settings.snakeSize) + 2 });
          break;
        case "Left":
          dispatch({ type: "Left", increment: parseInt(settings.snakeSize) + 2 });
          break;
        case "Right":
          dispatch({ type: "Right", increment: parseInt(settings.snakeSize) + 2 });
          break;
        default:
          break;
      }

      //Wait for user input
    }, parseInt(settings.gameSpeed));
  };

  // snakeEatsApple();
  //$&

  return (
    <main className="flex relative justify-center items-center h-[100vh]" style={{ background: settings.darkmode ? "#151518" : "#e8e8e8" }}>
      {isSettings && (
        <Settings
          onClose={(settings) => {
            setIsSettings(false);
          }}
        />
      )}
      {isScoreBoard && <ScoreBoard score={snakeLen} onNewGame={gameStart} onSettings={() => setIsSettings(true)} />}
      <div style={{ width: `${gameWidth}px`, height: `${gameHeight}px`, background: settings.gameBoardColor }} className={`relative`}>
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

// export SnakeGame;

export default function Main() {
  return (
    <SettingsProvider>
      <SnakeGame />
    </SettingsProvider>
  );
}

export const Head = () => <title>Snake Game</title>;
