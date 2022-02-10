import { StyleSheet, Dimensions } from "react-native";

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const adjWidth = Dimensions.get("window").width * 0.85;
const adjHeight = Dimensions.get("window").height * 0.5;

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000000",
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
    },
    imageContainer: {
      width: adjWidth,
      height: adjHeight,
      justifyContent: "center", 
      alignItems: "center", 
      position: "absolute",
      paddingBottom: 50,
    },
    backgroundImage: {
      flex: 1,
      height: "100%",
      width: "100%",
      resizeMode: "center",
    },
    button: { 
      width: adjWidth,
      alignSelf: "center", 
      alignItems: "center",
      padding: 10,
      borderWidth: 1,
      borderRadius: 2, 
      borderColor: "#888888",
    },
    slideBox: {
      alignSelf: "flex-end",
      width: ITEM_WIDTH,
      justifyContent: "center",
      paddingBottom: 50,
    },
    header: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
      },
      body: {
        color: "#fff",
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
      }
  });