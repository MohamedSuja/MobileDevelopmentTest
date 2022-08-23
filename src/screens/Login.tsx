import { View, Text, StyleSheet ,TextInput} from 'react-native';
import React, { useState } from 'react';

import { ScreenWidth } from '../functions/Scale';
import { Button, TextareaItem } from '@ant-design/react-native';
import {RootStackParamList} from'../navigation/Types'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList,'Home'>

const Login: React.FC<HomeScreenProps> = (props) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  return (
    <View  style={styles.container}>
      <Text style={styles.title}>LogIn Screen</Text>
      <View style={styles.textinputContainer}>
        <TextareaItem        
         placeholder='Email'
         keyboardType='email-address' 
         value={email}
         onChangeText={setEmail}
         style={styles.emailInput}/>

         <TextareaItem      
         placeholder='Password'
         secureTextEntry={true}
         value={password}
         onChangeText={setPassword}
         style={styles.passwordInput}
        />        
       
      </View>

      <Button 
       style={styles.submitButton} 
       type='primary'
       onPress={()=>props.navigation.push('Home')}
       >
        Login</Button>
     
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  title:{
    fontSize:30,
    fontWeight:'800',
    marginTop:10
  },
  textinputContainer:{
    width:ScreenWidth-20,
    margin:20,
    height:200
  },
  emailInput:{
    borderColor:'#000',
    borderWidth:1
  },
  passwordInput:{
    marginTop:10,
    borderColor:'#000',
    borderWidth:1,
    marginBottom:10
  },
  submitButton:{
    width: ScreenWidth-20,
    position:'absolute',
    bottom:10
  }

})

export default Login