import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    Platform
} from 'react-native';
import Banner from 'react-native-banner'
// let ITEM_HEIGHT = 200;


export default class Poster extends Component {

    constructor(props) {
        super(props);

        this.banners = [
            {
                title: 'beauty 1',
                image: 'http://www.qq745.com/uploads/allimg/141106/1-141106153Q5.png',
            },
            {
                title: 'beauty 2',
                image: 'http://img1.3lian.com/2015/a1/53/d/200.jpg',
            },
            {
                title: 'The next banner has no title',
                image: 'http://img1.3lian.com/2015/a1/53/d/198.jpg',
            },
            {
                // title: 'no title',
                image: 'http://image.tianjimedia.com/uploadImages/2012/235/9J92Z5E5R868.jpg',
            },
        ];

        this.iosMarginTop = Platform.OS == 'ios' ? {marginTop: 20} : {};

        this.state = {
            clickTitle: 'You can try clicking beauty',
            defaultIndex: 0,
        }
        this.defaultIndex = 0;
    }

    render() {
        return (
            <View style={[styles.container, this.iosMarginTop]}>
                <Banner
                    banners={this.banners}
                    defaultIndex={this.defaultIndex}
                    onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
                    intent={this.clickListener.bind(this)}
                />
                <Text>{this.state.clickTitle}</Text>
            </View>
        );
    }

    clickListener(index) {
        this.setState({
            clickTitle: this.banners[index].title ? `you click ${this.banners[index].title}` : 'this banner has no title',
        })
    }

    onMomentumScrollEnd(event, state) {
        console.log(`--->onMomentumScrollEnd page index:${state.index}, total:${state.total}`);
        this.defaultIndex = state.index;
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
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
