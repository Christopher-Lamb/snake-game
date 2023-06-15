import React, { useState } from "react";


const colors = [
  ["#f8fafc", "#f1f5f9", "#cbd5e1", "#94a3b8", "#475569", "#1e293b", "#020617"],

  ["#fca5a5", "#f87171", "#ef4444", "#dc2626", "#b91c1c", "#991b1b", "#7f1d1d"],

  ["#fdba74", "#fb923c", "#f97316", "#ea580c", "#c2410c", "#9a3412", "#7c2d12"],

  ["#fde047", "#facc15", "#eab308", "#ca8a04", "#a16207", "#854d0e", "#713f12"],
  ["#86efac", "#4ade80", "#22c55e", "#16a34a", "#15803d", "#166534", "#14532d"],

  ["#6ee7b7", "#34d399", "#10b981", "#059669", "#047857", "#065f46", "#064e3b"],

  ["#5eead4", "#2dd4bf", "#14b8a6", "#0d9488", "#0f766e", "#115e59", "#134e4a"],

  ["#93c5fd", "#60a5fa", "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a"],

  ["#a5b4fc", "#818cf8", "#6366f1", "#4f46e5", "#4338ca", "#3730a3", "#312e81"],

  ["#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed", "#6d28d9", "#5b21b6", "#4c1d95"],

  ["#d8b4fe", "#c084fc", "#a855f7", "#9333ea", "#7e22ce", "#6b21a8", "#581c87"],

  ["#f9a8d4", "#f472b6", "#ec4899", "#db2777", "#be185d", "#9d174d", "#831843"],

  ["#fda4af", "#fb7185", "#f43f5e", "#e11d48", "#be123c", "#9f1239", "#881337"],
];

export default function ColorInput({ defaultColor = "#f1f5f9", onColorSelect = () => {} }) {
  const [color, setColor] = useState(defaultColor);
  const [isColorBoard, setIsColorBoard] = useState(false);

  const handleColorSelect = (color) => {
    setColor(color);
    setIsColorBoard(false);
    onColorSelect(color);
  };

  return (
    <div onClick={() => setIsColorBoard(true)} style={{ background: color }} className="relative z-[102] inline-block w-10 h-10 border rounded drop-shadow-md cursor-pointer">
      {isColorBoard && <ColorBoard onColorSelect={handleColorSelect} />}
    </div>
  );
}

const ColorBoard = ({ onColorSelect = () => {} }) => {
  return (
    <div className="absolute  flex drop-shadow-md hover:scale-100">
      {colors.map((arr, i) => (
        <ColorLine key={i} classNameArr={arr} onColorSelect={onColorSelect} />
      ))}
    </div>
  );
};

const ColorLine = ({ classNameArr = [], onColorSelect = () => {} }) => {
  return (
    <div>
      {classNameArr.map((color) => (
        <button
          key={color}
          onClick={(e) => {
            e.stopPropagation();
            onColorSelect(color);
          }}
          style={{ backgroundColor: color }}
          className={`block w-10 h-10 hover:scale-125 cursor-pointer`}
        ></button>
      ))}
    </div>
  );
};
