import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { Button,} from '@ant-design/react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/Types'


type ScreenProps = NativeStackScreenProps<RootStackParamList>

const Settings: React.FC<ScreenProps> = (props) => {
  return (
    <View>
      <Header iconName='chevron-left' title='App Settings' onPress={()=>props.navigation.goBack()}/>
      <Button 
       type='ghost'
       style={styles.mainButton}
       onPress={() => props.navigation.push('ResetPassword')}>
        Reset Password</Button>
      <Button 
       type='ghost'
       style={styles.mainButton}
       onPress={() => props.navigation.push('ResetEmail')}>
        Reset Email </Button>
      <Button 
       type='ghost'
       style={styles.mainButton}
       onPress={() => props.navigation.push('ResetUserInfo')}>
        Reset User Information </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  mainButton:{
    margin:10
  }
})

export default Settings