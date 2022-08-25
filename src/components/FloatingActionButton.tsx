import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';


type Props ={
  onPress(): void
}
const FloatingActionButton = (props: Props) => {
  const {onPress} = props
  return (
    <TouchableOpacity 
          onPress={onPress}
          style={styles.iconContainer} 
          >
          <Icon name="add" size={45} color="#fff" />
       </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
    iconContainer:{
        backgroundColor:'#2677e0',
        position:'absolute',
        bottom:10,
        right:10,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        height:60,
        width:60,
        shadowColor: "#000",
        
        shadowOffset: {
           	width: 0,
	        height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,      
    },

})

export default FloatingActionButton