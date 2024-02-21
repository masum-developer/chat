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

const PhotoGallery = () => {
  const [media, setMedia] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

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

  const toggleImageSelection = (image) => {
    const isSelected = selectedImages.includes(image);
    if (isSelected) {
      setSelectedImages(
        selectedImages.filter((selected) => selected !== image)
      );
    } else {
      setSelectedImages([...selectedImages, image]);
    }
  };
  return (
    <View style={styles.container}>
      <ViewHeader title={"Back"} />
      <View style={styles.mediaContainer}>
        <FlatList
          data={media}
          numColumns={4}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={() => toggleImageSelection(item)}
            >
              <Image source={{ uri: item.uri }} style={styles.image} />
              {selectedImages.includes(item) && (
                <View style={styles.selectedOverlay} />
              )}
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{ marginTop: 40 }}>
        <Text>Save</Text>
      </View>
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
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
