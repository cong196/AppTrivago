import React, { Component } from 'react';
import {
    View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Dimensions, Image,
    Text
} from 'react-native';
import s1 from '../img/sad.png';
import s2 from '../img/s2.png';
import s3 from '../img/s3.png';
import global from '../global';
const { height, width } = Dimensions.get('window');
const height1 = height / 13;
const height2 = height / 12;

export default class RowFlatList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.rowFlatlist}>
                <View style={{ height: width / 4, width: width / 4, flex: 1 }}>
                    <Image source={{ uri: this.props.item.hinh }} style={{ height: width / 4 - 0.75, width: width / 4 - 0.75 }}/>
                </View>
                <View style={{ flex: 2, paddingHorizontal: 2.5 }}>
                    <Text numberOfLines={1}>{this.props.item.hinh}</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    
    rowFlatlist: {
        flexDirection: 'row',
        height: width / 4,
        paddingVertical: 2.5,
        width: width * 0.7
        //borderBottomWidth: 1
    }
})  
