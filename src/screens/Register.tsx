import { View, Text, StyleSheet ,TextInput, StatusBar, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';

import { ScreenWidth } from '../functions/Scale';
import { Button, TextareaItem } from '@ant-design/react-native';
import {RootStackParamList} from'../navigation/Types'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import store from '../redux/store/Store';
import { LoginForm } from '../redux/actions/UserActions';


type HomeScreenProps = NativeStackScreenProps<RootStackParamList,'Register'>


const Register: React.FC<HomeScreenProps> = (props) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const { dispatch } = store;
  const Login = (event: React.SyntheticEvent) =>{
    event.preventDefault();
    dispatch(LoginForm(email, password));
  }

  return (
    <View  style={styles.container}>
       <StatusBar translucent={false} />
      <Text style={styles.title}>Mobile Development Test</Text>
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

        <StepForwardOutlined />

      </View>

      <Button 
       style={styles.submitButton} 
       type='primary'
       onPress={Login}
       >
        SignUp</Button>
     
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

export default Register