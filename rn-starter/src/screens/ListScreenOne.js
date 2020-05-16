import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ListScreen = function () {

    const friends = [
        { name: 'Friend01', age: 20 },
        { name: 'Friend02', age: 30 },
        { name: 'Friend03', age: 25 },
        { name: 'Friend04', age: 22 },
        { name: 'Friend05', age: 21 },
        { name: 'Friend06', age: 28 },
        { name: 'Friend07', age: 26 },
        { name: 'Friend08', age: 20 }
    ];

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={function ({ item }) {
                //element is like == {item: {name:'Freind01'}, index: 0}
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({

    textStyle: {
        marginVertical: 50,
        marginLeft: 10
    }
});

export default ListScreen;