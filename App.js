import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  console.log("App executed");
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
