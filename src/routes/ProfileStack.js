import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './../screens/Profile';
import EditProfile from './../screens/EditProfile';

const ProfileStack = createStackNavigator();

const ProfileNavigation = () => (
    <ProfileStack.Navigator headerMode="none">
        <ProfileStack.Screen name="Profile" component={Profile} />
        <ProfileStack.Screen name="EditProfile" component={EditProfile} />
    </ProfileStack.Navigator>
);

export default ProfileNavigation;