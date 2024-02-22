import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { useState } from "react";
import ModalNewHeader from "../components/ModalNewHeader";
import { useFonts } from "expo-font";
import CrowdImageModalBody from "../components/CrowdImageModalBody";

const CrowdImage = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  /********Using Font*******/
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
              <ModalNewHeader text={"Back"} toggleModal={toggleModal} />
              <View style={styles.textContainer}>
                <Text style={styles.heading}>Crowd Image</Text>
              </View>
              <CrowdImageModalBody />
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
    marginTop: responsiveScreenHeight(20),
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    alignSelf: "center",
    width: "90%",
    marginBottom: responsiveScreenHeight(3),
    marginLeft: responsiveScreenWidth(2),
  },
  heading: {
    color: "#0B2A46",
    fontSize: responsiveScreenFontSize(2.5),
    fontFamily: "Inter-Medium",
    fontWeight: "500",
  },
  btn: {
    width: responsiveScreenWidth(40),
    height: responsiveScreenHeight(5),
    backgroundColor: "#27ac1f",
    marginBottom: responsiveScreenHeight(3),
  },
  text: {
    alignSelf: "center",
    paddingTop: responsiveScreenHeight(1),
    color: "#fff",
  },
  modalStyle: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "gray",
    backgroundColor: "#FFFFFF",
    height: responsiveScreenHeight(38),
  },
});

export default CrowdImage;
