import React, { Fragment, useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { GamesContext } from './../contexts/GamesContext';
import Message from './../components/Message';
import Title from './../components/Title';
import ListGames from './../components/ListGames';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#341f97',
    },
    titleContainer: {
        margin: 15,
        backgroundColor: '#ee5253',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    title: {
        color: '#222f3e',
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'justify',
    }
});

const Favorites = () => {
    const { veryfiedFavoritesGamesData, favoriteGamesStorage } = useContext(GamesContext);

    useEffect(() => {
        veryfiedFavoritesGamesData();
    }, [favoriteGamesStorage]);

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>🕹 Favorites 🕹 </Text> 
            </View>
            {
                favoriteGamesStorage.length !== 0  ? 
                    (
                        <Fragment>
                            <Title text="Results" />
                            <ListGames fav={true} cardGameStyle="vertical" games={favoriteGamesStorage} />
                        </Fragment>
                    )
                : 
                    <Message text="You don't have favorites games yet." />
            }
        </SafeAreaView>
    );
};

export default Favorites;
