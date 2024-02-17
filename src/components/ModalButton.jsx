import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { useFonts } from "expo-font";

const ModalButton = ({ text, textColor }) => {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../../assets/Fonts/Inter-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View style={styles.btn}>
      <Text style={[styles.btnText, { color: textColor }]}>{text}</Text>
    </View>
  );
};

export default ModalButton;

const styles = StyleSheet.create({
  btn: {
    width: responsiveWidth(38),
    height: responsiveHeight(7),
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontWeight: "500",
    fontSize: responsiveFontSize(2.2),
    fontFamily: "Inter-Regular",
  },
});
