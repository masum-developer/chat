import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import GreenDotSvgComponent from '../svg/GreenDotSvgComponent';
import OrangeDotSvgComponent from '../svg/OrangeDotSvgComponent';
import RedDotSvgComponent from '../svg/RedDotSvgComponent';
import BlueDotSvgComponent from '../svg/BlueDotSvgComponent';
import GreenLightSvgComponent from '../svg/GreenLightSvgComponent';
import PurpleLightSvgComponent from '../svg/PurpleLightSvgComponent';
const DotComponent = () => {
    return (
        <View>

<View style={styles.dotContainer}>
                <View style={styles.dot}>
                    <GreenDotSvgComponent/>
                    <Text>
                        Accepted
                    </Text>
                </View>
                <View style={styles.dot}>
                    <OrangeDotSvgComponent/>
                    <Text>
                    Pending
                    </Text>
                </View>
                <View style={styles.dot}>
                    <RedDotSvgComponent/>
                    <Text>
                    Rejected
                    </Text>
                </View>
</View>
<View style={styles.dotCon}>
                <View style={styles.dot}>
                    <BlueDotSvgComponent/>
                    <Text>
                    Proposed New Time
                    </Text>
                </View>
                <View style={styles.dot}>
                    <GreenLightSvgComponent/>
                    <Text>
                    Denied
                    </Text>
                </View>
</View>
<View style={styles.dotContainer}>
                <View style={styles.dot}>
                    <PurpleLightSvgComponent/>
                    <Text>
                    Finished
                    </Text>
                </View>
</View>
        </View>
    );
};

export default DotComponent;

const styles = StyleSheet.create({

    dotContainer:{
        flexDirection:'row', alignItems:'center', gap:responsiveScreenWidth(14),paddingHorizontal:responsiveScreenWidth(4),
        paddingTop:responsiveScreenHeight(1)
    },
    dotCon:{
        flexDirection:'row', alignItems:'center', gap:responsiveScreenWidth(11),paddingHorizontal:responsiveScreenWidth(4),
        paddingTop:responsiveScreenHeight(1)
    },
    dot:{flexDirection:'row', alignItems:'center', gap:8},
    line:{
        paddingTop:responsiveScreenHeight(2),
        alignSelf:'center'
    }

});