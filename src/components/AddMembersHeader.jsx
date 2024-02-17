import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import SearchNormal from "./SearchNormal";
import LeftArrowSvgComponent from "./LeftArrowSvgComponent";
import { useFonts } from "expo-font";

const AddMembersHeader = ({ text, toggleModal }) => {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../../assets/Fonts/Inter-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={toggleModal}>
            <LeftArrowSvgComponent />
          </TouchableOpacity>
          <Text style={styles.headerText}>{text}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => {}}>
            <SearchNormal />
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
    fontSize: responsiveScreenFontSize(2.2),
    color: "#474748",
    marginLeft: responsiveScreenWidth(3),
    fontWeight: "500",
    fontFamily: "Inter-Regular",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
    width: responsiveScreenWidth(78),
    alignSelf: "center",
  },
});
