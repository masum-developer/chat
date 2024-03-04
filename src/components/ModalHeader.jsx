import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import LeftArrowIconSvgComponent from "../svg/LeftArrowIconSvgComponent";
import CloseIconSvgComponent from "../svg/CloseIconSvgComponent";

const ModalHeader = ({ text, toggleModal }) => {
  return (
    <View >
      <View
        style={ModalHeaderStyles.container}
      >
        <View style={ModalHeaderStyles.headerTitle}>
          <TouchableOpacity onPress={toggleModal}>
            <LeftArrowIconSvgComponent />
          </TouchableOpacity>
          <Text style={ModalHeaderStyles.headerText}>{text}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={toggleModal}>
            <CloseIconSvgComponent />
          </TouchableOpacity>
        </View>
      </View>

      <View style={ModalHeaderStyles.line} />
    </View>
  );
};

const ModalHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    width: responsiveScreenWidth(40),
    height: responsiveScreenHeight(9),
    marginLeft: responsiveScreenWidth(6),
  },
  headerImage: {
    width: responsiveScreenWidth(6),
    height: responsiveScreenHeight(3),
  },
  headerText: {
    fontSize: responsiveScreenFontSize(3),
    color: "#474748",
    marginLeft: responsiveScreenWidth(2),
    fontWeight: "500",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
    width: responsiveScreenWidth(78),
    alignSelf: "center",
  },
});

export default ModalHeader;
