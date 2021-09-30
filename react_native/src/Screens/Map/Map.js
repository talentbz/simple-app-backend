import React, {Component, useState} from 'react';
import {Text, View, TouchableOpacity, Image,  ScrollView, TextInput } from 'react-native';
import {styles} from './Style';
import { useNavigation } from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const List =(props)=>  {
const navigation = useNavigation();
const [satellite, Setsatellite] = useState('standard');
let latitude1 = parseFloat( props.route.params.latitude);
let longitude1 =  parseFloat( props.route.params.longitude);

const onChangesat=()=>{
    console.log("aaaa");
    if( satellite === 'standard' )
        Setsatellite('satellite');
    else 
        Setsatellite('standard');

};
//  nakata.sho@abc.com
    return (
            <View style={styles.content}>

                    <View style={styles.mapcontainer}>
                        <MapView
                            // onPress={(e)=>console.log(e.nativeEvent.coordinate)}
                            onPress={onChangesat}
                            provider={PROVIDER_GOOGLE}
                            style={styles.map}
                            mapType = {satellite}
                            initialRegion={{
                                latitude:  latitude1,
                                longitude: longitude1,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                            showUserLocation={true} >
                            <Marker coordinate={{
                                latitude: latitude1,
                                longitude: longitude1,
                            }}  />
                        </MapView>
                    </View>                     

            </View>
    )    
}

export default List 


