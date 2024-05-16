import React, { createContext, useContext, useReducer, useState } from "react";

const initSnakeBody = { id: crypto.randomUUID(), number: 1, color: "#22c55e" };

const initialSettings = {
  darkmode: false,
  gameBoardColor: "#000",
  appleColor: "#ef4444",
  // snakeHeadColor: "#000",
  snakeHeadColor: "#16a34a",
  gameSpeed: "200",
  gridWidth: "16",
  gridHeight: "16",
  snakeSize: "25",
  snakeBody: [initSnakeBody],
};

const SettingsContext = createContext(null);

const SettingsDispatchContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settings, dispatch] = useReducer(settingsAction, initialSettings);

  return (
    <SettingsContext.Provider value={settings}>
      <SettingsDispatchContext.Provider value={dispatch}>{children}</SettingsDispatchContext.Provider>
    </SettingsContext.Provider>
  );
}
export function useSettings() {
  return useContext(SettingsContext);
}

export const useSettingsDispatch = () => useContext(SettingsDispatchContext);

const settingsAction = (settings, action) => {
  switch (action.type) {
    case "update-snakebody":
      return { ...settings, snakeBody: action.payload };
    case "update-settings":
      return { ...action.payload, snakeBody: settings.snakeBody };
    case "update-all":
      return { ...action.payload };
    case "reset":
      return { ...initSnakeBody };
    case "darkmode":
      document.body.setAttribute("data-theme", action.payload);
      console.log(action.payload)

      return { ...settings, darkmode: action.payload };
  }
};
