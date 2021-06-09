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
    titleResults: {
        color: '#ee5253',
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});


const Title = ({ text }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={text === "Results" ? styles.titleResults : styles.title}> {text !== "Results" ? `🎮  ${text}` : `🕹 ${text} 🕹` }</Text>
        </SafeAreaView>
    );
};

export default Title;
