import React,{ Component } from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

export default class Account extends Component {
    render() {
        return (
            <View>
                <Text>Account Screen</Text>
                <Text>{this.props.navigation.state.params.param}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})