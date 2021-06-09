import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './../screens/Search';
import Game from './../screens/Game';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

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
    backIcon: {
        paddingLeft: 10,
        color: '#ee5253',
    },
})

const SearchStack = createStackNavigator();

const SearchNavigation = ({navigation}) => (
    <SearchStack.Navigator headerMode="screen">
        <SearchStack.Screen 
            name="Search" 
            component={Search} 
            options={{
                header: () => null
            }}
        />
        <SearchStack.Screen 
            name="GameSearch" 
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
    </SearchStack.Navigator>
);

export default SearchNavigation;