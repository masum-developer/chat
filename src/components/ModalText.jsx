import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  responsiveScreenHeight,
  responsiveHeight,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const ModalText = ({ text }) => {
  return (
    <View>
      <Text style={styles.modalText}>{text}</Text>
    </View>
  );
};

export default ModalText;

const styles = StyleSheet.create({
  modalText: {
    marginBottom: responsiveHeight(4),
    marginTop: responsiveHeight(5),
    textAlign: "center",
    fontSize: responsiveScreenFontSize(3.1),
    lineHeight: responsiveScreenFontSize(3) * 1, // Adjust the multiple as needed
    color: "rgba(0, 0, 0, 0.7)",
    fontWeight: "500",
  },
});
