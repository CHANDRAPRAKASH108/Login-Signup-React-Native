import React from "react";
import { View, StyleSheet,Text } from "react-native";

const TextField = (props) => {
    return (
        <View style={styles.input}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color: "#9c27b0"
    }
})

export default TextField;