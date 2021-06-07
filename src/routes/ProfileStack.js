import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './../screens/Profile';
import EditProfile from './../screens/EditProfile';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#341f97',
        paddingVertical: 15,
        paddingLeft: 10,
        borderBottomWidth: 2,
        borderColor: '#ee5253',
    },
    textHeader: {
        color: '#ee5253',
        fontSize: 25,
        textAlign: 'left',
    },
    icon: {
        paddingLeft: 10,
        color: '#ee5253',
    },
});

const ProfileStack = createStackNavigator();

const ProfileNavigation = ({navigation}) => (
    <ProfileStack.Navigator headerMode="screen">
        <ProfileStack.Screen 
            name="Profile" 
            component={Profile} 
            options={{
                header: () => (
                    <SafeAreaView style={styles.container}>
                        <Text style={styles.textHeader}>Games App</Text>
                    </SafeAreaView>
                ),
                gestureDirection: 'vertical',
            }}
        />
        <ProfileStack.Screen 
            name="EditProfile" 
            component={EditProfile} 
            options={{
                header: () => (
                    <TouchableOpacity style={styles.container} onPress={() => navigation.pop()}>
                        <AntIcon style={styles.icon} name="arrowleft" size={28} />
                    </TouchableOpacity>
                ),
                gestureDirection: 'vertical',
            }}
        />
    </ProfileStack.Navigator>
);

export default ProfileNavigation;