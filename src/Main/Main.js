import React,{ Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, TouchableWithoutFeedback,
    TextInput, FlatList
} from 'react-native';
import opemenu from '../img/openmenu.png';
import icsearch from '../img/Search.png';
import icMap from '../img/Map.png';
import icAc from '../img/Account.png';

const { height, width } = Dimensions.get('window');
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: []
        };
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style = {{ flex:1 }}>
                <View style={styles.header}>
                    <View style={{ flex: 1 }}>
                        <TouchableWithoutFeedback
                        onPress={() => { navigate('DrawerOpen') }}
                        >
                            <Image style={styles.imgHeader} source={opemenu} />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ flex: 5 }}>
                        <TextInput 
                            placeholder='Tìm kiếm'
                            underlineColorAndroid='rgba(0,0,0,0)'
                        />
                    </View>
                    <View style={{ flex: 4, justifyContent: 'space-between', flexDirection: 'row', paddingRight: 5 }}>
                        <Image style={styles.imgHeader} source={icsearch} />
                        <Image style={styles.imgHeader} source={icMap} />
                        <Image style={styles.imgHeader} source={icAc} />
                    </View>


                </View>
                <Text>Main Screen</Text>
                <TouchableOpacity
                    onPress={() => { navigate('AccountScreen', { param: 'Hoang Van Cong' }) }}
                >
                    <Text>Go go Account Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress = { () => { navigate('SearchScreen') }}
                >
                    <Text>Go go Search Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress = {()=>{navigate('DetailScreen')}}
                >
                    <Text>Go to Details</Text>
                </TouchableOpacity>

                <FlatList 
                    data={this.state.mang}
                    renderItem={({ item }) => 
                        <View style={styles.rowFlatlist}>
                            <Text>{item.key}</Text>
                        </View>
                    }
                />
            </View>
        )
    }

    componentDidMount(){
        // fetch("http://191.168.1.91:8080/Flatlist/demo1.php")
        // .then((response) => response.json())
        // .then((responseJson) => {
        //     this.setState({
        //         mang: responseJson
        //     });
        // })
        // .catch((e)=>{console.log(e)});

        console.log("sdjfkhsdkjfskdfjk");
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: height / 12,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    imgHeader: {
        width: 25,
        height: 25,
    },
    rowFlatlist: {
        padding:10,
        borderBottomWidth: 1
    }
    
})  
