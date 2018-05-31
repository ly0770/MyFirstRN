import React, { Component } from 'react';
import HomeStack from './ios/MyCode/Base/BaseNavigation'
import RootNav from './ios/Nav+Tab/RootNav';
export default class App extends Component {
    render() {
        console.disableYellowBox = true;//去掉黄屏警告
        return <HomeStack />;
    }
}



