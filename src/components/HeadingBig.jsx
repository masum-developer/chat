import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const HeadingBig = ({ title }) => {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../../assets/Fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../../assets/Fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("../../assets/Fonts/Inter-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View style={styles.textContainer}>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
};

export default HeadingBig;

const styles = StyleSheet.create({
  textContainer: {
    width: "90%",
    alignSelf: "center",
  },
  heading: {
    color: "#0B2A46",
    fontSize: responsiveScreenFontSize(2.6),
    paddingBottom: responsiveScreenHeight(1),
    fontFamily: "Inter-Medium",
  },
});
