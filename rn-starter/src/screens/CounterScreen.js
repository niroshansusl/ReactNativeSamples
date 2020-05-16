import React, { useReducer } from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const COUNTER_INCREMENT = 1;

const reducer = function(state, action){

  switch(action.type){

    case 'increase':
      return {...state, count: state.count + action.payload}; 
    case 'decrease':
      return {...state, count: state.count - action.payload};
    default:
      return state;
  }

}

const CounterScreen = function () {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const {count} = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={function() {
          dispatch({type: 'increase', payload: COUNTER_INCREMENT})
        }}
      />
      <Button
        title="Decrease"
        onPress={function() {
          dispatch({type: 'decrease', payload: COUNTER_INCREMENT})
        }}
      />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
