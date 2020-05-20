import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet, Text, FlatList } from "react-native";
import yelp from "../api/yelp";
import { HeaderTitle } from "react-navigation-stack";

const DetailPageScreen = function ({ navigation }) {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(function () {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.text}>{result.name}</Text>
      <FlatList
        data={result.photos}
        horizontal
        keyExtractor={(photo) => photo}
        renderItem={function ({item}) {
           return <Image source={item ? { uri: item } : null} style={styles.image}/>
        }
        }
      />
    </View>
  );
};

DetailPageScreen.navigationOptions = () =>{
  HeaderTitle:'New Title'
}

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300,
        marginTop:10,
        
    },
    text:{
        fontWeight:"bold",
        fontSize:18,
        marginHorizontal:10,
        marginTop:10
    }
});


export default DetailPageScreen;
