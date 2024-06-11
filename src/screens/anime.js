import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-web";
import Filme1 from "../../assets/filme1.png"
import Filme2 from "../../assets/filme2.png"
import Filme3 from "../../assets/filme3.png"
import AnimeGx from "../../assets/animegx.png"
import AnimeDm from "../../assets/animedm.png"
import AnimeFds from "../../assets/animefds.png"


export default function Manga() {
    return (
        <ScrollView style={styles.tela}>
        <View style={styles.TopBarSearch}>
            <Ionicons name="search" style={styles.Icon}/>
            <TextInput style={styles.SearchTextInput} placeholder="Faça sua pesquisa"/>
            <Ionicons name="log-in" style={styles.Icon} onPress={() => {navigation.navigate('Login')}}/>
        </View>

        <Text style={styles.TextTopMenu}>Qual Manga quer ler?</Text>


        <View style={styles.ViewProdutos} horizontal={true}>
            <Image source={Filme1} style={styles.ImageProdutos}/>
            <Image source={Filme2} style={styles.ImageProdutos}/>
        </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Text  style={styles.BlueText}>Ver mais</Text>
            <Text  style={styles.BlueText}>Ver mais</Text>
        </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Image source={Filme3} style={styles.ImageProdutos}/>
            <Image source={AnimeDm} style={styles.ImageProdutos}/>
        </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Text  style={styles.BlueText}>Ver mais</Text>
            <Text  style={styles.BlueText}>Ver mais</Text>
        </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Image source={AnimeGx} style={styles.ImageProdutos}/>
            <Image source={AnimeFds} style={styles.ImageProdutos}/>
        </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Text  style={styles.BlueText}>Ver mais</Text>
            <Text  style={styles.BlueText}>Ver mais</Text>
        </View>

        
        </ScrollView>
    )
}