import React from "react";

import { createStackNavigator} from "@react-navigation/stack"

import Inicio from "../screens/inicio"
import Rushduel from "../screens/rushduel";

const Stack = createStackNavigator();

export default function Home(){
    return<Stack.Navigator>
        <Stack.Screen name='Inicio' component={Inicio}/>
        <Stack.Screen name='Rush' component={Rushduel}/>

    </Stack.Navigator>
}