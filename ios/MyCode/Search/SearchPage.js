import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
} from 'react-native';

export default class SearchPage extends Component{
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Search',
            tabBarIcon: ({ focused, tintColor }) => (
                <Image source={require('../../../images/search.png')}
                       style={{ height: 23, width: 23, tintColor: tintColor }}
                />
            ),
        };
    };
    render() {
        return (
            <View style={styles.container}/>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'gray',
    },
});