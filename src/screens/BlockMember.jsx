import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

import Modal from "react-native-modal";

import ModalHeader from "../components/ModalHeader";
import ModalText from "../components/ModalText";

import ModalButton from "../components/ModalButton";

const BlockMember = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      <Button title="Show Modal" onPress={toggleModal} />
      <Modal
        isVisible={modalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="up"
      >
        <View style={styles.modalStyle}>
          <ModalHeader text={"Block Member"} />
          <View style={styles.textContainer}>
            <ModalText text={"Are you sure, you want to block this member?"} />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
            }}
          >
            <TouchableOpacity
              onPress={toggleModal}
              style={[styles.btnContainerLeft, { backgroundColor: "#e9f7e9" }]}
            >
              <ModalButton text={"Cancel"} textColor={"#58bf52"} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btnContainerRight, { backgroundColor: "#27ac1f" }]}
              onPress={toggleModal}
            >
              <ModalButton text={"Ok"} textColor={"#f1faf1"} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BlockMember;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 60,
  },
  modalStyle: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "gray",
    backgroundColor: "#FFFFFF",
    width: responsiveWidth(90),
    height: responsiveHeight(40),
  },

  btnContainerLeft: {
    backgroundColor: "#e9f7e9",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#e9f7e9",
  },
  btnContainerRight: {
    backgroundColor: "#27ac1f",
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#27ac1f",
  },
  textContainer: {
    paddingHorizontal: responsiveWidth(7),
  },
});
