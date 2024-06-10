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

export default function Inicio() {
    return (
        <ScrollView style={styles.tela}>
        <View style={styles.TopBarSearch}>
            <Ionicons name="search" style={styles.Icon}/>
            <TextInput style={styles.SearchTextInput} placeholder="Faça sua pesquisa"/>
            <Ionicons name="log-in" style={styles.Icon}/>
        </View>

        <Text style={styles.TextTopMenu}>Qual tipo de Cartas?</Text>

       
       <View style={styles.ViewRushMaster}>
        <Image source={Yugi} style={styles.YugiohLogoImage}/> 
        <Image source={Rush} style={styles.YugiohRushLogoImage}/> 
       </View>

       <View style={styles.ViewTextAlto}>
        <Text style={styles.TextTopMenu}>Ver Cartas</Text>
       </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Image source={Caos} style={styles.ImageProdutos}/>
            <Image source={Blue} style={styles.ImageProdutos}/>
        </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Text  style={styles.BlueText}>Ver mais</Text>
            <Text  style={styles.BlueText}>Ver mais</Text>
        </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Image source={Jinzo} style={styles.ImageProdutos}/>
            <Image source={Pote} style={styles.ImageProdutos}/>
        </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Text  style={styles.BlueText}>Ver mais</Text>
            <Text  style={styles.BlueText}>Ver mais</Text>
        </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Image source={Exodia} style={styles.ImageProdutos}/>
            <Image source={Cavera} style={styles.ImageProdutos}/>
        </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Text  style={styles.BlueText}>Ver mais</Text>
            <Text  style={styles.BlueText}>Ver mais</Text>
        </View>
        
        </ScrollView>
    )
}