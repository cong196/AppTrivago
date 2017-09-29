import React,{ Component } from 'react';
import {
    View, Text, StyleSheet, ScrollView
} from 'react-native';
import global from '../global';
import DnDx from './DnDx';
export default class Account extends Component {
    render() {
        return (
            <DnDx />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})