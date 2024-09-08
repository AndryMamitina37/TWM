// app/index.js
import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import logo from "./img/chat.jpg";
const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username === "mamitina" && password === "mami") {
      router.push("/ConnectVerse/home");
    } else {
      alert("vérifiez les champs");
    }
  };

  const handleSignin = () => {
    router.push("/register");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.avatar} alt="img" />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>ConnectVerse</Text>
        <Text style={styles.subtitle}></Text>
        <TextInput
          style={styles.input}
          placeholder="Addresse email"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Mots de passe"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Mots de passe</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Créer un compte? {""}</Text>
          <TouchableOpacity onPress={handleSignin}>
            <Text style={styles.signupButtonText}>S'incrire</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  logoText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#fff",
  },
  formContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#35a9ec",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#666",
  },
  input: {
    height: 40,
    borderColor: "rgba(128, 128, 128, 0.253)",
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 10,
    alignItems: "center",
  },
  forgotPasswordText: {
    color: "#007bff",
    fontSize: 14,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signupText: {
    fontSize: 14,
  },
  signupButtonText: {
    color: "#007bff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default LoginScreen;
