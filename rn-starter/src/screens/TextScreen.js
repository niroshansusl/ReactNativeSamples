import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text style={styles.textStyle}>Enter password: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus={false}
        onChangeText={function (newValue) {
          setPassword(newValue);
        }}
      />

      {password.length < 5 ? (
        <Text style={styles.textStyle}>
          Your password must more than 5 characters{" "}
        </Text>
      ) : null}

      {/* <Text style={styles.textStyle}>Your Name is : {name}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    margin: 10,
  },
  input: {
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
