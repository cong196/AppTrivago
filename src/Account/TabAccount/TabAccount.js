import React,{ Component } from 'react';
import {
    
} from 'react-native';
import { TbAccount } from './AccountMember/RouterTabTaiKhoan';
import TrangQuanLyAdmin from './AccountAdmin/TrangQuanLyAdmin';

import global from '../../global';

export default class QuanLyKhachSan extends Component {
    goBack() {
        this.props.goBack();
    }
    render() {
        return (
            global.quyen == 1 ? <TrangQuanLyAdmin goBack={this.goBack.bind(this)} goDuyetKS={this.props.goDuyetKS.bind(this)} goQLKS={this.props.goQLKS.bind(this)} /> : <TbAccount />
        )
    }
}