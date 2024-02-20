import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


import React, { useEffect, useRef, useState } from "react";

import { Camera, CameraType } from 'expo-camera';
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from 'expo-media-library'
import TakePhotoSvgComponent from '../svg/TakePhotoSvgComponent';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize,

} from "react-native-responsive-dimensions";
import { Image } from "react-native-svg";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



const CameraPage = () => {

    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
    const [image, setImage] = useState();
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {

            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === "granted");
        })();
    }, [])
    const takePicture = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                console.log(data)
                setImage(data.uri)
            } catch (e) {
                console.log(e)
            }
        }
    }
    if (hasCameraPermission === false) {
        return <Text>No Access to camera</Text>
    }
    return (
        <View style={styles.container}>
            {!image ?
                <Camera
                    style={styles.camera}
                    type={type}
                    flashMode={flash}
                    ref={cameraRef}
                >
                    <Text>Hello</Text>

                </Camera> : <Image source={{ uri: image }} style={styles.camera} />
            }

            <View style={styles.btnContainer}>
                {
                    image ? <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 50,
                        paddingHorizontal: 50
                    }}>
                        <FontAwesome name="check" size={24} color="black" />
                        <Entypo name="retweet" size={24} color="black" />
                    </View> :

                        <TouchableOpacity style={styles.btn} onPress={takePicture}>
                            <View >
                                <TakePhotoSvgComponent />
                            </View>

                        </TouchableOpacity>
                }
            </View>
        </View>
    );
};

export default CameraPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    camera: {
        flex: 1,
        borderRadius: 20,
        width: '100%'

    },
    btnContainer: {
        position: 'absolute',
        bottom: responsiveScreenHeight(2),
        backgroundColor: "rgba(204, 204, 204, 0.2)",
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(10),
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    btn: {



    },

})