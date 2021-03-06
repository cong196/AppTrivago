﻿import React,{ Component } from 'react';
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
const height1 = height / 13;
const height2 = height / 12;

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
            load1: true,
            
        };
        global.searchData = this.loadDataFromSearch.bind(this);
        global.loctiennghi = '0000000000';
        global.locgiamax = 0;
        global.locgiamin = 0;
        global.isdangnhap = true;
        global.quyen = 1;
        global.userdangnhap = 1;
        global.locsao = '';
        global.locDL = false;
        global.loadDuLieuLoc = this.loadDataLoc.bind(this);
        global.trangloc = 1;
        global.server = 'http://192.168.1.89:8080/Demo/';
        global.latsearch = 10.1686747;
        global.longsearch = 106.6992098;
        global.bankinhsearch = 70;
        global.mapAlready = false;
        //global.server = 'https://webservicestrivago.000webhostapp.com/';
    }

    componentDidMount() {
        this.loadData(this.state.page);
    }
    refresh() {
        this.setState({ page: 1, mang: [], load1: true });
        global.locDL = false;
        this.loadDataRefresh();
    }

    loadDataRefresh() {

        // this.setState({
        //     refresh: true,
        //     page: 1
        // }, function() {
        //     this.loadData(this.sta)
        // })
        this.setState({
            refresh: true
        });
        fetch(global.server.concat('getListKhachSan.php?trang=1') + '&lat=' + global.latsearch + '&long=' + global.longsearch + '&bankinh=' + global.bankinhsearch)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                mang: responseJson,
                refresh: false,
                page: 1
            });
        })
        .catch((e) => { console.log(e); });
    }
    clickMap() {
        this.setState({
            map: !this.state.map
        });
        if (this.state.map) {
            this.setState({ maxheight: 0, heightbottom: 0, heigthmapview: height - height1 - height2 });
            global.mapAlready = true;
        } else {
            this.setState({ maxheight: height - height1 - height2, heightbottom: height1, heigthmapview: 0 });
            global.mapAlready = false;
        }
    }
    loadDataFromSearch() {
        // this.setState({
        //     refresh: true,
        // })
        // fetch("http://192.168.1.173:8080/Flatlist/demo3.php?trang=" + page)
        // .then((response) => response.json())
        // .then((responseJson) => {
        //     this.setState({
        //         mang: responseJson,
        //         refresh: false,
        //         page: 3,
        //     });
        // })
        // .catch((e)=>{console.log(e)});
        //alert(global.latsearch + '------' + global.longsearch);

        // this.setState({
        //     page: 1
        // });
        // if (this.state.refresh === false) {
        //     //global.trangloc = 1;
        //     this.setState({
        //         refresh: true
        //     })
        //     fetch(global.server.concat('getDanhSachTrongBanKinh.php?lat=' + global.latsearch + '&long=' + global.latsearch + '&bankinh=10000')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         if(responseJson.length > 0)
        //             this.setState({
        //                 mang: this.state.mang.concat(responseJson),
        //                 refresh: false,
        //                 page: this.state.page + 1
        //             });
        //         else{
        //             this.setState({ 
        //                 refresh: false,
        //             });
        //         }
        //     })
        //     .catch((e) => { console.log(e) });
        // }
        //alert('323423');
        //alert(global.latsearch +'-----------'+global.longsearch+'------'+global.bankinhsearch);
        this.setState({
            page: 1
        }, function() {
            global.trangloc = 1;
            //alert('Vào');
            this.loadData(this.state.page);
        });
        //alert('Qau đây r');
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
        if (global.locDL === false) {
            if (this.state.refresh === false) {
               //alert(global.server.concat('getListKhachSan.php?trang=') + page + '&lat=' + global.latsearch + '&long=' + global.longsearch + '&bankinh=' + global.bankinhsearch);
                global.trangloc = 1;
                this.setState({
                    refresh: true
                });
                //alert(global.server.concat('getListKhachSan.php?trang=') + page + '&lat=' + global.latsearch + '&long=' + global.longsearch + '&bankinh=' + global.bankinhsearch);
                fetch(global.server.concat('getListKhachSan.php?trang=') + page + '&lat=' + global.latsearch + '&long=' + global.longsearch + '&bankinh=' + global.bankinhsearch)
                .then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.length > 0) {
                        if (this.state.page === 1) {
                            this.setState({
                                mang: responseJson,
                                refresh: false,
                                page: this.state.page + 1,
                                
                            });
                        } else {
                            this.setState({
                                mang: this.state.mang.concat(responseJson),
                                refresh: false,
                                page: this.state.page + 1
                            });
                        }
                    } else {
                            if (this.state.page === 1) {
                                this.setState({ 
                                    refresh: false,
                                    mang: [],
                                   
                                });
                            } else {
                                this.setState({ 
                                    refresh: false,
                                });
                            }
                    }
                })
                .catch((e) => { console.log(e) });
            }
        }
        else {
            if (global.locgiamax === 0 && global.locgiamin === 0 &&
                global.loctiennghi === '0000000000' && global.locsao === '')
                return;
            else {
                if (global.locgiamax === 0 && global.locgiamin === 0) {
                    if (global.loctiennghi === '0000000000' && global.locsao !== '') {
                        this.setState({
                            refresh: true,
                        })
                        fetch(global.server + 'getDanhSachKhachSanLocSao.php?trang=' + global.trangloc + '&sosao=' + global.locsao + '&lat=' + global.latsearch + '&long=' + global.longsearch + '&bankinh=' + global.bankinhsearch)
                        .then((response) => response.json())
                        .then((responseJson) => {
                            if (responseJson.length > 0) {
                                if (global.trangloc === 1) {
                                    this.setState({
                                            mang: responseJson,
                                            refresh: false,
                                            
                                            //page: this.state.page + 1
                                        });
                                } else {
                                    this.setState({
                                        mang: this.state.mang.concat(responseJson),
                                        refresh: false
                                    });
                                }
                                global.trangloc = global.trangloc + 1;
                            }
                            else {
                                if (global.trangloc === 1) {
                                    this.setState({ mang: [] });
                                }
                                    this.setState({ 
                                        refresh: false,
                                    });
                            }
                        }) 
                        .catch((e) => { 
                            alert(e) 
                        });
                    }


                    // lọc theo các tiện nghi
                    else {
                        if (global.locsao === ''){
                            global.locsao = '12345'; // Lấy tất cả các khách sạn từ 12345 sao nếu ko chọn sao
                        }
                    
                    if(this.state.refresh === false) {
                            this.setState({
                                refresh: true,
                            });
                            //alert(global.server + 'getListKhachSanLoc.php?trang=' + global.trangloc + '&tiennghi=' + global.loctiennghi + '&sosao=' + global.locsao + '&lat=' + global.latsearch + '&long=' + global.longsearch + '&bankinh=' + global.bankinhsearch);
                            fetch(global.server + 'getListKhachSanLoc.php?trang=' + global.trangloc + '&tiennghi=' + global.loctiennghi + '&sosao=' + global.locsao + '&lat=' + global.latsearch + '&long=' + global.longsearch + '&bankinh=' + global.bankinhsearch)
                            .then((response) =>  response.json() )
                            .then((responseJson) => {
                                if (responseJson.length > 0) {
                                    if ( global.trangloc === 1 ) {
                                    // let mang = responseJson;

                                        this.setState({
                                                mang: responseJson,
                                                refresh: false
                                                //page: this.state.page + 1
                                            });
                                    } else{
                                        this.setState({
                                            mang: this.state.mang.concat(responseJson),
                                            refresh: false,
                                            //page: this.state.page + 1
                                        });
                                    }
                                    global.trangloc = global.trangloc + 1;
                                }
                                else {
                                    if (global.trangloc === 1) {
                                        this.setState({ mang: [] });
                                    }
                                        this.setState({ 
                                            refresh: false,
                                        });
                                }
                            }) 
                            .catch((e) => { 
                                alert(e); 
                            });
                        }
                    }
                }
                else {
                    // Chỉ lọc theo số sao
                    if (global.loctiennghi === '0000000000') {
                        this.setState({
                            refresh: true,
                        })
                        if (global.locsao === '') {
                            global.locsao = '12345'; // Lấy tất cả các khách sạn từ 12345 sao nếu ko chọn sao
                        }
                        fetch(global.server + 'locKhachSan_Gia_Sao.php?trang=' + global.trangloc + '&sosao=' + global.locsao + '&giamin=' + global.locgiamin + '&giamax=' + global.locgiamax + '&lat=' + global.latsearch + '&long=' + global.longsearch + '&bankinh=' + global.bankinhsearch)
                        .then((response) => response.json())
                        .then((responseJson) => {
                            if (responseJson.length > 0) {
                                if ( global.trangloc === 1 ) {
                                // let mang = responseJson;

                                    this.setState({
                                            mang: responseJson,
                                            refresh: false
                                            //page: this.state.page + 1
                                        });
                                } else {
                                    this.setState({
                                        mang: this.state.mang.concat(responseJson),
                                        refresh: false,
                                        //page: this.state.page + 1
                                    });
                                }
                                global.trangloc = global.trangloc + 1;
                            }
                            else{
                                if(global.trangloc === 1) {
                                    this.setState({ mang: [], arrLatLong: [] })
                                }
                                    this.setState({ 
                                        refresh: false,
                                    });
                            }
                        }) 
                        .catch((e) => { 
                            alert(e) 
                        });
                    }


                    // lọc theo các tiện nghi kèm sao
                    else {
                        if (global.locsao === '') {

                            global.locsao = '12345'; // Lấy tất cả các khách sạn từ 12345 sao nếu ko chọn sao
                        }
                        if (this.state.refresh === false) {
                            
                                this.setState({
                                    refresh: true,
                                })
                                //alert(global.server.concat('locKhachSan_Gia_Sao_TienNghi.php?trang='+global.trangloc+'&tiennghi='+global.loctiennghi+'&sosao='+global.locsao+'&giamax='+global.locgiamax+'&giamin='+global.locgiamin));
                                fetch(global.server.concat('locKhachSan_Gia_Sao_TienNghi.php?trang=' + global.trangloc + '&tiennghi=' + global.loctiennghi + '&sosao=' + global.locsao + '&giamax=' + global.locgiamax + '&giamin=' + global.locgiamin + '&lat=' + global.latsearch + '&long=' + global.longsearch + '&bankinh=' + global.bankinhsearch))
                                .then((response) => response.json())
                                .then((responseJson) => {
                                    if (responseJson.length > 0) {
                                        if ( global.trangloc === 1) {
                                        // let mang = responseJson;
                                            this.setState({
                                                    mang: responseJson,
                                                    refresh: false,
                                                });
                                        } else {
                                            this.setState({
                                                mang: this.state.mang.concat(responseJson),
                                                refresh: false
                                            });
                                        }
                                        global.trangloc = global.trangloc + 1;
                                    }
                                    else {
                                        if (global.trangloc === 1) {
                                            this.setState({ mang: [], arrLatLong: [] })
                                        }
                                            this.setState({ 
                                                refresh: false,
                                            });
                                    }
                                }) 
                                .catch((e) => { 
                                    alert(e);
                                });
                            }
                        }
                }
            }
        }
        
    }
    testt(){
        //alert(this.state.page);
        alert(this.state.load1 + ' -- ' + this.state.page);
        this.setState({ load1: false, page: 1 });
        
    }
    loadDataLoc() {
        //alert(global.loctiennghi + ' - ' + global.locgiamax + ' - ' + global.locgiamin + ' - ' + global.locsao);
        //this.setState({ load1: false, page: 1 });
        this.props.navigation.navigate('DrawerClose');
       this.loadData();
    }
    goDetails(ten, id) {
        this.props.navigation.navigate('DetailScreen', { name: ten, id: id });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flex: 1 }}>
                        <TouchableWithoutFeedback
                        onPress={() => { navigate('DrawerOpen'); }}
                        >
                            <Image style={styles.imgHeader} source={opemenu} />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ flex: 5 }}>
                        
                            <TextInput 
                                //onFocus = { () => { navigate('SearchScreen', {navtigation: navigate })}}
                                placeholder='Tìm kiếm'
                                underlineColorAndroid='rgba(0,0,0,0)'
                            />
                       
                    </View>
                    <View style={{ flex: 4, justifyContent: 'space-between', flexDirection: 'row', paddingRight: 5 }}>
                        <TouchableOpacity
                            onPress={() => { navigate('SearchScreen', { navtigation: navigate }); }}
                        >
                            <Image style={styles.imgHeader} source={icsearch} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { this.clickMap(); }}                        
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
                    onPress={() => { this.refs.ds.scrollToIndex({ animated: true, index: 0, viewPosition: 0 }); }}
                >
                    <Text>Up</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity
                    onPress={() => { this.testt() }}
                >
                    <Text>Load Page 3</Text>
                </TouchableOpacity> */}

                <View style={{ height: this.state.maxheight }}>
                <FlatList
                    onEndReachedThreshold={0.2}
                    onEndReached={() => { this.loadMore(); }}
                    ref="ds"
                    //ListHeaderComponent={(<HeaderFlatList />)}
                    refreshing={this.state.refresh}
                    onRefresh={() => { this.refresh(); }}
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
                                        <Image source={{ uri: item.hinh }} style={{ height: width / 3, width: width / 3, flex: 1 }} />
                                        <View style={{ flex: 2 }}>
                                            <View style={{ flex: 1 }}>
                                                <View style={{ flex: 1, paddingLeft: 5, paddingVertical: 2, paddingRight: 2 }}>
                                                    <Text numberOfLines={1} style={{ fontWeight: 'bold' }}>{item.ten}</Text>
                                                    <Text numberOfLines={1}>{item.diachi}</Text>
                                                </View>
                                                <View style={{ flex: 2, borderTopWidth: 1, borderTopColor: '#e9ebee', flexDirection: 'row' }}>
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
                                                                <Text style={{ backgroundColor: '#248f24', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 3, color: 'white' }}>View Details</Text>
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
                <View style={{ height: this.state.heigthmapview }}>
                         <MapViewComponent data={this.state.mang} goDetails={this.goDetails.bind(this)} />
                        {/* <MapViewComponent /> */}
                </View>
                    {/* <View style={{ backgroundColor: 'white', height: this.state.heightbottom }}>
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
                </PopupDialog> */}
            </View>
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
