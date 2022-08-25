import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { Button, TextareaItem,} from '@ant-design/react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/Types'
import { ScreenWidth } from '../functions/Scale'


type ScreenProps = NativeStackScreenProps<RootStackParamList>

const ResetPassword: React.FC<ScreenProps> = (props) => {
  const [password,setPassword] = useState('')
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
         value={password}
         onChangeText={setPassword}
         style={styles.passwordInput}/>
      <Text style={styles.text}>New Password</Text>
      <TextareaItem        
         placeholder='Reenter Your New Password'
         secureTextEntry 
         value={password}
         onChangeText={setPassword}
         style={styles.passwordInput}/>
      </View>
      
     
      <Button 
       style={styles.submitButton} 
       type='primary'
       
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