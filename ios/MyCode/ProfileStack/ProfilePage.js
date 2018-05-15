import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class ProfilePage extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Profile',
        }
    };
    _renderItem = (info) => {
        return <Text style={styles.txt}>{info.item.title}</Text>;
    };
    _header = () => {
        return <View style={styles.header}/>;
    };
    _separator = () => {
        return <View style={styles.separatorLine}/>;
    };
    render() {
        // let data = [];
        // for (let i = 0; i < 5; i++) {
        //     data.push({key: i, title: i + ''});
        // }
        let data = [{ title:'Profile' }, { title:'Account' }, { title:'Settings' }, { title:'Version' }];
        return (
            <FlatList style={styles.list}
                      renderItem={this._renderItem}
                      data={data}
                      ListHeaderComponent={this._header}
                      ItemSeparatorComponent={this._separator}
            />
        );
    };
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'tomato',
        minHeight: 200,
    },
    list: {
        flex: 1,
        backgroundColor: 'white',
    },
    txt: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        minHeight: 40,
        color: 'black',
        backgroundColor: 'white',
    },
    separatorLine:{
        flex: 1,
        backgroundColor: 'gray',
        minHeight: 0.5,
    },
});
const ProfileStack = StackNavigator(
    {
        Profile: { screen: ProfilePage },
    }
);

export default ProfileStack;