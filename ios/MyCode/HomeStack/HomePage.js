
import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import DetailsPage from './DetailsPage'
import Poster from './Poster'

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
            <View style={styles.container}>
                <Poster/>
                {/*<Text>This is Home Page!!!</Text>*/}
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

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

});

export default HomeStack;