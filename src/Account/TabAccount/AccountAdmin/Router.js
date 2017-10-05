import React from 'react';
import {
    View
} from 'react-native';

import DuyetKhachSan from './DuyetKhachSan';
import Details from '../../../Details/Details';
import { StackNavigator } from 'react-navigation';


export const QuanLyKhachSanAdminRouter = StackNavigator({
    DanhSachKS: {
        screen: DuyetKhachSan,
        navigationOptions: {
            header: null
        }
    },
    ChiTiet: {
        screen: Details,
        navigationOptions: {
            header: null
        }
    }
});