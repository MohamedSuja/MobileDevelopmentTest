import { View, Text, StyleSheet, StatusBar, TouchableOpacity, FlatList, } from 'react-native'
import React, { useRef, useState } from 'react'
import { Button, Card, Drawer } from '@ant-design/react-native'
import Header from '../components/Header';
import store from '../redux/store/Store';
import { LogOut } from '../redux/actions/userActions';
import Icon from 'react-native-vector-icons/Entypo';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Types';
import FloatingActionButton from '../components/FloatingActionButton';
import { useDispatch } from 'react-redux';


type SettingsScreenProps = NativeStackScreenProps<RootStackParamList,'Settings'>

const Home : React.FC<SettingsScreenProps> = (props) => {
  const [openDrader,setOpenDrawer] = useState(false);

  const dispatch=useDispatch()
  
  const LogOutFunction = () =>{    
    dispatch(LogOut());
  }

  
  const Slidebar = (
    <View style={styles.drawerContainer}>
      <View style={styles.profileContainer}>
      <TouchableOpacity 
          style={styles.iconContainer} 
          onPress={()=> setOpenDrawer(false)}>
          <Icon name="chevron-left" size={45} color="#0f4a07" />
       </TouchableOpacity> 
         <Icon name="user" size={45} color="#fff" />               
         <Text style={styles.name}>Mohammed Suja</Text>
         <Text style={styles.email}>mohammesuja7n@gmail.com</Text>
   
      </View>
      <Button 
       type='ghost'
       style={styles.settingsButton}
       onPress={() => {
        props.navigation.push('Settings');
        setOpenDrawer(false);
        }}>
        Settings</Button>

      <Button 
      type='warning'
      style={styles.logoutButton}
      onPress={LogOutFunction}>
        LogOut</Button>
    </View>
    ) 
  
  return (
    <Drawer
     sidebar={Slidebar}
     position="left"
     open={openDrader}
     drawerBackgroundColor="#ccc"
     >      
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Header iconName='navicon' title='Home' onPress={()=>setOpenDrawer(true)}/>     
      
      {/* <Button onPress={LogOutFunction}>
        test
      </Button> */}
      {/* <FlatList 
        numColumns={1}
        data={data}
        renderItem={({})=>()}
      /> */}
      <Card>          
        <Card.Body>
          <View style={{ height: 42 }}>
            <Text style={{ marginLeft: 16 }}>Company Name</Text>
          </View>
        </Card.Body>
        <Card.Footer content="Company ID" extra="Company Location" />
      </Card>
      
      <FloatingActionButton onPress={()=>props.navigation.push('AddCompany')}/>
    </Drawer>
  )
}

const styles = StyleSheet.create({
  drawerContainer:{
    flex:1
  },
  profileContainer:{
    backgroundColor:'#7aadff',
    paddingTop:30,
    height:180,
    alignItems:'center',
    padding:10
  },
  iconContainer:{
    position:'absolute',
    right:0,
    top:10
  },
  name:{
    fontSize:28,
    fontWeight:'700',
    alignSelf:'baseline'
  },
  email:{
    fontSize:20,
    color:'#414142',
    alignSelf:'baseline'
  },
  logoutButton:{
    position:'absolute',
    alignSelf:'center',
    width:290,
    bottom:5,
  },
  settingsButton:{    
    margin:5
  }
})

export default Home

