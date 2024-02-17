import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import Modal from "react-native-modal";
import AddMembersHeader from "../components/AddMembersHeader";

import AddMembersCircleSvgComponent from "../components/AddMembersCircleSvgComponent";
import CheckSvgIcon from "../components/CheckSvgIcon";
import SearchSvgComponent from "../components/SearchSvgComponent";
import { useFonts } from "expo-font";
const AddMembers = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const users = [
    {
      id: 1,
      name: "Priyanka Parvej",
      image: "https://i.ibb.co/h9YTkLN/priyankaparvej.png",
    },
    {
      id: 2,
      name: "Priyanka Parvej",
      image: "https://i.ibb.co/h9YTkLN/priyankaparvej.png",
    },
    {
      id: 3,
      name: "Priyanka Parvej",
      image: "https://i.ibb.co/h9YTkLN/priyankaparvej.png",
    },
    {
      id: 4,
      name: "Priyanka Parvej",
      image: "https://i.ibb.co/h9YTkLN/priyankaparvej.png",
    },
    {
      id: 5,
      name: "Priyanka Parvej",
      image: "https://i.ibb.co/h9YTkLN/priyankaparvej.png",
    },
    {
      id: 6,
      name: "Priyanka Parvej",
      image: "https://i.ibb.co/h9YTkLN/priyankaparvej.png",
    },
    {
      id: 7,
      name: "Priyanka Parvej",
      image: "https://i.ibb.co/h9YTkLN/priyankaparvej.png",
    },
    {
      id: 8,
      name: "Priyanka Parvej",
      image: "https://i.ibb.co/h9YTkLN/priyankaparvej.png",
    },
  ];
  const [fontsLoaded] = useFonts({
    "WorkSans-Regular": require("../../assets/Fonts/WorkSans-Regular.ttf"),
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
          <ScrollView style={styles.modalContainer}>
            <View style={styles.modalStyle}>
              <AddMembersHeader
                text={"Add Members"}
                toggleModal={toggleModal}
              />

              <View style={styles.topContainer}>
                {/* searc */}
                <View style={styles.inputField}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Search"
                    placeholderTextColor="rgba(99, 99, 99, 1)"
                  />

                  <SearchSvgComponent />
                </View>
              </View>
              <View>
                <Text style={styles.allContact}>All Contact</Text>
              </View>
              <View>
                {/* Show User List*/}
                <View style={styles.userList}>
                  {users.map((item, index) => (
                    <View key={item.id}>
                      <View style={styles.imageContainer}>
                        <Image
                          style={styles.user}
                          source={{ uri: item.image }}
                        />
                        <View style={styles.smallCircle}>
                          <AddMembersCircleSvgComponent />
                        </View>
                        <Text style={styles.userName}>{item.name}</Text>
                        <CheckSvgIcon />
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </ScrollView>
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

export default AddMembers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: responsiveWidth(3),
  },
  modalContainer: {
    marginTop: responsiveHeight(7),
  },
  modalStyle: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "gray",
    backgroundColor: "#FFFFFF",
    width: responsiveWidth(90),
    height: responsiveHeight(76),
    paddingHorizontal: responsiveWidth(4),
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

  inputField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    padding: responsiveWidth(1.5),
    paddingHorizontal: responsiveWidth(3.3),
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    flex: 1,
    borderRadius: responsiveWidth(2),
  },

  textInput: {
    fontSize: responsiveFontSize(1.6),
  },

  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: responsiveWidth(2.2),
    alignItems: "center",
    paddingTop: responsiveHeight(3),
  },
  allContact: {
    color: "#0B2A46",
    paddingTop: responsiveScreenHeight(2),
    fontFamily: "WorkSans-Regular",
    fontWeight: "500",
    fontSize: responsiveFontSize(2),
  },
  userList: {
    marginTop: responsiveScreenHeight(1.5),
  },
  imageContainer: {
    paddingLeft: responsiveScreenWidth(1),
    paddingRight: responsiveScreenWidth(1),
    flexDirection: "row",
    alignItems: "center",
    marginVertical: responsiveScreenWidth(2),
    justifyContent: "space-between",
  },
  user: {
    width: responsiveScreenWidth(8),
    height: responsiveScreenWidth(8),
  },
  userName: {
    marginRight: responsiveWidth(25),
    fontSize: responsiveFontSize(2),
    fontFamily: "WorkSans-Regular",
    fontWeight: "500",
  },
  smallCircle: {
    position: "absolute",
    left: responsiveWidth(7),
    top: responsiveScreenHeight(2),
  },
});
