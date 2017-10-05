import React,{ Component } from 'react';
import {
    View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, FlatList, Dimensions,
    Image, ScrollView, TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';

import global from '../../../global';
import imghuy from './huy.png';
import imgxacnhan from './xacnhan2.png';
const { height, width } = Dimensions.get('window');
export default class DuyetKhachSan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mang: [{"key":"1","ten":"Les Hameaux de l Orient","hinh":"https:\/\/imgec.trivago.com\/partnerimages\/17\/77\/177750770_x.jpeg","diachi":"Rang Hamlet, 70000, TP. H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam","gia":"1587000"}],
            value: '',
            height: 40,
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3
        }
    }
   
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    xacnhan() {
        alert('Xác nhận thành công ..1')
    }
    huy() {
        this.refs.modal3.close();
        alert(this.state.value);
        this.setState({value: ''})
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <FlatList
                   
                    data={this.state.mang}
                    renderItem={({ item }) =>
                        <View style={styles.rowFlatlist}>
                            <TouchableWithoutFeedback
                                onPress={() => { 
                                    global.idKS = item.key;
                                    navigate('ChiTiet', { name: item.ten, id: item.key })
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
                                                       
                                                        <View style={{ flex: 1, paddingHorizontal: 2, paddingVertical: 2 }}>
                                                            <TouchableOpacity
                                                                style={{flexDirection: 'row', flex: 1 }}
                                                                onPress = {()=>{ this.xacnhan() }}
                                                            >
                                                                <View style={{ flex: 2, paddingVertical: 2 }}>
                                                                    <Image resizeMode={'contain'} source={imgxacnhan} style={{ flex: 1 }} />
                                                                </View> 
                                                                
                                                                <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                                                                    <Text style={{ fontSize: 12 }}>Duyệt</Text>
                                                                </View>
                                                            </TouchableOpacity>
                                                        </View>
                                                       
                                                        <View style={{ flex: 1, borderTopWidth: 1, borderTopColor: '#e9ebee', paddingHorizontal: 2, paddingVertical: 2}}>
                                                        <TouchableOpacity
                                                                style={{flexDirection: 'row', flex: 1 }}
                                                                onPress={() => this.refs.modal3.open()}
                                                        >
                                                                <View style={{ flex: 2, paddingVertical: 2 }}>
                                                                    <Image resizeMode={'contain'} source={imghuy} style={{ flex: 1 }} />
                                                                </View> 
                                                                
                                                                <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                                                                    <Text style={{ fontSize: 12 }}>Hủy</Text>
                                                                </View>
                                                        </TouchableOpacity>
                                                        
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
                <Modal style={styles.modal} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                    <View style={styles.viewinsideModal}>
                        <Text style={{fontWeight: 'bold'}}>Lý do chưa được duyệt</Text>
                    </View>
                    <ScrollView style={{ paddingVertical: 10 }}>
                        <View style={{ borderWidth: 1, flex: 1, marginHorizontal: 10, borderRadius: 5, borderColor: '#e9ebee' }}>
                                <TextInput
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="... "
                                    onChangeText={(value) => this.setState({ value })}
                                    value={this.state.value}
                                    multiline={true}
                                    numberOfLines={3}
                                    onContentSizeChange={(event) => {
                                        this.setState({ height: event.nativeEvent.contentSize.height })
                                    }}
                                    style={[{height: 40}, { height: Math.max(35, this.state.height) }]}
                                />
                        </View>
                    </ScrollView>
                    
                    <TouchableOpacity
                        onPress={()=>{ this.huy() }}
                    >
                        <View style={styles.viewinsideModa2}>
                            <Text style={{fontWeight: 'bold'}}>Gửi</Text>
                        </View>
                    </TouchableOpacity>
                </Modal>    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    rowFlatlist: {
        paddingHorizontal: 5,
        paddingVertical: 2.5
        //borderBottomWidth: 1
    },
    itemBottom: {
        backgroundColor: 'white'
    },
    modal: {
        width: 0.9 * width,
        height: 0.4 * height,
        borderRadius: 5,
        
    },
    viewinsideModal: {
        padding: 10,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: '#e2eff5',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewinsideModa2: {
        padding: 10,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: '#e2eff5',
        justifyContent: 'center',
        alignItems: 'center'
    },
})