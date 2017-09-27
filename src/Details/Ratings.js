import React, { Component } from 'react';
import {
    View, FlatList, Text, Image, TextInput, StyleSheet, TouchableOpacity
} from 'react-native';
import iconaccount from '../img/iconaccount.png';
export default class Ratings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: [],
            value: '',
            height: 40,
            dangnhap : false
        }
    }
    
    post() {
        if(this.state.value != ''){
            if(!this.state.dangnhap)
            {
                const { mang } = this.state;
                var maxId = Math.max.apply(null, mang.map(item => item.id)) + 1;
                mang.unshift({ id: maxId, ten: 'ABC', noidung: this.state.value });
                this.setState({
                    mang,
                    value: '',
                })
            }
            else{
                alert('Bạn chưa đăng nhập .. ')
            }
        }else {
            alert('Nhập nội dung !!')
        }
            
    }

    loadData() {
        fetch("http://192.168.1.89:8080/Demo/getBinhLuan.php?id=1&trang=1")
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                mang: responseJson
            });
        })
        .catch((e) => { console.log(e) });
       
    }

    componentDidMount() {
        this.loadData();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <FlatList
                    ListHeaderComponent={(
                        <View style={{ paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#e9ebee' }}>
                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <Image source={iconaccount} style={{ width: 25, height: 25 }} />
                            <View style={{ borderWidth: 1, flex: 1, marginLeft: 10, borderRadius: 5, borderColor: '#e9ebee' }}>
                                <TextInput
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Bình luận của bạn ..."
                                    onChangeText={(value) => this.setState({ value })}
                                    value={this.state.value}
                                    multiline={true}
                                    numberOfLines = {3}
                                    onContentSizeChange={(event) => {
                                        this.setState({ height: event.nativeEvent.contentSize.height })
                                    }}
                                    style={[styles.default, { height: Math.max(35, this.state.height) }]}
                                />
                            </View>
                        </View>
                        <View style = {{ flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 10 }}>
                                <TouchableOpacity
                                    onPress={()=>{ this.post() }}
                                >
                                    <Text style ={{ padding: 10, paddingLeft: 10, backgroundColor: '#4267b2', borderRadius: 5, color: 'white' }}>   Đăng   </Text>
                                </TouchableOpacity>
                        </View>
                        </View>
                    )}
                    data={this.state.mang}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                    
                    <View key={item.id} style={{ paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#e9ebee' }}>
                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <Image source={iconaccount} style={{ width: 25, height: 25 }} />
                            <View style={{ borderWidth: 1, padding: 5, flex: 1, marginLeft: 5, borderRadius: 5, borderColor: '#e9ebee' }}>
                                <Text style = {{ fontWeight: 'bold' }}>{item.ten}</Text>
                                <Text>{item.binhluan}</Text>
                            </View>
                        </View>
                    </View>
                    }
                    ListFooterComponent={(
                        <View style= {{ padding: 10 }}>
                            <Text style={{ color: '#4267b2' }}>Xem thêm bình luận ...</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    default:{
        height: 40
    }
})