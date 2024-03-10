import { useFonts } from 'expo-font';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { responsiveScreenFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';

const AddMembersTitle = () => {
    const [fontsLoaded] = useFonts({
        "Inter-Regular": require("../../assets/Fonts/Inter-Regular.ttf"),
        "Inter-Bold": require("../../assets/Fonts/Inter-Bold.ttf"),
        "Inter-Medium":require("../../assets/Fonts/Inter-Medium.ttf"),
        "WorkSans-Regular": require("../../assets/Fonts/WorkSans-Regular.ttf"),
      });
      if (!fontsLoaded) {
        return <Text>Loading Font...</Text>;
      }
    return (
        <View>
        <Text style={AddMembersTitleStyle.title}>
        Add Members
        </Text>
        <Text style={AddMembersTitleStyle.subTitle}>If you wish to add a member, kindly search and make selection.</Text>
      </View>
    );
};

export default AddMembersTitle;


const AddMembersTitleStyle = StyleSheet.create({
    title:{
        fontSize:responsiveScreenFontSize(2.7),
        marginTop:responsiveScreenHeight(2),
        color:'rgba(11, 42, 70, 1)',
        fontFamily:'Inter-Medium'
    },
    subTitle:{
        fontSize:responsiveScreenFontSize(2),
        marginTop:responsiveScreenHeight(1),
        fontFamily:'WorkSans-Regular'
    }

})