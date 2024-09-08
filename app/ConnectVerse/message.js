// app/messages/index.js
import { useRouter } from "expo-router";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import messages from "../data/messageData";

export default function MessagesList() {
  const router = useRouter();

  const handlePress = (id) => {
    router.push(`/messages/${id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              styles.message,
              { backgroundColor: pressed ? "#e0f7fa" : "#fff" },
            ]}
            onPress={() => handlePress(item.id)}
          >
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.messageContent}>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.messageText}>{item.content}</Text>
              <Text style={styles.messageDate}>{item.date}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f2f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  message: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  messageContent: {
    flex: 1,
  },
  username: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  messageText: {
    fontSize: 16,
    color: "#333",
  },
  messageDate: {
    fontSize: 12,
    color: "#888",
    marginTop: 5,
  },
});
