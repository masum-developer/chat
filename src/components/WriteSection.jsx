import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import { useFonts } from "expo-font";
import BarIconSvgComponent from "../svg/BarIconSvgComponent";
import BarSmallIconSvgComponent from "../svg/BarSmallIconSvgComponent";

const WriteSection = ({ title, message }) => {
  const [fontsLoaded] = useFonts({
    "WorkSans-Regular": require("../../assets/Fonts/WorkSans-Regular.ttf"),
    "WorkSans-Medium": require("../../assets/Fonts/WorkSans-Medium.ttf"),
    "WorkSans-SemiBold": require("../../assets/Fonts/WorkSans-SemiBold.ttf"),
    "Inter-Regular": require("../../assets/Fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("../../assets/Fonts/Inter-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}> {title}</Text>

        <View style={styles.messageContainer}>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.barIcon}>
            <BarIconSvgComponent />
          </View>
          <View style={styles.barIcon}>
            <BarSmallIconSvgComponent />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    width: responsiveScreenWidth(80),
    height: responsiveScreenHeight(13),
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderWidth: 1,
    borderRadius: responsiveScreenWidth(2),
    borderColor: "#eeeeee",
    marginBottom: responsiveScreenHeight(2),
  },
  heading: {
    color: "#666666",
    fontSize: responsiveScreenFontSize(2),
    fontFamily: "Inter-Medium",
    fontWeight: "500",
    marginBottom: responsiveScreenHeight(1),
  },
  message: {
    color: "#666666",
    fontSize: responsiveScreenFontSize(1.8),
    fontFamily: "Inter-Regular",
    fontWeight: "400",
  },
  barIcon: { position: "absolute", right: 0, bottom: 0 },
});

export default WriteSection;
