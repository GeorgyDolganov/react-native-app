import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const BidItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.bid}>
                <Text style={styles.number}>{props.id}</Text>
                <Text style={styles.name}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    bid: {
        borderColor: '#335C67',
        padding: 10,
        marginBottom: 15,
        borderWidth: 2,
        borderRadius: 3,
    },
    name: {
        fontSize: 22,
        fontWeight: '700',
    }
});

export default BidItem;