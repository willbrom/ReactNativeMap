import React from "react";
import { Text, View, Modal, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { styles } from "../styles/style";

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
