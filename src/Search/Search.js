import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import global from '../global';
export default class Search extends Component {

    search(page) {
       
        this.goBack1();
        global.searchData(3);
        
    }
    goBack1() {
        this.props.navigation.goBack();
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={this.search.bind(this)}
                >
                    <Text>Search Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.goBack1.bind(this)}
                >
                    <Text>GoBack</Text>
                </TouchableOpacity>
            </View>
        )
    }
}