import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = function ({term, onTermChange, onTermSubmit}) {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" size={30} style={styles.searchStyle} />
      <TextInput
        placeholder="Search"
        placeholderTextColor='white'
        style={styles.inputStyle}
        autoFocus={false}
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={function(newTerm){
            onTermChange(newTerm);
        }}
        onEndEditing={function(){
            onTermSubmit();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#c5c5c5",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  searchStyle: {
    marginHorizontal: 15,
    alignSelf: "center",
    fontSize: 35,
  },
});

export default SearchBar;
