import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import Rush from "../../assets/RUSHD.png"
import Jinzo from "../../assets/jinzo.png"
import Blue from "../../assets/maxblue.png"
import Pote from "../../assets/pote.png"
import Caos from "../../assets/caos.png"
import Yugi from "../../assets/YUGI.png"
import Exodia from "../../assets/exodia.png"
import Cavera from "../../assets/dragaocaveira.png"
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-web";

export default function Rushduel() {
    return (
        <ScrollView style={styles.tela}>
        <View style={styles.TopBarSearch}>
            <Ionicons name="search" style={styles.Icon}/>
            <TextInput style={styles.SearchTextInput} placeholder="Faça sua pesquisa"/>
            <Ionicons name="log-in" style={styles.Icon}/>
        </View>

        <Text style={styles.TextTopMenu}>Qual tipo de Cartas?</Text>

       
      
        
        </ScrollView>
    )
}