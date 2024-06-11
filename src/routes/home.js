import React from "react";

import { createStackNavigator} from "@react-navigation/stack"

import Inicio from "../screens/inicio"
import Rushduel from "../screens/rushduel";
import Jinzo from "../screens/jinzo";
import Login from "../screens/login"
const Stack = createStackNavigator();

export default function Home(){
    return<Stack.Navigator>
        <Stack.Screen name='Inicio' component={Inicio}/>
        <Stack.Screen name='Rushduel' component={Rushduel}/>
        <Stack.Screen name='Jinzo' component={Jinzo}/>
        <Stack.Screen name='Login' component={Login}/>



    </Stack.Navigator>
}