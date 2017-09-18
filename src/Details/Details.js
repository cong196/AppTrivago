import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Dimensions, TouchableOpacity
} from 'react-native';
import { TbDetails } from './RouterDetails';
const { height, width } = Dimensions.get('window');

export default class Details extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: `${navigation.state.params.name}`,
          headerRight: (
            <TouchableOpacity
              title={navigation.state.params.name}
              onPress={navigation.state.params.add}
            >
            <Text>Like</Text>
            </TouchableOpacity>
          ),
        };
      };
    constructor(props) {
        super(props);
        this.state = {
            id: 0
        }
    }
    componentDidMount() {
        this.props.navigation.setParams({ add: this.addData });
        this.setState({
            id: this.props.navigation.state.params.id
        })
    }
    addData() {
        alert(this.state.id);
    }
    render() {
        const idCS = this.props.navigation.state.params.id;
        return (
            <View style = {styles.container}>
                <View style = {styles.boximg}>
                    <Text> {this.props.navigation.state.params.id}</Text>
                    <TouchableOpacity
                        onPress = {()=>{this.addData(this.state.id)}}
                    >
                        <Text>DDDd</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{ flex:1 }}>
                    <TbDetails />
                </View> 
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    boximg: {
        height: height/3,
        backgroundColor: 'red'
    }
})