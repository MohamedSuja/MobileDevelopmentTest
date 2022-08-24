import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { Button,} from '@ant-design/react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/Types'


type HomeScreenProps = NativeStackScreenProps<RootStackParamList,'Home'>

const Settings: React.FC<HomeScreenProps> = (props) => {
  return (
    <View>
      <Header iconName='chevron-left' title='App Settings' onPress={()=>props.navigation.push('Home')}/>
      <Button 
       type='ghost'
       style={styles.mainButton}
       onPress={() => {}}>
        Reset Password</Button>
      <Button 
       type='ghost'
       style={styles.mainButton}
       onPress={() => {}}>
        Reset Email </Button>
      <Button 
       type='ghost'
       style={styles.mainButton}
       onPress={() => {}}>
        Reset User Name </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  mainButton:{
    margin:10
  }
})

export default Settings