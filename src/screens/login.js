import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import { ScrollView } from "react-native-web";

export default function Login() {
    return <ScrollView>
        <View style={styles.BackgroundAmazon}>
            <Image source={LogoAmazon} style={styles.LogoAmazon} />
            <View>
                <TextInput placeholder="E-mail" style={styles.InputLogin}/>
                <TextInput placeholder="Senha" style={styles.InputLogin}/>
            </View>
            <View>
                <TouchableOpacity style={styles.ButtonLogin}>
                    <Text style={styles.TextButtonLogin}> 
                        Logar
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.miniText}>

                    Todos os direitos estão reservados nfoayi
                </Text>
            </View>
            <View>

            </View>
        </View>
        </ScrollView>
    
}