import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
  responsiveFontSize,
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
    marginBottom: 30,
    marginTop: 30,
    textAlign: "center",
    fontSize: responsiveScreenFontSize(3.5),
    color: "#909090",
  },
});
