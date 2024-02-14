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
        >
          <View style={styles.modalStyle}>
            <ModalHeader text={"Remove Member"} />
            <View style={styles.textContainer}>
              <ModalText text={"Only group admin can remove this member"} />
            </View>
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

export default RemoveMember;

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
    marginLeft: responsiveWidth(5),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#27ac1f",
  },
  textContainer: {
    paddingHorizontal: responsiveWidth(7),
  },

  btnCancel: {
    width: responsiveWidth(40),
    height: responsiveHeight(5),

    backgroundColor: "#e9f7e9",
    alignItems: "center",
    justifyContent: "center",
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
});
