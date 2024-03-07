import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("BlockMember")}>
        <View style={styles.btn}>
          <Text style={styles.text}>Block Member</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("RemoveMember")}>
        <View style={styles.btn}>
          <Text style={styles.text}>Remove Member</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("GroupImage")}>
        <View style={styles.btn}>
          <Text style={styles.text}>Group Image</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CrowdImage")}>
        <View style={styles.btn}>
          <Text style={styles.text}>Crowd Image</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("RemoveMessage")}>
        <View style={styles.btn}>
          <Text style={styles.text}>Remove Message</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("AddMembers")}>
        <View style={styles.btn}>
          <Text style={styles.text}>Add Members</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ForwardMessage")}>
        <View style={styles.btn}>
          <Text style={styles.text}>Forward Message</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Interview")}>
        <View style={styles.btn}>
          <Text style={styles.text}>Interview</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("MyCalendar")}>
        <View style={styles.btn}>
          <Text style={styles.text}>Calendar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ChapterModules")}>
        <View style={styles.btn}>
          <Text style={styles.text}>ChapterModules</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  btn: {
    width: responsiveWidth(40),
    height: responsiveHeight(5),
    backgroundColor: "#27ac1f",
    marginBottom: 20,
  },
  text: {
    alignSelf: "center",
    paddingTop: 10,
    color: "#fff",
  },
});
