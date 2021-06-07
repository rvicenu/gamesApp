import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabsStack';
import LoginNavigation from './LoginStack';
import { LoginContext } from '../contexts/LoginContext';

const RootStack = createStackNavigator();

const RootNavigation = () => {
    const { isValidLogin } = useContext(LoginContext);

    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode="none">
                {
                    !isValidLogin ? (
                        <RootStack.Screen name="LoginNavigation" component={LoginNavigation} />
                    ) : (
                        <RootStack.Screen name="TabNavigation" component={TabNavigation} />
                    )
                }
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;