import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { useFonts } from "expo-font";
import SearchIconSvgComponent from "../svg/SearchIconSvgComponent";
import LeftArrowIconSvgComponent from "../svg/LeftArrowIconSvgComponent";

const AddMembersHeader = ({ text, toggleModal }) => {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../../assets/Fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../../assets/Fonts/Inter-Bold.ttf"),
    "Inter-Medium":require("../../assets/Fonts/Inter-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <TouchableOpacity  onPress={toggleModal}>
            <LeftArrowIconSvgComponent/>
          </TouchableOpacity>
          <Text style={styles.headerText}>{text}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => {}}>
            <SearchIconSvgComponent/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default AddMembersHeader;

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: responsiveScreenWidth(2),

    alignItems: "center",
    height: responsiveScreenHeight(8),
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    width: responsiveScreenWidth(70),
  },
  headerRight: {
    width: responsiveScreenWidth(30),
  },

  headerImage: {
    width: responsiveScreenWidth(6),
    height: responsiveScreenHeight(3),
  },
  headerText: {
    fontSize: responsiveScreenFontSize(2.3),
    color: "#474748",
    marginLeft: responsiveScreenWidth(3),
    fontWeight: "500",
    fontFamily: "Inter-Medium",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
    width: responsiveScreenWidth(80),
    alignSelf: "center",
  },
});
