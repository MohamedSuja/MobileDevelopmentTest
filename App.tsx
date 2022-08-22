import {View, Text} from 'react-native';
import React from 'react';
import Login from './src/screens/Login';
import MyStack from './src/navigation/MyStack';
import {SafeAreaFrameContext} from 'react-native-safe-area-context';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <MyStack />
    </View>
  );
};

export default App;
