import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#341f97',
    },
    text: {
        fontSize: 30, 
        color: '#ee5253',
    },
})

const CameraAuthorizeMessage = ({ message }) => (
    
    <View style={styles.container}>
        <Text style={styles.text}>{message}</Text>
    </View>
);


export default CameraAuthorizeMessage;
