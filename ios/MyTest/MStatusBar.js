//通过注册通知改变StatusBar的颜色和状态

import React, { Component } from 'react';
import {
    Text,
    StatusBar,
    StyleSheet,
    Button
} from 'react-native';
import {
    SafeAreaView,
    StackNavigator,
} from 'react-navigation';

class Screen1 extends Component {
    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor('6a51ae');
        });
    }
    componentWillUnmount() {
        this._navListener.remove();
    }
    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#6a51ae"
                />
                <Text style={[{ color: '#fff' }]}>
                    Light Screen
                </Text>
                <Button
                    title="Next screen"
                    onPress={() => this.props.navigation.navigate('Screen2')}
                    color="#fff"
                />
            </SafeAreaView>
        );
    }
}

class Screen2 extends Component {
    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#ecf0f1');
        });
    }

    componentWillUnmount() {
        this._navListener.remove();
    }
    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
                {/*<StatusBar*/}
                {/*barStyle="dark-content"*/}
                {/*backgroundColor="#ecf0f1"*/}
                {/*/>*/}
                <Text style={styles.paragraph}>
                    Dark Screen
                </Text>
                <Button
                    title="Next screen"
                    onPress={() => this.props.navigation.navigate('Screen1')}
                />
            </SafeAreaView>
        );
    }
}
export default StackNavigator({
    Screen1: {
        screen: Screen1,
    },
    Screen2: {
        screen: Screen2,
    },
}, {
    headerMode: 'none',
});

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

// import React, { Component } from 'react';
// import {
//     Text,
//     StatusBar,
//     StyleSheet,
//     Button
// } from 'react-native';
// import {
//     SafeAreaView,
//     StackNavigator,
// } from 'react-navigation';
//
// class Screen1 extends Component {
//     componentDidMount() {
//         this._navListener = this.props.navigation.addListener('didFocus', () => {
//             StatusBar.setBarStyle('light-content');
//             StatusBar.setBackgroundColor('6a51ae');
//         });
//     }
//     componentWillUnmount() {
//         this._navListener.remove();
//     }
//     render() {
//         return (
//             <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
//                 <StatusBar
//                     barStyle="light-content"
//                     backgroundColor="#6a51ae"
//                 />
//                 <Text style={[{ color: '#fff' }]}>
//                     Light Screen
//                 </Text>
//                 <Button
//                     title="Next screen"
//                     onPress={() => this.props.navigation.navigate('Screen2')}
//                     color="#fff"
//                 />
//             </SafeAreaView>
//         );
//     }
// }
//
// class Screen2 extends Component {
//     componentDidMount() {
//         this._navListener = this.props.navigation.addListener('didFocus', () => {
//             StatusBar.setBarStyle('dark-content');
//             StatusBar.setBackgroundColor('#ecf0f1');
//         });
//     }
//
//     componentWillUnmount() {
//         this._navListener.remove();
//     }
//     render() {
//         return (
//             <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
//                 {/*<StatusBar*/}
//                 {/*barStyle="dark-content"*/}
//                 {/*backgroundColor="#ecf0f1"*/}
//                 {/*/>*/}
//                 <Text style={styles.paragraph}>
//                     Dark Screen
//                 </Text>
//                 <Button
//                     title="Next screen"
//                     onPress={() => this.props.navigation.navigate('Screen1')}
//                 />
//             </SafeAreaView>
//         );
//     }
// }
// export default StackNavigator({
//     Screen1: {
//         screen: Screen1,
//     },
//     Screen2: {
//         screen: Screen2,
//     },
// }, {
//     headerMode: 'none',
// });
//
// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     }
// });