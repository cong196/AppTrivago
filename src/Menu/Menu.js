import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import { TabFilters } from './RouterMenu.js';
import global from '../global';
export default class Menu extends Component {

    loadDL() {
        alert(global.loctiennghi + ' - ' + global.locgiamax + ' - ' + global.locgiamin);
    }
    render() {
        return (
            <View style = { styles.container }>
                <View style = {styles.tab }>
                    <TabFilters />
                </View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => { this.loadDL() }}
                >
                        <Text style={{ color: 'white' }}>Xong</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    tab: {
        flex: 10
    },
    button: {
        flex: 1,
        backgroundColor: '#4267b2',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
