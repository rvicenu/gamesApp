import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import defaultAvatar from './../assets/avatar.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { profileAsyncStorageKey } from './../utils/constants';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#341f97',
        justifyContent: 'center',
    },
    container: {
        marginHorizontal: 15,
    },
    avatar: {
        alignSelf: 'center',
        width: 120,
        height: 120,
        borderRadius: 50,
    },
    editButton: {
        marginTop: 10,
        padding: 5,
        alignSelf: 'center',
        backgroundColor: '#ee5253',
        borderRadius: 10,
    },
    editButtonText: {
        color: '#222f3e',
        fontWeight: 'bold',
    },
    userInfo: {
        marginTop: 15,
        marginHorizontal: 5,
        backgroundColor: '#ee5253',
        borderRadius: 10,
        padding: 5,
    },
    userInfoCenter: {
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        margin: 5,
    },
});


const Profile = () => {

    const navigation = useNavigation();
    // const [isLoading, setIsLoading] = useState(false);
    const [profileData, setProfileData] = useState({});

    const [userDefaultData] = useState({
        name: 'Juanito Perez',
        email: 'juanitoperez@gmail.com',
        phone: '+56989954955',
    });

    const veryfiedData = async (userDefaultData) => {
        const asyncStorageSavedData = JSON.parse(
            await AsyncStorage.getItem(profileAsyncStorageKey),
        );

        if (asyncStorageSavedData) {
            setProfileData(asyncStorageSavedData);
            
        } else {
            setProfileData(userDefaultData);
        }
    };

    useEffect(() => {
        veryfiedData(userDefaultData);
    }, [profileData]);
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
                <Image style={styles.avatar} source={defaultAvatar} />
                <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditProfile', profileData)}>
                    <Text style={styles.editButtonText}>Edit Profile</Text>
                </TouchableOpacity>

                <View style={styles.userInfo}>
                    <View style={styles.userInfoCenter}>
                        <Text style={styles.text}>{profileData.name}</Text>
                        <Text style={styles.text}>{profileData.email}</Text>
                        <Text style={styles.text}>{profileData.phone}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Profile;
