import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
const listings = [
  {
    id: 1,
    title: "Database Design",
    price: 100,
    image: require("../assets/Database.jpg"),
  },
  {
    id: 2,
    title: "Database 2 Design",
    price: 1000,
    image: require("../assets/Database.jpg"),
  },
];
function ListtingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"Rs" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListtingsScreen;
