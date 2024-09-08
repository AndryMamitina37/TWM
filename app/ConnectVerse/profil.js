import React from "react";
import Img from "../../assets/images/img1.jpeg";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

// Page du profil
const Home = () => {
  const name = "Andry Mamitina";
  const email = "andrymamitina.herijaona@gmail.com";
  const bio = "Hello world.";
  const friends = [
    { name: "Faniry", avatar: Img },
    { name: "Mandrindra", avatar: Img },
    { name: "Manjaka", avatar: Img },
    { name: "Nana", avatar: Img },
    { name: "Jenny", avatar: Img },
    { name: "Natacha", avatar: Img },
  ];

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.coverPhoto} source={Img} />
      {/* Profil de l'utilisateur */}
      <View style={styles.profileContainer}>
        <Image style={styles.avatar} source={Img} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.bio}>{bio}</Text>
      </View>
      {/* Liste des amis */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ami(e)s</Text>
        <View style={styles.friendsList}>
          {friends.map((friend, index) => (
            <View key={index} style={styles.friendItem}>
              <Image style={styles.friendAvatar} source={friend.avatar} />
              <Text style={styles.friendName}>{friend.name}</Text>
            </View>
          ))}
        </View>
      </View>
      {/* Photos */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Photos</Text>
        <View style={styles.photosGrid}>
          {/* Dummy photos */}
          <Image style={styles.photo} source={Img} />
          <Image style={styles.photo} source={Img} />
          <Image style={styles.photo} source={Img} />
        </View>
      </View>
    </ScrollView>
  );
};

// Page de déconnexion
const Notif = ({ navigation }) => {
  const router = useRouter();

  const handleLogout = () => {
    // 1. Effacer les informations d'authentification (exemple avec AsyncStorage ou contexte global)
    // AsyncStorage.removeItem('userToken');
    // ou utiliser un contexte global pour réinitialiser l'état d'authentification

    // 2. Naviguer vers la page de connexion
    router.push("/");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={handleLogout} title="Déconnexion" />
    </View>
  );
};

const Drawer = createDrawerNavigator();

const Profil = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Mon profil"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Se déconnecter"
        component={Notif}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="logout" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  coverPhoto: {
    justifyContent: "space-between",
    width: "100%",
    height: 200,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: -50,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    fontSize: 18,
    color: "gray",
    marginTop: 5,
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  friendsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  friendItem: {
    alignItems: "center",
    width: (width - 80) / 3,
    marginBottom: 20,
  },
  friendAvatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  friendName: {
    marginTop: 5,
    textAlign: "center",
  },
  photosGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  photo: {
    width: (width - 60) / 3,
    height: (width - 60) / 3,
    marginBottom: 10,
  },
});

export default Profil;
