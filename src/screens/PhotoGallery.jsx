import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";

import React, { useEffect, useState } from "react";

import * as MediaLibrary from "expo-media-library";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import ViewHeader from "../components/ViewHeader";

import Button from "../components/Button";
import SelectCircleSvgComponent from "../svg/SelectCircleSvgComponent";
import HeadingBig from "../components/HeadingBig";
import HeaderSmall from "../components/HeaderSmall";
import { useNavigation } from "@react-navigation/native";

const PhotoGallery = () => {
  const [media, setMedia] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();
  //**************** */ for loading image***************************//
  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === "granted") {
        const mediaAssets = await MediaLibrary.getAssetsAsync({
          mediaType: "photo",
        });

        setMedia(mediaAssets.assets);
      }
    })();
  }, []);
  //**************** */ for select image***************************//
  const selectImage = (item) => {
    setSelectedImage(item);
  };

  return (
    <View style={styles.container}>
      <ViewHeader title={"Back"} />
      <View style={styles.headerTop}>
        <HeadingBig title={"Photo Gallery"} />
      </View>
      <HeaderSmall title={"Kindly select one photo"} />
      <View style={styles.mediaContainer}>
        <FlatList
          data={media}
          numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={() => selectImage(item)}
            >
              <Image source={{ uri: item.uri }} style={styles.image} />
              {selectedImage && selectedImage.id === item.id && (
                <View style={styles.selectCircle}>
                  <SelectCircleSvgComponent />
                </View>
              )}
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("CrowdImage")}>
        <Button title={"Save"} />
      </TouchableOpacity>
    </View>
  );
};

export default PhotoGallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTop: { paddingTop: responsiveScreenHeight(2) },
  mediaContainer: {
    flex: 1,
    alignSelf: "center",
    width: "91%",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: responsiveScreenWidth(28),
    height: responsiveScreenHeight(15),
    margin: responsiveScreenWidth(1),
    borderRadius: responsiveScreenWidth(2),
  },
  selectCircle: {
    position: "absolute",
    bottom: responsiveScreenHeight(1),
    right: responsiveScreenWidth(2),
    zIndex: 5,
  },
});
