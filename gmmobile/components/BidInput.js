import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const BidInput = props => {
    const [enteredBid, setEnteredBid] = useState('');

    const bidInputHandler = (enteredText) => {
        setEnteredBid(enteredText); 
    };

    const addBidHandler = () => {
        props.onAddBid(enteredBid);
        setEnteredBid('');
    };

    return (
        <Modal visible={props.visible} animationType="fade" style={styles.modal}>
            <View style={styles.add}>
                <TextInput
                    placeholder = "Название заявки"
                    style = {styles.addInput}
                    onChangeText={bidInputHandler}
                    value = {enteredBid}
                />
                <View style={styles.addButtonContainer}>
                    <Button title="Отменить" color="red" onPress= {props.onCancel}/>
                    <Button title="Добавить" onPress = {addBidHandler} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    add: {
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
        flex: 1,
    },  
    addInput: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        paddingVertical: 3,
        marginBottom: 20,
        width: '80%',
    },
    addButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    }
});

export default BidInput;