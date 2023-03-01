import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import Btn from '../components/Btn';
import InputField from '../components/InputField';
import TextField from '../components/TextField';
import { Media_Handle, App_Title, App_Description, Label_Password, Label_Username, Login_Title, Register_User, Google_Logo } from '../Constants/constant.js';

const LoginModule = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView style={styles.loginContainer}>
          <Text style={styles.title}>{App_Title}</Text>
          <Text style={styles.description}>{App_Description}</Text>
          <Text style={styles.loginTitle}>Login</Text>
          <InputField text={Label_Username} isSecureEntry={false}></InputField>
          <InputField text={Label_Password} isSecureEntry={true}></InputField>
          <Btn text={Login_Title}></Btn>
          <TouchableOpacity style={styles.register} onPress={() => navigation.push('RegisterModule')}>
            <TextField text={Register_User} />
          </TouchableOpacity>
          <View style={styles.horizontalBorder} />
          <View style={styles.socialContainer}>
            <TextField text={Media_Handle} />
          </View>
          <View style={styles.loginusing}>
            <TouchableOpacity style={styles.googleContainer} onPress={OpenModal}>
              <Text style={styles.google}>G+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.facebookContainer}>
              <Text style={styles.google}>FB</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.facebookContainer}>
              <Text style={styles.google}>Li</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  )
}
const OpenModal = () => {
  return <View>
    <Modal
      animationType='slide'>
      <Text>This is Modal</Text>
    </Modal>
  </View>
}
const styles = StyleSheet.create({
  socialContainer: {
    alignItems: "center",
    marginTop: 20
  },
  google: {
    fontSize: 22,
    color: "#fff",
    margin: 5
  },
  googleContainer: {
    marginTop: 35,
    backgroundColor: "#DB4437",
    borderRadius: 50,
    width: 50,
    alignContent: "center",
    alignItems: "center",
    height: 40,
    shadowColor: "#9c27b0"
  },
  facebookContainer: {
    marginTop: 35,
    backgroundColor: "#4285F4",
    borderRadius: 10,
    width: 50,
    alignContent: "center",
    alignItems: "center",
    height: 40,
    shadowColor: "#9c27b0"
  },
  loginContainer: {
    margin: 35
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    fontStyle: 'italic',
    color: '#9c27b0'
  },
  description: {
    fontSize: 15,
    fontStyle: 'italic',
    margin: 2,
    color: '#9c27b0'
  },
  loginTitle: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#9c27b0'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: "15%"
  },
  horizontalBorder: {
    marginTop: 25,
    borderBottomColor: '#9c27b0',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  register: {
    marginTop: 10,
    alignItems: "center"
  },
  img: {
    height: 40,
    width: 40
  },
  loginusing: {
    flexDirection: "row",
    padding: 20,
    flex: 1,
    justifyContent: 'space-around'
  }
});

export default LoginModule;