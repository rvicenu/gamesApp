import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { constants } from './../utils/constants';
import axios from 'axios';

const styles = StyleSheet.create({
    cardImage: {
        width: 90,
        height: 130,
        borderRadius: 5,
        marginRight: 5,
    },
});

const CardGame = ({ game }) => {
    const navigation = useNavigation();

    const game_id = game.id;

    const fetchDataByGame = async id => {
        try {
            const { data, status } = await axios({
                baseURL: constants.base_path,
                method: 'GET',
                url: `${constants.game_get}${id}`,
                timeout: 3000,
            });
    
            if (status === 200) {
                navigation.navigate('Game', {data});
            }
    
        } catch (err){
            console.log(err);
        }
    };
    return (
        <View>
        <TouchableOpacity
            onPress={() => fetchDataByGame(game_id)}
        >
                <Image style={styles.cardImage} source={{uri: game.thumbnail}} />
            </TouchableOpacity>
        </View>
    );
};

export default CardGame;
