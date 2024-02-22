import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const Button = () => {
  return (
    <View style={styles.btn}>
      <Text style={styles.btnText}>Save</Text>
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
  },
});
