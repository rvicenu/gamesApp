import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Game from '../screens/Game';

const GameStack = createStackNavigator();

const GameNavigation = () => (
    <GameStack.Navigator headerMode="none">
        <GameStack.Screen name="Game" component={Game} />
    </GameStack.Navigator>
);

export default GameNavigation;