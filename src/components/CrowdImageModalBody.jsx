import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CameraIconSvgComponent from "../svg/CameraIconSvgComponent";
import GalleryIconSvgComponent from "../svg/GalleryIconSvgComponent";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const CrowdImageModalBody = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.imageContainer}>
      <View style={styles.cameraStyle}>
        <TouchableOpacity onPress={() => navigation.navigate("CameraPage")}>
          <CameraIconSvgComponent />
        </TouchableOpacity>
        <Text style={styles.galleryText}>Use Camera</Text>
      </View>
      <View style={styles.cameraStyle}>
        <TouchableOpacity onPress={() => navigation.navigate("PhotoGallery")}>
          <GalleryIconSvgComponent />
        </TouchableOpacity>
        <Text style={styles.galleryText}>Use Gallery</Text>
      </View>
    </View>
  );
};

export default CrowdImageModalBody;

const styles = StyleSheet.create({
  cameraStyle: {
    width: responsiveScreenWidth(38),
    height: responsiveScreenHeight(16),
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    alignItems: "center",
    borderColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    borderWidth: 1,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: responsiveScreenWidth(5),
  },
  galleryText: {
    marginTop: responsiveScreenHeight(3),
    fontSize: responsiveScreenFontSize(2),
    color: "#546A7E",
  },
});
