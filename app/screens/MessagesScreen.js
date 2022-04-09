import React, { useState } from "react";
import { FlatList, SafeAreaView, onPress } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
const initialMessages = [
  {
    id: 1,
    title: "Abdullah Abid",
    description: "Hy!Is this book still available?",
    image: require("../assets/design.png"),
  },
  {
    id: 2,
    title: "Abdullah Abid",
    description: "AOA I am intersting to buy Database Design Book",
    image: require("../assets/design.png"),
  },
];
function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/design.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
