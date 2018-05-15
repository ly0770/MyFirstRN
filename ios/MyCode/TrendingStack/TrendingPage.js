import React, { Component } from 'react';
import {
    FlatList,
    View,
    Text,
    TouchableHighlight,
    Dimensions,
    StyleSheet,
    Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;
let Cover_Height = SCREEN_WIDTH/16*9;
let Container_Height = Cover_Height + 60;
class TrendingCell extends Component {
    _onPressCover = () => {
        alert('press cover');
    };
    render() {
        return(
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressCover}
                                    underlayColor='rgba(34, 26, 38, 0.1)'>
                    <Image style={styles.cover} />
                </TouchableHighlight>
                <Text style={styles.txtTwo}>Detail</Text>
            </View>
        );
    }
}
class TrendingPage extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Trending',

        }
    };
    _renderItem = (item) => {
         return <TrendingCell/>;

    };
    render() {
        let data = [];
        for (let i = 0; i < 5; i++) {
            data.push({key: i, title: i + ''});
        }
        return(
            <FlatList style={styles.list}
                      renderItem={this._renderItem}
                      data={data}
            />


        );
    }

}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        // backgroundColor: 'yellow'
    },
    container:{
        flex: 1,
        minHeight:Container_Height,
        // backgroundColor: 'grey'
    },
    cover:{
        flex: 1,
        minHeight: Cover_Height,
        backgroundColor: 'grey',
    },
    txtTwo:{
        flex: 1,
        backgroundColor: 'tomato',
    }
});

const TrendingStack = StackNavigator(
    {
        Trending:{ screen: TrendingPage },
    },
    {
        initialRouteName: 'Trending',
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'purple'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default TrendingStack;