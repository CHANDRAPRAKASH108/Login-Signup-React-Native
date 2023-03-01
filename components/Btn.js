import React from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";

const Btn = (props) => {
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        marginTop: 20,
        borderRadius: 5,
        textAlign: "center",
    },
    btnText: {
        alignContent: "center",
        fontSize: 15,
        color: "#fff"
    },
    btn: {
        alignItems: 'center',
        backgroundColor: '#9c27b0',
        padding: 10,
        borderRadius: 10
    }
});

export default Btn;