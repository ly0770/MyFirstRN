import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableHighlight,
    ImageBackground,
    StyleSheet,
    Dimensions,

} from 'react-native';
let SCREEN_WIDTH = Dimensions.get('window').width;
let Space = 5;
let CellWidth = (SCREEN_WIDTH - Space*5)/4;
let CellHeight = CellWidth/3*4;

class DetailsPage extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.state.params.title,
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
        };
    }
    _onPress = (item) => {
        console.log(item);
    };
    _renderItem = ({item, separators}) => {
        let pic = item.video.thumbs.default;
        let title = item.video.title;
        return <TouchableHighlight
            onPress={() => this._onPress(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <ImageBackground source={{uri: pic}}
                             style={styles.thumbnail}>
                <View style={styles.overlayView}/>
                <Text style={styles.overlayText}>{title}</Text>
            </ImageBackground>
        </TouchableHighlight>
    };

    _loadData = () => {
        return fetch('https://bibclub.tv/api_public/getVideos/?sort=recent_videos&page=1')
            .then((response) => response.json())
            .then((responseJSON) => {
                if (responseJSON.code === '200') {
                    this.setState({ dataSource: responseJSON.data });
                }

            }).catch((error) => {
                console.log(error);
            });
    };
    componentDidMount() {
        this._loadData();
    }
    render() {
        return (
            <FlatList style={styles.container}
                      renderItem={this._renderItem}
                      data={this.state.dataSource}
                      numColumns={4}

            />
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252938',
    },

    thumbnail:{
        flex: 1,
        minHeight: CellHeight,
        minWidth: CellWidth,
        marginLeft: Space,
        marginTop: Space,
        justifyContent: 'flex-end',

    },
    overlayView:{
        flex: 1,
        justifyContent: 'flex-start',
        minWidth:CellWidth,
        maxWidth:CellWidth,
        maxHeight:30,
        backgroundColor: 'black',
        opacity: 0.7,
        position:'relative',
    },
    overlayText:{
        flex: 1,
        color: 'white',
        fontSize:12,
        position:'absolute',
        height:30,
    },
});

export default DetailsPage;