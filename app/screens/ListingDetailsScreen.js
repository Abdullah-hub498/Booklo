import React from "react";
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

import ListItem from "../components/ListItem";
import AppButton from "../components/AppButton";
import ContactSellerForm from "../components/ContactSellerForm";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
          >
            <View>
              <Image
                style={styles.image}
                source={{ uri: listing.images[0].url }}
              />
              <View style={styles.detailContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.subPrice}>Rs{listing.price}</AppText>
                <ListItem
                  image={require("../assets/design.png")}
                  title="Abdullah"
                  subTitle="3Listings"
                />
              </View>
              <ContactSellerForm listing={listing} />
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ScrollView>
    </>
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
