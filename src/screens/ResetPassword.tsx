import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { Button, TextareaItem,} from '@ant-design/react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/Types'
import { ScreenWidth } from '../functions/Scale'
import axios from 'axios'
import { useSelector } from 'react-redux'


type ScreenProps = NativeStackScreenProps<RootStackParamList>

const ResetPassword: React.FC<ScreenProps> = (props) => {
  const [password,setPassword] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [reNewPassword,setReNewPassword] = useState('')
  const [loading,setLoading] = useState(false)

  const dataAuth = useSelector((props: any) => props.authUser);

  const Update =async () =>{
    setLoading(true)
    try {
      await
      axios({
        method: 'put',
        url: 'https://mobitron1.azurewebsites.net/api/1.0/auth/reset-password',
        data: {
          email: dataAuth.email,
          token: dataAuth.token,
          password: newPassword == reNewPassword ? newPassword : null
      }
      })
      .then(res=>{
        setLoading(false)
        Alert.alert('! Alert','Password successfully changed')        
      })
    } catch (e) {
      setLoading(false)
      console.log(e);
      Alert.alert('! Alert',`${e}`)
      
    }
  }

  return (
    <View style={styles.countainer}>
      <Header iconName='chevron-left' title='Reset Password' onPress={()=>props.navigation.goBack()}/>
      <View style={styles.mainCountainer}>
      <Text style={styles.text}>Password</Text>
      <TextareaItem        
         placeholder='Enter Your Password'
         secureTextEntry
         value={password}
         onChangeText={setPassword}
         style={styles.passwordInput}/>
      <Text style={styles.text}>New Password</Text>
      <TextareaItem        
         placeholder='Enter Your New Password'
         secureTextEntry 
         value={newPassword}
         onChangeText={setNewPassword}
         style={styles.passwordInput}/>
      <Text style={styles.text}>New Password</Text>
      <TextareaItem        
         placeholder='Reenter Your New Password'
         secureTextEntry 
         value={reNewPassword}
         onChangeText={setReNewPassword}
         style={styles.passwordInput}/>
      </View>
      
     
      <Button 
       style={styles.submitButton} 
       type='primary'
       onPress={Update}
       >
        Submit</Button>

    </View>
  )
}

const styles = StyleSheet.create({
  countainer:{
    flex:1
  },
  mainCountainer:{
     padding:10
  },
  submitButton:{
    width: ScreenWidth-20,
    position:'absolute',
    bottom:10,
    alignSelf:'center'
  },
  text:{
    fontSize:20,
    marginBottom:15
  },
  passwordInput:{
    borderColor:'#000',
    borderWidth:1,
    marginBottom:15,
  }
})

export default ResetPassword