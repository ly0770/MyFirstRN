//Navigator基类，如何传入参数？？？
import React from 'react';
import { StackNavigator } from 'react-navigation';

const BaseNavigator = StackNavigator (
    {},
    {
        navigationOptions: {
            backgroundColor: '#738294'
        }
    }
);

export default BaseNavigator;