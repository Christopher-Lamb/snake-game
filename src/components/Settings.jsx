import React, { useEffect, useRef, useState } from "react";
import ColorInput from "./ColorInput";
import { BsPlus } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { useSettings, useSettingsDispatch } from "../context/SettingsContext";

const initSnakeBody = { id: crypto.randomUUID(), number: 1, color: "#22c55e" };

export default function Settings({ onClose = () => {} }) {
  // const [gameBoardColor, setGameBoardColor] = useState("#ffffff");
  const settingsDispatch = useSettingsDispatch();
  const { snakeBody, ...other } = useSettings();
  const [snakeBodies, setSnakeBodies] = useState(snakeBody);
  //$&
  const [state, setState] = useState({
    ...other,
  });

  useEffect(() => {
    let storedSettings = localStorage.getItem("snake-settings");
    if (Object.is(storedSettings, null)) {
      localStorage.setItem("snake-settings", JSON.stringify({ ...state, snakeBodies }));
      storedSettings = { ...state, snakeBodies };
    }
  }, []);

  const handleAddSnakeBody = () => {
    setSnakeBodies((sb) => [...sb, { id: crypto.randomUUID(), number: 1, color: "#f1f5f9" }]);
  };

  const handleEditSnakeBody = (targetBody) => {
    const newArr = snakeBodies.map((body) => {
      if (body.id === targetBody.id) {
        return { ...body, number: targetBody.number, color: targetBody.color };
      } else {
        return body;
      }
    });
    setSnakeBodies(newArr);
    // //$&
  };

  const handleDeleteSnakeBody = (deleteId) => {
    const newArr = snakeBodies.filter(({ id }) => id !== deleteId);
    setSnakeBodies(newArr);
  };

  const handleClose = () => {
    onClose({ ...state, snakeBodies });
    localStorage.setItem("snake-settings", JSON.stringify({ ...state, snakeBodies }));
    //dispatch
    settingsDispatch({ type: "update-all", payload: { ...state, snakeBody: snakeBodies } });
  };

  return (
    <div
      className="bg-black flex flex-col gap-y-3 absolute w-full max-w-lg min-h-[31.25rem] z-[101] drop-shadow-md rounded p-6"
      style={{ color: `${state.darkmode ? "#c4c4c4" : "black"}`, background: `${state.darkmode ? "#23232b" : "white"}` }}
    >
      <div className="relative w-full h-0 mx-[-12px]">
        <IoIosClose size="2rem" className="absolute z-[103] left-full cursor-pointer" onClick={handleClose} />
      </div>
      <div className="flex items-center gap-4 ">
        <label htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        <input
          className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={(e) => setState((s) => ({ ...state, darkmode: e.target.checked }))}
        />
      </div>
      <div className="flex items-center gap-4">
        <label>Game Board Color:</label>
        <ColorInput defaultColor={state.gameBoardColor} onColorSelect={(color) => setState((s) => ({ ...state, gameBoardColor: color }))} />
      </div>
      <div className="flex items-center gap-4">
        <label>Apple Color:</label>
        <ColorInput defaultColor={state.appleColor} onColorSelect={(color) => setState((s) => ({ ...state, appleColor: color }))} />
      </div>
      <div className="flex items-center gap-4">
        <label>Snake Head Color:</label>
        <ColorInput defaultColor={state.snakeHeadColor} onColorSelect={(color) => setState((s) => ({ ...state, snakeHeadColor: color }))} />
      </div>
      <div className="grid gap-3">
        <span className="flex items-center gap-4">
          <label>Snake Pattern:</label>
          <AddBtn onClick={handleAddSnakeBody} />
        </span>
        {snakeBodies.map(({ id, number, color }) => (
          <SnakeBody
            key={id}
            defaultColor={color}
            defaultNumber={number}
            onChange={(snake) => {
              handleEditSnakeBody({ id, ...snake });
            }}
            onDelete={() => handleDeleteSnakeBody(id)}
          />
        ))}
      </div>
      <div className="flex items-center gap-4">
        <label>Game Speed in ms:</label>
        <LargeNumberInput defaultNumber={state.gameSpeed} handleChange={(num) => setState((s) => ({ ...state, gameSpeed: num }))} />
      </div>
      <div className="flex items-center gap-4">
        <label>Grid Width:</label>
        <LargeNumberInput defaultNumber={state.gridWidth} handleChange={(num) => setState((s) => ({ ...state, gridWidth: num }))} />
      </div>
      <div className="flex items-center gap-4">
        <label>Grid Height:</label>
        <LargeNumberInput defaultNumber={state.gridHeight} handleChange={(num) => setState((s) => ({ ...state, gridHeight: num }))} />
      </div>
      <div className="flex items-center gap-4">
        <label>Snake Size in px:</label>
        <LargeNumberInput defaultNumber={state.snakeSize} handleChange={(num) => setState((s) => ({ ...state, snakeSize: num }))} />
      </div>
    </div>
  );
}

const AddBtn = ({ onClick = () => {} }) => {
  return (
    <a className="block bg-gray-100 w-8 h-8 rounded text-3xl text-gray-400 leading-none border cursor-pointer" onClick={() => onClick()}>
      <BsPlus />
    </a>
  );
};

const CloseBtn = ({ onClick = () => {} }) => {
  return (
    <a className="block bg-gray-100 w-8 h-8 rounded text-3xl text-gray-400 leading-none border cursor-pointer" onClick={() => onClick()}>
      <IoIosClose />
    </a>
  );
};

const SnakeBody = ({ defaultColor, defaultNumber, onChange = () => {}, onDelete = () => {} }) => {
  const [color, setColor] = useState(defaultColor);
  const [number, setNumber] = useState(defaultNumber);

  useEffect(() => {
    onChange({ color, number });
    // //$&
  }, [color, number]);

  return (
    <div className="flex items-center gap-2">
      <ColorInput defaultColor={color} onColorSelect={(hex) => setColor(hex)} />
      <NumberInput number={number} handleChange={(num) => setNumber(num)} />
      <CloseBtn onClick={onDelete} />
    </div>
  );
};

const NumberInput = ({ number, handleChange }) => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.type = "number";
    inputRef.current.style.width = "3.5rem";
  };

  const handleFocusOut = () => {
    inputRef.current.style.width = "";
    inputRef.current.type = "";
  };

  return (
    <input
      ref={inputRef}
      defaultValue={number}
      min="1"
      max="99"
      onFocus={handleFocus}
      onBlur={handleFocusOut}
      onChange={(e) => handleChange(e.target.value)}
      className="w-10 h-10 drop-shadow-md border text-xl text-center text-black"
    ></input>
  );
};

const LargeNumberInput = ({ defaultNumber, handleChange = () => {} }) => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.type = "number";
    inputRef.current.style.width = "4.5rem";
  };

  const handleFocusOut = () => {
    inputRef.current.style.width = "";
    inputRef.current.type = "";
  };

  return (
    <input
      ref={inputRef}
      defaultValue={defaultNumber}
      min="1"
      max="9999"
      onFocus={handleFocus}
      onBlur={handleFocusOut}
      onChange={(e) => handleChange(e.target.value)}
      className="w-16 h-10 drop-shadow-md border text-xl text-center text-black"
    ></input>
  );
};
