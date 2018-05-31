import React from 'react';
import {
    TabNavigator,
    TabBarBottom,
} from 'react-navigation';
import HomePage from '../Home/HomePage';
import TrendingPage from '../Trending/TrendingPage';
import SearchPage from '../Search/SearchPage';
import CategoryPage from '../Category/CategoryPage';

const RootTab = TabNavigator(
    {
        Home:{ screen: HomePage },
        Trending:{ screen: TrendingPage},
        Search:{ screen: SearchPage },
        Category:{ screen: CategoryPage },
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