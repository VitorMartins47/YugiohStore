import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-web";
import MangaDM from "../../assets/mangaimage.png"

export default function Manga() {
    return (
        <ScrollView style={styles.tela}>
        <View style={styles.TopBarSearch}>
            <Ionicons name="search" style={styles.Icon}/>
            <TextInput style={styles.SearchTextInput} placeholder="Faça sua pesquisa"/>
            <Ionicons name="log-in" style={styles.Icon}/>
        </View>

        <Text style={styles.TextTopMenu}>Qual Manga quer ler?</Text>


        <View style={styles.ViewProdutos} horizontal={true}>
            <Image source={MangaDM} style={styles.ImageProdutos}/>
            <Image source={MangaDM} style={styles.ImageProdutos}/>
        </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Text  style={styles.BlueText}>Ver mais</Text>
            <Text  style={styles.BlueText}>Ver mais</Text>
        </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Image source={MangaDM} style={styles.ImageProdutos}/>
            <Image source={MangaDM} style={styles.ImageProdutos}/>
        </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Text  style={styles.BlueText}>Ver mais</Text>
            <Text  style={styles.BlueText}>Ver mais</Text>
        </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Image source={MangaDM} style={styles.ImageProdutos}/>
            <Image source={MangaDM} style={styles.ImageProdutos}/>
        </View>

        <View style={styles.ViewProdutos} horizontal={true}>
            <Text  style={styles.BlueText}>Ver mais</Text>
            <Text  style={styles.BlueText}>Ver mais</Text>
        </View>
        
        </ScrollView>
    )
}