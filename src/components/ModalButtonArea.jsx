import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const ModalButtonArea = () => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <TouchableOpacity onPress={toggleModal}>
        <View style={styles.btnCancel}>
          <Text style={styles.btnCancelText}>Cancel</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleModal}>
        <View style={styles.btnCancel}>
          <Text style={styles.btnCancelText}>Ok</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ModalButtonArea;

const styles = StyleSheet.create({
  btnCancel: {
    width: 140,
    height: 46,

    backgroundColor: "#e9f7e9",
    alignItems: "center",
    justifyContent: "center",
  },
  btnCancelText: {
    color: "#27AC1F",
    fontWeight: "500",
    fontSize: 16,
  },
});
