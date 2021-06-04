import React, { PureComponent } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import ListGames from './../components/ListGames';
import Title from './../components/Title';
import { constants } from './../utils/constants';
import axios from 'axios';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#341f97',
    },
});

class Home extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            games: [],
            latestGames: [],
            strategyGames: [],
            MMORPGGames: [],
            fantasyGames: [],
            shooterGames: [],
            cardGames: [],
            socialGames: [],
            fightingGames: [],
        };
    };

    componentDidMount = () => {
        this.fetchGames();
        this.fetchLatestGames();
    }

    fetchGames = async () => {
        try {
            const { data, status } = await axios({
                baseURL: constants.base_path,
                method: 'GET',
                url: constants.games,
                timeout: 3000,
            });

            if (status === 200) {
                const games = data;

                const strategyGames = games.filter((game) =>
                    game.genre.includes('Strategy'),
                );

                const MMORPGGames = games.filter((game) =>
                    game.genre.includes('MMORPG'),
                );

                const fantasyGames = games.filter((game) =>
                    game.genre.includes('Fantasy'),
                );

                const shooterGames = games.filter((game) =>
                    game.genre.includes('Shooter'),
                );

                const cardGames = games.filter((game) =>
                    game.genre.includes('Card Game'),
                );

                const socialGames = games.filter((game) =>
                    game.genre.includes('Social'),
                );

                const fightingGames = games.filter((game) =>
                    game.genre.includes('Fighting'),
                );

                this.setState({
                    games,
                    strategyGames,
                    MMORPGGames,
                    fantasyGames,
                    shooterGames,
                    cardGames,
                    socialGames,
                    fightingGames,
                });
            }
        } catch (error) {
            throw error;
        }

    };

    fetchLatestGames = async () => {
        try {
            const { data, status } = await axios({
                baseURL: constants.base_path,
                method: 'GET',
                url: constants.games_sorted,
                timeout: 3000,
            });

            if (status === 200) {
                const latestGamesArr = data;

                const latestGames = latestGamesArr.slice(0, 25);

                this.setState({
                    latestGames,
                });
            }
        } catch (error) {
            throw error;
        }

    };

    render () {
        const { 
                latestGames, 
                strategyGames, 
                MMORPGGames, 
                fantasyGames, 
                shooterGames, 
                cardGames,
                socialGames, 
                fightingGames } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Title text="Latest Games" />
                    <ListGames games={latestGames} />

                    <Title text="Strategy Games" />
                    <ListGames games={strategyGames} />

                    <Title text="MMORPG Games" />
                    <ListGames games={MMORPGGames} />

                    <Title text="Shooter Games" />
                    <ListGames games={shooterGames} />

                    <Title text="Card Games" />
                    <ListGames games={cardGames} />
                    
                    <Title text="Social Games" />
                    <ListGames games={socialGames} />
                    
                    <Title text="Fighting Games" />
                    <ListGames games={fightingGames} />
                    
                    <Title text="Fantasy Games" />
                    <ListGames games={fantasyGames} />
                    
                </ScrollView>
            </SafeAreaView>
        );
    };
};

export default Home;
