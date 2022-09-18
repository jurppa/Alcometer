import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import Calculator from "./components/Calculator";
import Separator from "./components/UI/Separator";
import { styles } from "./Index.styles";

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
