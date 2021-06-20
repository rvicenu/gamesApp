import React, {createContext, useEffect, useState} from 'react';
import { constants } from './../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { favoritesGamesAsyncStorageKey } from './../utils/constants';
import axios from 'axios';

export const GamesContext = createContext();

const GamesContextProvider = ({ children }) => {
    const [games, setGames] = useState([]);
    const [searchedGames, setSearchedGames] = useState({});
    const [favoritesGames, setFavoritesGames] = useState([]);
    const [favoriteGamesStorage, setFavoriteGamesStorage] = useState([]);


    const fetchGames = async () => {
        try {
            const { data, status } = await axios({
                baseURL: constants.base_path,
                method: 'GET',
                url: constants.games,
                timeout: 3000,
            });

            if (status === 200) {
                setGames(data);
            }
        } catch (error) {
            throw error;
        }
    };

    const filterGames = searchedGame => {
        
        if (searchedGame) {

            // Profe hice esta función para capitalizar las palabras, ya que no en
            // todos los teclados sirve la prop autoCapitalize del TextInput, así la búsqueda
            // funcionará en todos los celulares
            const searchedGameSplit = searchedGame.split(" ");

            const searchedGameUpperCase = searchedGameSplit.map((word, key) => { 
                if (word) {
                    return word[0].toUpperCase() + word.substring(1);
                } else {
                    return; 
                }
            }).join(" ");

            const filteredGames = games.filter((game) =>                 
                game.title.includes(searchedGameUpperCase)
            );

            setSearchedGames(filteredGames);

        } else {
            setSearchedGames({});
        }
    };

    const addFavoriteGame = async (key, favorites) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(favorites));
            return true;
        }
        catch(err) {
            return false;
        }
    }

    const removeFavoriteGame = async (key, favorites) => {
        try {
            await AsyncStorage.removeItem(key);
            await AsyncStorage.setItem(key, JSON.stringify(favorites));
            return true;
        }
        catch(err) {
            return false;
        }
    }

    const veryfiedFavoritesGamesData = async () => {
        const asyncStorageSavedData = JSON.parse(
            await AsyncStorage.getItem(favoritesGamesAsyncStorageKey),
        );

        if (asyncStorageSavedData) {
            setFavoriteGamesStorage(asyncStorageSavedData);
            // setIsFavorite(true);
        } else {
            setFavoriteGamesStorage([]);
        }
    };

    const handleFavorites = game => {
        const favorites = Object.assign([], favoritesGames);
        const index = favorites.findIndex(fav => fav.id === game.id);

        if (index === -1) {
            favorites.push(game);
            addFavoriteGame(favoritesGamesAsyncStorageKey, favorites);
        } else {
            favorites.splice(index, 1);
            removeFavoriteGame(favoritesGamesAsyncStorageKey, favorites);
        }

        setFavoritesGames(favorites);
    };

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <GamesContext.Provider
            value={{
                games,
                filterGames,
                searchedGames,
                setSearchedGames,
                handleFavorites,
                favoritesGames,
                veryfiedFavoritesGamesData,
                favoriteGamesStorage,
            }}
        >
            {children}
        </GamesContext.Provider>
    );
}

export default GamesContextProvider;
