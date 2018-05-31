import React, { Component } from 'react';
import {
    StackNavigator,
} from 'react-navigation';
import RootTab from './BaseTabNavigation';
import DetailsPage from '../Home/DetailsPage';
import ProfilePage from '../Profile/ProfilePage';
const HomeNavigator = StackNavigator(
    {
        Home:{ screen: RootTab },
        Details:{ screen: DetailsPage },
        Profile:{ screen: ProfilePage },
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#232534'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default class HomeStack extends Component {
    render() {
        return (
            <HomeNavigator/>
        );
    }
}