import { View, Text } from 'react-native'
import React from 'react'
import Login from '../screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';


const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator  
           initialRouteName="Home"
           screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} /> 
          <Stack.Screen name="Home" component={Home} />                   
        </Stack.Navigator>
      </NavigationContainer>
   )
}

export default MyStack