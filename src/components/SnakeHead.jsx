import * as React from "react";
import { useSettings } from "../context/SettingsContext";

const SnakeHead = ({ coords = { x: 100, y: 100 }, color }) => {
  // //$&
  const settings = useSettings();
  const styles = { width: settings.snakeSize + "px", height: settings.snakeSize + "px", background: color ? color : settings.snakeHeadColor, top: coords.y + "px", left: coords.x + "px" };

  return <div className="absolute bg-[#45b800] z-[1]" style={styles} />;
};

export default SnakeHead;
