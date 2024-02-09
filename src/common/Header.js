import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image source={require('../images/leftarrow.png')} />
                <Text style={styles.sendto}>Send to</Text>
            </View>
        </View>
    );
};

export default Header;


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: responsiveScreenHeight(10), // 50% of Screen height
        backgroundColor: '#fff'
    },
    headerContent: {
        marginTop: 40,
        marginLeft: 10,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    sendto: {
        fontSize: 19,
        fontWeight: '500',
        color: '#474748'
    }
});