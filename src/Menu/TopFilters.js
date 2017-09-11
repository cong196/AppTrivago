import React, { Component } from 'react';
import {
    View,
    Text, Image, StyleSheet, TouchableOpacity,Slider
} from 'react-native';


import vote1 from '../img/vote/Vote1.png';
import vote1_Act from '../img/vote/Vote1_act.png';
import vote2 from '../img/vote/Vote2.png';
import vote2_Act from '../img/vote/Vote2_act.png';
import vote3 from '../img/vote/Vote3.png';
import vote3_Act from '../img/vote/Vote3_act.png';
import vote4 from '../img/vote/Vote4.png';
import vote4_Act from '../img/vote/Vote4_act.png';
import vote5 from '../img/vote/Vote5.png';
import vote5_Act from '../img/vote/Vote5_act.png';
import wifi from '../img/convenient/Wifi.png';
import wifi_act from '../img/convenient/wifi_act.png';
import spa from '../img/convenient/Spa.png';
import spa_act from '../img/convenient/Spa_act.png';
import beach from '../img/convenient/Beach.png';
import beach_act from '../img/convenient/Beach_act.png';
import breakfast from '../img/convenient/breakfast.png';
import breakfast_act from '../img/convenient/breakfast_act.png';
import pool from '../img/convenient/swimming.png';
import pool_act from '../img/convenient/swimming_act.png' ;

export default class TopFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vote1: false,
            vote2: false,
            vote3: false,
            vote4: false,
            vote5: false,
            wifi: false,
            spa: false,
            beach: false,
            breakfast: false,
            pool: false,
            value: 0
        };
    }
    render() {
        return (
            <View>
                <View style={styles.viewVote}>
                    <TouchableOpacity
                        onPress={() => { this.setState({ vote1: !this.state.vote1 })}}
                        style={styles.imgView}
                    >
                        <Image style = { styles.img }  source = { this.state.vote1 ? vote1_Act : vote1 } />
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress = { ()=>{ this.setState({ vote2:!this.state.vote2 }) }}
                        style = { styles.imgView }
                    >
                        <Image style = { styles.img }  source = { this.state.vote2 ? vote2_Act : vote2 } />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress = {() => { this.setState({ vote3: !this.state.vote3 })}}
                        style = { styles.imgView }
                    >
                        <Image style={styles.img}  source = { this.state.vote3 ? vote3_Act : vote3 } />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>{ this.setState({ vote4:!this.state.vote4 }) }}
                        style={styles.imgView}
                    >
                        <Image style={styles.img}  source = { this.state.vote4 ? vote4_Act : vote4 } />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress = { ()=>{ this.setState({ vote5:!this.state.vote5 }) }}
                        style = { styles.imgView }
                    >
                        <Image style={styles.img}  source = { this.state.vote5 ? vote5_Act : vote5 } />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewVote}>
                <TouchableOpacity
                        onPress={() => { this.setState({ wifi: !this.state.wifi })}}
                        style={styles.imgView}
                    >
                        <Image style = { styles.img }  source = { this.state.wifi ? wifi_act : wifi } />
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress = { ()=>{ this.setState({ spa:!this.state.spa }) }}
                        style = { styles.imgView }
                    >
                        <Image style = { styles.img }  source = { this.state.spa ? spa_act : spa } />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress = {() => { this.setState({ beach: !this.state.beach })}}
                        style = { styles.imgView }
                    >
                        <Image style={styles.img}  source = { this.state.beach ? beach_act : beach } />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>{ this.setState({ breakfast:!this.state.breakfast }) }}
                        style={styles.imgView}
                    >
                        <Image style={styles.img}  source = { this.state.breakfast ? breakfast_act : breakfast } />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress = { ()=>{ this.setState({ pool:!this.state.pool }) }}
                        style = { styles.imgView }
                    >
                        <Image style={styles.img} source={this.state.pool ? pool_act : pool}/>
                    </TouchableOpacity>
                </View>
                <View style = {{ height: 1, backgroundColor: 'gray' }}/>
                <View style={{ paddingVertical: 10 , padding: 10 }}>
                    <Text>Max: {this.state.value} VNĐ</Text>
                <Slider
                    
                    minimumValue={0}
                    maximumValue={50000}
                    step={1}
                    thumbTouchSize = {{width: 50, height: 50}}
                    onValueChange={value => this.setState({ value })}
                    
                    />
                </View>
                <View style={{ height: 1, backgroundColor: 'gray' }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewVote: {
        flex: 1,
        flexDirection: 'row',
        padding: 25,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imgView: {
        width: 25,
        height: 25,
    },
    img: {
        width: 25,
        height: 25,
    }
});
