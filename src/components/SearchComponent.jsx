import React from "react";
import SearchSvgComponent from "./SearchSvgComponent";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

const SearchComponent = () => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.inputField}>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor="rgba(99, 99, 99, 1)"
        />

        <SearchSvgComponent />
      </View>
    </View>
  );
};

export default SearchComponent;
const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: responsiveWidth(2.2),
    alignItems: "center",
    paddingTop: responsiveHeight(3),
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
});
