import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
} from 'react-native';

export default class CategoryPage extends Component{
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Category',
            tabBarIcon: ({ focused, tintColor }) => (
                <Image source={require('../../../images/category.png')}
                       style={{ height: 25, width: 25, tintColor: tintColor }}
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
        backgroundColor: 'tomato',
    },
});