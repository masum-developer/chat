import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const Button = ({ title }) => {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../../assets/Fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../../assets/Fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("../../assets/Fonts/Inter-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View style={styles.btn}>
      <Text style={styles.btnText}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    marginTop: responsiveScreenHeight(5),
    marginBottom: responsiveScreenHeight(4),
    borderRadius: responsiveScreenWidth(2),
    width: "90%",
    height: responsiveScreenHeight(6),
    backgroundColor: "#27AC1F",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: responsiveScreenFontSize(2.2),
    fontFamily: "Inter-Medium",
    fontWeight: "500",
  },
});
