import React, { PureComponent } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import ListGames from './../components/ListGames';
import Title from './../components/Title';
import { constants } from './../utils/constants';
import axios from 'axios';
import { GamesContext } from './../contexts/GamesContext';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#341f97',
    },
});
class Home extends PureComponent {

    static contextType = GamesContext;

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
        this.filterGames();
        this.fetchLatestGames();
    }

    filterGames = () => {
        const { games } = this.context;
        
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
                    <ListGames cardGameStyle="horizontal" games={latestGames} />

                    <Title text="Strategy Games" />
                    <ListGames cardGameStyle="horizontal" games={strategyGames} />

                    <Title text="MMORPG Games" />
                    <ListGames cardGameStyle="horizontal" games={MMORPGGames} />

                    <Title text="Shooter Games" />
                    <ListGames cardGameStyle="horizontal" games={shooterGames} />

                    <Title text="Card Games" />
                    <ListGames cardGameStyle="horizontal" games={cardGames} />
                    
                    <Title text="Social Games" />
                    <ListGames cardGameStyle="horizontal" games={socialGames} />
                    
                    <Title text="Fighting Games" />
                    <ListGames cardGameStyle="horizontal" games={fightingGames} />
                    
                    <Title text="Fantasy Games" />
                    <ListGames cardGameStyle="horizontal" games={fantasyGames} />
                    
                </ScrollView>
            </SafeAreaView>
        );
    };
};

export default Home;
