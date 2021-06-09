import React, {createContext, useEffect, useState} from 'react';
import { constants } from './../utils/constants';
import axios from 'axios';

export const GamesContext = createContext();

const GamesContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [games, setGames] = useState(false);
    const [searchedGames, setSearchedGames] = useState({});
    const [gameFound, setGameFound] = useState(false);

    const fetchGames = async () => {
        setIsLoading(true);
        try {
            const { data, status } = await axios({
                baseURL: constants.base_path,
                method: 'GET',
                url: constants.games,
                timeout: 3000,
            });

            if (status === 200) {
                setGames(data);
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            throw error;
        }
    };

    const filterGames = searchedGame => {
        setTimeout(() => {
            setIsLoading(true);
        }, 3000);
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
            setIsLoading(false);

        } else {
            setSearchedGames({});
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchGames();
    }, []);

    useEffect(() => {
        // console.log({searchedGames})
        if (searchedGames) {
            setSearchedGames(searchedGames)
        } else {
            setSearchedGames({})
        }
    }, [searchedGames]);

    return (
        <GamesContext.Provider
            value={{
                games,
                filterGames,
                searchedGames,
                setSearchedGames,
                gameFound,
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </GamesContext.Provider>
    );
}

export default GamesContextProvider;
