import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ModalButton = ({ text, textColor }) => {
  return (
    <View style={styles.btn}>
      <Text style={[styles.btnText, { color: textColor }]}>{text}</Text>
    </View>
  );
};

export default ModalButton;

const styles = StyleSheet.create({
  btn: {
    width: 140,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontWeight: "500",
    fontSize: 20,
  },
});
