import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableHighlight,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class ProfilePage extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Profile',
        }
    };
    _renderItem = (info) => {

            if(info.item.id === 3 ){
                return (
                    <View style={styles.item}>
                        <Text style={styles.txt}>{info.item.title}</Text>
                        <View style={styles.lineView}>
                            <View style={styles.bottomLine}/>
                        </View>
                    </View>
                );
            } else {
                return (
                    <View style={styles.item}>
                        <Text style={styles.txt}>{info.item.title}</Text>
                        <View style={styles.lineView}>
                            <View style={styles.lineSpace}/>
                            <View style={styles.bottomLine}/>
                        </View>
                    </View>
                );
            }

    };
    _onPressAvatar = () => {
        alert('Change Avatar!')
    };
    _header = () => {
        return (
            <View style={styles.header}>
                <TouchableHighlight onPress={this._onPressAvatar}
                                    underlayColor='rgba(34, 26, 38, 0.1)'>
                    <Image style={styles.avatar}/>
                </TouchableHighlight>
                <Text style={styles.title}>Tiya</Text>
            </View>
        );
    };
    _separator = () => {
        return <View style={styles.separatorLine}/>;
    };
    render() {
        // let data = [];
        // for (let i = 0; i < 5; i++) {
        //     data.push({key: i, title: i + ''});
        // }
        let data = [{ id:0, title:'Profile' }, { id:1, title:'Account' }, { id:2, title:'Settings' }, { id:3, title:'Version' }];
        return (
            <FlatList style={styles.list}
                      renderItem={this._renderItem}
                      data={data}
                      ListHeaderComponent={this._header}
                      // ItemSeparatorComponent={this._separator}
            />
        );
    };
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'tomato',
        minHeight: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar:{
        flex:1,
        backgroundColor:'grey',
        width:80,
        height:80,
        maxWidth:80,
        maxHeight:80,
        borderRadius:40,
    },
    title:{
        flex:1,
        maxHeight: 30,
        marginTop:20,
        color: 'white',
        fontSize: 16,
    },
    list: {
        flex: 1,
        backgroundColor: 'white',
    },
    item:{
        flex:1,
    },
    lineView:{
        flexDirection:'row',
        flex:1,
    },
    lineSpace:{
        flex:1,
        maxWidth:15,
    },
    bottomLine:{
        flex: 1,
        minHeight: 0.3,
        backgroundColor: 'grey',
    },
    txt: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        minHeight: 35,
        color: 'black',
        backgroundColor: 'white',
        marginLeft:15,
        marginTop:15,
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