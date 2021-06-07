import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../screens/Home';
import Game from '../screens/Game';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import { LoginContext } from '../contexts/LoginContext';

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
    textHeader: {
        color: '#ee5253',
        fontSize: 25,
        textAlign: 'center',
    },
    backIcon: {
        paddingLeft: 10,
        color: '#ee5253',
    },
    logoutIcon: {
        color: '#ee5253',
    },
});

const HomeStack = createStackNavigator();

const HomeNavigation = ({navigation}) => {
    const { logout } = useContext(LoginContext);
    return (
        <HomeStack.Navigator headerMode="screen">
    
            <HomeStack.Screen
                name="Home" 
                component={Home} 
                options={{
                    header: () => (
                        <SafeAreaView style={styles.container}>
                            <Text style={styles.textHeader}>Games App</Text>
                            <TouchableOpacity onPress={() => logout()}>
                                <MaterialIconsIcon style={styles.logoutIcon} name="logout" size={28} />
                            </TouchableOpacity>
                        </SafeAreaView>
                    ),
                    gestureDirection: 'vertical',
                }}
            />
            <HomeStack.Screen 
                name="Game" 
                component={Game} 
                options={{
                    header: () => (
                        <TouchableOpacity style={styles.container} onPress={() => navigation.pop()}>
                            <AntIcon style={styles.backIcon} name="arrowleft" size={28} />
                        </TouchableOpacity>
                    ),
                    gestureDirection: 'vertical',
                }}
            />
        </HomeStack.Navigator>
    );
};

export default HomeNavigation;