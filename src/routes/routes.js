import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";
import Login from "../screens/login";
import Home from "../screens/home";
import Menu from "../screens/menu";
import Conta from "../screens/conta";
import Cart from "../screens/cart";
const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <NavigationContainer>

        <Tab.Navigator screenOptions={{
            headerTransparent: true,
            headerShown: false,


            tabBarActiveTintColor: "darkblue",
            tabBarInactiveTintColor: "black",

            tabBarLabelStyle: {
                width: '100%',
                flex: 1,
                fontWeight: 'bold',
                paddingTop: 10,
                fontSize: 16,
                lineHeight: 1,
                backgroundColor: 'white',
                
            },

            tabBarStyle: {
                width: '100%',
                height: 80,
                lineHeight: 1,
            },


        }}>
            <Tab.Screen
                name='Cartas' component={Home} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons  name="tablet-portrait" color={color} size={size} />)
                }} />

            <Tab.Screen
                name='Sacola' component={Cart} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons  name="bag" color={color} size={size} />)
                }} />

            <Tab.Screen 
                name='Conta' component={Conta} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons On name="person" color={color} size={size} />)
                }} />

        </Tab.Navigator>
    </NavigationContainer>

}