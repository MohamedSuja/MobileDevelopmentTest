import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { Button, TextareaItem,} from '@ant-design/react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/Types'
import { ScreenWidth } from '../functions/Scale'


type ScreenProps = NativeStackScreenProps<RootStackParamList>

const ResetUserInfo: React.FC<ScreenProps> = (props) => {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')

  return (
    <View style={styles.countainer}>
      <Header iconName='chevron-left' title='Reset Email' onPress={()=>props.navigation.goBack()}/>
      <View style={styles.mainCountainer}>
      <Text style={styles.text}>First Name</Text>
      <TextareaItem        
         placeholder='Enter Your New First Name'
         value={firstName}
         onChangeText={setFirstName}
         style={styles.textInput}/>
      <Text style={styles.text}>Last Name</Text>
      <TextareaItem        
         placeholder='Enter Your New Last Name'
         value={lastName}
         onChangeText={setLastName}
         style={styles.textInput}/>
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
  textInput:{
    borderColor:'#000',
    borderWidth:1,
    marginBottom:15,
  }
})


export default ResetUserInfo