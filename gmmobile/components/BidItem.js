import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const BidItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.bid}>
                <Text>{props.id}-{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    bid: {
        borderColor: Colors.primary,
        padding: 10,
        marginTop: 15,
        borderWidth: 1.5,
        borderRadius: 2.5,
    }
});

export default BidItem;