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
            isFavorite: false,
        };
    };

    componentDidMount = () => {
        const { games } = this.context;

        this.filterGames(games);
        this.fetchLatestGames();
    }

    filterGames = (games) => {
        if (games.length > 0) {
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

    setIsFavorite = (isFavorite) => {
        this.setState({
            isFavorite: !isFavorite,
        });
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
                fightingGames,
                isFavorite
        } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Title text="Latest Games" />
                    <ListGames isFavorite={isFavorite} setIsFavorite={this.setIsFavorite} cardGameStyle="horizontal" games={latestGames} />

                    <Title text="Strategy Games" />
                    <ListGames isFavorite={isFavorite} setIsFavorite={this.setIsFavorite} cardGameStyle="horizontal" games={strategyGames} />

                    <Title text="MMORPG Games" />
                    <ListGames isFavorite={isFavorite} setIsFavorite={this.setIsFavorite} cardGameStyle="horizontal" games={MMORPGGames} />

                    <Title text="Shooter Games" />
                    <ListGames isFavorite={isFavorite} setIsFavorite={this.setIsFavorite} cardGameStyle="horizontal" games={shooterGames} />

                    <Title text="Card Games" />
                    <ListGames isFavorite={isFavorite} setIsFavorite={this.setIsFavorite} cardGameStyle="horizontal" games={cardGames} />
                    
                    <Title text="Social Games" />
                    <ListGames isFavorite={isFavorite} setIsFavorite={this.setIsFavorite} cardGameStyle="horizontal" games={socialGames} />
                    
                    <Title text="Fighting Games" />
                    <ListGames isFavorite={isFavorite} setIsFavorite={this.setIsFavorite} cardGameStyle="horizontal" games={fightingGames} />
                    
                    <Title text="Fantasy Games" />
                    <ListGames isFavorite={isFavorite} setIsFavorite={this.setIsFavorite} cardGameStyle="horizontal" games={fantasyGames} />
                    
                </ScrollView>
            </SafeAreaView>
        );
    };
};

export default Home;