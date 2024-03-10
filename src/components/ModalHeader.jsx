import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import LeftArrowIconSvgComponent from "../svg/LeftArrowIconSvgComponent";
import CloseIconSvgComponent from "../svg/CloseIconSvgComponent";
import { useFonts } from "expo-font";

const ModalHeader = ({ text, toggleModal }) => {
    //.......................For using google font................//
    const [fontsLoaded] = useFonts({
      "WorkSans-Regular": require("../../assets/Fonts/WorkSans-Regular.ttf"),
  
      "WorkSans-Medium": require("../../assets/Fonts/WorkSans-Medium.ttf"),
    });
    if (!fontsLoaded) {
      return <Text>Loading Font...</Text>;
    }
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
    fontSize: responsiveScreenFontSize(2),
    color: "rgba(84, 106, 126, 1)",
    marginLeft: responsiveScreenWidth(2),
    fontWeight: "500",
    // fontFamily:'Inter-Regular',

  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
    width: responsiveScreenWidth(78),
    alignSelf: "center",
  },
});

export default ModalHeader;
