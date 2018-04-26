import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

class DetailsPage extends Component {
    static navigationOptions = {
        title: 'Details',
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>This is Details Page!!!</Text>
            </View>
        );
    };
}

export default DetailsPage;