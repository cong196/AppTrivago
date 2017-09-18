import React, { Component } from 'react';
import {
    View, Text, FlatList
} from 'react-native';
export default class Details_Info extends Component {
    render(){
        return(
            <View style = {{ flex:1, backgroundColor:'green' }}>
                <FlatList />
            </View>
        )
    }
}