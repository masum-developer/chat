import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import { useFonts } from "expo-font";

import ShareIconSvgComponent from "../svg/ShareIconSvgComponent";

const MeetingJoin = () => {
  const [fontsLoaded] = useFonts({
    "WorkSans-Regular": require("../../assets/Fonts/WorkSans-Regular.ttf"),
    "WorkSans-Medium": require("../../assets/Fonts/WorkSans-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <View style={styles.headerTitle}>
            <Text style={styles.headerText}>Meeting Join Link</Text>
          </View>
          <View>
            <Text style={styles.headerLink}>meet.google.com/vtq-qiwd-lmn</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={() => {}}>
            <ShareIconSvgComponent />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: responsiveScreenHeight(10),
  },

  headerTitle: {
    flexDirection: "row",
  },

  headerText: {
    fontSize: responsiveScreenFontSize(2.0),
    color: "#0B2A46",
    fontFamily: "WorkSans-Medium",
    fontWeight: "500",
  },
  headerLink: {
    fontSize: responsiveScreenFontSize(1.6),
    color: "#546A7E",
    fontFamily: "WorkSans-Regular",
    fontWeight: "400",
  },
});

export default MeetingJoin;
