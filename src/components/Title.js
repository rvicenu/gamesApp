import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginLeft: 21,
        paddingBottom: 0,
    },
    title: {
        color: '#ee5253',
        fontSize: 22,
        fontWeight: 'bold',
    },
});


const Title = ({ text }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}> 🎮 {text}</Text>
        </SafeAreaView>
    );
};

export default Title;
