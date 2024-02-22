import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";

import React, { useEffect, useRef, useState } from "react";

import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import TakePhotoSvgComponent from "../svg/TakePhotoSvgComponent";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

import ViewHeader from "../components/ViewHeader";
import FlashIconSvgComponent from "../svg/FlashIconSvgComponent";
import VideoIconSvgComponent from "../svg/VideoIconSvgComponent";
import RotateIconSvgComponent from "../svg/RotateIconSvgComponent";
import SpeedIconSvgComponent from "../svg/SpeedIconSvgComponent";
import FlashOffIconSvgComponent from "../svg/FlashOffIconSvgComponent";
import { useNavigation } from "@react-navigation/native";
import HeadingBig from "../components/HeadingBig";

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
  /*******************************IFor taking and save image********************************************/
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
      {/* Added Header */}
      <ViewHeader title={"Back"} />

      <SafeAreaView style={styles.cameraContainer}>
        <HeadingBig title={"Camera"} />
        {/* Camera Loaded */}
        <View style={styles.cameraWrapper}>
          <Camera
            style={styles.camera}
            type={type}
            flashMode={flash}
            ref={cameraRef}
          >
            <Text></Text>
          </Camera>
        </View>

        {/* Camera Button */}
        <View style={styles.btnContainer}>
          <View style={styles.btnWholeArea}>
            <View style={styles.btnArea}>
              <TouchableOpacity
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
              <TouchableOpacity
                onPress={() => alert("Video will implement later")}
              >
                <View>
                  <VideoIconSvgComponent />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={takePicture}>
                <View>
                  <TakePhotoSvgComponent />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.btnArea}>
              <TouchableOpacity
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
              <TouchableOpacity
                onPress={() => alert("Video 1x will implement later")}
              >
                <View>
                  <SpeedIconSvgComponent />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CameraPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingTop: responsiveScreenHeight(2),
    paddingBottom: responsiveScreenHeight(3),
  },
  cameraWrapper: {
    alignSelf: "center",
    width: "90%",
    height: responsiveScreenHeight(75),
    borderRadius: responsiveScreenWidth(2),
    overflow: "hidden", // Add this to hide the overflow
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  btnContainer: {
    position: "absolute",
    bottom: responsiveScreenHeight(3),
    backgroundColor: "rgba(204, 204, 204, 0.2)",
    width: "82%",
    height: responsiveScreenHeight(8),
    borderRadius: responsiveScreenWidth(2),
    flexDirection: "row",
    alignSelf: "center",
    paddingHorizontal: responsiveScreenWidth(1),
  },
  btnWholeArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: responsiveScreenWidth(1),
  },
  btnArea: { flexDirection: "row", gap: responsiveScreenWidth(4) },
});
