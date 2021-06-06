import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../screens/Home';
import Game from '../screens/Game';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#341f97',
        paddingVertical: 15,
        borderBottomWidth: 2,
        borderColor: '#ee5253',
    },
    textHeader: {
        color: '#ee5253',
        fontSize: 25,
        textAlign: 'center',
    },
    icon: {
        paddingLeft: 10,
        color: '#ee5253',
    },
})


const HomeStack = createStackNavigator();

const HomeNavigation = ({navigation}) => (
    <HomeStack.Navigator headerMode="screen">
 
        <HomeStack.Screen
            name="Home" 
            component={Home} 
            options={{
                header: () => (
                    <SafeAreaView style={styles.container}>
                        <Text style={styles.textHeader}>Games App</Text>
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
                        <AntIcon style={styles.icon} name="arrowleft" size={28} />
                    </TouchableOpacity>
                ),
                gestureDirection: 'vertical',
            }}
        />
    </HomeStack.Navigator>
);

export default HomeNavigation;