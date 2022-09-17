import { StyleSheet, View, Text } from "react-native";

const Result = ({ result = "default" }) => {
  return (
    <View style={resultStyles.resultContainer}>
      <Text style={resultStyles.resultText}>
        {result === "" ? "🍻" : Number(result).toFixed(2)}
      </Text>
    </View>
  );
};

const resultStyles = StyleSheet.create({
  resultContainer: {
    marginTop: 70,
  },

  resultText: {
    fontSize: 30,
    color: "green",
    padding: 24,
    backgroundColor: "orange",
    borderRadius: 10,

    textAlign: "center",
  },
});
export default Result;
