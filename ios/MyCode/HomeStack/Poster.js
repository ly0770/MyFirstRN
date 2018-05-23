import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image,
} from 'react-native';

let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;
let ITEM_HEIGHT = SCREEN_WIDTH/16*9;
class Poster extends Component {
    renderItem = () => {
        let colorArr = ['red', 'black', 'tomato', 'gray'];
        let itemArr = [];
        for (let i=0; i<colorArr.length; i++) {
            itemArr.push(
                <View style={[styles.itemViewStyle, {backgroundColor:colorArr[i]}]}>
                    <Text style={styles.itemTextStyle}>
                        {colorArr[i]}
                    </Text>
                </View>
            );
        }
        return itemArr;
    };
    _renderItem = () => {
        let posterArr = this.props.data;
        let itemArr = [];
        for (let i=0; i<posterArr.length; i++) {
            let item = posterArr[i];
            let pic = item.video.thumbs.default;
            itemArr.push(
                <Image style={styles.poster} source={{ uri: pic }}/>
            );
        }
        return itemArr;
    };
    render() {
        return (
            <ScrollView style={styles.scrollViewStyle}
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
            >
                {this._renderItem()}
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
        // backgroundColor: 'white',
        maxHeight:ITEM_HEIGHT,
    },
    poster:{
        flex: 1,
        minWidth:SCREEN_WIDTH,
        minHeight:ITEM_HEIGHT,
    },
    itemViewStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:SCREEN_WIDTH,
        height:ITEM_HEIGHT,
    },
    itemTextStyle:{
        color: 'white'
    },
});
export default Poster;
