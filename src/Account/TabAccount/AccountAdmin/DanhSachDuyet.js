import React,{ Component } from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

export default class DanhSachDuyet extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Danh sách khách sạn chờ duyệt</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
})