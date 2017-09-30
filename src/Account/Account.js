import React,{ Component } from 'react';
import {
    View, Text, StyleSheet, ScrollView
} from 'react-native';
import global from '../global';
import DnDx from './DnDx';

import TabAccount from './TabAccount/TabAccount';
export default class Account extends Component {
    
    goBack() {
        this.props.navigation.goBack();
    }
    render() {
        return (
            
            global.isdangnhap ? <TabAccount goBack={this.goBack.bind(this)} /> : <DnDx goBack={this.goBack.bind(this)} />
           
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})