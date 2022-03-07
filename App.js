import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, style } from "react-native";
import AppButton from "./app/components/AppButton";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
export default function App() {
  return <ListingDetailsScreen />;
}
