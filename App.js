import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import Calculator from "./components/Calculator";

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

      <Switch
        style={styles.darkModeSwitch}
        onValueChange={toggleSwitch}
        value={darkMode}
      />

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
  },
  lightMode: {
    backgroundColor: "white",
  },

  darkModeFontTitle: {
    color: "white",
    textAlign: "center",
    marginTop: 25,
    fontSize: 25,
  },
  lightModeFontTitle: {
    color: "black",
    textAlign: "center",
    marginTop: 25,
    fontSize: 25,
  },
  darkModeFont: {
    color: "white",
  },
  lightModeFont: {
    color: "black",
  },
});
