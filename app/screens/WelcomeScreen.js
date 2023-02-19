import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text>Everything you need!</Text>
      </View>
      <View style={styles.loginButton}>
        <Text style={styles.buttonStyle}>Login</Text>
      </View>
      <View style={styles.registerButton}>
        <Text style={styles.buttonStyle}>Register</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "rgb(41,170,225)",
    alignItems: "center",
    justifyContent: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "rgb(31,118,187)",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 150,
    alignItems: "center",
  },
  buttonStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
