import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabsStack';

const RootStack = createStackNavigator();

const RootNavigation = () => (
    <NavigationContainer>
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="TabNavigation" component={TabNavigation} />
        </RootStack.Navigator>
    </NavigationContainer>
);

export default RootNavigation;