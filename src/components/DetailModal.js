import React from "react";
import { Text, View, Modal, ScrollView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function DetailModalView(props) {
  let vendors = [
    {
      id: "er",
      name: "Ericsson",
      up: 2000,
      down: [
        { tech: "2g", count: 233 },
        { tech: "3g", count: 432 },
        { tech: "tdd", count: 12 },
        { tech: "fdd", count: 21 },
      ],
    },
    {
      id: "no",
      name: "Nokia",
      up: 1200,
      down: [
        { tech: "2g", count: 233 },
        { tech: "3g", count: 432 },
        { tech: "tdd", count: 12 },
        { tech: "fdd", count: 21 },
      ],
    },
    {
      id: "hu",
      name: "Huawei",
      up: 2420,
      down: [
        { tech: "2g", count: 233 },
        { tech: "3g", count: 432 },
        { tech: "tdd", count: 12 },
        { tech: "fdd", count: 21 },
      ],
    },
  ];

  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Icon
            name="close"
            size={25}
            color="gray"
            style={styles.modalCloseIcon}
            onPress={() => props.close()}
          />

          <ScrollView style={styles.modalScroll}>
            <View style={styles.modalDetailContainer}>
              {vendors.map((val) => (
                <ModalDetailSection
                  key={val.id}
                  title={val.name}
                  up={val.up}
                  down={val.down}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

function ModalDetailSection(props) {
  return (
    <View style={styles.modalDetailSection}>
      <View style={styles.modalDetailTitleContainer}>
        <Text style={styles.modalDetailTitle}>{props.title}</Text>
      </View>
      <View style={styles.modalDetailUpSection}>
        <Text style={styles.modalDetailSectionTitle}>Site up</Text>
        <Text style={styles.modalDetailValue}>{props.up}</Text>
      </View>
      <View style={styles.modalDetailDownSection}>
        <Text style={styles.modalDetailSectionTitle}>Site down</Text>
        {props.down.map((val) => (
          <View key={val.tech}>
            <Text style={styles.modalDetailTechTitle}>{val.tech}</Text>
            <Text style={styles.modalDetailValue}>{val.count}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "white",
    width: 300,
    height: 400,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalScroll: {
    marginTop: 5,
  },
  modalCloseIcon: {
    position: "absolute",
    right: 0,
    top: 0,
    margin: 10,
  },
  modalDetailContainer: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 5,
  },
  modalDetailSection: {
    width: 86,
  },
  modalDetailTitleContainer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
  },
  modalDetailTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  modalDetailUpSection: {
    height: 70,
    backgroundColor: "#284635",
    alignItems: "center",
  },
  modalDetailDownSection: {
    height: 240,
    backgroundColor: "#8C001A",
    alignItems: "center",
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
  },
  modalDetailSectionTitle: {
    marginTop: 12,
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
  },
  modalDetailValue: {
    fontSize: 22,
    color: "white",
  },
  modalDetailTechTitle: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#1E2527",
  },
});
