import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { useFonts } from "expo-font";

const ButtonArea = () => {
  const [fontsLoaded] = useFonts({
    "Inter-SemiBold": require("../../assets/Fonts/Inter-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View style={styles.btnContainer}>
      <View style={[styles.btn, { backgroundColor: "#e9f7e9" }]}>
        <Text style={[styles.btnText, { color: "#27AC1F" }]}>Delete</Text>
      </View>
      <View style={[styles.btn, { backgroundColor: "#27AC1F" }]}>
        <Text style={[styles.btnText, { color: "white" }]}>Update</Text>
      </View>
    </View>
  );
};

export default ButtonArea;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: responsiveScreenHeight(1),
    paddingBottom: responsiveScreenHeight(3),
  },
  btn: {
    width: responsiveScreenWidth(38),
    height: responsiveScreenHeight(6),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: responsiveScreenWidth(3),
  },
  btnText: {
    fontWeight: "500",
    fontSize: responsiveScreenFontSize(2.2),
    fontFamily: "Inter-SemiBold",
  },
});
