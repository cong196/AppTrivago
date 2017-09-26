import React, { Component } from 'react';
import {
    View, Text, ScrollView, TouchableOpacity, StyleSheet, Image
} from 'react-native';
import global from '../global';

export default class Details_Info extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            mang: []
        }
    }
    
    componentDidMount() {
       this.setState({
           id: this.props.id
       });
       this.loadData(1);
   }

    loadData() {
         this.setState({
             refresh: true
        })
         fetch("http://192.168.1.173:8080/Demo/getHinhAnh.php?id=" + global.idKS)
         .then((response) => response.json())
         .then((responseJson) => {
             this.setState({
                 mang: responseJson
             });
         })
         .catch((e) => { console.log(e) });
        
    }
    render(){
        return(
            <ScrollView>
                <View style={{ padding: 7 }}>
                    <Text style={styles.textHead}>Tiện nghi hàng đầu</Text>
                    <View style={styles.row}>
                        <View style={[styles.item, {  }]}>
                            <Image source={require('./img/icwifi.png')} style={styles.imageItem} />
                            <View style = {{ flex: 4 }}>
                                <Text numberOfLines={1}>Wifi tại sảnh</Text>
                            </View>
                        </View>

                        <View style={[styles.item, {  }]}>
                            <Image source={require('./img/icwifi_active.png')} style={styles.imageItem} />
                            <View style = {{ flex: 4 }}>
                                <Text numberOfLines={1}>Wifi trong phòng</Text>
                            </View>
                        </View>
                    </View>


                    <View style={styles.row}>
                        <View style={[styles.item, {  }]}>
                            <Image source={require('./img/icpool.png')} style={styles.imageItem} />
                            <View style = {{ flex: 4 }}>
                                <Text numberOfLines={1}>Bể bơi</Text>
                            </View>
                        </View>

                        <View style={[styles.item, {  }]}>
                            <Image source={require('./img/icspa_active.png')} style={styles.imageItem} />
                            <View style = {{ flex: 4 }}>
                                <Text numberOfLines={1}>Spa</Text>
                            </View>
                        </View>
                    </View>


                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    textHead: {
        color: '#3669b5'
    },
    row: {
        paddingVertical: 10,
        flexDirection: 'row'
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    imageItem: {
        height: 25,
        width: 25,
        marginHorizontal: 10,
        flex: 1,
        resizeMode: 'contain'
    }
});
