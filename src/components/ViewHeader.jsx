import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import LeftArrowIconSvgComponent from '../svg/LeftArrowIconSvgComponent';

const ViewHeader = ({title}) => {
    return (
        <View style={styles.header}>
            <View style={styles.headerContent}>
            <LeftArrowIconSvgComponent/>
                <Text style={styles.sendto}>{title}</Text>
            </View>
        </View>
    );
};

export default ViewHeader;


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: responsiveScreenHeight(15), // 50% of Screen height
        backgroundColor: "#ffffff"
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