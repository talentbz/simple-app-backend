import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image,  ScrollView, TextInput } from 'react-native';
import {styles} from './Style';
import { useNavigation } from '@react-navigation/native';

const List =(props)=>  {
const navigation = useNavigation();
    let data = props.route.params.data;
    let title = props.route.params.title;
    const datalen = data.length;
    console.log("abprops=",datalen );
    console.log("title=", title);
    return (
        <View  >
            {datalen ?
                <View>
                    <Text style={styles.toptxt} > {title}</Text>
                    <Text style={styles.toptxt1} >  検索結果</Text>
                </View>
            :   
                <View>
                    <Text style={styles.toptxt} > {title} </Text>
                    <Text style={styles.toptxt1} >  検索結果</Text>
                    <Text style={styles.toptxt} > 検索結果がありません </Text>
                </View>
            }
            <View style={styles.content}>
                <ScrollView style={styles.scrollview}>
                    
                {data.map((aitem, index)=>(
                    <TouchableOpacity  key={index} onPress={()=>navigation.navigate("Details", {id:index, data:data})}  >
                            <View style={styles.item} key={index}>
                                {aitem.item_url_top ?
                                    <Image   source={{uri: aitem.item_url_top }} style={styles.itemimg}  />
                                    :
                                    <Image   source={require('../../Assets/list.png')} style={styles.itemimg}  />
                                }
                                <View>
                                <Text style={styles.itemtxt}> {aitem.item_title}</Text>
                                <Text style={styles.itemtxt1}> {aitem.item_description}</Text>
                                </View>
                            </View>                    
                    </TouchableOpacity>
                
                ))}

                </ScrollView>
            </View>
        </View>
    )    
}

export default List 


