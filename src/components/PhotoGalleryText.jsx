import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const PhotoGalleryText = () => {
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Photo Gallery</Text>
        <Text style={styles.headingSmall}>Select one photo</Text>
      </View>
    </View>
  );
};

export default PhotoGalleryText;

const styles = StyleSheet.create({
  textContainer: {
    alignSelf: "center",
    width: "90%",
  },
  heading: {
    color: "#0B2A46",
    fontSize: responsiveScreenFontSize(2.5),
    paddingTop: 10,
  },
  headingSmall: {
    color: "#0B2A46",
    fontSize: responsiveScreenFontSize(2),
    paddingVertical: 10,
  },
});
