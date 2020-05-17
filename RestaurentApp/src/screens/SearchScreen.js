import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = function () {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  };

  return (
    <View style={styles.backGround}>
      <SearchBar
        term={term}
        onTermChange={function (newTerm) {
          setTerm(newTerm);
        }}
        onTermSubmit={function () {
          searchApi();
        }}
      />
      {errorMessage?<Text>{errorMessage}</Text>: null}
      <Text>We got {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: "white",
  },
});

export default SearchScreen;
