import React, { Component } from 'react';
import RootTab from './ios/MyCode/TabNavigator';

export default class App extends Component {
    render() {
        return <RootTab />;
    }
}


// import React, { Component } from 'react';
// import {
//     FlatList,
//     Text,
//     TouchableHighlight,
//     View,
//     Button,
//     StyleSheet
// } from 'react-native';
// import { StackNavigator } from 'react-navigation';
//
// let ITEM_HEIGHT = 100;
// class SampleFlatList extends Component {
//     _flatList; //class下的属性声明
//
//     _renderItem = (item) => { //class下的方法声明
//         let txt = '第' + item.index + '个' + ' title=' + item.item.title;
//         let bgColor = item.index % 2 == 0 ? 'tomato' : 'purple';
//         return <Text style={[{flex:1,height:ITEM_HEIGHT,backgroundColor:bgColor},styles.txt]}>{txt}</Text>
//     }
//
//     _header = () => {
//         return <Text style={[styles.txt,{backgroundColor:'gray'}]}>这是头部</Text>;
//     }
//
//     _footer = () => {
//         return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是尾部</Text>;
//     }
//
//     _separator = () => {
//         return <View style={{height:2,backgroundColor:'yellow'}}/>;
//     }
//
//     _emptyComponent = () => {
//         return (
//             <View style={{
//                 height: '100%', //'100%'代表什么？？？
//                 alignItems: 'center',
//                 justifyContent: 'center',}}>
//                 <Text style={{fontSize: 16}}>I'm empty!!!</Text>
//             </View>
//         );
//
//
//     }
//     render() {
//         let data = [];
//         for (let i = 0; i < 100; i++) {
//             data.push({key: i, title: i + ''});
//         }
//
//         return (
//             <View style={{flex:1}}>
//                 <Button title='滚动到指定位置'
//                         onPress={()=>{
//                     //this._flatList.scrollToEnd();
//                     //this._flatList.scrollToIndex({viewPosition:0,index:8});
//                     this._flatList.scrollToOffset({animated: true, offset: 2000});
//                 }}/>
//                 <View style={{flex:1}}>
                    {/*<FlatList*/}
                        {/*ref={(flatList)=>this._flatList = flatList}*/}
                        {/*ListHeaderComponent={this._header}*/}
                        {/*ListFooterComponent={this._footer}*/}
                        {/*ItemSeparatorComponent={this._separator}*/}
                        {/*renderItem={this._renderItem}*/}
                        {/*ListEmptyComponent={this._emptyComponent}*/}
                        {/*numColumns ={3}*/}
                        {/*// columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:0}}*/}

                        {/*// horizontal={true} //numColumns does not support horizontal*/}

                        {/*getItemLayout={(data, index)=>({*/}
                            {/*length: ITEM_HEIGHT,*/}
                            {/*offset: (ITEM_HEIGHT+2) * index, //2是ItemSeparatorComponent的高度*/}
                            {/*index})}*/}

                        {/*//onEndReachedThreshold={5}*/}
                        {/*//onEndReached={(info)=>{*/}
                        {/*//console.warn(info.distanceFromEnd);*/}
                        {/*//}}*/}

                        {/*//onViewableItemsChanged={(info)=>{*/}
                        {/*//console.warn(info);*/}
                        {/*//}}*/}
                        {/*data={data}>*/}
                    {/*</FlatList>*/}
// //                 </View>
// //
// //             </View>
// //         );
// //     }
// // }
// //
// // const styles = StyleSheet.create({
// //     txt: {
// //         textAlign: 'center',
// //         textAlignVertical: 'center',
// //         color: 'white',
// //         fontSize: 30,
// //     }
// // });
// // export default StackNavigator ({
// //     Home:{ screen: SampleFlatList},
// // });
// //
