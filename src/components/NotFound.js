import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 70,
    },
    text: {
        color: '#ee5253',
        fontSize: 15,
    },
});

const NotFound = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> 👾 {text} 👾 </Text>
        </View>
    );
};

export default NotFound;
