import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { useState } from "react";
import GroupImageTakeHeader from "../components/GroupImageTakeHeader";

import GalleryIconSvgComponent from "../svg/GalleryIconSvgComponent";
import CameraIconSvgComponent from "../svg/CameraIconSvgComponent";

import ModalNewHeader from "../components/ModalNewHeader";
import { useFonts } from "expo-font";

const CrowdImage = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../../assets/Fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("../../assets/Fonts/Inter-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.btn}>
            <Text style={styles.text}>Open Crowd Image Modal</Text>
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
              <ModalNewHeader text={"Back"} toggleModal={toggleModal} />
              <View style={styles.textContainer}>
                <Text style={styles.heading}>Crowd Image</Text>
              </View>

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
                  </TouchableOpacity>
                  <Text style={styles.galleryText}>Use Gallery</Text>
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
  textContainer: {
    alignSelf: "center",
    width: "90%",
    marginBottom: responsiveHeight(3),
    marginLeft: responsiveWidth(2),
  },
  heading: {
    color: "#0B2A46",
    fontSize: responsiveScreenFontSize(2.5),
    fontFamily: "Inter-Medium",
    fontWeight: "500",
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

    height: responsiveHeight(38),
  },
  cameraStyle: {
    width: responsiveWidth(38),
    height: responsiveHeight(16),
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    alignItems: "center",
    borderColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    borderWidth: 1,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: responsiveWidth(5),
  },
  galleryText: {
    marginTop: responsiveHeight(3),
    fontSize: responsiveFontSize(2),
    color: "#546A7E",
  },
});

export default CrowdImage;
