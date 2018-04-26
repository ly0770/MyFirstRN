import React from 'react';
import {
    TabNavigator,
    TabBarBottom
} from 'react-navigation';
import ProfileStack from './ProfileStack/ProfilePage';
import HomeStack from './HomeStack/HomePage';

const RootTab = TabNavigator(
    {
        Home:{ screen: HomeStack },
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