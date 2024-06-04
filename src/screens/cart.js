import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-web";

export default function Cart() {
    return <ScrollView>
         <View style={styles.TopBarSearch}>
            <Ionicons name="search" style={styles.Icon}/>
            <TextInput style={styles.SearchTextInput} placeholder="Faça sua pesquisa"/>
        </View>
        <View style={styles.ViewContinueComprando}>
            <Text style={styles.TextTopMenu}>Mensagem sobre os produtos em seu carrinho </Text>
        </View>

        <View style={styles.ViewContinueComprando}>
            <Text>Subtotal:</Text>
            <Text style={styles.TextTopMenu}> R$ 1200,00 </Text>
        </View>
        <View>
            <TouchableOpacity style={styles.ViewButtonCart}>
                Fechar pedido
            </TouchableOpacity>
        </View>


    </ScrollView>
}