import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image,  ScrollView, TextInput } from 'react-native';
import {styles} from './Style';
import { useNavigation } from '@react-navigation/native';

const List =(props)=>  {
const navigation = useNavigation();
let id = props.route.params.id;
let data = props.route.params.data[id];
console.log("id=",id );
console.log("data=",data );

    return (
        <View  >
            <View style={styles.content}>
                <ScrollView >
                    {data.item_url_1 ? 
                        <Image   source={{uri: data.item_url_1 }} style={styles.itemimg} />
                        : 
                        <Image  source={require('../../Assets/detail.png')}  style={styles.itemimg} />

                    }
                    <Text style={styles.itemtxt} >{data.item_title}</Text>
                    <Text style={styles.itemtxt1} >{data.item_description}</Text>

                    {data.item_url_2 ? 
                        <Image   source={{uri: data.item_url_2 }} style={styles.itemimg} />
                        : 
                        <Image  source={require('../../Assets/detail.png')}  style={styles.itemimg} />

                    }    
                      <TouchableOpacity  onPress={()=>navigation.navigate("Map",{latitude:data.latitude, longitude:data.longitude })} >  
                          
                        <View style={styles.flexrow} >
                            <Text  style={styles.bottombtn} >産地  :  </Text>
                            <Text  style={styles.bottombtn} >{data.item_origin}</Text>
                        </View>
                      </TouchableOpacity>  

                </ScrollView>
            </View>
        </View>
    )    
}

export default List 


