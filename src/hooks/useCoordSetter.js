import React, { useCallback, useState, useReducer } from "react";

const stateInit = { coord: { x: 80, y: 80 }, prevCoords: [], snakeLen: 1, currentDirection: "" };
const incrememnt = 20;

function arrayLimiter(arr, length) {
  // Take length and spit array that long
  const newArr = arr.slice(0, length);
  return newArr;
}

function reducer(state, action) {
  let newCoord = {};
  let newPrev = [];
  let newDirection = "";
  let stateObj = {};
  switch (action.type) {
    case "Up":
      console.log("UP");
      newDirection = "Up";
      newCoord = { ...state.coord, y: state.coord.y - incrememnt };
      if (state.currentDirection === "Down" && state.snakeLen > 1) {
        console.log("Up but going Down");
        newDirection = "Down";
        newCoord = { ...state.coord, y: state.coord.y + incrememnt };
      }
      newPrev = arrayLimiter([newCoord, ...state.prevCoords], state.snakeLen);
      return {
        ...state,
        currentDirection: newDirection,
        coord: newCoord,
        prevCoords: newPrev,
      };
    case "Down":
      console.log("DOWN");
      newDirection = "Down";
      newCoord = { ...state.coord, y: state.coord.y + incrememnt };
      if (state.currentDirection === "Up" && state.snakeLen > 1) {
        console.log("Down but going UP");
        newDirection = "Up";
        newCoord = { ...state.coord, y: state.coord.y - incrememnt };
      }
      newPrev = arrayLimiter([newCoord, ...state.prevCoords], state.snakeLen);
      return {
        ...state,
        currentDirection: newDirection,
        coord: newCoord,
        prevCoords: newPrev,
      };
    case "Left":
      console.log("LEFT");
      newDirection = "Left";
      newCoord = { ...state.coord, x: state.coord.x - incrememnt };
      if (state.currentDirection === "Right" && state.snakeLen > 1) {
        console.log("Left by going RIGHT");
        newDirection = "Right";
        newCoord = { ...state.coord, x: state.coord.x + incrememnt };
      }
      newPrev = arrayLimiter([newCoord, ...state.prevCoords], state.snakeLen);
      return {
        ...state,
        currentDirection: newDirection,
        coord: newCoord,
        prevCoords: newPrev,
      };
    case "Right":
      console.log("RIGHT");
      newDirection = "Right";
      newCoord = { ...state.coord, x: state.coord.x + incrememnt };
      if (state.currentDirection === "Left" && state.snakeLen > 1) {
        console.log("Right by going LEFT");
        newDirection = "Left";
        newCoord = { ...state.coord, x: state.coord.x - incrememnt };
      }
      newPrev = arrayLimiter([newCoord, ...state.prevCoords], state.snakeLen);
      return {
        ...state,
        currentDirection: newDirection,
        coord: newCoord,
        prevCoords: newPrev,
      };
    case "add":
      return {
        ...state,
        snakeLen: state.snakeLen + 1,
      };
    case "reset":
      return { coord: { x: 80, y: 80 }, prevCoords: [], snakeLen: 1, currentDirection: "" };

    default:
      return state;
  }
}

const useCoordSetter = () => {
  const [state, dispatch] = useReducer(reducer, stateInit);
  const { coord, prevCoords, snakeLen } = state;
  return { coord, prevCoords, snakeLen, dispatch };
};

export default useCoordSetter;
