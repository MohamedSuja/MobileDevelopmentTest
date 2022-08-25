import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScreenWidth } from '../functions/Scale';


type HeaderProps ={
    onPress(): void
    iconName: string
    title: string
}
const Header = (props: HeaderProps) => {
    const {onPress,iconName,title} = props
    
  return (
    <View style={styles.headerContainer}>
       <TouchableOpacity onPress={onPress} style={styles.icon}>
          <Icon name={iconName} size={25} color="#fff" />
       </TouchableOpacity>      
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer:{
        height:80,
        backgroundColor:'#2677e0',
        flexDirection:'row',
        alignItems:'center',
        paddingTop:12
    },
    title:{
        color:'#fff',
        fontSize:30,
        fontWeight:'600',
        alignSelf:'center',
        width: ScreenWidth-100,
        textAlign:'center'
       // marginLeft:55
    },
    icon:{
      margin:20,      
    }
    
}) 

export default Header