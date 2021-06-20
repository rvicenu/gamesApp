import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#ee5253',
        fontSize: 30,
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
