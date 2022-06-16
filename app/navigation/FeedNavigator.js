import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListtingsScreen from "../screens/ListtingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import SimilarSuggestion from "../screens/SimilarSuggestion";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListtingsScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);
export default FeedNavigator;
