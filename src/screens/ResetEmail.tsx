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

const ResetEmail: React.FC<ScreenProps> = (props) => {
  const [email,setEmail] = useState('')
  const [newEmail,setNewEmail] = useState('')
  const [loading,setLoading] = useState(false)
  

  
  const dataAuth = useSelector((props: any) => props.authUser);
  

  const Update =async () =>{
    setLoading(true)
    try {
      await
      axios({
        method: 'put',
        url: 'https://mobitron1.azurewebsites.net/api/1.0/auth/reset-email',
        data: {
          email: dataAuth.email == email ? newEmail : null,
          token: dataAuth.token,
      }
      })
      .then(res=>{
        setLoading(false)
        Alert.alert('! Alert','Email successfully changed')        
      })
    } catch (e) {
      setLoading(false)
      console.log(e);
      Alert.alert('! Alert',`${e}`)
      
    }
  }

  return (
    <View style={styles.countainer}>
      <Header iconName='chevron-left' title='Reset Email' onPress={()=>props.navigation.goBack()}/>
      <View style={styles.mainCountainer}>
      <Text style={styles.text}>Email Address</Text>
      <TextareaItem        
         placeholder='Enter Your Email Address'
         keyboardType='email-address' 
         value={email}
         onChangeText={setEmail}
         style={styles.emailInput}/>
      <Text style={styles.text}>New Email Address</Text>
      <TextareaItem        
         placeholder='Enter Your New Email Address'
         keyboardType='email-address' 
         value={newEmail}
         onChangeText={setNewEmail}
         style={styles.emailInput}/>
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
  emailInput:{
    borderColor:'#000',
    borderWidth:1,
    marginBottom:15,
  }
})

export default ResetEmail