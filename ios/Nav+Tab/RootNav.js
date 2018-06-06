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
        };
    }

    timer = setTimeout(() => this.setState({ animating:false, hidden:false, barStyle:'dark-content',}), 1000);

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
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
    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}
                                  behavior="padding"
                                  enabled={true}
                                  keyboardVerticalOffset={50}
                >
                <Text style={{flex: 1, backgroundColor: 'yellow', maxHeight: 350, width: 300}}/>
                <TextInput style={{flex: 1, backgroundColor: 'gray', maxHeight: 20, width: 300}}/>
            </KeyboardAvoidingView>
            // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            //
            //     {/*<Button title={'Picker'} onPress={this._showPicker}/>*/}
            //     {/*<Text>{'DateTime'+' '+this.state.chosenDate}</Text>*/}
            //
            //     {/*<StatusBar backgroundColor="blue"*/}
            //                {/*barStyle={this.state.barStyle}*/}
            //                {/*animated={true}*/}
            //                {/*hidden={this.state.hidden}*/}
            //                {/*showHideTransition={'slide'}*/}
            //
            //     {/*/>*/}
            //
            //     {/*<ActivityIndicator animating={this.state.animating}*/}
            //                        {/*size={'large'}*/}
            //                        {/*hidesWhenStopped={true}*/}
            //                        {/*color={'black'}*/}
            //     {/*/>*/}
            //
            //     {/*<DatePickerIOS style={{ height: 20, width: 300, backgroundColor: 'gray' }}*/}
            //                    {/*date={ this.state.chosenDate }*/}
            //                    {/*// maximumDate={}*/}
            //                    {/*minimumDate={this.state.chosenDate}*/}
            //                    {/*minuteInterval={30}*/}
            //                    {/*mode={'datetime'}*/}
            //                    {/*onDateChange={(newDate) => this.setState({chosenDate: newDate})}*/}
            //
            //     {/*/>*/}
            //
            //     {/*<Picker*/}
            //         {/*style={{ height: 20, width: 150, backgroundColor: 'gray' }}*/}
            //         {/*itemStyle={{ color: 'tomato'}}*/}
            //         {/*selectedValue={this.state.language}*/}
            //         {/*onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue, selectedIndex:itemIndex})}>*/}
            //         {/*<Picker.Item label="Java" value="java" />*/}
            //         {/*<Picker.Item label="JavaScript" value="js" />*/}
            //         {/*<Picker.Item label="Objective-C" value="OC" />*/}
            //         {/*<Picker.Item label="Swift" value="Swift" />*/}
            //         {/*<Picker.Item label="Python" value="Python" />*/}
            //         {/*<Picker.Item label="Go" value="Go" />*/}
            //     {/*</Picker>*/}
            //
            //     {/*<WebView source={{uri: 'https://github.com/facebook/react-native'}}*/}
            //     {/*onLoadStart={this._onLoadStart}*/}
            //     {/*onLoad={this._onLoad}*/}
            //     {/*onLoadEnd={this._onLoadEnd}*/}
            //     {/*onShouldStartLoadWithRequest={this._onShouldStartLoadWithRequest}*/}
            //     {/*startInLoadingState={false}*/}
            //     {/*renderLoading={this._renderLoading}*/}
            //     {/*contentInset={{top:10, left:10, bottom:10, right: 10}}*/}
            //     {/*decelerationRate={'fast'}*/}
            //     {/*/>*/}
            // </View>

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