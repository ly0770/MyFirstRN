
import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    SectionList,
    Dimensions,
    TouchableHighlight,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import DetailsPage from './DetailsPage';
import Poster from './Poster';
import CategoryCell from './CategoryCell';

let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;
let ITEM_HEIGHT = SCREEN_HEIGHT/3;

class CategoryList extends Component {
           // alert('See More Press!');
    _renderItem = (info) => {
        return <CategoryCell data={info.item.list}/>
    };
    _seeMorePress = () => {
        // navigation.navigate('Details')
        const { navigate } = this.props.navigation;
        navigate('Details',{ title: 'Recent Videos' });
    }


    _sectionComp = (info) => {
        let txt = info ? info.section.name : '';
        return(
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>{txt}</Text>
                <TouchableHighlight onPress={this._seeMorePress} underlayColor='rgba(34, 26, 38, 0.1)'>
                    <Text style={styles.sectionHeaderButton}>See More ></Text>
                </TouchableHighlight>
            </View>
        )
    };


    render() {
        // let sections = [
        //     { key: "Recent Videos", data: [{ title: "阿童木" }] },
        //     { key: "Most Viewed Videos", data: [{ title: "表哥" }] },
        // ];
        let sections = this.props.data ? this.props.data : [];
        let posters = this.props.posters? this.props.posters : [];
        console.log(sections);
        return (
            <View style={{ flex: 1 }}>
                <SectionList
                    ListHeaderComponent={<Poster style={styles.poster} data={posters}/>}
                    renderItem={this._renderItem}
                    sections={sections}
                    renderSectionHeader={this._sectionComp}
                    ItemSeparatorComponent={() => <View><Text></Text></View>}
                />
            </View>
        );
    }
}
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            posters: [],
        };
    }
    static navigationOptions = ({ navigation }) => {
        let _nextPage = () => {
            navigation.navigate('Details')
        };

        return {
            headerTitle: 'Home',
            // headerRight:
            //     (
            //         <Button
            //             title='Details'
            //             color='#fff'
            //             onPress={_nextPage}
            //         />
            //     ),
        }
    };
    _loadData = () => {
         return fetch('https://bibclub.tv/api_public/homePage/')
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.code == 200) {
                    let sectionList = [];
                    let posterList = [];
                    for (let i=0; i<responseJson.data.length; i++) {
                        let data = responseJson.data[i];
                        if (data.type === 'recent_videos') {
                            sectionList.push({name: data.name, data: [{ list: data.videos}]});
                        } else if (data.type === 'most_viewed') {
                            sectionList.push({name: data.name, data: [{ list: data.videos}]});
                        } else if (data.type === 'editors_pick') {
                            posterList = data.videos;
                        }
                    }
                    this.setState({ dataSource: sectionList, posters: posterList });
                }

            })
            .catch((error) => {
                console.error(error);
            });
    };

    componentDidMount() {
        this._loadData();
    }

    render() {
        return (
            <View style={styles.container}>
                <CategoryList style={styles.category}
                              data={this.state.dataSource}
                              posters={this.state.posters}
                              navigation={this.props.navigation}
                              />
            </View>
        );
    };
}


const HomeStack = StackNavigator (
    {
        Home:{ screen: HomePage },
        Details:{ screen: DetailsPage},
    },
    {
        initialRouteName: 'Home',
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252938',
    },
    category: {
        flex: 1
    },
    poster: {
        flex: 1,
        height: ITEM_HEIGHT,

    },
    sectionHeader: {
        flex: 1,
        flexDirection: 'row',
        height: 35,
        backgroundColor: '#0f1116',
    },
    sectionHeaderText: {
        flex: 1,
        textAlign: 'left',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 15,
        marginLeft:5,
        marginTop:8,
        fontWeight:'bold',
    },
    sectionHeaderButton: {
        // display:'flex',
        flex: 1,
        fontSize: 14,
        color: 'red',
        textAlignVertical: 'center',
        marginTop: 8,
        marginRight:5,
        fontStyle: 'italic',
    }

});

export default HomeStack;