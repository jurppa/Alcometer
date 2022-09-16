import { StyleSheet, View, Text } from "react-native";

const Result = ({ darkMode }) => {
  return (
    <View style={resultStyles.resultContainer}>
      <Text style={resultStyles.resultText}>Result here</Text>
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
  },
});
export default Result;
