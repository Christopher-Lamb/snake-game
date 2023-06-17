import React from "react";
import { useSettings } from "../context/SettingsContext";

const Apple = ({ coords = { x: 20, y: 0 } }) => {
  const settings = useSettings();

  const styles = { width: settings.snakeSize + "px", height: settings.snakeSize + "px", background: settings.appleColor, top: coords.y + "px", left: coords.x + "px" };

  return <div className="absolute" style={styles} />;
};

export default Apple;
