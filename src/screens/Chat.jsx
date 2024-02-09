import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../common/Header";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

const Chat = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.chat}>
        <View style={styles.searchView}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput style={styles.input} placeholder="Search..." />
            <Image
              style={styles.icon}
              source={require("../images/search.png")}
            />
          </View>
        </View>
        <View style={styles.send}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 63,
                height: 53,
                borderRadius: 100,
              }}
              source={require("../images/salma.png")}
            />
            <Image
              style={{
                width: 20,
                height: 20,
                marginLeft: 10,
                backgroundColor: "#fff",
              }}
              source={require("../images/close.png")}
            />
          </View>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#27AC1F",
                width: 120,
                height: 46,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 6,
              }}
            >
              <Image
                style={{ width: 80, height: 30 }}
                source={require("../images/sendto.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Masum</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chat: {
    paddingLeft: responsiveScreenWidth(1),
    paddingRight: responsiveScreenWidth(1),
  },
  searchView: {
    // backgroundColor: "#F8F8F8",
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(5),
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 0.5,
    marginTop: responsiveScreenHeight(5),
    paddingHorizontal: 10,
  },
  icon: {
    width: responsiveScreenWidth(5),
    height: responsiveScreenHeight(5),
    resizeMode: "center",
  },
  send: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 20,
  },
});
