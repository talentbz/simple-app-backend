import React, {Component, useState } from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {styles} from './Style';
import { useNavigation } from '@react-navigation/native';

const Login =()=>  {
    const navigation = useNavigation();
    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');

    const onVerify=()=> {
        console.log("email=", email);
        console.log("password=", password);
        global.result = false;
        const payload = {
            email,
            password,
        };
        fetch(`${global.server}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then(async res => { 
            try {
                const jsonRes = await res.json();
                if (res.status !== 200) {
                    setIsError(true);
                    setMessage("Failed Server connect");

                } else {
                    global.result = jsonRes.result;
                    if(!global.result) {
                        setIsError(true);
                        setMessage("Failed Email or Password");
                    } else {
                        
                        global.name = jsonRes['data'][0]['username'];
                    
                        navigation.navigate("Welcome");
                    }
                }
            } catch (err) {
                console.log(err);
            };
        })
        .catch(err => {
            console.log(err);
        });
    };
        return (
            <View style={styles.container}   >
                <ImageBackground  source={require('../../Assets/background.png')}  style={styles.imgbackground}>

                    <View style={ styles.acenter } >
                        <TextInput placeholder="e-mail"  onChangeText={setEmail}  style={styles.email} />
                        <TextInput placeholder="password" secureTextEntry={true}  style={styles.password} onChangeText={setPassword} />
                        <Text style={[styles.message, {color: isError ? 'red' : 'green'}]}>{message}</Text>
                        <TouchableOpacity>
                            <Text style={styles.loginbtn} onPress={onVerify}>
                            ログイ	
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
}

export default Login 

