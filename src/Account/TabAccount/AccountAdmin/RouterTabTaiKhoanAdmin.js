import React from 'react';
import {
    Dimensions
} from 'react-native';
import { TabNavigator } from 'react-navigation';

import QuanLyKhachSan from './QuanLyKhachSan';
import DuyetKhachSan from './DuyetKhachSan';
import QuanLyTaiKhoan from '../AccountMember/QuanLyTaiKhoan';
import {QuanLyKhachSanAdminRouter} from './Router';
export const TbAccountAdmin = TabNavigator(
    {
        TabDuyetKhachSan: {
            screen: QuanLyKhachSanAdminRouter,
            navigationOptions: {
                tabBarLabel: 'Chờ duyệt',
            }
        },
        TabKhachSan: {
            screen: QuanLyKhachSan,
            navigationOptions: {
                tabBarLabel: 'Khách sạn'
            }
        },
        TabTaiKhoan: {
            screen: QuanLyTaiKhoan,
            navigationOptions: {
                tabBarLabel: 'Cá Nhân'
            }
        }
    },
    {
        tabBarPosition: 'top',
        tabBarOptions: {
            upperCaseLabel: false,
            activeTintColor: 'black',
            inactiveTintColor: 'black',
            labelStyle: {
              fontSize: 12,
            },
            style: {
              backgroundColor: '#D2D8DD',
            }
        }
    }
);