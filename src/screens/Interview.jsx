import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import Modal from "react-native-modal";
import { useFonts } from "expo-font";

import InterviewHeader from "../components/InterviewHeader";
import MeetingJoin from "../components/MeetingJoin";

import SectionNotification from "../components/SectionNotification";
import SectionInvite from "../components/SectionInvite";
import WriteSection from "../components/WriteSection";
import ButtonArea from "../components/ButtonArea";

const Interview = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  //.......................For using google font................//
  const [fontsLoaded] = useFonts({
    "WorkSans-Regular": require("../../assets/Fonts/WorkSans-Regular.ttf"),
    "WorkSans-Black": require("../../assets/Fonts/WorkSans-Black.ttf"),
    "WorkSans-Medium": require("../../assets/Fonts/WorkSans-Medium.ttf"),
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
        {/** Modal start here **/}
        <Modal
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
        >
          <SafeAreaView style={styles.modalStyle}>
            <ScrollView>
              <InterviewHeader
                text={"Interview with Shiblu Ahmad"}
                toggleModal={toggleModal}
              />

              <View>
                <Text style={styles.dateTime}>
                  January 16, 2024 • 2:30 AM - 3:30 AM
                </Text>
              </View>
              <MeetingJoin />
              <SectionNotification title={"Reminder 30 minutes before"} />
              <SectionInvite />
              <WriteSection
                title="Add Meeting Agenda"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <WriteSection
                title="Follow Up Message"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <WriteSection
                title="Action Item"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <ButtonArea />
            </ScrollView>
          </SafeAreaView>
        </Modal>
        {/** Modal end here **/}
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

export default Interview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: responsiveScreenWidth(3),
  },

  modalStyle: {
    marginVertical: responsiveScreenHeight(1),
    borderWidth: 2,
    borderRightWidth: 2,
    borderRadius: 15,
    borderColor: "gray",
    backgroundColor: "#ffffff",
    paddingHorizontal: responsiveScreenWidth(4.5),
    width: responsiveScreenWidth(90),
  },
  dateTime: {
    fontFamily: "WorkSans-Regular",
    color: "#546A7E",
    fontWeight: "400",
    fontSize: responsiveScreenFontSize(2),
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
});
