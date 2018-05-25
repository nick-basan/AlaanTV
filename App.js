import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Splash from './Components/Splash';
import Welcome from './Components/Welcome';
import Home from './Components/Home';

const RootStack = createStackNavigator({
        First: {
            screen: Splash,
        },
        Second: {
            screen: Welcome,
        },
        Third: {
            screen: Home,
        }
    },
    {
        initialRouteName: 'First',

    },

);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}

