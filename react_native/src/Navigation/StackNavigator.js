import React, { Component } from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import Login from "../Screens/Login/Login"
import Welcome from "../Screens/Welcome/Welcome"
import Search from "../Screens/Search/Search"
import List  from "../Screens/List/List"
import Details from "../Screens/Details/Details"
import Map  from "../Screens/Map/Map"

import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';

const Stack = createStackNavigator();
const HEIGHT = heightPercentageToDP('100%');
const WIDTH = widthPercentageToDP('100%');

global.screenheight = HEIGHT;
global.screenwidth = WIDTH;
global.ratio = WIDTH / HEIGHT;
global.server =  "https://trucker.sebthe.ninja";
global.result = false;
global.name = "";

export default function createHomeStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Map" component={Map} />

        </Stack.Navigator>

    )
}