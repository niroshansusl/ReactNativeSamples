import React, { useState } from "react";
import { Text, StyleSheet, Button, View, FlatList } from "react-native";

const ColorScreen = function () {
  const [color, setColors] = useState([]);
  return (
    <View>
      <Text>Color Screen</Text>
      <Button
        title="Add a Color"
        onPress={function () {
          setColors([...color, randomRGB()]);
        }}
      />

      <FlatList
        keyExtractor={(item) => item}
        data={color}
        renderItem={function ({ item }) {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRGB = function () {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({
  textStyle: {},
});

export default ColorScreen;
