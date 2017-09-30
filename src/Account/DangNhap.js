import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import global from '../global';
import { DangNhapModule } from '../api/DangNhap';
export default class DangNhap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    dangNhap1() {
        // this.props.goBack();
        // global.isdangnhap = true;
        // global.quyen = 1;
        // DangNhapModule(this.state.username, this.state.password)
        // .then(res => {
        //     alert(res);
        // })
        // .catch(err => alert(err));


        fetch('http://192.168.1.173:8080/Demo/DangNhap.php',
        {   
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(this.state.username, this.state.password)
        })
        .then(res => res.text())
        .then(res => {
            alert(res);
        })
        .catch(err => alert(err));
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
                <TouchableOpacity style={bigButton} onPress={() => { this.dangNhap1() }}>
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