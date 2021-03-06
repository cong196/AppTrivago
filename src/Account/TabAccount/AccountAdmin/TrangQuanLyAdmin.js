import React, { Component } from 'react';
import {
    View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, TouchableOpacity,Image
} from 'react-native';
import icback from '../../../img/icback.png';
import global from '../../../global';
export default class TrangQuanLyAdmin extends Component {
    goBack() {
        this.props.goBack();
    }
    goDuyetKS() {
        this.props.goDuyetKS();
    }
    goQLKS() {
        this.props.goQLKS();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => { this.goBack() }}
                    >
                        <Image style={{ width: 25, height: 25 }} source={icback} />
                    </TouchableOpacity>
                    <Text numberOfLines={1} style={{ fontWeight: 'bold', paddingLeft: 10 }}>Trang chủ Admin</Text>
                    
                </View>

                <ScrollView>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.goDuyetKS();
                        }}
                    >
                        <View style={styles.row}>
                            <Text>Chờ duyệt</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.goQLKS();
                        }}
                    >
                        <View style={styles.row}>
                            <Text>Quản lý khách sạn</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                    >
                        <View style={styles.row}>
                            <Text>Cá nhân</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                    >
                        <View style={styles.row}>
                            <Text>Đăng xuất</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        padding: 10,
        borderBottomWidth: 0.7
    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 40,
        padding: 4,
        alignItems: 'center',
        
        borderBottomWidth: 1,
        paddingHorizontal: 5
    }
})