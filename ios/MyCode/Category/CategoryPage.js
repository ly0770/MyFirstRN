import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    SectionList,
    Text,
    TouchableHighlight,
} from 'react-native';
import CategoryCell from '../Home/CategoryCell';
// https://bibclub.tv/api_public/getCollections/?parent=true/ bib
//https://walesi.secureswiftcontent.com/api_public/homePageCat/?exclusive=1/ walesi
export default class CategoryPage extends Component{
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Category',
            tabBarIcon: ({ focused, tintColor }) => (
                <Image source={require('../../../images/category.png')}
                       style={{ height: 25, width: 25, tintColor: tintColor }}
                />
            ),
        };
    };
    componentDidMount() {
        this._loadData();
    };
    _renderItem = (info) => {
        // return <CategoryCell data={info.item.list}/>
        // return <CategoryCell data={info.item.list}/>
        return <Text>{info.item.title}</Text>
    };
    _loadData = () => {
        return fetch('https://walesi.secureswiftcontent.com/api_public/homePageCat/?exclusive=1/')
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    _seeMorePress = () => {
        alert('See More Press');
    };
    _sectionComp = (info) => {
        // let txt = info ? info.section.name : '';
        let txt = info.section.key;
        return(
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>{txt}</Text>
                <TouchableHighlight onPress={this._seeMorePress} underlayColor='rgba(34, 26, 38, 0.1)'>
                    <Text style={styles.sectionHeaderButton}>See More ></Text>
                </TouchableHighlight>
            </View>
        )
    };
    render() {
        let sections = [
            { key: "Recent Videos", data: [{ title: "阿童木" }] },
            { key: "Most Viewed Videos", data: [{ title: "表哥" }] },
        ];
        return (
            <SectionList style={styles.container}
                renderItem={this._renderItem}
                sections={sections}
                renderSectionHeader={this._sectionComp}
                ItemSeparatorComponent={() => <View><Text></Text></View>}
            />
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'tomato',
    },
    sectionHeader: {
        flex: 1,
        flexDirection: 'row',
        height: 35,
        backgroundColor: '#0f1116',
    },
    sectionHeaderText: {
        flex: 1,
        textAlign: 'left',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 15,
        marginLeft:5,
        marginTop:8,
        fontWeight:'bold',
    },
    sectionHeaderButton: {
        flex: 1,
        fontSize: 14,
        color: 'red',
        textAlignVertical: 'center',
        marginTop: 8,
        marginRight:5,
        fontStyle: 'italic',
    }
});