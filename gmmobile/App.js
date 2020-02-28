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

  const addBidHandler = bidTitle => {
    setMasterBids(currentBids => [
      ...currentBids, 
      {key: Math.random().toString(), value: bidTitle }
    ]);
  }
  
  const removeBidHandler = bidId => {

  }

  return (
    <>
      <StatusBar barStyle="dark" />
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.logo}>GMMobile</Text>
        </View>
        <View style={styles.content}>
          <BidInput onAddBid={addBidHandler} />
          <FlatList data={masterBids} renderItem={itemData => (
            <BidItem id={itemData.item.key} title={itemData.item.value}/>
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
