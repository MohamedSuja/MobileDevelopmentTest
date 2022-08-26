import { View, Text, StyleSheet ,TextInput, StatusBar, TouchableOpacity, ScrollView, Alert} from 'react-native';
import React, { useState } from 'react';
import { ScreenWidth } from '../functions/Scale';
import { Button,  TextareaItem } from '@ant-design/react-native';
import {RootStackParamList} from'../navigation/Types'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginForm } from '../redux/actions/UserActions';
import Icon from 'react-native-vector-icons/Entypo';
import axios from 'axios';


type ScreenProps = NativeStackScreenProps<RootStackParamList>


const Register: React.FC<ScreenProps> = (props) => {
  const [firstName,setfirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)

 
  const register =async () =>{   
    setLoading(true)
    try {
      await
      axios({
        method: 'put',
        url: 'https://mobitron1.azurewebsites.net/api/1.0/User',
        data: {
           firstName: firstName,
           lastName: lastName,
           email: email,
           password: password
      }
      })
      .then(res=>{
        setLoading(false)
        Alert.alert('! Alert','Password successfully registered')   
        props.navigation.goBack()     
      })
    } catch (e) {
      setLoading(false)
      console.log(e);
      Alert.alert('! Alert',`${e}`)
      
    }
 
  }

  
  return (
    <View  style={styles.container}>
       <StatusBar translucent={false} />
       <TouchableOpacity style={styles.backIcon} onPress={()=>props.navigation.goBack()}>
          <Icon name="chevron-left" size={45} color="#3e86fa" />
       </TouchableOpacity>   
       
      <Text style={styles.title}>Mobile Development Test</Text>
      <ScrollView horizontal={false} >
       <View style={styles.textinputContainer}>
        <Text style={styles.text}>First Name</Text>
        <TextareaItem        
         placeholder='Enter Your First Name'      
         value={firstName}
         onChangeText={setfirstName}
         style={styles.textInput}/>

        <Text style={styles.text}>Last Name</Text>
        <TextareaItem        
         placeholder='Enter Your Last Name'
         value={lastName}
         onChangeText={setLastName}
         style={styles.textInput}/>

        <Text style={styles.text}>Email Address</Text>
        <TextareaItem        
         placeholder='Enter Your Email Address'
         keyboardType='email-address' 
         value={email}
         onChangeText={setEmail}
         style={styles.textInput}/>

         <Text style={styles.text}>Password</Text>
         <TextareaItem      
         placeholder='Enter Your Password'
         secureTextEntry={true}
         value={password}
         onChangeText={setPassword}
         style={styles.passwordInput}
        />      
       </View>
      </ScrollView>
      

      <Button 
       loading={loading}
       style={styles.submitButton} 
       type='primary'
       onPress={register}
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
  backIcon:{
    alignSelf:'baseline',
    margin:0
  },
  textinputContainer:{
    width:ScreenWidth,
    marginTop:10
   // height:200
  },
  text:{
    fontSize:20,
    marginBottom:10,
    marginLeft:5
  },
  textInput:{
    borderColor:'#000',
    borderWidth:1,
    marginBottom:15,
    width:ScreenWidth-10,
    alignSelf:'center'
  },
  passwordInput:{
    borderColor:'#000',
    borderWidth:1,
    marginBottom:15,
    width:ScreenWidth-10,
    alignSelf:'center'
  },
  submitButton:{
    width: ScreenWidth-20,  
    bottom:10
  },

})

export default Register