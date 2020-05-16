import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const BoxScreen = function () {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Box #1</Text>
      <Text style={styles.textTwoStyle}>Box #2</Text>
      <Text style={styles.textThreeStyle}>Box #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    //borderWidth: 3,
    //borderColor: "black",
    flexDirection: "row",
    height: 200,
    justifyContent: "space-between",
  },
  textOneStyle: {
    borderWidth: 3,
    backgroundColor: "red",
    width:100,
    height:100,
    padding: 5,
  },
  textTwoStyle: {
    borderWidth: 3,
    padding:5,
    width:100,
    height:100,
    backgroundColor:"yellow",
    alignSelf:"flex-end",
    textAlign:"center",
    // position:"absolute",
    // top:0,
    // left:0,
    // bottom:0,
    // right:0,
    //...StyleSheet.absoluteFillObject,
    fontSize:25,
    //alignSelf:"stretch",
    //flex:1  //this is going to base with child one
  },
  textThreeStyle: {
    borderWidth: 3,
    backgroundColor: "blue",
    padding:5,
    width:100,
    height:100,
    color:'white',
    textAlign:"center"
    //flex:2
  },
});

export default BoxScreen;
