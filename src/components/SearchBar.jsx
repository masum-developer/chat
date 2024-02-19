import React from 'react';
import SearchClickIconSvgComponent from '../svg/SearchClickIconSvgComponent';
import SearchIconSvgComponent from '../svg/SearchIconSvgComponent';
import SearchClickIconSvg from '../svg/SearchClickIconSvg';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize,
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { StyleSheet, TextInput, View } from 'react-native';
const SearchBar = () => {
    return (
        <View style={styles.topContainer}>
                    {/* searc */}
                    <View style={styles.inputField}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Search..."
                            placeholderTextColor="rgba(99, 99, 99, 1)"
                        />
                        <SearchClickIconSvg/>
                        
                    </View>
                </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container:{
flex:1,

    },

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
        backgroundColor: "#FFFFFF",

        padding: responsiveWidth(1.9),
        paddingHorizontal: responsiveWidth(3.3),
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.1)",
        flex: 1,

        borderRadius: responsiveWidth(5),
        height: responsiveScreenHeight(5.5),
    },


    textInput: {
        fontSize: responsiveFontSize(1.8),
        width: responsiveWidth(15),
        fontFamily: "WorkSans-Regular",
        color: "#0B2A46",
    },
});