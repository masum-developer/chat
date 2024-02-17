import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { FontAwesome } from "@expo/vector-icons";
import GroupImageHeader from "../components/GroupImageHeader";
import ModalHeader from "../components/ModalHeader";
import { useState } from "react";
import GroupImageTakeHeader from "../components/GroupImageTakeHeader";
import Svg, { Rect, Mask, Path } from "react-native-svg";

const GroupImageTake = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const MySVGCamera = () => (
    <Svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M11.7354 8.8H15.6354M6.87337 27H20.4974C24.0854 27 25.5154 24.803 25.6844 22.125L26.3604 11.387C26.4025 10.7212 26.3076 10.0538 26.0816 9.4261C25.8556 8.79839 25.5033 8.22371 25.0464 7.73757C24.5895 7.25143 24.0377 6.86416 23.4252 6.5997C22.8127 6.33524 22.1525 6.1992 21.4854 6.2C20.6924 6.2 19.9644 5.745 19.6004 5.043L18.6644 3.158C18.0664 1.975 16.5064 1 15.1804 1H12.2034C10.8644 1 9.30437 1.975 8.70637 3.158L7.77037 5.043C7.40637 5.745 6.67837 6.2 5.88537 6.2C3.06437 6.2 0.828374 8.579 1.01037 11.387L1.68637 22.125C1.84237 24.803 3.28537 27 6.87337 27Z"
        stroke="#666666"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.6957 21.7977C16.0227 21.7977 17.9207 19.8997 17.9207 17.5727C17.9207 15.2457 16.0227 13.3477 13.6957 13.3477C11.3687 13.3477 9.4707 15.2457 9.4707 17.5727C9.4707 19.8997 11.3687 21.7977 13.6957 21.7977Z"
        stroke="#666666"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
  const MySVGGallery = () => (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z"
        stroke="#666666"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.25 12.5C12.6307 12.5 13.75 11.3807 13.75 10C13.75 8.61929 12.6307 7.5 11.25 7.5C9.86929 7.5 8.75 8.61929 8.75 10C8.75 11.3807 9.86929 12.5 11.25 12.5Z"
        stroke="#666666"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.33789 23.6875L9.50039 19.55C10.4879 18.8875 11.9129 18.9625 12.8004 19.725L13.2129 20.0875C14.1879 20.925 15.7629 20.925 16.7379 20.0875L21.9379 15.625C22.9129 14.7875 24.4879 14.7875 25.4629 15.625L27.5004 17.375"
        stroke="#666666"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );

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
                  <MySVGCamera />
                  <Text style={styles.galleryText}>Use Camera</Text>
                </View>
                <View style={styles.cameraStyle}>
                  <MySVGGallery />
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
