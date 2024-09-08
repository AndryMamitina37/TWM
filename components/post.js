import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Post = ({ post }) => {
  const [comment, setComment] = useState("");

  const handleLike = () => {
    // Handle the like functionality
    console.log("Liked!");
  };

  const handleComment = () => {
    // Handle the comment functionality
    console.log("Commented:", comment);
    setComment(""); // Clear the input field
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image source={post.profilePicture} style={styles.profilePicture} />
        <Text style={styles.username}>{post.username}</Text>
      </View>
      <Image source={post.image} style={styles.postImage} />
      <View style={styles.actions}>
        <TouchableOpacity onPress={handleLike}>
          <Ionicons name="heart-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubble-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="paper-plane-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.likes}>{post.likes} likes</Text>
      <Text style={styles.caption}>{post.caption}</Text>
      <FlatList
        data={post.comments}
        renderItem={({ item }) => (
          <Text style={styles.comment}>
            <Text style={styles.commentUsername}>{item.username}:</Text>{" "}
            {item.text}
          </Text>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.commentContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Add a comment..."
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity onPress={handleComment}>
          <Text style={styles.commentButton}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 400,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 10,
  },
  likes: {
    fontWeight: "bold",
    marginVertical: 5,
  },
  caption: {
    marginVertical: 5,
  },
  comment: {
    marginVertical: 5,
  },
  commentUsername: {
    fontWeight: "bold",
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  commentInput: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 40,
  },
  commentButton: {
    marginLeft: 10,
    color: "#007bff",
    fontWeight: "bold",
  },
});

export default Post;
