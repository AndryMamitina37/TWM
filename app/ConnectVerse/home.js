// MIDIRA ARY AM "components/post fa any no misy ny publication,reactions,partages"

import Img from "../../assets/images/img1.jpeg";

import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Post from "../../components/post"; // Assuming you create a Post component
import { useFocusEffect } from "@react-navigation/native";

const publications = [
  {
    id: "1",
    username: "User1",
    profilePicture: Img,
    image: Img,
    caption: "Enjoying the sunset!",
    likes: 120,
    comments: [
      { id: "1", username: "User2", text: "Amazing view!" },
      { id: "2", username: "User3", text: "Love this!" },
    ],
  },
  {
    id: "2",
    username: "User2",
    profilePicture: Img,
    image: Img,
    caption: "Enjoying the sunset!",
    likes: 120,
    comments: [
      { id: "1", username: "User2", text: "Amazing view!" },
      { id: "2", username: "User3", text: "Love this!" },
    ],
  },
  // Add more publications here
];

const PublicationList = () => {
  //mampisa anito de ao no atao ze donnée ho actualisena automatique
  useFocusEffect(
    React.useCallback(() => {
      // Effectuer des actions lorsque l'écran est actif
      console.log("HomeScreen is focused");

      // Vous pouvez également effectuer des appels API ou mettre à jour l'état ici

      return () => {
        // Optionnel: Nettoyer des effets ou annuler des appels API ici
      };
    }, [])
  );
  return (
    <FlatList
      style={styles.container}
      data={publications}
      renderItem={({ item }) => <Post post={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#fff",
  },
});

export default PublicationList;
