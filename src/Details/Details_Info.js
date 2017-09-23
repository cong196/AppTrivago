import React, { Component } from 'react';
import {
    View, Text, ScrollView, TouchableOpacity
} from 'react-native';
import global from '../global'
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
            <View style = {{ flex: 1 }}>
                <ScrollView>
                    <View>
                        <TouchableOpacity>
                            <Text>{global.idKS}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}