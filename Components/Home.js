import React from 'react';
import { View, Text } from 'react-native';

export default class Home extends React.Component{
    static navigationOptions = {
        title: 'Home',
        color: '#000',
        visible: false
    };
    render(){
        return(
            <View>

                <Text>It s 3st</Text>
            </View>
        )
    }
}