import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const HeaderSmall = ({ title }) => {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../../assets/Fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../../assets/Fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("../../assets/Fonts/Inter-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.headingSmall}>{title}</Text>
      </View>
    </View>
  );
};

export default HeaderSmall;

const styles = StyleSheet.create({
  textContainer: {
    alignSelf: "center",
    width: "90%",
  },

  headingSmall: {
    color: "#546A7E",
    fontSize: responsiveScreenFontSize(2),
    paddingBottom: responsiveScreenHeight(2),
    fontFamily: "Inter-Regular",
    fontWeight: "400",
  },
});
