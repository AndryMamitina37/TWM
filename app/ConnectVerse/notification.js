import React from "react";
import Img from "../../assets/images/img1.jpeg";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const notifications = [
  {
    id: "1",
    user: "Faniry",
    message: "liked your photo",
    timestamp: "5m ago",
    avatar: Img,
  },
  {
    id: "2",
    user: "Manjaka",
    message: "commented on your post",
    timestamp: "10m ago",
    avatar: Img,
  },
  {
    id: "3",
    user: "Mandrindra",
    message: "shared your story",
    timestamp: "15m ago",
    avatar: Img,
  },
  {
    id: "4",
    user: "Mamitina",
    message: "started following you",
    timestamp: "1h ago",
    avatar: Img,
  },
  {
    id: "5",
    user: "Andry",
    message: "sent you a friend request",
    timestamp: "2h ago",
    avatar: Img,
  },
];

const NotificationScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Image style={styles.avatar} source={item.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.notificationText}>
          <Text style={styles.userName}>{item.user}</Text> {item.message}
        </Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  notificationText: {
    fontSize: 16,
  },
  userName: {
    fontWeight: "bold",
  },
  timestamp: {
    fontSize: 12,
    color: "gray",
    marginTop: 2,
  },
});

export default NotificationScreen;
