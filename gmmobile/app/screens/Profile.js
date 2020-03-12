import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import mainStyles from '../styles/main.js';

const Profile = props => {
    const navigation = useNavigation();
    return(
        <View style={mainStyles.content}>
            {/* <View style={mainStyles.button}>
              <Button
                  title="Список заявок"
                  onPress={() => navigation.navigate('bidScreen')}
                  color="#335C67"
              />
            </View> */}
            <View style={mainStyles.button}>
              <Button
                  title="Войти как другой пользователь"
                  onPress={() => navigation.navigate('login')}
                  color="#BE2223"
              />
            </View>
            <View style={styles.data}>
              <Text style={styles.title}>Id: </Text>
              <Text style={styles.id}>12312312312312</Text>
            </View>
            <View style={styles.data}>
              <Text style={styles.title}>Имя: </Text>
              <Text style={styles.name}>Денис Найданов</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  data: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 18,
  }
});

export default Profile;