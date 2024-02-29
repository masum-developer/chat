import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import { useFonts } from "expo-font";
import NotificationSvgComponent from "../svg/NotificationSvgComponent";

const SectionNotification = ({ title }) => {
  const [fontsLoaded] = useFonts({
    "WorkSans-Regular": require("../../assets/Fonts/WorkSans-Regular.ttf"),
    "WorkSans-Medium": require("../../assets/Fonts/WorkSans-Medium.ttf"),
    "WorkSans-SemiBold": require("../../assets/Fonts/WorkSans-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <TouchableOpacity>
            <NotificationSvgComponent />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTitle}>
          <Text style={styles.headerText}> {title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerText: {
    fontSize: responsiveScreenFontSize(2),
    color: "#0B2A46",
    fontFamily: "WorkSans-SemiBold",
    fontWeight: "500",
    marginLeft: responsiveScreenWidth(1),
  },
});

export default SectionNotification;
