import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import Calculator from "./components/Calculator";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleSwitch = () => setDarkMode((previousState) => !previousState);
  return (
    <View style={darkMode ? styles.darkMode : styles.lightMode}>
      <Text style={darkMode ? styles.darkModeFont : styles.lightModeFont}>
        Alcometer
      </Text>
      <Text style={styles.icon}>🌙</Text>
      <Switch
        style={styles.darkModeSwitch}
        onValueChange={toggleSwitch}
        value={darkMode}
      />
      <Calculator styles={styles} />
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    textAlign: "center",
    fontSize: "25px",
  },
  darkModeSwitch: {
    alignSelf: "end",
  },
  darkMode: {
    backgroundColor: "black",
  },
  lightMode: {
    backgroundColor: "white",
  },
  darkModeFont: {
    color: "white",
  },
  lightModeFont: {
    color: "black",
  },
  icon: {
    alignSelf: "end",
  },
});
