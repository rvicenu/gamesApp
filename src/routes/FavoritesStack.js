import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Favorites from './../screens/Favorites';
import Game from './../screens/Game';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#341f97',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderColor: '#ee5253',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backIcon: {
        paddingLeft: 10,
        color: '#ee5253',
    },
});

const FavoritesStack = createStackNavigator();

const FavoritesNavigation = ({navigation}) => (
    <FavoritesStack.Navigator headerMode="screen">
        <FavoritesStack.Screen 
            name="Favorites" 
            component={Favorites} 
            options={{
                header: () => null
            }}
        />
        <FavoritesStack.Screen 
            name="GameFavorites" 
            component={Game} 
            options={{
                header: () => (
                    <TouchableOpacity style={styles.container} onPress={() => {
                        if(navigation.canGoBack()) {
                            navigation.pop();
                        }
                    }}>
                        <AntIcon style={styles.backIcon} name="arrowleft" size={28} />
                    </TouchableOpacity>
                ),
                gestureDirection: 'vertical',
            }}
        />
    </FavoritesStack.Navigator>
);

export default FavoritesNavigation;