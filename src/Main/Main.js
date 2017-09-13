import React,{ Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, TouchableWithoutFeedback,
    TextInput, FlatList
} from 'react-native';
import PopupDialog, { SlideAnimation, DialogTitle, DialogButton } from 'react-native-popup-dialog';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import HeaderFlatList from './HeaderFlatList';
import MapViewComponent from './MapView';
import opemenu from '../img/openmenu.png';
import icsearch from '../img/Search.png';
import icMap from '../img/Map.png';
import icAc from '../img/Account.png';

const { height, width } = Dimensions.get('window');
const height1 = height/13;
const height2 = height/12;

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: [],
            refresh: false,
            map: true,
            maxheight: height - height1 - height2,
            heightbottom: height1,
            heigthmapview: 0,
            isModalVisible: false,
            sortIndex: 0
        };
    }
    showModal = () => this.setState({ isModalVisible: true })
    refresh() {
        this.loadData();
    }
    clickMap(){
        this.setState({
            map : !this.state.map
        });
        if(this.state.map){
            this.setState({maxheight: 0,heightbottom:0,heigthmapview:height-height1-height2});
        }
        else
            this.setState({maxheight: height-height1-height2,heightbottom: height1,heigthmapview: 0})
    }
    
    onSelect(index){
        this.popupDialog.dismiss(() => {
          });
          this.setState({sortIndex:index});
        this.loadData();
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style = {styles.container}>
                <View style={styles.header}>
                    <View style={{ flex: 1 }}>
                        <TouchableWithoutFeedback
                        onPress={() => { navigate('DrawerOpen') }}
                        >
                            <Image style={styles.imgHeader} source={opemenu} />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ flex: 5 }}>
                        
                            <TextInput 
                                onFocus = { () => { navigate('SearchScreen')}}
                                placeholder='Tìm kiếm'
                                underlineColorAndroid='rgba(0,0,0,0)'
                            />
                       
                    </View>
                    <View style={{ flex: 4, justifyContent: 'space-between', flexDirection: 'row', paddingRight: 5 }}>
                        <Image style={styles.imgHeader} source={icsearch} />
                        <TouchableOpacity
                            onPress={()=>{this.clickMap()}}                        
                        >
                            <Image style={styles.imgHeader} source={icMap} />
                        </TouchableOpacity>
                        <TouchableWithoutFeedback
                            onPress={() => { navigate('AccountScreen', { param: 'Hoang Van Cong' }) }}
                        >
                            <Image style={styles.imgHeader} source={icAc} />
                        </TouchableWithoutFeedback>
                    </View>


                </View>
                <TouchableOpacity
                    onPress={()=>{this.refs.ds.scrollToIndex({animated: true,index:0,viewPosition:0})}}
                >
                    <Text>Up</Text>
                </TouchableOpacity>
                <View style={{height: this.state.maxheight }}>
                <FlatList
                    ref = "ds"
                    ListHeaderComponent = {(<HeaderFlatList />)}
                    refreshing = {this.state.refresh}
                    onRefresh = {()=>{this.refresh()}}
                    data={this.state.mang}
                    renderItem={({ item }) =>
                        <View style={styles.rowFlatlist}>
                            <TouchableWithoutFeedback
                                onPress = {()=>{navigate('DetailScreen')}}
                            >
                                <View>
                                    <Text>{item.key}</Text>
                                    <Text>{item.hoten}</Text>
                                    <Image
                                        style={{width: 50, height: 50}}
                                        source={{uri: item.hinh}}
                                    />
                                    <Text>{item.mota}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    }
                />
                
                    <View
                        style = {{backgroundColor: 'white', height: this.state.heightbottom}}
                    >
                        <TouchableOpacity
                            onPress={() => {this.popupDialog.show()}}
                        >
                        <View>
                            <Text>Sắp xếp theo khoảng cách</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style = {{ height: this.state.heigthmapview }}>
                        <MapViewComponent />
                    </View>
                </View>
                <PopupDialog
                    width= {0.9*width}
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                    dialogAnimation = { new SlideAnimation({ slideFrom: 'bottom' }) }
                    dialogTitle={<DialogTitle title="Sort by" />}
                    
                >
                    <View style = {{ margin: 10}}>
                        <RadioGroup
                            selectedIndex = {0}
                            onSelect = {(index) => {this.onSelect(index)}}
                        >
                            <RadioButton value={'item1'} >
                            <Text>Sort by Distance</Text>
                            </RadioButton>

                            <RadioButton value={'item2'}>
                            <Text>Sort by Popularity</Text>
                            </RadioButton>

                            <RadioButton value={'item3'}>
                                <Text>Focus on Rating</Text>
                            </RadioButton>
                            <RadioButton value={'item4'}>
                                <Text>Focus on Price</Text>
                            </RadioButton>
                            
                        </RadioGroup>
                        
                    </View>
                    

                </PopupDialog>
            </View>
        
        )
    }

    loadData() {

        this.setState({
            refresh: true
        })
        fetch("http://192.168.1.173/Flatlist/demo2.php")
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                mang: responseJson,
                refresh : false
            });
        })
        .catch((e)=>{console.log(e)});
    }
    componentDidMount(){
         this.loadData();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerhiden: {
        height: 0
    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: height / 12,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    imgHeader: {
        width: 25,
        height: 25,
    },
    rowFlatlist: {
        padding:10,
        borderBottomWidth: 1
    },
    itemBottom: {
        backgroundColor: 'white'
    }
    
})  
