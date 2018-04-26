
import React, { Component} from 'react'
import {
    Text,
    View,
    Button
} from 'react-native'
import {
    TabNavigator,
    TabBarBottom,
    StackNavigator
} from 'react-navigation'
class DetailsScreen extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         title: "Details"
    //     };
    // }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>I'm Details Page!</Text>
            </View>
        );
    }
}
class HomeScreen extends Component {
    // static navigationOptions = {
    //     title: 'Home'
    // }
    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home!</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Details')}
                    title={'Go to Details'}
                />
            </View>
        );
    }
}

class SettingsScreen extends Component {
    // static navigationOptions = {
    //     title: "Settings"
    // }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings!</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Details')}
                    title={'Go to Details'}
                />
            </View>
        );
    }
}

const HomeStack = StackNavigator (
    {
        Home:{ screen: HomeScreen },
        Details:{ screen: DetailsScreen},
    },
    {
        initialRouteName: 'Home',
        navigationOptions:{

        }
    }
);
const SettingsStack = StackNavigator (
    {
        Settings:{ screen: SettingsScreen },
        Details:{ screen: DetailsScreen },
    }
);
export default TabNavigator (
    {
        Home: HomeStack,
        Settings: SettingsStack,
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
    }
);