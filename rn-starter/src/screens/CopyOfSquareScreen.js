import React, { useReducer } from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = function (state, action) {
  //state === {red: number, green: number, blue: number}
  //action === {type: 'red' || 'green' || 'blue', payload: 15 || -15}

  switch (action.type) {
    case "red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "green":
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "blue":
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = function () {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={function () {
          dispatch({ type: "red", payload: COLOR_INCREMENT });
        }}
        onDecrease={function () {
          dispatch({ type: "red", payload: -1 * COLOR_INCREMENT });
        }}
      />
      <ColorCounter
        color="Green"
        onIncrease={function () {
          dispatch({ type: "green", payload: COLOR_INCREMENT });
        }}
        onDecrease={function () {
          dispatch({ type: "green", payload: -1 * COLOR_INCREMENT });
        }}
      />
      <ColorCounter
        color="Blue"
        onIncrease={function () {
          dispatch({ type: "blue", payload: COLOR_INCREMENT });
        }}
        onDecrease={function () {
          dispatch({ type: "blue", payload: -1 * COLOR_INCREMENT });
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
