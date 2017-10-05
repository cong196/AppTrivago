import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import global from '../global';
import { DangNhapModule } from '../api/DangNhap';
export default class DangNhap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            mang: []
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


        // fetch(global.server.concat('/DangNhap.php'),
        // {   
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Accept: 'application/json'
        //     },
        //     body: JSON.stringify({
        //         username: this.state.username,
        //         password: this.state.password
        //     })
        // })
        // .then(res => res.json())
        // .then(res => {
        //     alert(res);
        // })
        // .catch(err => alert(err));

        fetch(global.server.concat('dangNhap.php?username=' + this.state.username+'&password='+this.state.password))
        .then((response) => response.json())
        .then((responseJson) => {
            
            if(responseJson.length > 0){
                this.setState({
                    mang: responseJson,
                });
                global.isdangnhap = true;
                global.quyen = this.state.mang[0].quyen;
                this.props.goBack();
            }
            else{
                alert('Sai thong tin dang nhap');
            }
            
        })
        .catch((e)=>{alert(e)});
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