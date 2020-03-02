/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Button,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import BidItem from './components/BidItem';
import BidInput from './components/BidInput';

const App: () => React$Node = () => {
  const [masterBids, setMasterBids] = useState ([]);
  const [isAddMode, setIsAddMode] = useState (false);

  const addBidHandler = bidTitle => {
    setMasterBids(currentBids => [
      ...currentBids, 
      {id: Math.random().toString(), value: bidTitle }
    ]);
    setIsAddMode(false);
  }
  
  const removeBidHandler = bidId => {
    setMasterBids(currentBids => {
      return currentBids.filter((bid) => bid.id !== bidId);
    })
  }

  const cancelAddBidHandler = () => {
    setIsAddMode(false);
  }

  return (
    <>
      <StatusBar barStyle="dark" />
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.logo}>GMMobile</Text>
        </View>
        <View style={styles.content}>
          <Button title="Добавить заявку" onPress={() => setIsAddMode(true)} />
          <BidInput visible={isAddMode} onAddBid={addBidHandler} onCancel={cancelAddBidHandler} />
          <FlatList  
            keyExtractor={(item, index) => item.id}
            data={masterBids} 
            renderItem={itemData => (
              <BidItem 
                id={itemData.item.id} 
                title={itemData.item.value} 
                onDelete={removeBidHandler}
              />
          )} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    padding: 30,
  },
  logo: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 28,
  },
  content: {
    padding: 30,
  },
  row: {
  },
});

export default App;
