import React, { useCallback, useState, useReducer } from "react";

const stateInit = { coord: { x: 0, y: 0 }, prevCoords: [], snakeLen: 1 };
const incrememnt = 20;

function arrayLimiter(arr, length) {
  // Take length and spit array that long
  const newArr = arr.slice(0, length);
  return newArr;
}

function reducer(state, action) {
  let newCoord = {};
  let newPrev = [];
  let stateObj = {};
  switch (action.type) {
    case "Up":
      newCoord = { ...state.coord, y: state.coord.y - incrememnt };
      newPrev = arrayLimiter([newCoord, ...state.prevCoords], state.snakeLen);
      return {
        ...state,
        coord: newCoord,
        prevCoords: newPrev,
      };
    case "Down":
      newCoord = { ...state.coord, y: state.coord.y + incrememnt };
      newPrev = arrayLimiter([newCoord, ...state.prevCoords], state.snakeLen);
      return {
        ...state,
        coord: newCoord,
        prevCoords: newPrev,
      };
    case "Left":
      newCoord = { ...state.coord, x: state.coord.x - incrememnt };
      newPrev = arrayLimiter([newCoord, ...state.prevCoords], state.snakeLen);
      return {
        ...state,
        coord: newCoord,
        prevCoords: newPrev,
      };
    case "Right":
      newCoord = { ...state.coord, x: state.coord.x + incrememnt };
      newPrev = arrayLimiter([newCoord, ...state.prevCoords], state.snakeLen);
      return {
        ...state,
        coord: newCoord,
        prevCoords: newPrev,
      };
    case "add":
      return {
        ...state,
        snakeLen: state.snakeLen + 1,
      };

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
