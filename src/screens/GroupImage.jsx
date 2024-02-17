import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import { FontAwesome } from "@expo/vector-icons";
import GroupImageHeader from "../components/GroupImageHeader";

const GroupImage = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.btn}>
            <Text style={styles.text}>Open Modal</Text>
          </View>
        </TouchableOpacity>
        <Modal
          isVisible={modalVisible}
          onSwipeComplete={() => setModalVisible(false)}
          swipeDirection="up"
          onBackdropPress={() => setModalVisible(false)}
        >
          <View style={styles.modalStyle}>
            <View>
              <GroupImageHeader
                text={"Group Image"}
                toggleModal={toggleModal}
              />

              <View style={styles.imageContainer}>
                <FontAwesome name="group" size={150} color="black" />
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.btn}>
            <Text style={styles.text}>Go To Home</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: responsiveWidth(40),
    height: responsiveHeight(5),
    backgroundColor: "#27ac1f",
    marginBottom: responsiveHeight(3),
  },
  text: {
    alignSelf: "center",
    paddingTop: responsiveHeight(1),
    color: "#fff",
  },
  modalStyle: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "gray",
    backgroundColor: "#FFFFFF",
    height: responsiveHeight(45),
  },
  imageContainer: {
    width: 300,
    height: 250,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    paddingLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderColor: "#ebebeb",
  },
});

export default GroupImage;
