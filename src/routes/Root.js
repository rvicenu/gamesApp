import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './BottomTabStack';

const RootStack = createStackNavigator();

const RootNavigation = () => (
    <NavigationContainer>
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="BottomTabNavigator" component={BottomNavigation} />
        </RootStack.Navigator>
    </NavigationContainer>
);

export default RootNavigation;