import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import Yugi from "../../assets/YUGI.png"
import Salame from "../../assets/salamagrande.png"
import Mago from "../../assets/magnonegro.png"
import Meteor from "../../assets/fullmeteor.png"
import Cartrush from "../../assets/cartrush.png"
import Rush from "../../assets/RUSHD.png"




import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-web";

export default function Rushduel() {
    return (
        <ScrollView style={styles.tela}>
        <View style={styles.TopBarSearch}>
            <Ionicons name="search" style={styles.Icon}/>
            <TextInput style={styles.SearchTextInput} placeholder="Faça sua pesquisa"/>
            <Ionicons name="log-in" style={styles.Icon} onPress={() => {navigation.navigate('Login')}}/>
        </View>

        <Text style={styles.TextTopMenu}>Qual tipo de Cartas?</Text>

       
       <View style={styles.ViewRushMaster}>
        <TouchableOpacity onPress={() => {navigation.navigate('Inicio')}}>
        <Image source={Yugi} style={styles.YugiohLogoImage}/> 
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate('Rush')}}>
        <Image source={Rush} style={styles.YugiohRushLogoImage}/> 
        </TouchableOpacity>
       </View>

       <View style={styles.ViewTextAlto}>
        <Text style={styles.TextTopMenu}>Ver Cartas</Text>
       </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Image source={Salame} style={styles.ImageProdutos}/>
            <Image source={Meteor} style={styles.ImageProdutos}/>
        </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Text  style={styles.BlueText}>Ver mais</Text>
            <Text  style={styles.BlueText}>Ver mais</Text>
        </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Image source={Mago} style={styles.ImageProdutos}/>
            <Image source={Cartrush} style={styles.ImageProdutos}/>
        </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Text  style={styles.BlueText}>Ver mais</Text>
            <Text  style={styles.BlueText}>Ver mais</Text>
        </View>

        
        
        </ScrollView>
    )
}