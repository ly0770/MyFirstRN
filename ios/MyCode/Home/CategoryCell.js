import React, { Component } from 'react';
import {
    View,
    FlatList,
    ImageBackground,
    StyleSheet,
    Text,
} from 'react-native';
let CellHeight = 150;
let CellWidth = CellHeight/4*3;
export default class CategoryCell extends Component {
    _renderItem = (item) => {
        let txt = '第' + item.index + '个' + ' title=' + item.item.title;
        let bgColor = item.index % 2 == 0 ? 'tomato' : 'purple';
        let pic = item.item.video.thumbs.default;
        let title = item.item.video.title;
        // return <Text style={[{flex:1,height:150,backgroundColor:bgColor},styles.txt]}>{txt}</Text>
        return (
            <ImageBackground source={{uri: pic}}
                             style={[{backgroundColor:bgColor}, styles.thumbnail]}>
                <View style={styles.overlayView}/>
                <Text style={styles.overlayText}  >{title}</Text>
            </ImageBackground>
        );
    };
    _separator = () => {
        return <View style={{height:2,backgroundColor:'yellow'}}/>;
    };
    _onPressItem = () => {
        alert("select")
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
                      data={this.props.data}
            />
        );
    }
}

const styles = StyleSheet.create({
    thumbnail:{
        flex: 1,
        minHeight: CellHeight,
        minWidth: CellWidth,
        marginLeft:5,
        justifyContent: 'flex-end',

    },
    overlayView:{
        flex: 1,
        justifyContent: 'flex-start',
        minWidth:CellWidth,
        maxWidth:CellWidth,
        maxHeight:30,
        backgroundColor: 'black',
        opacity: 0.7,
        position:'relative',
    },
    overlayText:{
        flex: 1,
        color: 'white',
        fontSize:12,
        position:'absolute',
        height:30,
        // whiteSpace: 'nowrap',
        // textOverflow: 'ellipsis',

    },
});