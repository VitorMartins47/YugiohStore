import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";
import Login from "../screens/login";
import Inicio from "../screens/inicio";
import Menu from "../screens/menu";
import Conta from "../screens/conta";
import Manga from "../screens/manga";
import Home from "../routes/home";
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
                name='Home' component={Home} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons  name="tablet-portrait" color={color} size={size} />)
                }} />

            <Tab.Screen
                name='Manga' component={Manga} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons  name="book" color={color} size={size} />)
                }} />

            <Tab.Screen 
                name='Conta' component={Conta} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons On name="person" color={color} size={size} />)
                }} />

        </Tab.Navigator>
    </NavigationContainer>

}