import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import LeftArrowIconSvgComponent from "../svg/LeftArrowIconSvgComponent";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const ViewHeader = ({ title }) => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Inter-SemiBold": require("../../assets/Fonts/Inter-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrowIconSvgComponent />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default ViewHeader;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: responsiveHeight(12.6), // 50% of Screen height
    backgroundColor: "#ffffff",
  },
  headerContent: {
    marginTop: responsiveScreenHeight(6),

    marginLeft: responsiveScreenWidth(5),
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  title: {
    fontSize: responsiveScreenFontSize(2.3),
    fontWeight: "500",
    color: "#474748",
    fontFamily: "Inter-SemiBold",
    fontWeight: "500",
  },
});
