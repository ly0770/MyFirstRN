// import React, { Component } from 'react';
// import RootTab from './ios/MyCode/TabNavigator';
//
// export default class App extends Component {
//     render() {
//         return <RootTab />;
//     }
// }

import React, {
    Component,
} from 'react'
import {
    FlatList,
    View,
    StyleSheet,
    ActivityIndicator,
    Text
} from 'react-native'
import PropTypes from 'prop-types';

export const FlatListState = {
    IDLE: 0,
    LoadMore: 1,
    Refreshing: 2
};
export default class Com extends Component {
    static propTypes = {
        refreshing: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    };
    state = {
        listHeight: 0,
    }

    render() {
        let {ListEmptyComponent,ItemSeparatorComponent} = this.props;
        let refreshing = false;
        let emptyContent = null;
        let separatorComponent = null
        if (ListEmptyComponent) {
            emptyContent = React.isValidElement(ListEmptyComponent) ? ListEmptyComponent : <ListEmptyComponent/>
        } else {
            emptyContent = <Text style={styles.emptyText}>暂无数据下拉刷新</Text>;
        }
        if (ItemSeparatorComponent) {
            separatorComponent = React.isValidElement(ItemSeparatorComponent) ? ItemSeparatorComponent :
                <ItemSeparatorComponent/>
        } else {
            separatorComponent = <View style={{height: 1, backgroundColor: '#D6D6D6'}}/>;
        }
        if (typeof this.props.refreshing === "number") {
            if (this.props.refreshing === FlatListState.Refreshing) {
                refreshing = true
            }
        } else if (typeof this.props.refreshing === "boolean") {
            refreshing = this.props.refreshing
        } else if (typeof this.props.refreshing !== "undefined") {
            refreshing = false
        }
        return <FlatList
            {...this.props}
            onLayout={(e) => {
                let height = e.nativeEvent.layout.height;
                if (this.state.listHeight < height) {
                    this.setState({listHeight: height})
                }}}
            ListFooterComponent={this.renderFooter}
            onRefresh={this.onRefresh}
            onEndReached={this.onEndReached}
            refreshing={refreshing}
            onEndReachedThreshold={this.props.onEndReachedThreshold || 0.1}
            ItemSeparatorComponent={()=>separatorComponent}
            keyExtractor={(item, index) => index}
            ListEmptyComponent={() => <View
                style={{
                    height: this.state.listHeight,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>{emptyContent}</View>}
        />
    }

    onRefresh = () => {
        console.log("FlatList:onRefresh");
        if ((typeof this.props.refreshing === "boolean" && !this.props.refreshing) ||
            typeof this.props.refreshing === "number" && this.props.refreshing !== FlatListState.LoadMore &&
            this.props.refreshing !== FlatListState.Refreshing
        ) {
            this.props.onRefresh && this.props.onRefresh()
        }

    };
    onEndReached = () => {
        console.log("FlatList:onEndReached");
        if (typeof this.props.refreshing === "boolean" || this.props.data.length == 0) {
            return
        }
        if (!this.props.pageSize) {
            console.warn("pageSize must be set");
            return
        }
        if (this.props.data.length % this.props.pageSize !== 0) {
            return
        }
        if (this.props.refreshing === FlatListState.IDLE) {
            this.props.onEndReached && this.props.onEndReached()
        }
    };


    renderFooter = () => {
        let footer = null;
        if (typeof this.props.refreshing !== "boolean" && this.props.refreshing === FlatListState.LoadMore) {
            footer = (
                <View style={styles.footerStyle}>
                    <ActivityIndicator size="small" color="#888888"/>
                    <Text style={styles.footerText}>数据加载中…</Text>
                </View>
            )
        }
        return footer;
    }
}
const styles = StyleSheet.create({
    footerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: 44,
    },
    footerText: {
        fontSize: 14,
        color: '#555555',
        marginLeft: 7
    },
    emptyText: {
        fontSize: 17,
        color: '#666666'
    }
})
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
//                     <FlatList
//                         ref={(flatList)=>this._flatList = flatList}
//                         ListHeaderComponent={this._header}
//                         ListFooterComponent={this._footer}
//                         ItemSeparatorComponent={this._separator}
//                         renderItem={this._renderItem}
//                         ListEmptyComponent={this._emptyComponent}
//                         numColumns ={3}
//                         // columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:0}}
//
//                         // horizontal={true} //numColumns does not support horizontal
//
//                         getItemLayout={(data, index)=>({
//                             length: ITEM_HEIGHT,
//                             offset: (ITEM_HEIGHT+2) * index, //2是ItemSeparatorComponent的高度
//                             index})}
//
//                         //onEndReachedThreshold={5}
//                         //onEndReached={(info)=>{
//                         //console.warn(info.distanceFromEnd);
//                         //}}
//
//                         //onViewableItemsChanged={(info)=>{
//                         //console.warn(info);
//                         //}}
//                         data={data}>
//                     </FlatList>
//                 </View>
//
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     txt: {
//         textAlign: 'center',
//         textAlignVertical: 'center',
//         color: 'white',
//         fontSize: 30,
//     }
// });
// export default StackNavigator ({
//     Home:{ screen: SampleFlatList},
// });
//
