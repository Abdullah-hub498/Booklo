import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";
function Card({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.images} source={{ uri: imageUrl }} />
        <View style={styles.detailContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  images: {
    width: "100%",
    height: 400,
  },
  detailContainer: {
    padding: 5,
    marginLeft: 5,
  },
  title: {
    color: colors.black,
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.secondary,
  },
});

export default Card;
