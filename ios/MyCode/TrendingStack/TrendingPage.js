import React, { Component } from 'react';
import {
    FlatList,
    View,
    Text,
    TouchableHighlight,
    Dimensions,
    StyleSheet,
    Image,
    ImageBackground,
    Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import DurationLabel from '../Tools/DurationLabel'
let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;
let Cover_Height = SCREEN_WIDTH/16*9;
let Container_Height = Cover_Height + 60;
let Avatar_Space = 10;
let Avatar_Height = Container_Height-Cover_Height-Avatar_Space;
class TrendingCell extends Component {
    _onPressCover = () => {
        alert('Cover Clicked!');
    };
    render() {
        let dataSource = this.props.data;
        console.log(dataSource);
        let coverImgUrl = dataSource.video.thumbs.default;
        let avatarUrl = dataSource.uploader.avatar;
        let title = dataSource.video.title;
        let description = dataSource.video.description;
        let duration = dataSource.video.duration;

        return(
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressCover}
                                    underlayColor='rgba(34, 26, 38, 0.1)'>
                    {/*<Image style={styles.cover} />*/}
                    <ImageBackground style={styles.cover} source={{ uri: coverImgUrl }}>
                        <DurationLabel/>
                    </ImageBackground>

                </TouchableHighlight>
                <View style={styles.detail}>
                    <TouchableHighlight onPress={() => {alert('Avatar Clicked!')}}
                                        underlayColor='rgba(34, 26, 38, 0.1)'>
                        <Image style={styles.avatar} source={{ uri: avatarUrl }} />
                    </TouchableHighlight>

                    <View style={styles.labelView}>
                        <Text style={styles.txtTitle}>{title}</Text>
                        <Text style={styles.txtDescription}>{description}</Text>
                    </View>
                    <Button style={styles.moreBtn}
                            title={'..'}
                            onPress={()=>{alert('More Button Clicked!')}}
                    />
                </View>
            </View>
        );
    }
}
class TrendingPage extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Trending',

        }
    };
    constructor(props) {
        super(props);
        this.state = {
            dataSource:[],
        };

    }
    componentDidMount() {
        this._loadData();
    }
    _loadData = () => {
        return fetch('https://bibclub.tv/api_public/getVideos/?sort=trending&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.code == 200) {
                    let dataSource = responseJson.data;
                    this.setState({ dataSource: dataSource});
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    _renderItem = (item) => {
         return <TrendingCell data={item.item}/>;

    };
    render() {
        return(
            <FlatList style={styles.list}
                      renderItem={this._renderItem}
                      data={this.state.dataSource}
            />


        );
    }

}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: '#252938',
    },
    container:{
        flex: 1,
        minHeight:Container_Height,
        // backgroundColor: 'grey'
    },
    cover:{
        flex: 1,
        minHeight: Cover_Height,
        backgroundColor: 'grey',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        // borderRadius:10,
    },
    detail:{
        flex:1,
        flexDirection: 'row',
        minHeight: Avatar_Height+Avatar_Space*2,
    },
    avatar:{
        flex: 1,
        // maxHeight:Avatar_Height,
        // maxWidth:Avatar_Height,
        // minWidth:Avatar_Height,
        maxHeight:Avatar_Height,
        maxWidth: Avatar_Height,
        minHeight:Avatar_Height,
        minWidth: Avatar_Height,
        backgroundColor: 'grey',
        marginLeft:Avatar_Space,
        marginRight:Avatar_Space,
        marginTop:Avatar_Space,
        marginBottom:Avatar_Space,
        borderRadius:Avatar_Height/2,
    },
    labelView:{
        flex: 1,
        // backgroundColor: 'red',
        flexDirection: 'column',
        justifyContent: 'space-around',

    },
    moreBtn:{
        flex:1,
        // color:'green',
        width:30,
    },
    txtTitle:{
        flex: 1,
        // backgroundColor: 'tomato',
        maxHeight: (Container_Height-Cover_Height)/2-10,
        marginLeft:10,
        marginRight:10,
        color: 'white',
        marginTop:8,
        fontSize: 16,
    },
    txtDescription:{
        flex: 1,
        maxHeight: (Container_Height-Cover_Height)/2-10,
        marginLeft:10,
        marginRight:10,
        color: 'grey',
        marginBottom:8,
        fontSize: 12,
    },
});

const TrendingStack = StackNavigator(
    {
        Trending:{ screen: TrendingPage },
    },
    {
        initialRouteName: 'Trending',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#232534'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default TrendingStack;

let common_url = 'http://192.168.1.1:8080/';  //服务器地址
let token = '';
/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */
function fetchRequest(url, method, params = ''){
    let header = {
        "Content-Type": "application/json;charset=UTF-8",
        "accesstoken":token  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
    };
    console.log('request url:',url,params);  //打印请求参数
    if(params == ''){   //如果网络请求中带有参数
        return new Promise(function (resolve, reject) {
            fetch(common_url + url, {
                method: method,
                headers: header
            }).then((response) => response.json())
                .then((responseData) => {
                    console.log('res:',url,responseData);  //网络请求成功返回的数据
                    resolve(responseData);
                })
                .catch( (err) => {
                    console.log('err:',url, err);     //网络请求失败返回的数据
                    reject(err);
                });
        });
    }else{   //如果网络请求中没有参数
        return new Promise(function (resolve, reject) {
            fetch(common_url + url, {
                method: method,
                headers: header,
                body:JSON.stringify(params)   //body参数，通常需要转换成字符串后服务器才能解析
            }).then((response) => response.json())
                .then((responseData) => {
                    console.log('res:',url, responseData);   //网络请求成功返回的数据
                    resolve(responseData);
                })
                .catch( (err) => {
                    console.log('err:',url, err);   //网络请求失败返回的数据
                    reject(err);
                });
        });
    }
}