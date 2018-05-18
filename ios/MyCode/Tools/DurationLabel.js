import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class DurationLabel extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.text}>00:00</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        backgroundColor: 'black',
        maxHeight: 15,
        maxWidth: 60,
        minWidth:40,
        marginEnd: 5,
        marginBottom: 5,
        borderRadius: 3,
    },
    text:{
        flex: 1,
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
    },
});