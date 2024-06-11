import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-web";
import Jinzoo from "../../assets/jinzo.png"
export default function Jinzo() {
    return (
        <ScrollView style={styles.tela}>
        <View style={styles.TopBarSearch}>
            <Ionicons name="search" style={styles.Icon}/>
            <TextInput style={styles.SearchTextInput} placeholder="Faça sua pesquisa"/>
            <Ionicons name="log-in" style={styles.Icon} onPress={() => {navigation.navigate('Login')}}/>
        </View>

        <Text style={styles.TextTopMenu}>Saiba mais sobre o Jinzo</Text>


        <View style={styles.ViewProdutos} horizontal={true}>
            <Image source={Jinzoo} style={styles.ViewCartaZoon}/>
        </View>

        <View style={styles.ZoonCartaBorder}>
            <Text  style={styles.miniText}>Português	Jinzo</Text>
            <Text  style={styles.miniText}>Japonês	人じん造ぞう人にん間げん－サイコ・ショッカー Jinzōningen - Saiko Shokkā</Text>

            <Text  style={styles.miniText}>Atributo	TREVAS TREVAS
                Tipos	Máquina / Efeito
                Nível	6 LevelLevelLevelLevelLevelLevel
                ATK / DEF	2400 / 1500
                Número	77585513
                Descrição
                Os Cards de Armadilha, bem como seus efeitos no campo, não podem ser ativados. Negue todos os efeitos dos Cards de Armadilha no campo.
                Inglês
                Trap Cards, and their effects on the field, cannot be activated. Negate all Trap effects on the field.
            </Text>
        </View>

        
        </ScrollView>
    )
}