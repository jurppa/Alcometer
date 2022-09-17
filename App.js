import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import Calculator from "./components/Calculator";
import Separator from "./components/UI/Separator";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleSwitch = () => setDarkMode((previousState) => !previousState);
  return (
    <View style={darkMode ? styles.darkMode : styles.lightMode}>
      <Text
        style={darkMode ? styles.darkModeFontTitle : styles.lightModeFontTitle}
      >
        Alcometer
      </Text>

      <Separator />
      <Switch onValueChange={toggleSwitch} value={darkMode} />

      <View style={styles.container}>
        <Calculator styles={styles} darkMode={darkMode} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    textAlign: "center",
  },
  darkMode: {
    backgroundColor: "black",
    height: "100%",
    justifyContent: "center",
  },
  lightMode: {
    backgroundColor: "white",
    height: "100%",

    justifyContent: "center",
  },

  darkModeFontTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
  },
  lightModeFontTitle: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
  },
  darkModeFont: {
    color: "white",
    fontSize: 17,
  },
  lightModeFont: {
    color: "black",
    fontSize: 17,
  },
});
