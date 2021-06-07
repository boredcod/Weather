import React, { useState }from "react";
import PropTypes from "prop-types";
import Weather from "./Weather";
import weatherOptions from "./Weather";
import ReturnStatement from "./ReturnClothe";
import { View, Text, StyleSheet, ScrollView, StatusBar, Modal, TouchableHighlight, Alert, Pressable} from "react-native";


function Popup ({temperature}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.recommend}>Recommended clothes</Text> 

            <Text style={styles.modalText}>
            <ReturnStatement temperature = {temperature}/>
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Recommended clothe for today's weather</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 0,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flex: 0.2
  },
  button: {
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#101726",
  },
  buttonClose: {
    backgroundColor: "#101726",
    marginTop: 20
  },
  recommend:{
    padding: 10,
    elevation: 2,
    backgroundColor: "#101726",
    color: "white",
    marginBottom: 20,
    marginTop: 0
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize: 20,
    textAlign: "center"
  }
});

export default Popup;