import React, { useState } from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = function () {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = function (color, change) {
    // if(color === 'red'){
    //   if(red+change > 255 || red+change<0){
    //     return
    //   } else {
    //     setRed(red+change)
    //   }
    // } goint to remove boiler plate code

    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;

      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;

      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;

      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={function () {
          setColor("red", COLOR_INCREMENT);
        }}
        onDecrease={function () {
          setColor("red", -1 * COLOR_INCREMENT);
        }}
      />
      <ColorCounter
        color="Green"
        onIncrease={function () {
          setColor("green", COLOR_INCREMENT);
        }}
        onDecrease={function () {
          setColor("green", -1 * COLOR_INCREMENT);
        }}
      />
      <ColorCounter
        color="Blue"
        onIncrease={function () {
          setColor("blue", COLOR_INCREMENT);
        }}
        onDecrease={function () {
          setColor("blue", -1 * COLOR_INCREMENT);
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
