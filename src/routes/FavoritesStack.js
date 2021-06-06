import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Favorites from './../screens/Favorites';

const FavoritesStack = createStackNavigator();

const FavoritesNavigation = () => (
    <FavoritesStack.Navigator headerMode="none">
        <FavoritesStack.Screen name="Favorites" component={Favorites} />
    </FavoritesStack.Navigator>
);

export default FavoritesNavigation;