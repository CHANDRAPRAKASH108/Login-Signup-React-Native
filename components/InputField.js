import React from "react";
import { View, StyleSheet,TextInput } from "react-native";

const InputField = (props)=>{
    return (
        <View style={styles.input}>
            <TextInput placeholder={props.text} style={styles.inputtext}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#C0C0C0',
        margin: 10,
        width: '80%',
        height: '7%',
        borderRadius: 5,
        textAlign: "center",
    }
});

export default InputField;