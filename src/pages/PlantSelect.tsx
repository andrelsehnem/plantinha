import React from "react";
import {
    View,
    Text,
    StyleSheet
 } from 'react-native';
import { EnviromentButton } from "../components/EnvoiramentButton";

import { Header } from "../components/Header";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function PlantSelect(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
                
                <Text style={styles.title}>
                    Em qual ambiente
                </Text>
                <Text style={styles.subTitle}>
                    você quer colocar sua planta?
                </Text>
                </View>

                <EnviromentButton title="Cozinha" />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background,
    },
    title:{
        fontSize:17,
        color:colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 20,
    },
    subTitle:{
        fontSize:17,
        color:colors.heading,
        fontFamily: fonts.text,
        lineHeight: 20,
    },
    header:{
        paddingHorizontal: 30,
    }
})