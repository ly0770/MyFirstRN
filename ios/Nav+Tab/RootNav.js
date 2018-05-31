import React, { Component } from 'react';
import {
    StackNavigator,
    TabNavigator,
    TabBarBottom,
} from 'react-navigation';
import {
    View,
    Text,
    Button

} from 'react-native';

export default class RootNav extends Component {

    render() {
        return (
            <MainStack/>
        );
    }
}

class HomePage extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Home',
            headerRight:(
                <Button title='Details'
                        color='#000'
                        onPress={() => {navigation.navigate('Details')}}/>
            ),
        };
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'tomato'}}>
                <Text>Home Page!!!</Text>
            </View>
        );
    }
}
class DetailPage extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray'}}>
                <Text>Detail Page!!!</Text>
            </View>
        );
    }
}

class ProfilePage extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Home',
            headerRight:(
                <Button title='Details'
                        color='#000'
                        onPress={() => {navigation.navigate('Details')}}/>
            ),
        };
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
                <Text>Profile Page!!!</Text>
            </View>
        );
    }
}

const MainTab = TabNavigator(
    {
        Home:{ screen: HomePage },
        Profile:{ screen: ProfilePage },
    },
    {
        tabBarOptions: {
            activeTintColor: '#6de1e5',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#294254',
            inactiveBackgroundColor: '#294254',
            // backgroundColor: '#294254',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);

const MainStack = StackNavigator(
    {
        Home: { screen:MainTab },
        Details: { screen:DetailPage},
    },
    {
        initialRouteName: 'Home',
    },
);