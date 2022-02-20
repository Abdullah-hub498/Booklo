import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("click");
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello React Native World!</Text>
      <TouchableOpacity onPress={() => console.log("image click")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity>
      <Button title="Click Me" onPress={() => console.log("Button press")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
