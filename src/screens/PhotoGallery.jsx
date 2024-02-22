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
import PhotoGalleryText from "../components/PhotoGalleryText";
import Button from "../components/Button";
import SelectCircleSvgComponent from "../svg/SelectCircleSvgComponent";

const PhotoGallery = () => {
  const [media, setMedia] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
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
      <PhotoGalleryText />
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
      <Button />
    </View>
  );
};

export default PhotoGallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mediaContainer: {
    flex: 1,
    alignSelf: "center",
    width: "90%",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: 120,
    height: 140,
    margin: 3,
    borderRadius: 5,
  },
  selectCircle: {
    position: "absolute",
    bottom: 10,
    right: 30,
    zIndex: 5,
  },
});
