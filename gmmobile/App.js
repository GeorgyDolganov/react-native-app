import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import BidScreen from './app/screens/BidScreen';
import Profile from './app/screens/Profile';
import Login from './app/screens/Login';
import Registration from './app/screens/Registration';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen 
          name="bidScreen" 
          component={BidScreen} 
          options={{
            title: 'Гормастер',
            headerStyle: {
              backgroundColor: '#BE2223',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}  
        />
        <Stack.Screen 
          name="profile" 
          component={Profile} 
          options={{
            title: 'Мой профиль',
            headerStyle: {
              backgroundColor: '#540B0E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="login" 
          component={Login} 
          options={{
            title: 'Войти',
            headerStyle: {
              backgroundColor: '#BE2223',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="signin" 
          component={Registration} 
          options={{
            title: 'Зарегестрироваться',
            headerStyle: {
              backgroundColor: '#540B0E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 15,
  },
});

export default App;
