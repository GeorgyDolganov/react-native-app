import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const BidInput = props => {
    const [enteredBid, setEnteredBid] = useState('');

    const bidInputHandler = (enteredText) => {
        setEnteredBid(enteredText); 
    };

    return (
        <View style={styles.add}>
            <TextInput
                placeholder = "Название заявки"
                style = {styles.input}
                onChangeText={bidInputHandler}
                value = {enteredBid}
            />
            <Button 
                title="Добавить"
                onPress = {props.onAddBid.bind(this, enteredBid)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    add: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    input: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        flex: 1,
    },
    button: {
    },
});

export default BidInput;