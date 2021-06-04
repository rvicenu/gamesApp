import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeStack';
import GameNavigation from './GameStack';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const BottomTabs = createBottomTabNavigator();

const BottomNavigation = () => {

    return (
        <BottomTabs.Navigator
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
            <BottomTabs.Screen 
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

            <BottomTabs.Screen 
                name="Search" 
                component={GameNavigation}
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

            <BottomTabs.Screen 
                name="Favorites" 
                component={GameNavigation}
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

            <BottomTabs.Screen 
                name="Profile" 
                component={GameNavigation}
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


        </BottomTabs.Navigator>
    );
};

export default BottomNavigation;