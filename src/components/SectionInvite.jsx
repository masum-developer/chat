import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import { useFonts } from "expo-font";
import NotificationSvgComponent from "../svg/NotificationSvgComponent";
import InviteGuestSvgComponent from "../svg/InviteGuestSvgComponent";

const SectionInvite = () => {
  const [fontsLoaded] = useFonts({
    "WorkSans-Regular": require("../../assets/Fonts/WorkSans-Regular.ttf"),
    "WorkSans-Medium": require("../../assets/Fonts/WorkSans-Medium.ttf"),
    "WorkSans-SemiBold": require("../../assets/Fonts/WorkSans-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  const users = [
    {
      id: 1,
      photo: "https://i.ibb.co/qx5p3hQ/guest.png",
      email: "parvinsalma@gmail.com",
    },
    {
      id: 2,
      photo: "https://i.ibb.co/qx5p3hQ/guest.png",
      email: "parvinsalma@gmail.com",
    },
    {
      id: 3,
      photo: "https://i.ibb.co/qx5p3hQ/guest.png",
      email: "parvinsalma@gmail.com",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <TouchableOpacity>
            <InviteGuestSvgComponent />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTitle}>
          <Text style={styles.headerText}> {users.length} Invited Guest</Text>
        </View>
      </View>
      <View style={styles.userSection}>
        {users.map((user, index) => (
          <View key={user.id}>
            <View style={styles.userContainer}>
              <Image style={styles.img} source={{ uri: user.photo }} />
              <Text style={styles.userText}>{user.email}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: responsiveScreenHeight(2),
  },

  headerText: {
    fontSize: responsiveScreenFontSize(2),
    color: "#0B2A46",
    fontFamily: "WorkSans-SemiBold",
    fontWeight: "500",
    marginLeft: responsiveScreenWidth(1),
  },
  userSection: {
    marginTop: responsiveScreenHeight(3),
  },
  userContainer: {
    flexDirection: "row",
    marginBottom: responsiveScreenHeight(2),
    alignItems: "center",
    gap: responsiveScreenWidth(2),
  },
  img: {
    width: responsiveScreenWidth(6),
    height: responsiveScreenWidth(6),
  },
  userText: {
    fontSize: responsiveScreenFontSize(2),
    color: "#0B2A46",
    fontFamily: "WorkSans-Regular",
    fontWeight: "400",
    marginLeft: responsiveScreenWidth(1),
  },
});

export default SectionInvite;
