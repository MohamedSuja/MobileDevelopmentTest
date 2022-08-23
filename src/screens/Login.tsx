import { View, Text, StyleSheet ,TextInput, Button} from 'react-native';
import React, { useState } from 'react';

import { ScreenWidth } from '../functions/Scale';


const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  return (
    <View  style={styles.container}>
      <View style={styles.textinputContainer}>
        <TextInput 
        
        
         keyboardType='email-address' 
         value={email}
         onChangeText={setEmail}
         style={styles.emailInput}/>

         <TextInput        
         
         secureTextEntry={true}
         value={password}
         onChangeText={setPassword}
         style={styles.passwordInput}
        />
       
      </View>

      
     
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  textinputContainer:{
    width:ScreenWidth-20,
    margin:20,
    height:200
  },
  emailInput:{},
  passwordInput:{marginTop:10}

})

export default Login