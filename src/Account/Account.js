import React,{ Component } from 'react';
import {
    View, Text, StyleSheet, ScrollView
} from 'react-native';

export default class Account extends Component {
    render() {
        return (
            <ScrollView style = {styles.container}>
                <Text>Account Screen</Text>
                <Text>{this.props.navigation.state.params.param}</Text>
                <Text>Account Screen</Text>
                <Text>{this.props.navigation.state.params.param}</Text>
                <Text>Account Screen</Text>
                <Text>{this.props.navigation.state.params.param}</Text>
                <Text>Account Screen</Text>
                <Text>{this.props.navigation.state.params.param}</Text>
                <Text>Account Screen</Text>
                <Text>{this.props.navigation.state.params.param}</Text>
                <Text>Account Screen</Text>
                <Text>{this.props.navigation.state.params.param}</Text>
                <Text>Account Screen</Text>
                <Text>{this.props.navigation.state.params.param}</Text>
                <Text>Account Screen</Text>
                <Text>{this.props.navigation.state.params.param}</Text>
                <Text>Account Screen</Text>
                <Text>{this.props.navigation.state.params.param}</Text>
                <Text>Account Screen</Text>
                <Text>{this.props.navigation.state.params.param}</Text>
                <Text>Account Screen</Text>
                <Text>{this.props.navigation.state.params.param}</Text>
                <Text>Account Screen</Text>
                <Text>{this.props.navigation.state.params.param}</Text>
                <Text>Account Screen</Text>
                <Text>{this.props.navigation.state.params.param}</Text>
                <Text>Account Screen</Text>
                <Text>{this.props.navigation.state.params.param}</Text>
                <Text>Account Screen</Text>
                <Text>{this.props.navigation.state.params.param}</Text>
                <Text>Account Screen</Text>
                <Text>{this.props.navigation.state.params.param}</Text>
                <Text>Account Screen</Text>
                <Text>{this.props.navigation.state.params.param}</Text>
                <Text>Account Screen</Text>
                <Text>{this.props.navigation.state.params.param}</Text>
                <Text>Account Screen</Text>
                <Text>34</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})