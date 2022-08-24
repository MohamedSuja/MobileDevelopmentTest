import React from 'react'
import Login from '../screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { RootStackParamList } from './Types';


const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
    return (      
        <Stack.Navigator  
           initialRouteName="Login"
           screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />                  
        </Stack.Navigator>    
   )
}

export default AuthStack