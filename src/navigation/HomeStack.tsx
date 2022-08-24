import React from 'react'
import Login from '../screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { RootStackParamList } from './Types';
import AddCompanies from '../screens/AddCompanies';
import Settings from '../screens/Settings';


const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => {
    return (      
        <Stack.Navigator  
           initialRouteName="Home"
           screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddCompanies" component={AddCompanies} />
          <Stack.Screen name="Settings" component={Settings} />                    
        </Stack.Navigator>    
   )
}

export default HomeStack