import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import React, { useEffect, useRef, useState } from "react";

import { Camera, CameraType } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import TakePhotoSvgComponent from "../svg/TakePhotoSvgComponent";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import ViewHeader from "../components/ViewHeader";
import FlashIconSvgComponent from "../svg/FlashIconSvgComponent";
import VideoIconSvgComponent from "../svg/VideoIconSvgComponent";
import RotateIconSvgComponent from "../svg/RotateIconSvgComponent";
import SpeedIconSvgComponent from "../svg/SpeedIconSvgComponent";
import FlashOffIconSvgComponent from "../svg/FlashOffIconSvgComponent";
import { useNavigation } from "@react-navigation/native";

const CameraPage = () => {
  const navigation = useNavigation();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        await MediaLibrary.createAssetAsync(data.uri);
        navigation.navigate("CrowdImage");
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No Access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <ViewHeader title={"Back"} />
      <View style={styles.cameraContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Camera</Text>
        </View>

        <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={cameraRef}
        >
          <Text></Text>
        </Camera>

        <View style={styles.btnContainer}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 5,
            }}
          >
            <View style={{ flexDirection: "row", gap: 12 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  setFlash(
                    flash === Camera.Constants.FlashMode.off
                      ? Camera.Constants.FlashMode.on
                      : Camera.Constants.FlashMode.off
                  );
                }}
              >
                <View>
                  {flash === Camera.Constants.FlashMode.off ? (
                    <FlashOffIconSvgComponent />
                  ) : (
                    <FlashIconSvgComponent />
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={takePicture}>
                <View>
                  <VideoIconSvgComponent />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.btn} onPress={takePicture}>
                <View>
                  <TakePhotoSvgComponent />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", gap: 12 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  setType(
                    type === CameraType.back
                      ? CameraType.front
                      : CameraType.back
                  );
                }}
              >
                <View>
                  <RotateIconSvgComponent />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={takePicture}>
                <View>
                  <SpeedIconSvgComponent />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CameraPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    alignSelf: "center",
    width: "90%",
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingTop: 20,
    paddingBottom: 30,
  },
  heading: {
    color: "#0B2A46",
    fontSize: responsiveScreenFontSize(2.5),
  },
  camera: {
    flex: 1,
    alignSelf: "center",
    borderRadius: 20,
    width: "90%",
    // position: "relative",
  },
  btnContainer: {
    position: "absolute",
    bottom: responsiveScreenHeight(5),
    backgroundColor: "rgba(204, 204, 204, 0.2)",
    width: "80%",
    height: responsiveScreenHeight(10),
    borderRadius: 10,
    flexDirection: "row",
    alignSelf: "center",
  },
  btn: {},
});
