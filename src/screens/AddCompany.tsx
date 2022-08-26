import { View, Text, StyleSheet ,TextInput, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import React, { useState } from 'react';

import { ScreenWidth } from '../functions/Scale';
import { Button,  TextareaItem } from '@ant-design/react-native';
import {RootStackParamList} from'../navigation/Types'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import store from '../redux/store/Store';
import { LoginForm, UserForm } from '../redux/actions/UserActions';
import Icon from 'react-native-vector-icons/Entypo';
import Header from '../components/Header';
import { useDispatch } from 'react-redux';


type ScreenProps = NativeStackScreenProps<RootStackParamList>


const AddCompany: React.FC<ScreenProps> = (props) => {
  const [companyId,seCompanyId] = useState('')
  const [companyName,seCompanyName] = useState('')
  const [companyLocation,seCompanyLocation] = useState('')

  const dispatch=useDispatch()

  const submit = () =>{
   
  } 

  return (
    <View  style={styles.container}> 
    <Header iconName='chevron-left' title='Add New Company' onPress={()=>props.navigation.goBack()}/>
      <ScrollView horizontal={false} >
       <View style={styles.textinputContainer}>
        
        <Text style={styles.text}>Company Id</Text>
        <TextareaItem        
         placeholder='Enter Your Company Id'      
         value={companyId}
         onChangeText={seCompanyId}
         style={styles.textInput}/>

        <Text style={styles.text}>Company Name</Text>
        <TextareaItem        
         placeholder='Enter Your Company Name'
         value={companyName}
         onChangeText={seCompanyName}
         style={styles.textInput}/>
        
        <Text style={styles.text}>Company Location</Text>
         <TextareaItem        
         placeholder='Enter Your Company Location'
         value={companyLocation}
         onChangeText={seCompanyLocation}
         style={styles.textInput}/>

        

             
       </View>
      </ScrollView>
      

      <Button 
       style={styles.submitButton} 
       type='primary'
       onPress={submit}
       >
        Submit</Button>
     
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
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
  
  submitButton:{
    width: ScreenWidth-20,    
    bottom:10,
    alignSelf:'center'
  },

})

export default AddCompany