import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { FontAwesome } from '@expo/vector-icons';
import GroupImageHeader from '../components/GroupImageHeader';

const GroupImage = () => {
    const navigation = useNavigation(); // Moved the useNavigation hook inside the functional component

    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    const MySVGIcon = () => (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M16.0399 3.02001L8.15988 10.9C7.85988 11.2 7.55988 11.79 7.49988 12.22L7.06988 15.23C6.90988 16.32 7.67988 17.08 8.76988 16.93L11.7799 16.5C12.1999 16.44 12.7899 16.14 13.0999 15.84L20.9799 7.96001C22.3399 6.60001 22.9799 5.02001 20.9799 3.02001C18.9799 1.02001 17.3999 1.66001 16.0399 3.02001Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M14.9102 4.1499C15.5802 6.5399 17.4502 8.4099 19.8502 9.0899" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>


    );

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={toggleModal}>
                    <View style={styles.btn}>
                        <Text style={styles.text}>Open Modal</Text>
                    </View>
                </TouchableOpacity>
                <Modal
                    isVisible={modalVisible}
                    onSwipeComplete={() => setModalVisible(false)}
                    swipeDirection="up"
                >
                    <View style={styles.modalStyle}>
                        <View>

                            <GroupImageHeader text={'Group Image'} />

                            <View style={styles.imageContainer}>

                                <FontAwesome name="group" size={150} color="black" />

                            </View>

                        </View>
                    </View>
                </Modal>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <View style={styles.btn}>
                        <Text style={styles.text}>Go To Home</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 55,
    },
    btn: {
        width: responsiveWidth(40),
        height: responsiveHeight(5),
        backgroundColor: "#27ac1f",
        marginBottom: responsiveHeight(3),
    },
    text: {
        alignSelf: "center",
        paddingTop: responsiveHeight(1),
        color: "#fff",
    },
    modalStyle: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "gray",
        backgroundColor: "#FFFFFF",
        height: responsiveHeight(45),
    },
    imageContainer: { width: 300, height: 250, backgroundColor: '#F8F8F8', borderRadius: 10, paddingLeft: 20, alignItems:'center', justifyContent:'center', alignSelf:'center', borderColor: '#ebebeb' }
});

export default GroupImage;
