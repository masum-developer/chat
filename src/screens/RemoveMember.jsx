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
import { useNavigation } from "@react-navigation/native";

const RemoveMember = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: 300 }}>
        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.btn}>
            <Text style={styles.text}>Open Modal</Text>
          </View>
        </TouchableOpacity>
        <Modal
          isVisible={modalVisible}
          onSwipeComplete={() => setModalVisible(false)}
          swipeDirection="up"
        >
          <View style={styles.modalStyle}>
            <ModalHeader text={"Remove Member"} />
            <ModalText text={"Only group admin can remove this member"} />
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <TouchableOpacity
                onPress={toggleModal}
                style={[
                  styles.btnContainerLeft,
                  { backgroundColor: "#e9f7e9" },
                ]}
              >
                <ModalButton text={"Cancel"} textColor={"#58bf52"} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btnContainerRight,
                  { backgroundColor: "#27ac1f" },
                ]}
                onPress={toggleModal}
              >
                <ModalButton text={"Ok"} textColor={"#f1faf1"} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <View style={{ width: "100%", height: 300 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.btn}>
            <Text style={styles.text}>Go To Home</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RemoveMember;

const styles = StyleSheet.create({
  container: {
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
  modalText: {
    marginBottom: 30,
    marginTop: 30,
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
  btnCancel: {
    width: 140,
    height: 46,

    backgroundColor: "#e9f7e9",
    alignItems: "center",
    justifyContent: "center",
  },
  btnCancelText: {
    color: "#27AC1F",
    fontWeight: "500",
    fontSize: 16,
  },
  btn: {
    width: responsiveWidth(40),
    height: responsiveHeight(5),
    backgroundColor: "#27ac1f",
    marginBottom: 20,
  },
  text: {
    alignSelf: "center",
    paddingTop: 10,
    color: "#fff",
  },
});
