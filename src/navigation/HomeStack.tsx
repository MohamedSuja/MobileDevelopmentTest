import React from 'react'
import Login from '../screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { RootStackParamList } from './Types';
import AddCompanies from '../screens/AddCompanies';
import Settings from '../screens/Settings';
import ResetPassword from '../screens/ResetPassword';
import ResetEmail from '../screens/ResetEmail';
import ResetUserInfo from '../screens/ResetUserInfo';
import AddCompany from '../screens/AddCompany';


const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => {
    return (      
        <Stack.Navigator  
           initialRouteName="Home"
           screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} /> 
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="ResetEmail" component={ResetEmail} />
          <Stack.Screen name="ResetUserInfo" component={ResetUserInfo} /> 
          <Stack.Screen name="AddCompany" component={AddCompany} />                   
        </Stack.Navigator>    
   )
}

export default HomeStack