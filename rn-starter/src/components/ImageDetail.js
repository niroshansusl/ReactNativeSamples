import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = function ({imageSource, title, scoreValue}) {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {scoreValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
