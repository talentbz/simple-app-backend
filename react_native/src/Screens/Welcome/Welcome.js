import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {styles} from './Style';
import { useNavigation } from '@react-navigation/native';

export default class Welcome extends Component  {
    constructor(){
        super();

    }
    componentDidMount(){
            // Start counting when the page is loaded
            this.timeoutHandle = setTimeout(()=>{
                // Add your logic for the transition
                this.props.navigation.navigate('Search');
        }, 5000);        
    }
    componentWillUnmount(){
        clearTimeout(this.timeoutHandle); 
   }

    render(){
        return (
            <View style={styles.container}   >
                <View style={styles.content}>
                    
                    <TouchableOpacity>
                        <Text style={styles.toptxt}>ようこそ！</Text>
                        <Text style={styles.toptxt} >{global.name} さん</Text>
                    
                    </TouchableOpacity>
                </View>
            </View>
        )    
   }
}


