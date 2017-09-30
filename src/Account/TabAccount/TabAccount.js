import React,{ Component } from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';
import { TbAccount } from './AccountMember/RouterTabTaiKhoan';
import { TbAccountAdmin } from './AccountAdmin/RouterTabTaiKhoanAdmin';
import global from '../../global';
export default class QuanLyKhachSan extends Component {
    render() {
        return (
            global.quyen === 1 ? <TbAccountAdmin /> : <TbAccount />
        )
    }
}