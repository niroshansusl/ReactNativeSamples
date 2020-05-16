import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
        style={styles.text}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("ListOne")}
        style={styles.text}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate("Image")}
        style={styles.text}
      />
      <Button
        title="Go to Counter Screen"
        onPress={() => navigation.navigate("Count")}
        style={styles.text}
      />
      <Button
        title="Go to Color Screen"
        onPress={() => navigation.navigate("Color")}
        style={styles.text}
      />
      <Button
        title="Go to Square Screen"
        onPress={() => navigation.navigate("Square")}
        style={styles.text}
      />
      <Button
        title="Go to Text Screen"
        onPress={() => navigation.navigate("Text")}
        style={styles.text}
      />
      <Button
        title="Go to Box Screen"
        onPress={() => navigation.navigate("Box")}
        style={styles.text}
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("ListOne")}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 10
  },
});

export default HomeScreen;
