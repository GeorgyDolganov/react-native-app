import React, { useState } from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import mainStyles from '../styles/main.js';

import BidItem from '../components/BidItem';
import BidInput from '../components/BidInput';

const BidScreen = props => {
    const navigation = useNavigation();
    const [masterBids, setMasterBids] = useState ([]);
    const [isAddMode, setIsAddMode] = useState (false);

    const addBidHandler = bidTitle => {
        setMasterBids(currentBids => [
        ...currentBids, 
        {id: Math.random().toString(), value: bidTitle }
        ]);
        setIsAddMode(false);
    };
    
    const removeBidHandler = bidId => {
        setMasterBids(currentBids => {
        return currentBids.filter((bid) => bid.id !== bidId);
        })
    };

    const cancelAddBidHandler = () => {
        setIsAddMode(false);
    };
    return(
        <View style={mainStyles.content}>
            <View style={mainStyles.button}>
                <Button
                    title="Профиль"
                    onPress={() => navigation.navigate('profile')}
                    color="#540B0E"
                />
            </View>
            <View  style={mainStyles.button}>
                <Button 
                    title="Добавить заявку" 
                    onPress={() => setIsAddMode(true)}
                    color="#335C67" 
                />
            </View>
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
            )} 
            />
        </View>
    )
};

export default BidScreen;