import React from "react";
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import AppButton from "../components/AppButton";

function ListingDetailsScreen(props) {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <Image
            style={styles.image}
            source={require("../assets/Database.jpg")}
          />
          <View style={styles.detailContainer}>
            <AppText style={styles.title}>Database Systems</AppText>
            <AppText style={styles.subPrice}>Rs250</AppText>
            <ListItem
              image={require("../assets/design.png")}
              title="Abdullah"
              subTitle="3Listings"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  detailContainer: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 450,
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontWeight: "500",
  },
  subPrice: {
    color: colors.secondary,
  },
});

export default ListingDetailsScreen;
