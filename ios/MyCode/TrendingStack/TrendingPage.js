import React, { Component } from 'react';
import {
    FlatList,
    View,
    Text,
    TouchableHighlight,
    Dimensions,
    StyleSheet,
    Image,
    ImageBackground,
    Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import DurationLabel from '../Tools/DurationLabel'
let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;
let Cover_Height = SCREEN_WIDTH/16*9;
let Container_Height = Cover_Height + 60;
let Avatar_Space = 10;
let Avatar_Height = Container_Height-Cover_Height-Avatar_Space;
class TrendingCell extends Component {
    _onPressCover = () => {
        alert('Cover Clicked!');
    };
    render() {
        return(
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressCover}
                                    underlayColor='rgba(34, 26, 38, 0.1)'>
                    {/*<Image style={styles.cover} />*/}
                    <ImageBackground style={styles.cover}>
                        <DurationLabel/>
                    </ImageBackground>

                </TouchableHighlight>
                <View style={styles.detail}>
                    <TouchableHighlight onPress={() => {alert('Avatar Clicked!')}}
                                        underlayColor='rgba(34, 26, 38, 0.1)'>
                        <Image style={styles.avatar} />
                    </TouchableHighlight>

                    <View style={styles.labelView}>
                        <Text style={styles.txtTwo}>Username</Text>
                        <Text style={styles.txtTwo}>Detail</Text>
                    </View>
                    <Button style={styles.moreBtn}
                            title={'..'}
                            onPress={()=>{alert('More Button Clicked!')}}
                    />
                </View>
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
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        // borderRadius:10,
    },
    detail:{
        flex:1,
        flexDirection: 'row',
    },
    avatar:{
        flex: 1,
        // maxHeight:Avatar_Height,
        // maxWidth:Avatar_Height,
        minWidth:Avatar_Height,
        backgroundColor: 'yellow',
        marginLeft:Avatar_Space/2,
        marginRight:Avatar_Space/2,
        marginTop:Avatar_Space/2,
        marginBottom:Avatar_Space/2,
        borderRadius:Avatar_Height/2,
    },
    labelView:{
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'column',
        justifyContent: 'space-around',

    },
    moreBtn:{
        flex:1,
        // color:'green',
        width:30,
    },
    txtTwo:{
        flex: 1,
        backgroundColor: 'tomato',
        maxHeight: (Container_Height-Cover_Height)/2-10,
        marginLeft:10,
        marginRight:10,
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