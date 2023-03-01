import { View,StyleSheet,Text } from "react-native"

const RegisterModule = (navigation, route) =>{
    return (
        <View style={styles.registrationContainer}>
            <Text>Register Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    registrationContainer:{
        alignItems: "center"
    }
})

export default RegisterModule;