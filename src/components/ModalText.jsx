import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  responsiveScreenHeight,
  responsiveHeight,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { useFonts } from "expo-font";

const ModalText = ({ text }) => {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../../assets/Fonts/Inter-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View>
      <Text style={ModalTextStyles.modalText}>{text}</Text>
    </View>
  );
};

export default ModalText;

const ModalTextStyles = StyleSheet.create({
  modalText: {
    marginBottom: responsiveHeight(4),
    marginTop: responsiveHeight(5),
    textAlign: "center",
    fontSize: responsiveScreenFontSize(2.4),
    lineHeight: responsiveScreenFontSize(3) * 1, // Adjust the multiple as needed
    color: "rgba(0, 0, 0, 0.7)",
    fontWeight: "500",
    fontFamily: "Inter-Regular",
  },
});
