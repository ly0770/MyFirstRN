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
            activeTintColor: '#6de1e5',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#294254',
            inactiveBackgroundColor: '#294254',
            // backgroundColor: '#294254',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);

export default RootTab;