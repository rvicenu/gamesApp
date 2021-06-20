import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { constants } from './../utils/constants';
import axios from 'axios';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    cardImageHorizontal: {
        width: 90,
        height: 130,
        borderRadius: 5,
        marginRight: 5,
    },
    cardImageVertical: {
        width: 400,
        height: 200,
        borderRadius: 5,
        marginRight: 5,
    },
    containerInfo: {
        width: 400,
        height: 80,
        backgroundColor: '#ee5253',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    titleGame: {
        color: '#222f3e',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

const CardGame = ({ game, cardGameStyle, fav }) => {
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
    
            // console.log({fav});
            if (status === 200) {
                if (cardGameStyle === "vertical") {
                    if (fav) {
                        navigation.navigate('GameFavorites', {data});
                    } else {
                        navigation.navigate('GameSearch', {data});
                    }
                } else {
                    // console.log({setIsFavorite});
                    navigation.navigate('Game', {data});
                }
            }
    
        } catch (err){
            console.log(err);
        }
    };
    
    return (
        <View style={cardGameStyle === "vertical" ? styles.container : ""}>
            <TouchableOpacity
                onPress={() => fetchDataByGame(game_id)}
            >
                <Image style={cardGameStyle === "horizontal" ? styles.cardImageHorizontal : styles.cardImageVertical} source={{uri: game.thumbnail}} />
                {
                    cardGameStyle === "vertical" &&
                    (
                        <View style={styles.containerInfo}>
                            <Text style={styles.titleGame}>{game.title}</Text>
                        </View>
                    )
                
                }
            </TouchableOpacity>
        </View>
    );
};

export default CardGame;
