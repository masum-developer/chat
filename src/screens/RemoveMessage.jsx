import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import CloseIconSvgComponent from "../svg/CloseIconSvgComponent";
import TrashIconSvgComponent from "../svg/TrashIconSvgComponent";

const RemoveMessage = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const [fontsLoaded] = useFonts({
    "WorkSans-Regular": require("../../assets/Fonts/WorkSans-Regular.ttf"),
    "WorkSans-Medium": require("../../assets/Fonts/WorkSans-Medium.ttf"),
    "WorkSans-Black": require("../../assets/Fonts/WorkSans-Black.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.btn}>
            <Text style={styles.btnTextColor}>Open Modal</Text>
          </View>
        </TouchableOpacity>
        <Modal
          isVisible={modalVisible}
          onSwipeComplete={() => setModalVisible(false)}
          swipeDirection="up"
          onBackdropPress={() => setModalVisible(false)}
        >
          <View style={styles.modalStyle}>
            <View style={styles.modalTop}>
              <View style={styles.textContainer}>
                <Text style={styles.modalText}>
                  Do you want to remove this message?
                </Text>
              </View>
              <TouchableOpacity
                style={styles.closeIcon}
                onPress={toggleModal}
              >
                <CloseIconSvgComponent />
              </TouchableOpacity>
            </View>
            <View style={styles.modalBottom}>
              <Text style={styles.btnText}>Remove for everyone</Text>
              <TrashIconSvgComponent />
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.btn}>
            <Text style={styles.btnTextColor}>Go To Home</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RemoveMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  modalStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    backgroundColor: "#FFFFFF",
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(20),
    paddingHorizontal: responsiveScreenWidth(2),
    marginBottom: responsiveScreenHeight(8),
  },
  modalTop: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  textContainer: {
    width: responsiveScreenWidth(60),
  },

  modalText: {
    marginTop: responsiveScreenHeight(2.5),
    marginRight: responsiveScreenWidth(8),
    fontSize: responsiveFontSize(2.2),
    textAlign: "center",
    fontFamily: "WorkSans-Medium",
    fontWeight: "500",
    color: "rgba(0, 0, 0, 0.8)",
    marginBottom:responsiveScreenHeight(2),
  },
  modalBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: responsiveScreenWidth(80),
    height: responsiveScreenHeight(5),
    backgroundColor: "#27ac1f",
    marginTop: responsiveScreenHeight(1),
    
    alignSelf: "center",
    borderRadius: 8,
    alignItems: "center",
    paddingHorizontal: responsiveScreenWidth(4),
    backgroundColor: "#ffe5e5",
  },
  closeIcon:
  { marginTop: responsiveScreenHeight(1.5), marginRight: responsiveScreenWidth(2)},

  btnText: {
    color: "#FF0000",
    fontFamily: "WorkSans-Medium",
    fontWeight: "500",
    fontSize: responsiveFontSize(1.7),
  },
  btn: {
    width: responsiveScreenWidth(40),
    height: responsiveScreenHeight(5),
    backgroundColor: "plum",
    marginBottom: responsiveScreenHeight(3),
  },
  btnTextColor: {
    alignSelf: "center",
    paddingTop: responsiveScreenHeight(1),
    color: "#fff",
  },
});
