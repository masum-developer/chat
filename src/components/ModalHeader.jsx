import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const ModalHeader = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        <Image
          style={styles.headerImage}
          source={require("../../assets/image/leftarrow.png")}
        />
        <Text style={styles.headerText}>{text}</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    width: responsiveScreenWidth(100),
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
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
    width: responsiveScreenWidth(78),
    alignSelf: "center",
  },
});

export default ModalHeader;