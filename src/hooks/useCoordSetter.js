import React, { useCallback, useState, useReducer } from "react";

const stateInit = { coord: { x: 0, y: 0 }, prevCoords: [] };
const incrememnt = 20;

function reducer(state, action) {
  let newCoord = {};
  switch (action.type) {
    case "Up":
      newCoord = { ...state.coord, y: state.coord.y - incrememnt };
      return {
        ...state,
        coord: newCoord,
        prevCoords: [newCoord, ...state.prevCoords],
      };
    case "Down":
      newCoord = { ...state.coord, y: state.coord.y + incrememnt };
      return {
        ...state,
        coord: newCoord,
        prevCoords: [newCoord, ...state.prevCoords],
      };
    case "Left":
      newCoord = { ...state.coord, x: state.coord.x - incrememnt };
      return {
        ...state,
        coord: newCoord,
        prevCoords: [newCoord, ...state.prevCoords],
      };
    case "Right":
      newCoord = { ...state.coord, x: state.coord.x + incrememnt };
      return {
        ...state,
        coord: newCoord,
        prevCoords: [newCoord, ...state.prevCoords],
      };
    case "add":
      return {
        ...state,
        length: state.length++,
      };

    default:
      return state;
  }
}

const useCoordSetter = () => {
  const [state, dispatch] = useReducer(reducer, { coord: { x: 0, y: 0 }, prevCoords: [] });
  const { coord, prevCoords } = state;
  return { coord, prevCoords, dispatch };
};

export default useCoordSetter;
