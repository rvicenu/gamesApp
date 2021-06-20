import React, { Fragment, useContext } from 'react';
import { TextInput, View, SafeAreaView, StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Title from './../components/Title';
import ListGames from './../components/ListGames';
import Message from './../components/Message';
import { GamesContext } from './../contexts/GamesContext';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#341f97',
    },
    container: {
        margin: 15,
        backgroundColor: '#ee5253',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
    },
    searchInput: {
        color: '#222f3e',
        fontSize: 15,
        borderBottomWidth: 2,
        borderColor: '#222f3e',
        flex: 1,
    },
    searchButton: {
        backgroundColor: '#341f97',
        justifyContent: 'center',
        paddingLeft: 10,
    },
});

const Search = () => {
    FontAwesomeIcon.loadFont();

    const { searchedGames, filterGames } = useContext(GamesContext);

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search Game"
                    autoCapitalize="words"
                    placeholderTextColor="#222f3e"
                    onChangeText={searchedGame => filterGames(searchedGame)}
                />

                </View>
                
                {
                    searchedGames.length !== 0  ? 
                        (
                            <Fragment>
                                <Title text="Results" />
                                <ListGames cardGameStyle="vertical" games={searchedGames} />
                            </Fragment>
                        )
                    : 
                        <Message text="Game not found." />
                }
        </SafeAreaView>
    );
};

export default Search;
