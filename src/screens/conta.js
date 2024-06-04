import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-web";
import Yugi from "../../assets/yugioh.png"
import Rush from "../../assets/Rush.png"
import Jinzo from "../../assets/jinzo.png"
import Blue from "../../assets/maxblue.png"
import Pote from "../../assets/pote.png"
import Caos from "../../assets/caos.png"



export default function Menu() {
    return <ScrollView>
        <View style={styles.TopBarSearch}>
            <Ionicons name="search" style={styles.Icon}/>
            <TextInput style={styles.SearchTextInput} placeholder="Faça sua pesquisa"/>
        </View>
        <View style={styles.OlaUserBar}>
            <Ionicons name="pin-outline" style={styles.Icon}/>
            <Text>Olá Vitor</Text>
        </View>
        

       
    </ScrollView>
}