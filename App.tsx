import {View, Text} from 'react-native';
import React from 'react';
import Login from './src/screens/Login';
import MyStack from './src/navigation/HomeStack';
import {SafeAreaFrameContext} from 'react-native-safe-area-context';
import RootNavigation from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store/Store';


const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
