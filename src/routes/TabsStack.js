import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeStack';
import SearchNavigation from './SearchStack';
import FavoritesNavigation from './FavoritesStack';
import ProfileNavigation from './ProfileStack';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const PrincipalTabs = createBottomTabNavigator();

const TabNavigation = () => {

    return (
        <PrincipalTabs.Navigator
            tabBarOptions={{
                showLabel: true,
                activeTintColor: '#ee5253',
                inactiveTintColor: '#c8d6e5',
                style: {
                    backgroundColor: '#222f3e',
                    paddingTop: 2,
                },
            }}
        >
            <PrincipalTabs.Screen 
                name="Home" 
                component={HomeNavigation}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        AntIcon.loadFont(); // IOS
                        const iconSize = focused ? 28 : 25;
                        return (
                            <View style={styles.icon}>
                                <AntIcon name="home" color={color} size={iconSize} />
                            </View>
                        );
                    }
                }}
            />

            <PrincipalTabs.Screen 
                name="Search" 
                component={SearchNavigation}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        FontAwesomeIcon.loadFont(); // IOS
                        const iconSize = focused ? 28 : 25;
                        return (
                            <View style={styles.icon}>
                                <FontAwesomeIcon name="search" color={color} size={iconSize} />
                            </View>
                        );
                    }
                }}
            />

            <PrincipalTabs.Screen 
                name="Favorites" 
                component={FavoritesNavigation}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        FontAwesomeIcon.loadFont(); // IOS
                        const iconSize = focused ? 28 : 25;
                        return (
                            <View style={styles.icon}>
                                <AntIcon name="heart" color={color} size={iconSize} />
                            </View>
                        );
                    }
                }}
            />

            <PrincipalTabs.Screen 
                name="Profile" 
                component={ProfileNavigation}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        FontAwesomeIcon.loadFont(); // IOS
                        const iconSize = focused ? 28 : 25;
                        return (
                            <View style={styles.icon}>
                                <FontAwesomeIcon name="user-circle" color={color} size={iconSize} />
                            </View>
                        );
                    }
                }}
            />


        </PrincipalTabs.Navigator>
    );
};

export default TabNavigation;