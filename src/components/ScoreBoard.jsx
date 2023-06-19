import React, { useEffect, useState } from "react";
import { useSettings } from "../context/SettingsContext";

const mainDark = {
  background: "#23232b",
  border: "1px solid #c4c4c4",
};

const mainLight = {
  background: "white",
};

export default function ScoreBoard({ score = 0, onNewGame = () => {}, onSettings = () => {} }) {
  const [highscore, setHighscoreState] = useState(0);
  const { darkmode, ...other } = useSettings();

  useEffect(() => {
    handleHighscore();
  }, []);

  const handleHighscore = () => {
    let storedHighscore = localStorage.getItem("snake-highscore");
    if (Object.is(storedHighscore, null)) {
      localStorage.setItem("snake-highscore", JSON.stringify(score));
      storedHighscore = score;
    }

    const highscoreInt = JSON.parse(storedHighscore);
    if (score > highscoreInt) {
      localStorage.setItem("snake-highscore", JSON.stringify(score));
      setHighscoreState(score);
    } else {
      setHighscoreState(highscoreInt);
    }
  };

  const handleClearHighscore = () => {
    const res = window.confirm("Are you sure you want to clear your highscore?");
    if (!res) return;
    localStorage.setItem("snake-highscore", "0");
    setHighscoreState("0");
  };

  return (
    <div className="absolute z-[100] w-[100%] max-w-sm shadow-2xl rounded py-8" style={darkmode ? mainDark : mainLight}>
      {/* Scores */}
      <div className="grid grid-cols-2">
        {[
          ["Score", score],
          ["Highscore", highscore],
        ].map(([title, number]) => (
          <div className="grid items-center justify-center" style={{ color: darkmode ? "#c4c4c4" : "black" }} key={title}>
            <span className="block text-center text-5xl">{number}</span>
            <span className="block text-center text-3xl">{title}</span>
          </div>
        ))}
      </div>
      <div className="grid gap-y-2 justify-center mt-8">
        {[
          ["New Game", () => onNewGame()],
          ["Settings", () => onSettings()],
          ["Clear Highscore", () => handleClearHighscore()],
        ].map(([name, func]) => (
          <button
            key={name}
            className="inline-block w-64 h-10 rounded text-white font-mono text-xl border-gray-500 border active:translate-y-px"
            style={{ background: darkmode ? "#059669" : "#10b981" }}
            onClick={func}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
