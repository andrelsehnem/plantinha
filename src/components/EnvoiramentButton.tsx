import React from "react";
import {
    StyleSheet,
    Text,
    Image, 
    View
} from 'react-native';
import {
    RectButton,
    RectButtonProps,
} from 'react-native-gesture-handler';

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnviromentButtonProps extends RectButtonProps{
    title: string;
    active?: boolean;
}

export function EnviromentButton ({
    title,
    active = false,
    ... rest
}: EnviromentButtonProps){
    return(
        <RectButton
            style={styles.container}
            {...rest}
            >
                <Text style={styles.text}>
                    { title }
                </Text>
        </RectButton>
    );
}

const styles = StyleSheet.create({
    container:{
    },
    text: {
    },
})