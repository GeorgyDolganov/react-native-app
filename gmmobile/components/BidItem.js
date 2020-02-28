import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const BidItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete}>
            <View style={styles.bid}>
                <Text>{props.id}-{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    bid: {
        borderColor: Colors.light,
        padding: 10,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 5,
    }
});

export default BidItem;