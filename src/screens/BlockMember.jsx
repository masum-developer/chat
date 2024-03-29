
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


  responsiveScreenWidth,

  responsiveScreenHeight,

  responsiveScreenFontSize
} from "react-native-responsive-dimensions";

import Modal from "react-native-modal";

import ModalButton from "../components/ModalButton";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LeftArrowIconSvgComponent from "../svg/LeftArrowIconSvgComponent";
import CloseIconSvgComponent from "../svg/CloseIconSvgComponent";
import ModalNewHeader from "../components/ModalNewHeader";




//.......................Start Modal Text...........
export const ModalText = ({ text }) => {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../../assets/Fonts/Inter-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View>
      <Text style={ModalTextStyles.modalText}>{text}</Text>
    </View>
  );
};


const ModalTextStyles = StyleSheet.create({
  modalText: {
    marginBottom: responsiveScreenHeight(4),
    marginTop: responsiveScreenHeight(3),
    textAlign: "center",
    fontSize: responsiveScreenFontSize(2),
    lineHeight: responsiveScreenFontSize(3) * 1, // Adjust the multiple as needed
    color: "rgba(0, 0, 0, 0.7)",
    fontWeight: "500",
    fontFamily: "Inter-Regular",
  },
});

//.......................End Modal Text...........

//......................Main Component.....................

const BlockMember = () => {
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
                <Text style={styles.modalHeading}>Block this Member</Text>
              </View>
              <ModalText
                text={"Are you sure, you want to block this member?"}
              />
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

export default BlockMember;

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
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(40),
  },
  modalHeading: {
    fontFamily: 'Inter-Medium',
    fontSize: responsiveScreenFontSize(2.7),
    alignSelf: 'center',
    marginTop: responsiveScreenHeight(2)
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
    paddingHorizontal: responsiveScreenWidth(7),
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
