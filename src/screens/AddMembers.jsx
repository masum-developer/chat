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
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import Modal from "react-native-modal";
import AddMembersHeader from "../components/AddMembersHeader";
import { useFonts } from "expo-font";
import useList from "../utils/data";
import SearchClickIconSvgComponent from "../svg/SearchClickIconSvgComponent";
import UncheckIconSvgComponent from "../svg/UncheckIconSvgComponent";
import CheckIconSvgComponent from "../svg/CheckIconSvgComponent";
import CircleIconSvgComponent from "../svg/CircleIconSvgComponent";
import AddMembersTitle from "../components/AddMembersTitle";
const AddMembers = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState(useList);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  //................... For handling checkbox toggle....................//
  const handleCheckboxToggle = (userId) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, checked: !user.checked } : user
      )
    );
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
          <View style={styles.modalContainer}>
            <View style={styles.modalStyle}>
              <AddMembersHeader
                text={"Back"}
                toggleModal={toggleModal}
                
              />

          


          <AddMembersTitle/>

              <View style={styles.topContainer}>
                {/* searc */}
                <View style={styles.inputField}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Search"
                    placeholderTextColor="rgba(99, 99, 99, 1)"
                  />
                  <SearchClickIconSvgComponent />
                </View>
              </View>
              <View>
                <Text style={styles.allContact}>All Contact</Text>
              </View>
              <ScrollView>
                {/* Show User List*/}
                <View style={styles.userList}>
                  {users.map((user, index) => (
                    <View key={user.id}>
                      <View style={styles.imageContainer}>
                        <Image
                          style={styles.user}
                          source={{ uri: user.image }}
                        />
                        <View style={styles.smallCircle}>
                          <CircleIconSvgComponent />
                        </View>
                        <Text style={styles.userName}>{user.name}</Text>
                        {/* Show Check box icon by help of svg */}
                        <TouchableOpacity
                          onPress={() => handleCheckboxToggle(user.id)}
                        >
                          {user.checked ? (
                            <CheckIconSvgComponent />
                          ) : (
                            <UncheckIconSvgComponent />
                          )}
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
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

export default AddMembers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: responsiveScreenWidth(3),
  },
  modalContainer: {
    marginTop: responsiveScreenHeight(6),
  },
  modalStyle: {
    borderWidth: 2,
    borderRightWidth: 2,
    borderRadius: 15,
    borderColor: "gray",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: responsiveScreenWidth(4.5),
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(74),
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

  inputField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F2F2F2",

    padding: responsiveScreenWidth(1.9),
    paddingHorizontal: responsiveScreenWidth(3.3),
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    flex: 1,

    borderRadius: responsiveScreenWidth(2),
    height: responsiveScreenHeight(5.8),
  },

  textInput: {
    fontSize: responsiveScreenFontSize(1.8),
    width: responsiveScreenWidth(15),
    fontFamily: "WorkSans-Regular",
    color: "#0B2A46",
  },

  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: responsiveScreenWidth(2.2),
    alignItems: "center",
    paddingTop: responsiveScreenHeight(2.5),
  },
  allContact: {
    color: "#0B2A46",
    paddingTop: responsiveScreenHeight(1.8),
    fontFamily: "WorkSans-Medium",
    fontWeight: "500",
    fontSize: responsiveScreenFontSize(1.8),
  },
  userList: {
    marginTop: responsiveScreenHeight(1),
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
    width: responsiveScreenWidth(6.5),
    height: responsiveScreenWidth(6.7),
  },
  userName: {
    marginRight: responsiveScreenWidth(32),
    fontSize: responsiveScreenFontSize(1.8),
    fontFamily: "WorkSans-Medium",
    fontWeight: "500",
  },
  smallCircle: {
    position: "absolute",
    left: responsiveScreenWidth(5.5),
    top: responsiveScreenHeight(1.8),
    padding: 1,
  },
});
