import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, style } from "react-native";
import AppButton from "./app/components/AppButton";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import colors from "./app/config/colors";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListtingsScreen from "./app/screens/ListtingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import { useState } from "react";
const categories = [
  { label: "New Book", value: 1 },
  { label: "Old Book", value: 2 },
  { label: "CS Books", value: 3 },
];
export default function App() {
  const [category, setCategory] = useState();
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Catagory"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
