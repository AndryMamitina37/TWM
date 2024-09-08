// app/messages/[id].js
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import messages from "../data/messageData";

export default function MessageDetails() {
  const { id } = useLocalSearchParams();
  // const router = useRouter();
  const [message, setMessage] = useState("");
  const [currentMessage, setCurrentMessage] = useState(null);

  useEffect(() => {
    const msg = messages.find((msg) => msg.id === id);
    setCurrentMessage(msg);
  }, [id]);

  const handleReply = () => {
    alert(message);
  };

  return (
    <View style={styles.container}>
      {currentMessage && (
        <>
          <Text style={styles.messageDate}>{currentMessage.date}</Text>
          <Text style={styles.username}>{currentMessage.username}</Text>
          <View style={styles.receivedMessage}>
            <Text style={styles.messageText}>{currentMessage.content}</Text>
          </View>
        </>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write your reply here..."
          value={message}
          onChangeText={setMessage}
        />
        <Pressable style={styles.button} onPress={handleReply}>
          <Text style={styles.buttonText}>Reply</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f2f5",
  },
  messageDate: {
    fontSize: 12,
    color: "#888",
    marginBottom: 5,
    textAlign: "left",
  },
  username: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  receivedMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#e0f7fa",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
