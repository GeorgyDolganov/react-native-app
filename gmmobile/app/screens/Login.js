import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import mainStyles from '../styles/main.js';

const Login = props => {
    const navigation = useNavigation();
    return(
      <View style={mainStyles.content}>
        <Text>Логин</Text>
        <TextInput style={mainStyles.input} />
        <Text>Пароль</Text>
        <TextInput style={mainStyles.input} secureTextEntry={true} />
        <View style={mainStyles.button}>
          <Button
              title="Войти"
              onPress={() => navigation.navigate('profile')}
              color="#335C67"
          />
        </View>
        <View style={mainStyles.button}>
          <Button
              title="Регестрация"
              onPress={() => navigation.navigate('signin')}
              color="#540B0E"
          />
        </View>
      </View>
    )
}


export default Login;
