import {} from "react";
import { Text, View } from "react-native";

const Calculator = ({ styles, darkMode }) => {
  return (
    <View>
      <Text style={darkMode ? styles.darkModeFont : styles.lightModeFont}>
        Calculator
      </Text>
    </View>
  );
};
export default Calculator;
