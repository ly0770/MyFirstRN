import React, { Component } from 'react';
import {
    StackNavigator,
    TabNavigator,
    TabBarBottom,
} from 'react-navigation';
import {
    View,
    Text,
    Button,
    ActivityIndicator,
    StatusBar,
    Picker,
    DatePickerIOS,
    WebView,
    KeyboardAvoidingView,
    TextInput,
    ActionSheetIOS,
    Alert,
    AlertIOS,
    AppState,
    AsyncStorage,


} from 'react-native';

export default class RootNav extends Component {

    render() {
        return (
            <MainStack/>
        );
    }
}

class HomePage extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Home',
            headerRight:(
                <Button title='Details'
                        color='#000'
                        onPress={() => {navigation.navigate('Details')}}/>
            ),
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            animating:true,
            hidden:true,
            barStyle:'light-content',
            language:'Swift',
            selectedIndex:'0',
            chosenDate: new Date(),
            currentState: AppState.currentState,
        };
    }

    timer = setTimeout(() => this.setState({ animating:false, hidden:false, barStyle:'dark-content',}), 1000);

    componentDidMount() {
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }



    // _onLoadStart = () => {
    //     alert('onLoadStart');
    // };
    // _onLoad = () => {
    //     alert('onLoad');
    // };
    // _onLoadEnd = () => {
    //     alert('onLoadEnd');
    // };
    // _onShouldStartLoadWithRequest = () => {
    //     alert('onShouldStartLoadWithRequest');
    //     return true;
    // };
    // _renderLoading = () => {
    //     return <Text>renderLoading</Text>
    // };
    _showActionSheet = () => {
        ActionSheetIOS.showActionSheetWithOptions(
            {
                title: 'ActionSheet',
                message: 'I am a ActionSheet',
                options: ['Option 1', 'Cancel' , 'Option 2', 'Delete'],
                cancelButtonIndex: 1,
                destructiveButtonIndex: 3,
            },
            (buttonIndex) => {
                //buttonIndex是所点击button在options数组中的index
                alert(buttonIndex);
            },
        )
    };
    _showShareActionSheet = () => {
        ActionSheetIOS.showShareActionSheetWithOptions(
            {
                url: 'https://www.baidu.com/',
                message: 'message to go with the shared url',
                subject: '试一下',
                tintColor: 'tomato',
            },
            (error) => {
                alert(error);
            },
            (success, method) => {
                alert(success + ' '+ method);
            },
        )
    };
    _showAlert = () => {
        Alert.alert(
            'Show Alert',
            'This is a message',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: true }
        );
    };
    _askMe = (data) => {
        console.log(data);
    };
    _showAlertIOS = () => {
        AlertIOS.prompt(
            'Show AlertIOS',
            'This is a message',
            [
                {text: 'Ask me later', onPress:this._askMe},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Dismiss', onPress: () => console.log('OK Pressed'), style: 'destructive'},
            ],
            'login-password',
        );
    };

    _handleAppStateChange = () => {
        this.setState({currentState:AppState.currentState})
    };

    _addEventListener = () => {
        AppState.addEventListener('change', this._handleAppStateChange);
    };
    _removeEventListener = () => {
        AppState.removeEventListener('change', this._handleAppStateChange);
    };

    _asyncStorageSetItem = () => {
        AsyncStorage.setItem(
            'name',
            'Tiya',
            (error) => {
                if (error !== null) {
                    alert(error);
                }
            },
        );
    };
    _asyncStorageGetItem = () => {
        let key = 'name';
        AsyncStorage.getItem('name',
            (error, value) => {
                if (error !== null) {
                    alert('error:' + error);
                }
                alert(key +': '+ value);
            },
        );
    };
    _asyncStorageGetAllKeys = () => {
        AsyncStorage.getAllKeys(
            (error,key) => {
                if (error !== null) {
                    alert('error:' + error);
                }
                alert('key: '+key);
            },
        );
    };
    _asyncStorageRemoveItem = () => {
        AsyncStorage.removeItem(
            '@MySuperStore:key',
            (error) => {
                if (error !== null) {
                    alert(error);
                }
            },
        );
    };
    _asyncStorageClear = () => {
        AsyncStorage.clear();
    };

    render() {
        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button title={'AsyncStorage set item'} onPress={this._asyncStorageSetItem}/>
                <Button title={'AsyncStorage get item'} onPress={this._asyncStorageGetItem}/>
                <Button title={'AsyncStorage get all keys'} onPress={this._asyncStorageGetAllKeys}/>
                <Button title={'AsyncStorage remove item'} onPress={this._asyncStorageRemoveItem}/>
                <Button title={'AsyncStorage clear'} onPress={this._asyncStorageClear}/>
                {/*<Button title={'ShowActionSheet'} onPress={this._showActionSheet}/>*/}
                {/*<Button title={'ShowShareActionSheet'} onPress={this._showShareActionSheet}/>*/}
                {/*<Button title={'Alert'} onPress={this._showAlert}/>*/}
                {/*<Button title={'AlertIOS'} onPress={this._showAlertIOS}/>*/}
                {/*<Text>{'Current State:'+this.state.currentState}</Text>*/}
                {/*<Button title={'Add AppState Listener'} onPress={this._addEventListener}/>*/}
                {/*<Button title={'Remove AppState Listener'} onPress={this._removeEventListener}/>*/}

                {/*<KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}*/}
                {/*behavior="padding"*/}
                {/*enabled={true}*/}
                {/*keyboardVerticalOffset={50}*/}
                {/*>*/}
                {/*<Text style={{flex: 1, backgroundColor: 'yellow', maxHeight: 350, width: 300}}/>*/}
                {/*<TextInput style={{flex: 1, backgroundColor: 'gray', maxHeight: 20, width: 300}}/>*/}
                {/*</KeyboardAvoidingView>*/}

                {/*<Text>{'DateTime'+' '+this.state.chosenDate}</Text>*/}

                {/*<StatusBar backgroundColor="blue"*/}
                           {/*barStyle={this.state.barStyle}*/}
                           {/*animated={true}*/}
                           {/*hidden={this.state.hidden}*/}
                           {/*showHideTransition={'slide'}*/}

                {/*/>*/}

                {/*<ActivityIndicator animating={this.state.animating}*/}
                                   {/*size={'large'}*/}
                                   {/*hidesWhenStopped={true}*/}
                                   {/*color={'black'}*/}
                {/*/>*/}

                {/*<DatePickerIOS style={{ height: 20, width: 300, backgroundColor: 'gray' }}*/}
                               {/*date={ this.state.chosenDate }*/}
                               {/*// maximumDate={}*/}
                               {/*minimumDate={this.state.chosenDate}*/}
                               {/*minuteInterval={30}*/}
                               {/*mode={'datetime'}*/}
                               {/*onDateChange={(newDate) => this.setState({chosenDate: newDate})}*/}

                {/*/>*/}

                {/*<Picker*/}
                    {/*style={{ height: 20, width: 150, backgroundColor: 'gray' }}*/}
                    {/*itemStyle={{ color: 'tomato'}}*/}
                    {/*selectedValue={this.state.language}*/}
                    {/*onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue, selectedIndex:itemIndex})}>*/}
                    {/*<Picker.Item label="Java" value="java" />*/}
                    {/*<Picker.Item label="JavaScript" value="js" />*/}
                    {/*<Picker.Item label="Objective-C" value="OC" />*/}
                    {/*<Picker.Item label="Swift" value="Swift" />*/}
                    {/*<Picker.Item label="Python" value="Python" />*/}
                    {/*<Picker.Item label="Go" value="Go" />*/}
                {/*</Picker>*/}

                {/*<WebView source={{uri: 'https://github.com/facebook/react-native'}}*/}
                {/*onLoadStart={this._onLoadStart}*/}
                {/*onLoad={this._onLoad}*/}
                {/*onLoadEnd={this._onLoadEnd}*/}
                {/*onShouldStartLoadWithRequest={this._onShouldStartLoadWithRequest}*/}
                {/*startInLoadingState={false}*/}
                {/*renderLoading={this._renderLoading}*/}
                {/*contentInset={{top:10, left:10, bottom:10, right: 10}}*/}
                {/*decelerationRate={'fast'}*/}
                {/*/>*/}
            </View>

        );
    }
}
class DetailPage extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray'}}>
                <Text>Detail Page!!!</Text>
            </View>
        );
    }
}

class ProfilePage extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Home',
            headerRight:(
                <Button title='Details'
                        color='#000'
                        onPress={() => {navigation.navigate('Details')}}/>
            ),
        };
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
                <Text>Profile Page!!!</Text>
            </View>
        );
    }
}

const MainTab = TabNavigator(
    {
        Home:{ screen: HomePage },
        Profile:{ screen: ProfilePage },
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

const MainStack = StackNavigator(
    {
        Home: { screen:MainTab },
        Details: { screen:DetailPage},
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'tomato'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
);