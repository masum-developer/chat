import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import { useFonts } from "expo-font";

import EditGreenIconSvgComponent from "../svg/EditGreenIconSvgComponent";
import CloseIconSmallSvgComponent from "../svg/CloseIconSmallSvgComponent";

const InterviewHeader = ({ text, toggleModal }) => {
  const [fontsLoaded] = useFonts({
    "WorkSans-Medium": require("../../assets/Fonts/WorkSans-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <View style={styles.headerTitle}>
            <Text style={styles.headerText}>{text}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={toggleModal}>
              <EditGreenIconSvgComponent />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.closeIcon}>
          <TouchableOpacity onPress={toggleModal}>
            <CloseIconSmallSvgComponent />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: responsiveScreenHeight(10),
  },
  headerLeft: {
    flexDirection: "row",

    width: responsiveScreenWidth(50),
  },
  headerTitle: {
    flexDirection: "row",
  },
  headerImage: {
    width: responsiveScreenWidth(6),
    height: responsiveScreenHeight(3),
  },
  headerText: {
    fontSize: responsiveScreenFontSize(2.0),
    color: "#000000",

    fontFamily: "WorkSans-Medium",
    fontWeight: "500",
  },
  closeIcon: {
    marginBottom: responsiveScreenHeight(2.5),
  },
});

export default InterviewHeader;
