import { StyleSheet, View, Text } from "react-native";
import { resultStyles } from "./Result.component.styles";

const Result = ({ result = "default" }) => {
  return (
    <View style={resultStyles.resultContainer}>
      <Text style={resultStyles.resultText}>
        {result === "" ? "🍻" : Number(result).toFixed(2)}
      </Text>
    </View>
  );
};

export default Result;
