import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { profileAsyncStorageKey } from './../utils/constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#341f97',
    },
    container: {
        margin: 15,
        backgroundColor: '#ee5253',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingBottom: 20,
    },
    title: {
        paddingTop:10,
        marginBottom: 2,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222f3e',
        textAlign: 'center',
    },
    textInput: {
        color: '#222f3e',
        borderBottomWidth: 2,
        borderColor: '#222f3e',
    },
    saveButton: {
        marginTop: 10,
        padding: 10,
        width: 400,
        alignSelf: 'center',
        backgroundColor: '#ee5253',
        borderRadius: 5,
    },
    saveButtonText: {
        color: '#222f3e',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

const EditProfile = () => {
    const routes = useRoute();
    const navigation = useNavigation();

    const [profileData] = useState(routes.params);

    const [userDataEdit, setUserDataEdit] = useState({
        name: profileData.name,
        email: profileData.email,
        phone: profileData.phone,
    });

    const saveProfile = async userDataEdit => {
        await AsyncStorage.setItem(profileAsyncStorageKey, JSON.stringify(userDataEdit));
        if(navigation.canGoBack()) {
            navigation.pop();
        }
    };

    return (
        <SafeAreaView style={styles.background}>
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                }}
            >  
                <View>
                    <View style={styles.container}>
                        <Text style={styles.title}>👾 Editar Perfil 👾 </Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Name"
                            value={userDataEdit.name}
                            onChangeText={newName => setUserDataEdit({...userDataEdit, name: newName})}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Email"
                            value={userDataEdit.email}
                            onChangeText={newEmail => setUserDataEdit({...userDataEdit, email: newEmail})}
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Phone"
                            value={userDataEdit.phone}
                            onChangeText={newPhone => setUserDataEdit({...userDataEdit, phone: newPhone})}
                        />
                    </View>

                    <TouchableOpacity 
                        style={styles.saveButton} 
                        onPress={() => saveProfile(userDataEdit)}
                    >
                        <Text style={styles.saveButtonText}>Save Changes</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default EditProfile;
