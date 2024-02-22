import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import CloseIconSvgComponent from "../svg/CloseIconSvgComponent";

import { useFonts } from "expo-font";
import LeftArrowIconLightSvgComponent from "../svg/LeftArrowIconLightSvgComponent";

const ModalNewHeader = ({ text, toggleModal }) => {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../../assets/Fonts/Inter-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitle}>
          <TouchableOpacity onPress={toggleModal}>
            <LeftArrowIconLightSvgComponent />
          </TouchableOpacity>
          <Text style={styles.headerText}>{text}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={toggleModal}>
            <CloseIconSvgComponent />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: responsiveScreenHeight(2),
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    width: responsiveScreenWidth(40),
    height: responsiveScreenHeight(8),
    marginLeft: responsiveScreenWidth(6),
  },
  headerImage: {
    width: responsiveScreenWidth(6),
    height: responsiveScreenHeight(3),
  },
  headerText: {
    fontSize: responsiveScreenFontSize(2.2),
    color: "#546A7E",
    marginLeft: responsiveScreenWidth(2),
    fontFamily: "Inter-Regular",
    fontWeight: "500",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
    width: responsiveScreenWidth(78),
    alignSelf: "center",
  },
});

export default ModalNewHeader;
