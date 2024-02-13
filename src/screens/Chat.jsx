import React from "react";
import {
  FlatList,
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
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { useFonts } from "expo-font";

const Chat = () => {
  const [fontsLoaded] = useFonts({
    WorkSans: require("../../assets/fonts/Work Sans.ttf"),
  });

  const users = [
    {
      id: 1,
      name: "Priyanka Parvej",
      image: "https://i.ibb.co/h9YTkLN/priyankaparvej.png",
    },
    {
      id: 2,
      name: "Anamika Rahman",
      image: "https://i.ibb.co/ZB6qqwC/anamika.png",
    },
    {
      id: 3,
      name: "Jakia Sultana",
      image: "https://i.ibb.co/ypFdHmH/jakiasultana.png",
    },
    {
      id: 4,
      name: "Priyanka Parvej",
      image: "https://i.ibb.co/h9YTkLN/priyankaparvej.png",
    },
    {
      id: 5,
      name: "Anamika Rahman",
      image: "https://i.ibb.co/ZB6qqwC/anamika.png",
    },
    {
      id: 6,
      name: "Jakia Sultana",
      image: "https://i.ibb.co/ypFdHmH/jakiasultana.png",
    },
    {
      id: 7,
      name: "Priyanka Parvej",
      image: "https://i.ibb.co/h9YTkLN/priyankaparvej.png",
    },
    {
      id: 8,
      name: "Anamika Rahman",
      image: "https://i.ibb.co/ZB6qqwC/anamika.png",
    },
    {
      id: 9,
      name: "Jakia Sultana",
      image: "https://i.ibb.co/ypFdHmH/jakiasultana.png",
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.chat}>
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
              style={styles.senderImage}
              source={require("../images/salma.png")}
            />
            <TouchableOpacity onPress={() => {}}>
              <Image
                style={styles.closeImage}
                source={require("../images/close.png")}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.sendToButton}>
              <Image
                style={styles.sentToImage}
                source={require("../images/sendto.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.name}>
          <Text>Salma Sarkar</Text>
        </View>
        <View style={styles.recent}>
          <Text style={styles.recentText}>Recent</Text>
        </View>
        <View style={styles.userList}>
          <FlatList
            data={users}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity onPress={() => {}}>
                  <View style={styles.imageContainer} key={item.id}>
                    <Image style={styles.user} source={{ uri: item.image }} />
                    <Text style={styles.userName}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.loadMoreContainer}>
          <View style={styles.loadMore}></View>
        </View>
      </View>
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
    backgroundColor: "#F8F8F8",
  },
  searchView: {
    backgroundColor: "#fff",
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(5),
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#EEEEEE",
    marginTop: responsiveScreenHeight(2),
    paddingHorizontal: responsiveScreenWidth(4),
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
    paddingHorizontal: responsiveScreenWidth(4),
    marginTop: responsiveScreenHeight(2),
  },
  senderImage: {
    width: responsiveScreenWidth(15),
    height: responsiveScreenHeight(6),
    borderRadius: 100,
    marginLeft: responsiveScreenWidth(2),
  },
  closeImage: {
    width: responsiveScreenWidth(5),
    height: responsiveScreenHeight(2.3),
    marginLeft: responsiveScreenWidth(-4.5),
    marginTop: responsiveScreenHeight(3.5),
    backgroundColor: "#fff",
  },
  sendToButton: {
    backgroundColor: "#27AC1F",
    width: responsiveScreenWidth(25),
    height: responsiveScreenHeight(5),
    paddingHorizontal: responsiveScreenWidth(2),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  sentToImage: {
    width: responsiveScreenWidth(20),
    height: responsiveScreenHeight(3),
  },
  name: {
    paddingLeft: responsiveScreenWidth(3),
    paddingRight: responsiveScreenWidth(3),
    marginTop: responsiveScreenHeight(1),
    fontSize: responsiveScreenFontSize(2),
  },
  recent: {
    paddingLeft: responsiveScreenWidth(3),
    paddingRight: responsiveScreenWidth(3),

    marginTop: responsiveScreenHeight(3),
  },
  recentText: {
    color: "#000000",
    opacity: 60,
    fontSize: responsiveScreenFontSize(2.7),
    fontWeight: "500",
  },
  user: {
    width: responsiveScreenWidth(8),
    height: responsiveScreenWidth(8),
  },
  imageContainer: {
    paddingLeft: responsiveScreenWidth(3),
    paddingRight: responsiveScreenWidth(3),
    flexDirection: "row",
    alignItems: "center",
    marginVertical: responsiveScreenWidth(3),
  },
  userName: {
    marginLeft: responsiveScreenWidth(5),
  },
  userList: {
    marginTop: responsiveScreenHeight(1.5),
  },
  loadMore: {
    width: responsiveScreenWidth(45),
    height: responsiveScreenHeight(0.8),
    backgroundColor: "#172E44",
    alignSelf: "center",
    borderRadius: 5,
  },
  loadMoreContainer: {
    marginTop: responsiveScreenHeight(1),
    paddingBottom: responsiveScreenHeight(2),
  },
});
