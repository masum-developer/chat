
import { useState } from "react";
import {

  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {


  responsiveScreenWidth,

  responsiveScreenHeight,

  responsiveScreenFontSize
} from "react-native-responsive-dimensions";

import Modal from "react-native-modal";


import ModalText from "../components/ModalText";

import ModalButton from "../components/ModalButton";
import { useNavigation } from "@react-navigation/native";
import ModalNewHeader from "../components/ModalNewHeader";



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
          onBackdropPress={() => setModalVisible(false)}
        >
          <View style={styles.modalStyle}>
            <ModalNewHeader text={"Back"} toggleModal={toggleModal} />
            <View style={styles.textContainer}>
            <View>
                <Text style={styles.modalHeading}>Would you like to remove this member?</Text>
              </View>
              <ModalText text={"Only Crowd admin can remove this member."} />
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
  modalHeading:{
    fontFamily:'Inter-Medium',
    fontSize:responsiveScreenFontSize(2.6),
    textAlign:'center',
    marginTop: responsiveScreenHeight(2)
  },

  modalStyle: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "gray",
    backgroundColor: "#FFFFFF",
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(40),
  },

  btnContainerLeft: {
    backgroundColor: "#e9f7e9",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#e9f7e9",
  },
  btnContainerRight: {
    backgroundColor: "#27ac1f",
    marginLeft: responsiveScreenWidth(5),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#27ac1f",
  },
  textContainer: {
    paddingHorizontal: responsiveScreenWidth(7),
  },

  btnCancel: {
    width: responsiveScreenWidth(40),
    height: responsiveScreenHeight(5),

    backgroundColor: "#e9f7e9",
    alignItems: "center",
    justifyContent: "center",
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
    fontFamily: "Inter-Regular",
    fontWeight: "500",
  },
});
