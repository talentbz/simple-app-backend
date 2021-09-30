import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import createHomeStack from './src/Navigation/StackNavigator';


export default class App extends Component {
    componentDidMount = () => {

    }

    render() {
        return (
            <>                
                    <NavigationContainer >
                        {createHomeStack()}
                    </NavigationContainer>

                
            </>
        )
    }
}