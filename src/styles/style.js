import { Dimensions, StyleSheet, Platform } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export const THEME_COLOR = "#3BA9E5";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "ios" ? 0 : 22,
  },
  mapStyle: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  searchbar: {},
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
  fab: {
    position: "absolute",
    backgroundColor: "#3BA9E5",
    margin: 20,
    right: 0,
    bottom: 0,
  },
  modalCloseIcon: {
    position: "absolute",
    right: 0,
    top: 0,
    margin: 10,
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  radioGroup: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
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
  homeCard: {
    width: SCREEN_WIDTH / 2 - 4,
    height: 100,
    margin: 2,
    borderRadius: 8,
    backgroundColor: "#3BA9E5",
  },
});
