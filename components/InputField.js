import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

const InputField = (props) => {
    return (
        <View style={styles.input}>
            <Text style={styles.label}>{props.text}</Text>
            <View style={styles.inputFieldContainer}>
                <TextInput style={styles.inputtext} secureTextEntry={props.isSecureEntry} keyboardType={props.inputType}></TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputFieldContainer: {
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#9c27b0',
    },
    label: {
        color: "#9c27b0",
        marginTop: 30
    },
    inputtext: {
        margin: 3,
        color: "#9c27b0",
    }
});

export default InputField;