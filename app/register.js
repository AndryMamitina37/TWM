// app/register.js
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

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    if (username && email && password) {
      alert("Registration successful");
      router.push("/"); // Redirection vers la page de connexion
    } else {
      alert("Please fill all fields");
    }
  };

  const handleSignin = () => {
    router.push("/"); // Redirection vers la page de connexion
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.avatar} alt="img" />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>ConnectVerse</Text>
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Addresse email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Vous avez déjà un compte? {""}</Text>
          <TouchableOpacity onPress={handleSignin}>
            <Text style={styles.loginButtonText}>Se connecter</Text>
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
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    fontSize: 14,
  },
  loginButtonText: {
    color: "#007bff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default RegisterScreen;
