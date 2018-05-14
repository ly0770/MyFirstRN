
import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    SectionList,
    Dimensions,
    TouchableHighlight,
    FlatList
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import DetailsPage from './DetailsPage'
import Poster from './Poster'
import Com from "../../MyTest/MFlatListTest";

let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;
let ITEM_HEIGHT = SCREEN_HEIGHT/3;
class CategoryCell extends Component {
    _renderItem = (item) => {
        let txt = '第' + item.index + '个' + ' title=' + item.item.title;
        let bgColor = item.index % 2 == 0 ? 'tomato' : 'purple';
        return <Text style={[{flex:1,height:150,backgroundColor:bgColor},styles.txt]}>{txt}</Text>
    };
    _separator = () => {
        return <View style={{height:2,backgroundColor:'yellow'}}/>;
    };
    render() {
        let data = [];
        for (let i = 0; i < 10; i++) {
            data.push({key: i, title: i + ''});
        }
        return (
            <FlatList renderItem={this._renderItem}
                      ItemSeparatorComponent={this._separator}
                      horizontal={true}
                      data={data}
            />
        );
    }
}

class CategoryList extends Component {
    // _renderItem = (info) => {
    //
    //     let txt = '  ' + info.item.title;
    //     return <Text
    //         style={{ height: 150, textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 15 }}>{txt}</Text>
    // };
    _renderItem = (info) => {

        let txt = '  ' + info.item.title;
        return <CategoryCell/>
    };
    _seeMorePress = () => {
        // navigation.navigate('Details')
    };
    _sectionComp = (info) => {

        let txt = info.section.key;
        return(
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>{txt}</Text>
                <TouchableHighlight onPress={this._seeMorePress} underlayColor='rgba(34, 26, 38, 0.1)'>
                    <Text style={styles.sectionHeaderButton}>See More ></Text>
                </TouchableHighlight>
            </View>
        )
        // return <Text
        //     style={{ height: 25, textAlign: 'left', textAlignVertical: 'center', backgroundColor: '#9CEBBC', color: 'white', fontSize: 16 }}>{txt}</Text>
    };


    render() {
        // let sections = [
        //     { key: "Recent Videos", data: [{ title: "阿童木" }, { title: "阿玛尼" }, { title: "爱多多" }] },
        //     { key: "Most Viewed Videos", data: [{ title: "表哥" }, { title: "贝贝" }, { title: "表弟" }, { title: "表姐" }, { title: "表叔" }] },
        // ];
        let sections = [
            { key: "Recent Videos", data: [{ title: "阿童木" }] },
            { key: "Most Viewed Videos", data: [{ title: "表哥" }] },
        ];
        return (
            <View style={{ flex: 1 }}>
                <SectionList
                    ListHeaderComponent={<Poster style={styles.poster}/>}
                    renderSectionHeader={this._sectionComp}
                    renderItem={this._renderItem}
                    sections={sections}
                    ItemSeparatorComponent={() => <View><Text></Text></View>}
                    // ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录</Text></View>}
                    // ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录尾部</Text></View>}
                />
            </View>
        );
    }
}
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
                <CategoryList style={styles.category}/>
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
    txt: {
        flex: 1,
        minWidth:100,
    },
    container: {
        flex: 1
    },
    category: {
        flex: 1
    },
    poster: {
        flex: 1,
        height: ITEM_HEIGHT,

    },
    sectionHeader: {
        flex: 1,
        flexDirection: 'row',
        height: 25,
        // textAlign: 'left',
        // textAlignVertical: 'center',
        backgroundColor: '#9CEBBC',
        // color: 'white',
        // fontSize: 16
    },
    sectionHeaderText: {
        flex: 1,
        // height: 25,
        textAlign: 'left',
        textAlignVertical: 'center',
        // backgroundColor: 'yellow',
        color: 'white',
        fontSize: 16
    },
    sectionHeaderButton: {
        flex: 1,
        fontSize: 12,
        color: 'red',
        // backgroundColor: 'yellow',
        // height: 20,
        // textAlign: 'center',
        textAlignVertical: 'center',
    }

});

export default HomeStack;