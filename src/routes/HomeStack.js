import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../screens/Home';
import Game from '../screens/Game';

const HomeStack = createStackNavigator();

const HomeNavigation = () => (
    <HomeStack.Navigator headerMode="none">
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="Game" component={Game} />
    </HomeStack.Navigator>
);

export default HomeNavigation;