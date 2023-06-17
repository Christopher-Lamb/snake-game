import React, { useCallback, useState, useReducer } from "react";

const stateInit = { coord: { x: 0, y: 0 }, prevCoords: [], snakeLen: 1, currentDirection: "" };

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
      //$&
      newDirection = "Up";
      newCoord = { ...state.coord, y: state.coord.y - action.increment };
      if (state.currentDirection === "Down" && state.snakeLen > 1) {
        //$&
        newDirection = "Down";
        newCoord = { ...state.coord, y: state.coord.y + action.increment };
      }
      newPrev = arrayLimiter([newCoord, ...state.prevCoords], state.snakeLen);
      return {
        ...state,
        currentDirection: newDirection,
        coord: newCoord,
        prevCoords: newPrev,
      };
    case "Down":
      //$&
      newDirection = "Down";
      newCoord = { ...state.coord, y: state.coord.y + action.increment };
      if (state.currentDirection === "Up" && state.snakeLen > 1) {
        //$&
        newDirection = "Up";
        newCoord = { ...state.coord, y: state.coord.y - action.increment };
      }
      newPrev = arrayLimiter([newCoord, ...state.prevCoords], state.snakeLen);
      return {
        ...state,
        currentDirection: newDirection,
        coord: newCoord,
        prevCoords: newPrev,
      };
    case "Left":
      //$&
      newDirection = "Left";
      newCoord = { ...state.coord, x: state.coord.x - action.increment };
      if (state.currentDirection === "Right" && state.snakeLen > 1) {
        //$&
        newDirection = "Right";
        newCoord = { ...state.coord, x: state.coord.x + action.increment };
      }
      newPrev = arrayLimiter([newCoord, ...state.prevCoords], state.snakeLen);
      return {
        ...state,
        currentDirection: newDirection,
        coord: newCoord,
        prevCoords: newPrev,
      };
    case "Right":
      //$&
      newDirection = "Right";
      newCoord = { ...state.coord, x: state.coord.x + action.increment };
      if (state.currentDirection === "Left" && state.snakeLen > 1) {
        //$&
        newDirection = "Left";
        newCoord = { ...state.coord, x: state.coord.x - action.increment };
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
      return { coord: { x: 0, y: 0 }, prevCoords: [], snakeLen: 1, currentDirection: "" };

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
