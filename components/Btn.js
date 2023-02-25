import React from "react";
import { View, StyleSheet,TextInput, Button } from "react-native";

const Btn = (props)=>{
    return (
        <View style={styles.button}>
            <Button title={props.text}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#C0C0C0',
        margin: 10,
        width: '80%',
        borderRadius: 5,
        textAlign: "center",
    }
});

export default Btn;