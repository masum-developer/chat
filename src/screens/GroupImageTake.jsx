import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { useState } from "react";
import GroupImageTakeHeader from "../components/GroupImageTakeHeader";

import GalleryIconSvgComponent from "../svg/GalleryIconSvgComponent";
import CameraIconSvgComponent from "../svg/CameraIconSvgComponent";

const GroupImageTake = () => {
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
              <GroupImageTakeHeader
                text={"Group Image"}
                toggleModal={toggleModal}
              />

              <View style={styles.imageContainer}>
                <View style={styles.cameraStyle}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("CameraPage")}
                  >
                    <CameraIconSvgComponent />
                  </TouchableOpacity>
                  <Text style={styles.galleryText}>Use Camera</Text>
                </View>
                <View style={styles.cameraStyle}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("PhotoGallery")}
                  >
                    <GalleryIconSvgComponent />
                    <Text style={styles.galleryText}>Use Gallery</Text>
                  </TouchableOpacity>
                </View>
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
    marginTop: responsiveHeight(20),
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

    height: responsiveHeight(29),
  },
  cameraStyle: {
    width: responsiveWidth(38),
    height: responsiveHeight(16),
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    alignItems: "center",
    borderColor: "#ebebeb",
    justifyContent: "center",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: responsiveWidth(5),
  },
  galleryText: {
    marginTop: responsiveHeight(3),
    fontSize: responsiveFontSize(2),
  },
});

export default GroupImageTake;
