import React, { useEffect, useState } from "react";
import SnakeHead from "../components/SnakeHead";
import SnakeTail from "../components/SnakeTail";

const SnakeGame = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("keydown", (event) => keyHandler(event.key));
    return () => window.removeEventListener("keydown");
  }, []);

  const keyHandler = (key) => {
    let incrememnt = 20;
    switch (key) {
      case "ArrowUp":
        setCoords((c) => ({ ...c, y: c.y - incrememnt }));
        return;
      case "ArrowDown":
        setCoords((c) => ({ ...c, y: c.y + incrememnt }));
        return;
      case "ArrowLeft":
        setCoords((c) => ({ ...c, x: c.x - incrememnt }));
        return;
      case "ArrowRight":
        setCoords((c) => ({ ...c, x: c.x + incrememnt }));
        return;
      default:
        return;
    }
  };

  return (
    <main className="relative w-[100vw] h-[100vh]">
      <SnakeHead coords={coords} />
      <SnakeTail />
    </main>
  );
};

export default SnakeGame;

export const Head = () => <title>Snake Game</title>;
