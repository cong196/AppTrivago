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
        navigationOptions: {
            headerTitle: 'Tài khoản'
        }
    },
    SearchScreen: {
        screen: Search
    },
    DetailScreen: {
        screen: Details,
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