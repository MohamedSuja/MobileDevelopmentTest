import { View, Text, StyleSheet ,TextInput, StatusBar, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';

import { ScreenWidth } from '../functions/Scale';
import { Button, TextareaItem } from '@ant-design/react-native';
import {RootStackParamList} from'../navigation/Types'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { LoginForm } from '../redux/actions/UserActions';
import axios from 'axios';
//import { LoginForm } from '../redux/actions/UserActions';

type RegisterScreenProps = NativeStackScreenProps<RootStackParamList,'Register'>


const Login: React.FC<RegisterScreenProps> = (props) => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)


  //this part is api connect
  const dispatch=useDispatch()
  const Login =async () =>{
    setLoading(true)
    try {
      await
      axios({
        method: 'post',
        url: 'https://fakestoreapi.com/auth/login',
        data: {
          username: "mor_2314",
          password: "83r5^_"
      }
      })
      .then(res=>{
        console.log(res.data.token);
        setLoading(false)
        dispatch(LoginForm(email, password,res.data.token)); 
      })
    } catch (e) {
      console.log(e);      
    }

    //dispatch(LoginForm(email, password));    
  }

  const Login2 = () =>{ 
    dispatch(LoginForm(email, password,'token'));    
  }


  
  return (
    <View  style={styles.container}>
       <StatusBar translucent={false} />
      <Text style={styles.title}>Mobile Development Test</Text>
      <View style={styles.textinputContainer}>
        <Text style={styles.text}>Email Address</Text>
        <TextareaItem        
         placeholder='Enter Your Email Address'
         keyboardType='email-address' 
         value={email}
         onChangeText={setEmail}
         style={styles.emailInput}/>
         
         <Text style={styles.text}>Password</Text>
         <TextareaItem      
         placeholder='Enter Your Password'
         secureTextEntry={true}
         value={password}
         onChangeText={setPassword}
         style={styles.passwordInput}
        />      
       <TouchableOpacity
         style={styles.signUpButton}
         onPress={() => props.navigation.push('Register')}>
         <Text style={styles.signUpButtonText}>
          Don't have an acount? SignIn here
         </Text>
       </TouchableOpacity>
       
      </View>

      <Button 
      loading={loading}
       style={styles.loginButton} 
       type='primary'
       onPress={Login}
       >
        SignIn</Button>
     
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
  text:{
    fontSize:20,
    marginBottom:10
  },
  emailInput:{
    borderColor:'#000',
    borderWidth:1,
    marginBottom:15
  },
  passwordInput:{
    borderColor:'#000',
    borderWidth:1,
    marginBottom:15
  },
  loginButton:{
    width: ScreenWidth-20,
    position:'absolute',
    bottom:10
  },
  signUpButton: {
    marginVertical: 35,
  },
  signUpButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  }

})

export default Login