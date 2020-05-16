import React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";

const ColorCounter = function ({ color, onIncrease, onDecrease }) {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={"More " + color} onPress = {function(){
          onIncrease()
      }}/>
      <Button title={`Less ${color}`} onPress = {function(){
          onDecrease()
      }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
