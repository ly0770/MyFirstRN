/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class LogoTitle extends Component {
    render() {
        return (
            <Image
                // source={require('./xxxx.png')}
                style={{ backgroundColor:'#fff', width: 30, height: 30}}
            />
        );
    }
}

class ModalScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignment: 'center', justifyContent: 'center'}}>
                <Text style={{ fontSize: 30}}>This is a modal!</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Dismiss"
                />
            </View>
        );
    }
}
class HomeScreen extends Component {
    static navigationOptions = ({ navigation })=> {
        const params = navigation.state.params || {};

        return {
            headerTitle: <LogoTitle/>,
            headerLeft: (
                <Button
                    onPress={() => navigation.navigate('MyModal')}
                    title="Modal"
                    color="#fff"
                />
            ),
            headerRight: (
                <Button
                    onPress={params.increaseCount}
                    title="+1"
                    color="#fff"
                />
            ),
        };

    };
    componentWillMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }
    state = {
        count: 0,
    };

    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };
    //homescreen的navigationOptions优先级高于StackNavigator的navigationOptions
    // static navigationOptions = {
    //     headerTitle: <LogoTitle />, //headerTitle优先级高于title
    //     // title: 'Home',
    //     headerRight: (
    //         <Button
    //             onPress={() => alert('This is right button!')}
    //             title="Info"
    //             color="#fff"
    //         />
    //     ),
    //     headerStyle: {
    //         backgroundColor: '#f4511e'
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //         fontWeight: 'bold',
    //     },
    //
    // };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Text>Count: {this.state.count}</Text>
                <Button
                    title="Go to Profile"
                    onPress={()=>this.props.navigation.navigate('Profile', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                        title: 'Profile',
                    })}
                />
            </View>
        );
    }
}

class ProfileScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: params ? params.title : 'No title',
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        }
    };
    // static navigationOptions = {
    //     title: 'Profile',
    // };

    render() {
        const { params } = this.props.navigation.state;
        const itemId = params ? params.itemId : null;
        const otherParam = params ? params.otherParam : null;
        const title = params ? params.title: null;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Profile Screen</Text>
                <Text> itemId: {JSON.stringify(itemId)}</Text>
                <Text> otherParam: {JSON.stringify(otherParam)}</Text>
                <Text> title: {JSON.stringify(title)}</Text>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({title: 'Updated!'})}
                    // title="Update the title"
                    // onPress={() => this.props.navigation.setParams({otherParam: 'Change Title'})}
                />
            </View>
        );
    }
}

const MainStack =  StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Profile: {
            screen: ProfileScreen,
        },
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#839204'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const RootStack = StackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        MyModal: {
            screen: ModalScreen,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);


export default class App extends Component {
    render() {
        return <RootStack />;
    }
}



// import React, { Component } from 'react';
// import {
//   StackNavigator,
// } from 'react-navigation';
// import {
//     Button,
//     Text
// } from 'react-native'
//
//
// class MainScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome, this is main page',
//   };
//
//   render() {
//     const {navigate} = this.props.navigator;
//     return (
//         <Button
//           title="Go to Jane's Profile"
//           onpress={() => navigate('Profile', {name: 'Jane'})}
//         />
//     )
//   }
// }
//
// class ProfileScreen extends React.Component {
//     static navigationOptions = {
//         title: 'This is Janes Profile page'
//     };
//
//     render() {
//         return (
//             <Text>This is Jane's Profile</Text>
//         )
//     }
// }
// const App = StackNavigator({
//     Main:{screen: MainScreen},
//     Profile:{screen: ProfileScreen},
// },{
//     initialRouteName: 'Main'
// });
//
// export default App;

// import  PropTypes  from 'prop-types'
// import {
//     NavigatorIOS,
//     Text,
//     View,
//     TouchableHighlight,
//     Button,
// } from 'react-native';
//
// class NavigatorIOSApp extends Component {
//     render () {
//         return (
//             <NavigatorIOS
//                 initialRoute={{
//                     component: MyScene,
//                     title: 'My Initial Scene',
//                     passProps: { myProp: 'foo' },
//                     // backButtonTitle: 'Forward',
//                     translucent: false,
//
//                 }}
//                 // renderScene={(route,navigator) => { // 将板块生成具体的组件
//                 //     let Component = route.component;// 获取路由内的板块
//                 //     return <Component {...route.params} navigator={navigator} />    // 根据板块生成具体组件
//                 //
//                 // }}
//
//                 style={{flex: 1}}
//             />
//
//         );
//     }
// }
// class MyScene extends Component {
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         navigator: PropTypes.object.isRequired,
//     }
//
//     constructor(props, context) {
//         super(props, context);
//         this._onForward = this._onForward.bind(this);
//         // this._onBack = this._onBack.bind(this);
//     }
//
//     _onForward() {
//         this.props.navigator.push({
//             component: MyView,
//             title: 'Scene' ,
//         });
//     }
//     // _onBack = () => {
//     //     this.props.navigator.pop();
//     // }
//
//
//     render() {
//         return (
//             // console.log(this.props.title);
//             <View>
//                 <Text>Current Scene: { this.props.title }</Text>
//                 <TouchableHighlight onPress={this._onForward}>
//                     <Text>Tap me to load the next scene</Text>
//                 </TouchableHighlight>
//                 {/*<Button title='click me' onPress={()=>{this._onForward()}} />*/}
//             </View>
//         )
//     }
// }
//
// class MyView extends Component {
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         navigator: PropTypes.object.isRequired,
//     }
//     _handleBackPress() {
//         this.props.navigator.pop();
//     }
//
//     _handleNextPress(nextRoute) {
//         this.props.navigator.push(nextRoute);
//     }
//
//     render() {
//         const nextRoute = {
//             component: MyView,
//             title: 'Bar That',
//             passProps: { myProp: 'bar' }
//         };
//         return(
//             <TouchableHighlight onPress={() => this._handleNextPress(nextRoute)}>
//                 <Text style={{marginTop: 200, alignSelf: 'center'}}>
//                     See you on the other nav {this.props.title}!
//                 </Text>
//             </TouchableHighlight>
//         );
//     }
// }
//
// class NavvyIOS extends Component {
//     _handleNavigationRequest() {
//         this.refs.nav.push({
//             component: MyView,
//             title: 'Genius',
//             passProps: { myProp: 'genius' },
//         });
//     }
//
//     render() {
//         return (
//             <NavigatorIOS
//                 ref='nav'
//                 initialRoute={{
//                     component: MyView,
//                     title: 'Foo This',
//                     passProps: { myProp: 'foo' },
//                     rightButtonTitle: 'Add',
//                     onRightButtonPress: () => this._handleNavigationRequest(),
//                 }}
//                 style={{flex: 1}}
//             />
//         );
//     }
// }
//
// export default NavigatorIOSApp;



// AppRegistry.registerComponent('App',()=>App);
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
