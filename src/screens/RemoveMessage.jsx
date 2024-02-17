import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import TrashIconComponent from "../components/TrashIconComponent";
import { useFonts } from "expo-font";

const RemoveMessage = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const [fontsLoaded] = useFonts({
    "WorkSans-Regular": require("../../assets/Fonts/WorkSans-Regular.ttf"),
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
              <TouchableOpacity onPress={toggleModal}>
                <Image
                  style={{ marginTop: 14 }}
                  source={require("../../assets/image/close.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modalBottom}>
              <Text style={styles.btnText}>Remove for everyone</Text>
              <TrashIconComponent />
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
    borderRadius: 20,
    borderColor: "gray",
    backgroundColor: "#FFFFFF",
    width: responsiveWidth(90),
    height: responsiveHeight(23),
    paddingHorizontal: responsiveWidth(2),
  },
  modalTop: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  textContainer: {
    width: responsiveWidth(60),
  },

  modalText: {
    marginTop: responsiveHeight(4),
    marginRight: responsiveWidth(4),
    fontSize: responsiveFontSize(2.2),
    textAlign: "center",
    fontFamily: "WorkSans-Regular",
    fontWeight: "500",
    color: "rgba(0, 0, 0, 0.8)",
  },
  modalBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: responsiveWidth(80),
    height: responsiveHeight(6),
    backgroundColor: "#27ac1f",
    marginTop: responsiveHeight(4),
    alignSelf: "center",
    borderRadius: 8,
    alignItems: "center",
    paddingHorizontal: responsiveWidth(4),
    backgroundColor: "#ffe5e5",
  },

  btnText: {
    color: "#FF0000",
    fontFamily: "WorkSans-Regular",
    fontWeight: "500",
    fontSize: responsiveFontSize(2),
  },
  btn: {
    width: responsiveWidth(40),
    height: responsiveHeight(5),
    backgroundColor: "plum",
    marginBottom: responsiveHeight(3),
  },
  btnTextColor: {
    alignSelf: "center",
    paddingTop: responsiveHeight(1),
    color: "#fff",
  },
});
