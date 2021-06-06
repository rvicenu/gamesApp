import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import CardGame from './CardGame';

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    text: {
        color: '#ee5253',
    },
});


class ListGames extends PureComponent {

    constructor(props) {
        super(props);
    };

    render() {
        const { games } = this.props;

        return (
            <SafeAreaView style={styles.container}>
                <FlatList 
                    style={styles.container}
                    data={games}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={game => {
                        return game.id;
                    }}
                    renderItem={({ item: game }) => <CardGame game={game} />}
                />
            </SafeAreaView>
        );
    };
};

export default ListGames;
