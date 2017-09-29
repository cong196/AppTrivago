import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import global from '../global';

export default class DangNhap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        const { username, password } = this.state;
        return (
            <View>
                <TextInput
                    style={inputStyle}
                    placeholder="Username"
                    value={username}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onChangeText={text => this.setState({ username: text })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Password"
                    value={password}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry
                />
                <TouchableOpacity style={bigButton} onPress={()=>{}}>
                    <Text style={buttonText}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400'
    }
});