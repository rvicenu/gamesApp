import React from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
    },
    backButtonContainer: {
        alignSelf: 'flex-start',
        marginTop: 20,
    },
    icon: {
        paddingLeft: 10,
        color: '#ee5253',
    },
    takePictureButton: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10,
    },
    captureButtonContainer: {
        width: 70,
        height: 70,
        borderColor: '#718093',
        borderWidth: 2,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f6fa',
    },
    captureInnerButtonContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#718093',
        backgroundColor: '#718093',
    },
});

const CameraInterface = ({navigation, camera, takePicture}) => (
    <SafeAreaView style={styles.container}>

        <View style={styles.backButtonContainer}>
            <TouchableOpacity onPress={() => {
                if(navigation.canGoBack()) {
                    navigation.pop();
                }
            }}>
                <AntIcon style={styles.icon} name="arrowleft" size={35} />
            </TouchableOpacity>
        </View>

        <View style={styles.takePictureButton}>
            <TouchableOpacity
                style={styles.captureButtonContainer}
                onPress={() => takePicture(camera)}>
                    <View style={styles.captureInnerButtonContainer} />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
);

export default CameraInterface;
