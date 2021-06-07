import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, Image, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import gaming from './../assets/gaming.gif';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LoginContext } from './../contexts/LoginContext';
import { useNavigation } from '@react-navigation/core';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#341f97',
        justifyContent: 'center',
    },
    container: {
        margin: 15,
        backgroundColor: '#ee5253',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingTop: 20,
        paddingBottom: 40,
    },
    title: {
        paddingTop: 5,
        marginBottom: 2,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#222f3e',
        textAlign: 'center',
    },
    textInput: {
        color: '#222f3e',
        borderBottomWidth: 2,
        borderColor: '#222f3e',
        fontSize: 18,
        fontWeight: 'bold',
    },
    logInButton: {
        marginTop: 10,
        padding: 12,
        width: 400,
        alignSelf: 'center',
        backgroundColor: '#ee5253',
        borderRadius: 5,
    },
    logInButtonText: {
        color: '#222f3e',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    gif: {
        alignSelf: 'center',
        width: 400,
        height: 150,
        resizeMode: 'contain',  
    },
});

const Login = () => {
    const { login, isValidLogin } = useContext(LoginContext);
    const navigation = useNavigation();
    const [userCredentials, setUserCredentials] = useState({
        username: '',
        password: '',
    });
    
    useEffect(() => {
        if (isValidLogin) {
            navigation.navigate('TabNavigation');
        }
    }, [isValidLogin]);

    return (
        <SafeAreaView style={styles.background}>
            <KeyboardAwareScrollView
                    contentContainerStyle={{
                        flex: 1,
                        justifyContent: 'center',
                        paddingBottom: 30,
                    }}
                >  
                <View>
                    <View style={[styles.container, {paddingBottom: 15, paddingTop: 10}]}>
                        <Text style={styles.title}>🕹 Login 🕹</Text>
                    </View>

                    <Image style={styles.gif} source={gaming} />

                    <View style={styles.container}>
                        <TextInput
                            style={styles.textInput}
                            autoCapitalize="none"
                            placeholder="Username"
                            value={userCredentials.username}
                            onChangeText={username => setUserCredentials({...userCredentials, username})}
                        />
                        <TextInput
                            style={styles.textInput}
                            autoCapitalize="none"
                            placeholder="Password"
                            value={userCredentials.password}
                            onChangeText={password => setUserCredentials({...userCredentials, password})}
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity 
                        style={styles.logInButton} 
                        onPress={() => login(userCredentials)}
                    >
                        <Text style={styles.logInButtonText}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default Login;
