import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ClosedIcon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="delete" color="white" size={35} />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/Database.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  ClosedIcon: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
