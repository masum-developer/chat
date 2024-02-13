import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
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
    fontSize: responsiveScreenFontSize(3),
    color: "#909090",
  },
});
