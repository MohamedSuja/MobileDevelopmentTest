import { View, Text, StyleSheet, StatusBar, } from 'react-native'
import React, { useRef, useState } from 'react'
import { Button, Drawer } from '@ant-design/react-native'
import Header from '../components/Header';
import store from '../redux/store/Store';
import { LogOut } from '../redux/actions/UserActions';


const Home = () => {
  const [openDrader,setOpenDrawer] = useState(false);

  const { dispatch } = store;
  const LogOutFunction = (event: React.SyntheticEvent) =>{
    event.preventDefault();
    dispatch(LogOut());
  }

  const Slidebar = (
    <View style={styles.drawerContainer}>
      <Button 
      type='warning'
      style={styles.logoutButton}
      onPress={LogOutFunction}
      >LogOut</Button>
    </View>
    ) 
  
  return (
    <Drawer
     sidebar={Slidebar}
     position="left"
     open={openDrader}
     drawerBackgroundColor="#ccc"
     >
      <View>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
         <Header onPress={()=>setOpenDrawer(true)}/>     
      </View>
      <Button onPress={LogOutFunction}>
        test
      </Button>
    </Drawer>
  )
}

const styles = StyleSheet.create({
  drawerContainer:{
    flex:1
  },
  logoutButton:{
    position:'absolute',
    alignSelf:'center',
    width:290,
    bottom:5,
  }
})

export default Home