import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import Rush from "../../assets/Rush.png"
import Jinzo from "../../assets/jinzo.png"
import Blue from "../../assets/maxblue.png"
import Pote from "../../assets/pote.png"
import Caos from "../../assets/caos.png"
import Yugi from "../../assets/yugioh.png"





import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-web";

export default function Home() {
    return (
        <ScrollView style={styles.tela}>
        <View style={styles.TopBarSearch}>
            <Ionicons name="search" style={styles.Icon}/>
            <TextInput style={styles.SearchTextInput} placeholder="Faça sua pesquisa"/>
            <Ionicons name="log-in" style={styles.Icon}/>
        </View>
       
       <View style={styles.ViewRushMaster}>
        <Image source={Yugi} style={styles.YugiohLogoImage}/> 
        <Image source={Rush} style={styles.YugiohRushLogoImage}/> 




       </View>

        <View style={styles.ViewProdutos}>
        <Image source={Caos} style={styles.ImageProdutos}/>
        <Image source={Blue} style={styles.ImageProdutos}/>
        <Image source={Pote} style={styles.ImageProdutos}/>
        </View>
        
        </ScrollView>
    )
}