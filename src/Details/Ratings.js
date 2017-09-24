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
            height: 40
        }
    }
    
    post() {
        this.setState({
            value: ''
        })
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <FlatList
                    ListHeaderComponent={(
                        <View>
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