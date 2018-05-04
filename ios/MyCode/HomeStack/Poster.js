import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Dimensions,
    Text
} from 'react-native';

let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;
let ITEM_HEIGHT = SCREEN_HEIGHT/3;
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
    render() {
        return (
            <ScrollView style={styles.scrollViewStyle}
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
            >
                {this.renderItem()}
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    scrollViewStyle: {
        backgroundColor: 'white'
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
// class PageContent extends Component {
//     _renderItem = (item) => { //class下的方法声明
//         let txt = '第' + item.index + '个' + ' title=' + item.item.title;
//         let bgColor = item.index % 2 == 0 ? 'tomato' : 'purple';
//         return <Text style={[{flex:1,height:ITEM_HEIGHT,backgroundColor:bgColor},styles.txt]}>{txt}</Text>
//     }
//
//     render() {
//         let data = [];
//         for (let i = 0; i < 5; i++) {
//             data.push({key: i, title: i + ''});
//         }
//         return (
//             <FlatList
//                 // ref={(flatList)=>this._flatList = flatList}
//                 // ListHeaderComponent={this._header}
//                 // ListFooterComponent={this._footer}
//                 // ItemSeparatorComponent={this._separator}
//                 renderItem={this._renderItem}
//                 // ListEmptyComponent={this._emptyComponent}
//                 // numColumns ={3}
//                 // columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:0}}
//
//                 horizontal={true} //numColumns does not support horizontal
//
//                 getItemLayout={(data, index)=>({
//                     length: ITEM_HEIGHT,
//                     offset: ITEM_HEIGHT * index, //2是ItemSeparatorComponent的高度
//                     index})}
//
//                 //onEndReachedThreshold={5}
//                 //onEndReached={(info)=>{
//                 //console.warn(info.distanceFromEnd);
//                 //}}
//
//                 //onViewableItemsChanged={(info)=>{
//                 //console.warn(info);
//                 //}}
//                 data={data}>
//             </FlatList>
//         );
//     }
// }

// class Poster extends Component {
//     render() {
//         return (
//             <PageContent/>
//
//             // <View style={{flex: 1}}>
//             // </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     txt: {
//         textAlign: 'center',
//         textAlignVertical: 'center',
//         color: 'white',
//         fontSize: 30,
//     }
// });

// export default Poster;
