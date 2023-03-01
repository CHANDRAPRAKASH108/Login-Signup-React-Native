import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Btn from "../components/Btn";
import InputField from "../components/InputField";
import TextField from "../components/TextField";
import { Register_Description } from "../Constants/constant";

const RegisterModule = (navigation, route) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.registrationContainer}>
                    <Text style={styles.pageTitile}>Register</Text>
                    <Text style={styles.registerDescription}>{Register_Description}</Text>
                    <View style={styles.registerElements}>
                        <InputField text="Name" />
                        <InputField text="Email" inputType="email-address" />
                        <InputField text="Phone" inputType="phone-pad" />
                        <InputField text="Password" isSecureEntry={true} />
                        <Btn text="Register" />
                        <View style={styles.horizontalBorder} />
                        <TouchableOpacity style={styles.backToLogin} onPress={()=> navigation.navigate('LoginModule')}>
                            <TextField text="I already have an account ? Back to Login " />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    registrationContainer: {
        marginTop: 30,
        padding: 30
    },
    pageTitile: {
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "#9c27b0"
    },
    registerDescription: {
        fontSize: 15,
        fontStyle: "italic",
        color: "#9c27b0",
        marginTop: 10
    },
    horizontalBorder: {
        marginTop: 25,
        borderBottomColor: '#9c27b0',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    backToLogin:{
        marginTop: 30,
        alignItems: "center"
    }
})

export default RegisterModule;