import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CameraInterface from './../components/Camera/CameraInterface';
import CameraAuthorizeMessage from './../components/Camera/CameraAuthorizeMessage';
import { PhotoContext } from './../contexts/PhotoContext';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#718093',
    },
});

const Camera = () => {
    const {top} = useSafeAreaInsets();
    const navigation = useNavigation();

    const { setPhoto } = useContext(PhotoContext);

    const takePicture = async camera => {
        const options = {quality: 0.5, base64: true};
        const data = await camera.takePictureAsync(options);
        if (data.uri) {
            setPhoto(data.uri);
            navigation.pop();
        }
    };

    return (
        <SafeAreaView style={[styles.container, {paddingTop: top}]}>
            <RNCamera
                style={styles.camera}
                type={RNCamera.Constants.Type.front}
                captureAudio={false}
            >
                    
                {({camera, status}) => {
                    if (status === 'NOT_AUTHORIZED') {
                        return <CameraAuthorizeMessage message="Not Authorized" />;
                    }

                    if (status === 'PENDING_AUTHORIZATION') {
                        return <CameraAuthorizeMessage message="Pending Authorization" />;
                    }

                    if (status === 'READY') {
                        return (
                        <CameraInterface
                            navigation={navigation}
                            camera={camera}
                            takePicture={takePicture}
                        />
                        );
                    }
                }}
            </RNCamera>
        </SafeAreaView>
    );
};

export default Camera;
