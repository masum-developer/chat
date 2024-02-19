import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize,
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import ViewHeader from '../components/ViewHeader';
import SearchBar from '../components/SearchBar';
import userData from '../utils/userData';
import CircleIconSvgComponent from '../svg/CircleIconSvgComponent';
import { useFonts } from 'expo-font';


const ForwardMessage = () => {
    const [users, setUsers] = useState(userData);
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
            <ViewHeader title={'Forward Message'} />
            <ScrollView style={styles.viewContainer}>
                {/* Search Field added by component */}
                <View style={styles.searchBar}>
                    <SearchBar />
                </View>
                <View style={styles.mainImageContainer}>
                    <Image style={styles.manImage} resizeMode='cover' source={require('../../assets/image/man.png')} />
                </View>
                <View>
                    <Text style={styles.textHeading}>Recent</Text>
                </View>

                <View style={styles.userList}>
                    {users && users.map((user, index) => (
                        <View key={user.id} style={styles.userContainer}>
                            <View style={styles.imageContainer}>
                                <View>
                                    <Image
                                        style={styles.user}
                                        source={{ uri: user.image }}
                                    />
                                    <View style={styles.smallCircle}>
                                        <CircleIconSvgComponent />
                                    </View>
                                </View>

                                <View>
                                    <Text style={styles.userName}>{user.name}</Text>

                                    <Text style={styles.userId}>ID: 652346752378</Text>
                                </View>

                            </View>
                            <View>
                                <TouchableOpacity>
                                    <View style={styles.btn}>
                                        <Text style={styles.btnText}>Send</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                    ))}
                </View>

            </ScrollView>
        </View>
    );
};

export default ForwardMessage;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    viewContainer: {
        paddingHorizontal: responsiveWidth(6),
        backgroundColor: '#f8f8f8',
        minHeight: 900
    },

    mainImageContainer: {
        justifyContent: "center",
        alignItems: "center",


    },
    manImage: {
        alignSelf: "center",
        marginTop: responsiveHeight(3),
        width: responsiveWidth(67),
        height: responsiveHeight(33),
        borderWidth: 1,
        borderRadius: responsiveWidth(2)
    },
    textHeading: {
        color: "#0B2A46",
        paddingTop: responsiveScreenHeight(4),
        fontFamily: "WorkSans-Medium",
        fontWeight: "500",
        fontSize: responsiveFontSize(1.9),

    },
    userContainer: { flexDirection: 'row', justifyContent: 'space-between' },
    userList: {
        marginTop: responsiveScreenHeight(0.6),
        marginBottom: responsiveScreenHeight(20)
    },
    imageContainer: {
        paddingLeft: responsiveScreenWidth(1),
        paddingRight: responsiveScreenWidth(1),
        flexDirection: "row",
        alignItems: "center",
        marginVertical: responsiveScreenWidth(1.3),

    },
    user: {
        width: responsiveScreenWidth(6.5),
        height: responsiveScreenWidth(6.7),
    },
    userName: {
        marginLeft: responsiveWidth(5),
        marginBottom: 1.5,
        fontSize: responsiveFontSize(1.8),
        fontFamily: "WorkSans-Medium",
        fontWeight: "500",
    },
    userId: {
        color: '#6f747c',
        marginLeft: responsiveWidth(5),
        marginBottom: 1.5,
        fontSize: responsiveFontSize(1.5),
        fontFamily: "WorkSans-Regular",
        fontWeight: "300",
    },
    smallCircle: {
        position: "absolute",
        left: responsiveWidth(4),
        top: responsiveScreenHeight(1.5),
        padding: 2,
    },
    btn: {
        marginTop: responsiveHeight(1.3),
        width: responsiveWidth(16),
        height: responsiveHeight(3.5),
        backgroundColor: '#e3f0e2',
        alignItems: 'center',
        justifyContent: 'center',
        border: 1,
        borderRadius: 5
    },
    btnText: {
        color: '#27AC1F',
        fontSize: responsiveFontSize(1.6),
        fontFamily: "WorkSans-Medium",
        fontWeight: "400",
    }

});