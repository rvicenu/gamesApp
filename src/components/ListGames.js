import React, { PureComponent } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
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
        const { games, cardGameStyle, fav } = this.props;

        return (
            <SafeAreaView style={styles.container}>
                {
                    (games && Object.keys(games).length !== 0) && 
                        <FlatList 
                            style={styles.container}
                            data={games}
                            horizontal={cardGameStyle === "horizontal" ? true : false}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={game => {
                                return game.id;
                            }}
                            contentContainerStyle={{ paddingBottom: cardGameStyle === "vertical" ? 140 : 0 }}
                            renderItem={({ item: game }) => <CardGame fav={fav} cardGameStyle={cardGameStyle} game={game} />}
                        />
                }
            </SafeAreaView>
        );
    };
};

export default ListGames;

// Traer acá la funcionalidad de filtrar los favs del storage
// y ir pasando la data por props hasta llegar a favoriteButton