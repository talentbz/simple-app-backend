import React, {Component,useState} from 'react';
import {Text, View, TouchableOpacity, TextInput, ImageBackground} from 'react-native';
import {styles} from './Style';
import { useNavigation } from '@react-navigation/native';

const Search =()=>  {
    const navigation = useNavigation();

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const onSearch=()=>{
        console.log("title=", title);
        const payload = {
            title,
        };
        fetch(`${global.server}/api/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then(async res => { 
            try {
                const jsonRes = await res.json();
                console.log("jsonRes",jsonRes );
                if (res.status !== 200) {
                    setIsError(true);
                    setMessage("Failed Server connect");

                } else {
                    console.log(jsonRes.data);
                    if(jsonRes.result) {
                        navigation.navigate("List", {data:jsonRes.data, title :title});
                    } else {
                        setMessage("There is no search result");
                    };

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
            <View  >
                <View style={styles.content} >
                    <TextInput style={styles.toptxt} placeholder="つがる　りんご" onChangeText={setTitle} />
                </View>
                
                {/* <TouchableOpacity> */}
                    <Text style={styles.bottombtn} onPress={onSearch}>検　索</Text>
                {/* </TouchableOpacity> */}
            </View>
        )    
}

export default Search 


