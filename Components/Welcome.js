import React from 'react';
import { View, Text } from 'react-native';

export default class Welcome extends React.Component{
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: {

        }
    };
    render(){
        return(
            <View>
                <Text>It s 2st</Text>
            </View>
        )
    }
}