import React from 'react';
import {
    TabNavigator,
    TabBarBottom
} from 'react-navigation';
import ProfileStack from './ProfileStack/ProfilePage';
import HomeStack from './HomeStack/HomePage';
import TrendingStack from './TrendingStack/TrendingPage';
const RootTab = TabNavigator(
    {
        Home:{ screen: HomeStack },
        Trending:{ screen: TrendingStack},
        Profile:{ screen: ProfileStack },
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);

export default RootTab;