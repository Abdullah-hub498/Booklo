import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import colors from "../config/colors";
import useApi from "../hooks/useApi";
import SimilarCard from "../components/SimilarCard";
import { useNavigation } from "@react-navigation/native";

function SimilarSuggestion(props) {
  const newGetListingsApi = useApi(listingsApi.getListings);

  const navigation = useNavigation();

  useEffect(() => {
    newGetListingsApi.request(1, 2, 3);
  }, []);

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={newGetListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <SimilarCard
            title={item.title}
            subTitle={"Rs" + item.price}
            imageUrl={item.images[0].url}
            onPress={(event) => {
              navigation.push(routes.LISTING_DETAILS, item);
            }}
          />
        )}
        horizontal={true}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    //padding: 10,
    //margin: 5,
    backgroundColor: colors.light,
  },
});

export default SimilarSuggestion;
