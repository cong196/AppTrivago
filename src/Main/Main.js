import React,{ Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, TouchableWithoutFeedback,
    TextInput, FlatList
} from 'react-native';
import PopupDialog, { SlideAnimation, DialogTitle, DialogButton } from 'react-native-popup-dialog';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import global from '../global';
import HeaderFlatList from './HeaderFlatList';
import MapViewComponent from './MapView';
import opemenu from '../img/openmenu.png';
import icsearch from '../img/Search.png';
import icMap from '../img/Map.png';
import icAc from '../img/Account.png';
import imgex from '../img/imgexam.png';
import s1 from '../img/sad.png';
import s2 from '../img/s2.png';
import s3 from '../img/s3.png';
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
            sortIndex: 0,
            page: 1,
            load1: true
        };
        global.searchData = this.loadDataFromSearch.bind(this);
        global.loctiennghi = '0000000000';
        global.locgiamax = 0;
        global.locgiamin = 0;
        global.isdangnhap = false;
        global.quyen = 0;
        global.locsao = '';
    }

    componentDidMount() {
        this.loadData(this.state.page);
       
   }
    
    refresh() {
        this.setState({ page: 1, mang: [], load1: true });
        this.loadDataRefresh();
    }

    loadDataRefresh(){
        this.setState({
            refresh: true
        })
        fetch("http://192.168.1.173:8080/Demo/getListKhachSan.php?trang=1")
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                mang: responseJson,
                refresh: false,
                page: 1,
                load1: true
            });
        })
        .catch((e)=>{console.log(e)});
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
    loadDataFromSearch(page){
        this.setState({
            refresh: true,
        })
        fetch("http://192.168.1.173:8080/Flatlist/demo3.php?trang="+page)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                mang: responseJson,
                refresh: false,
                page: 3,
            });
        })
        .catch((e)=>{console.log(e)});
    }
    loadMore() {
        this.loadData(this.state.page);
    }
    onSelect(index) {
        this.popupDialog.dismiss(() => {
          });
          this.setState({ sortIndex: index });
        
        this.refresh();
    }
    showModal = () => this.setState({ isModalVisible: true });
    loadData(page) {
        if (this.state.load1) {
                this.setState({
                    refresh: true
                })
                fetch("http://192.168.1.173:8080/Demo/getListKhachSan.php?trang=" + page)
                .then((response) => response.json())
                .then((responseJson) => {
                    if(responseJson.length > 0)
                        this.setState({
                            mang: this.state.mang.concat(responseJson),
                            refresh: false,
                            page: this.state.page + 1
                        });
                    else{
                        this.setState({ 
                            refresh: false,
                        });
                    }
                })
                .catch((e) => { console.log(e) });
        }
        else{
            alert('load lọc');
        }
        
    }
    testt(){
        alert(this.state.page);
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
                                onFocus = { () => { navigate('SearchScreen', {navtigation: navigate })}}
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

                <TouchableOpacity
                    onPress={() => { this.testt() }}
                >
                    <Text>Load Page 3</Text>
                </TouchableOpacity>

                <View style={{height: this.state.maxheight }}>
                <FlatList
                    onEndReachedThreshold={0.2}
                    onEndReached={() => { this.loadMore() }}
                    ref="ds"
                    ListHeaderComponent={(<HeaderFlatList />)}
                    refreshing={this.state.refresh}
                    onRefresh={() => { this.refresh() }}
                    data={this.state.mang}
                    renderItem={({ item }) =>
                        <View style={styles.rowFlatlist}>
                            <TouchableWithoutFeedback
                                onPress={() => { 
                                    global.idKS = item.key;
                                    navigate('DetailScreen', { name: item.ten, id: item.key })
                                    }}
                            >
                             <View style={{ height: width / 3, flexDirection: 'row', backgroundColor: 'white', borderRadius: 5 }}>
                                        <Image source={{ uri: item.hinh }} style={{ height: width / 3, width: width / 3, flex: 1 }}/>
                                        <View style={{ flex: 2 }}>
                                            <View style={{ flex: 1 }}>
                                                <View style={{ flex: 1, paddingLeft: 5, paddingVertical: 2, paddingRight: 2 }}>
                                                    <Text numberOfLines={1} style={{ fontWeight: 'bold' }}>{item.ten}</Text>
                                                    <Text numberOfLines={1}>{item.diachi}</Text>
                                                </View>
                                                <View style = {{ flex: 2, borderTopWidth: 1, borderTopColor: '#e9ebee', flexDirection: 'row' }}>
                                                    <View style={{ flex: 1 }}>
                                                        <View style={{ flex: 1, paddingHorizontal: 2, paddingVertical: 2, flexDirection: 'row' }}>
                                                            {/* <Image resizeMode={'contain'} source={item.key%2===0 ? s1: s3} style={{ flex: 1 }} /> */}
                                                            <View style={{ flex: 2, paddingVertical: 2 }}>
                                                                <Image resizeMode={'contain'} source={item.key % 2 === 0 ? s1 : s3} style={{ flex: 1 }} />
                                                            </View>
                                                            
                                                            <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                                                                <Text style={{ fontSize: 12 }}>91/100</Text>
                                                                <Text style={{ fontSize: 10 }}>135 reviews</Text>
                                                            </View>
                                                        </View>
                                                        <View style={{ flex: 1, borderTopWidth: 1, borderTopColor: '#e9ebee' }}>
                                                        </View>
                                                    </View>
                                                    <View style={{ flex: 1, borderLeftWidth: 1, borderLeftColor: '#e9ebee'}}>
                                                        <View style={{ flex: 1, paddingHorizontal: 2, paddingVertical: 2 }}>
                                                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                                <Text style={{ fontSize: 10 }}>Giá từ</Text>
                                                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#248f24' }}>{item.gia}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                            <TouchableOpacity
                                                                
                                                            >
                                                                <Text style = {{ backgroundColor: '#248f24', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 3, color: 'white' }}>View Details</Text>
                                                            </TouchableOpacity>
                                                        </View>

                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                               
                            </TouchableWithoutFeedback>
                        </View>
                    }
                />
                
                    <View style={{ backgroundColor: 'white', height: this.state.heightbottom }}>
                        <TouchableOpacity
                            onPress={() => { this.popupDialog.show() }}
                        >
                        <View>
                            <Text>Sắp xếp theo khoảng cách</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: this.state.heigthmapview }}>
                        <MapViewComponent />
                    </View>
                </View>
                <PopupDialog
                    width={0.9 * width}
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                    dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
                    dialogTitle={<DialogTitle title="Sort by" />}
                    
                >
                    <View style={{ margin: 10 }}>
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
        paddingHorizontal: 5,
        paddingVertical: 2.5
        //borderBottomWidth: 1
    },
    itemBottom: {
        backgroundColor: 'white'
    }
    
})  
