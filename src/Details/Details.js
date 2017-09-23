import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Dimensions, TouchableOpacity,Image
} from 'react-native';
import { TbDetails } from './RouterDetails';
const { height, width } = Dimensions.get('window');
import {IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';

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
            mang: [],
            item: 0
        }
    }
    componentDidMount() {
        // this.props.navigation.setParams({ add: this.addData });
        // this.setState({
        //     id: this.props.navigation.state.params.id
        // })

        this.loadData();
    }
    // componentWillMount(){
    //     this.loadData();
    // }
    addData() {
        alert(this.state.id);
    }
    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={this.state.mang.length} />;
    }

    loadData() {
        alert(this.props.navigation.state.params.id);
        fetch("http://192.168.1.173:8080/Demo/getHinhAnh.php?id=" + this.props.navigation.state.params.id)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                mang: responseJson,
                item: this.state.mang.length
            });
            alert(this.state.mang.length)
        })
        .catch((e) => { console.log(e) });
        
   }

    render() {
        const lst = <IndicatorViewPager
                        style={{height: height / 3 - 10 }}
                        indicator={this._renderDotIndicator()} >
                    { 
                        this.state.mang.map(
                            e => (
                                    <Image key={e.id} source={{ uri: e.link }} />
                                )
                        )
                    }
                    </IndicatorViewPager>
        return (
            <View style={{ flex:1 }}>
                {
                    this.state.mang.length ? lst : null
                }
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