import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginModule from './Screens/LoginModule';
import RegisterModule from './Screens/RegisterModule';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginModule"
          component={LoginModule}
          options={{headerShown: false}}
        />
        <Stack.Screen name="RegisterModule" component={RegisterModule} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;