import React, { Fragment } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    text: {
        color: '#ee5253',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
        marginBottom: 10,
    },
    cardImage: {
        width: 160,
        height: 110,
        borderRadius: 5,
        marginRight: 5,
    },
});

const ImagesSlider = ({ screenshots, text }) => {

    return (
        <Fragment>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.container}>
                {
                    screenshots.map((screenshot) => (
                        <Image key={screenshot.id} style={styles.cardImage} source={{uri: screenshot.image}} />
                    ))
                }
            </View>
        </Fragment>
    );
};

export default ImagesSlider;
