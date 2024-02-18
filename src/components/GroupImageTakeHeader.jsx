import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import LeftArrowIconSvgComponent from "../svg/LeftArrowIconSvgComponent";

const GroupImageTakeHeader = ({ text, toggleModal }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitle}>
          <TouchableOpacity onPress={toggleModal}>
            <LeftArrowIconSvgComponent />
          </TouchableOpacity>
          <Text style={styles.headerText}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: responsiveScreenHeight(10),
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    width: responsiveScreenWidth(50),
    height: responsiveScreenHeight(7),
    marginLeft: responsiveScreenWidth(6),
  },
  headerImage: {
    width: responsiveScreenWidth(6),
    height: responsiveScreenHeight(3),
  },
  headerText: {
    fontSize: responsiveScreenFontSize(2),
    color: "#474748",
    marginLeft: responsiveScreenWidth(2),
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
    width: responsiveScreenWidth(78),
    alignSelf: "center",
  },
});

export default GroupImageTakeHeader;
