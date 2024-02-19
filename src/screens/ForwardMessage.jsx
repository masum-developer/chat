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
import Header from '../common/Header';
import ViewHeader from '../components/ViewHeader';
import SearchClickIconSvgComponent from '../svg/SearchClickIconSvgComponent';
import SearchIconSvgComponent from '../svg/SearchIconSvgComponent';
import SearchClickIconSvg from '../svg/SearchClickIconSvg';
import SearchBar from '../components/SearchBar';
import useList from '../utils/data';
import CircleIconSvgComponent from '../svg/CircleIconSvgComponent';


const ForwardMessage = () => {
    const [users, setUsers] = useState(useList);
    return (
        <View style={styles.container}>
            <ViewHeader title={'Forward Message'} />
            <ScrollView style={styles.viewContainer}>
                {/* Search Field added by component */}
                <SearchBar />
                <View style={styles.mainImageContainer}>
                    <Image style={styles.manImage} source={require('../../assets/image/man.png')} />
                </View>
                <View>
                    <Text style={styles.allContact}>Recent</Text>
                </View>

                <View style={styles.userList}>
                    {users && users.map((user, index) => (
                        <View key={user.id} style={{flexDirection:'row', justifyContent:'space-between'}}>
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

                                    <Text style={styles.userName}>ID: 652346752378</Text>
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
        backgroundColor: '#f8f8f8'
    },
    mainImageContainer: {
        justifyContent: "center"
        ,
        alignItems:"center"
        
    },
    manImage: {
        alignSelf: "center",
        marginTop: responsiveHeight(3),
        width: responsiveWidth(75),
        height: responsiveHeight(34),
        alignSelf:'center',

    },
    allContact: {
        color: "#0B2A46",
        paddingTop: responsiveScreenHeight(1.8),
        fontFamily: "WorkSans-Medium",
        fontWeight: "500",
        fontSize: responsiveFontSize(1.8),
    },
    userList: {
        marginTop: responsiveScreenHeight(0.5),
    },
    imageContainer: {
        paddingLeft: responsiveScreenWidth(1),
        paddingRight: responsiveScreenWidth(1),
        flexDirection: "row",
        alignItems: "center",
        marginVertical: responsiveScreenWidth(1),

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
    smallCircle: {
        position: "absolute",
        left: responsiveWidth(5.5),
        top: responsiveScreenHeight(3.5),
        padding: 1,
    },
    btn:{
        marginTop:10,
        width:60,
        height:30,
        backgroundColor:'#e3f0e2',
        alignItems:'center',
        justifyContent:'center',
        border:1,
        borderRadius:5
    },
    btnText:{
        color:'#27AC1F',
        fontSize:responsiveFontSize(1.5)
    }

});