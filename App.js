import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Btn from './components/Btn.js';
import InputField from './components/InputField.js';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Let's Blog</Text>
        <InputField text={'Username'}/>
        <InputField text={'Password'}/>
        <Btn text={'Login'}/>
        <TouchableOpacity style={styles.navigateRegister}>
          <Text style={styles.registerLink}>Not a user ? Register here.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigateRegister:{
    justifyContent: 'space-around',
    marginTop: 20,
    color: '#0000FF'
  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer:{
    position: 'absolute',
    width: '80%',
    height: '50%',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderColor: "#C0C0C0"
  },
  title:{
    fontWeight: 'bold',
    margin: 20,
    marginBottom: 50,
    fontSize: 24,
    fontStyle: 'italic',
    textShadowColor: '#33F6FF'
  },
});
