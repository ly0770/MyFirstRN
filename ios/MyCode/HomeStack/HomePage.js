
import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import DetailsPage from './DetailsPage'
// import BaseNavigator from '../BaseNavigator';

class HomePage extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Home',
            headerRight:
                (
                    <Button
                        title='Details'
                        color='#fff'
                        onPress={() => navigation.navigate('Details')}
                    />
                ),
        }
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>This is Home Page!!!</Text>
            </View>
        );
    };
}

const HomeStack = StackNavigator (
    {
        Home:{ screen: HomePage },
        Details:{ screen: DetailsPage},
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'tomato'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default HomeStack;