import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './HomeStack'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux'

interface loginProps {
  loginStatus: string;
}

const RootNavigation = () => {

  const { loginStatus } = useSelector((props: any) => props.authUser);
  console.log(loginStatus);
    
  return (
    <NavigationContainer>
       {loginStatus == "SUCCESS" ?<HomeStack/>:<AuthStack/>}
    </NavigationContainer>
  )
}

export default RootNavigation