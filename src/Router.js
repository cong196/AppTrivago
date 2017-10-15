import React from 'react';
import {
    Dimensions
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Main from './Main/Main';
import MainView from './Main/MainView';
import Menu from './Menu/Menu';
import Account from './Account/Account';
import Search from './Search/Search';
import Details from './Details/Details';



import TrangQuanLyAdmin from './Account/TabAccount/AccountAdmin/TrangQuanLyAdmin';
import DuyetKhachSan from './Account/TabAccount/AccountAdmin/DuyetKhachSan';
import QuanLyKhachSan from './Account/TabAccount/AccountAdmin/QuanLyKhachSan';

var { height, width } = Dimensions.get('window');

export const MainStack = StackNavigator({
    MainScreen: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    },
    AccountScreen: {
        screen: Account,
        // navigationOptions: {
        //     headerTitle: 'Tài khoản'
        // }
        navigationOptions: {
            header: null
        }
    },
    SearchScreen: {
        screen: Search,
        navigationOptions: {
            header: null
        }
    },
    DetailScreen: {
        screen: Details,
        navigationOptions: {
            header: null
        }
    },


    TrangQuanLyAdmin: {
        screen: TrangQuanLyAdmin,
        navigationOptions: {
            header: null
        }
    },
    DuyetKhachSan: {
        screen: DuyetKhachSan,
        navigationOptions: {
            header: null
        }
    },
    QuanLyKhachSan: {
        screen: QuanLyKhachSan,
        navigationOptions: {
            header: null
        }
    }
    
});

export const SideMenu = DrawerNavigator (
    {
        MainSide: {
            screen: MainStack
        }
    },
    {
        drawerWidth: 0.8 * width,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props} />
    }
)