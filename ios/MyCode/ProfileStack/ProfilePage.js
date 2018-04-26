import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class ProfilePage extends Component {
    static navigationOptions = {
        title: 'Profile',
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>This is Profile Page!!!</Text>
            </View>
        );
    };
}


const ProfileStack = StackNavigator(
    {
        Profile: { screen: ProfilePage },
    }
);

export default ProfileStack;