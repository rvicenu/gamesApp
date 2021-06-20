import React, { useContext } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { GamesContext } from './../contexts/GamesContext';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ee5253',
        width: 408,
        height: 60,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 10,
    },
    text: {
        color: '#341f97',
        fontWeight: 'bold',
    },
});

const FavoriteButton = ({ game, isFavorite }) => {
    const { handleFavorites } = useContext(GamesContext);

    return (
        <TouchableOpacity 
            style={[styles.container, {backgroundColor: isFavorite ?  '#ee5253' :  '#222f3e'}]}
            onPress={() => {
                handleFavorites(game);
            }}
            >
            <AntIcon style={styles.heartIcon} name="heart" color={isFavorite ? '#341f97' : "#c8d6e5"} size={28} />
            <Text style={[styles.text, {color: isFavorite ? '#341f97' : '#c8d6e5'}]}> {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</Text>
        </TouchableOpacity>
    );
};

export default FavoriteButton;
