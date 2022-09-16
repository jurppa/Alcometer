import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import Result from "./Result";

const Calculator = ({ styles, darkMode }) => {
  console.log("darkmode: ", darkMode);
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [gender, setGender] = useState(1);
  const genders = [
    { label: "👨  ", value: 0 },
    { label: "👩", value: 1 },
  ];
  return (
    <View>
      <View style={calculatorStyles.input}>
        <Text style={darkMode ? styles.darkModeFont : styles.lightModeFont}>
          Weight
        </Text>
      </View>
      <View style={calculatorStyles.input}>
        <Text style={darkMode ? styles.darkModeFont : styles.lightModeFont}>
          Bottles
        </Text>
      </View>
      <View style={calculatorStyles.input}>
        <Text style={darkMode ? styles.darkModeFont : styles.lightModeFont}>
          Hours
        </Text>
      </View>
      <View style={calculatorStyles.radioForm}>
        <Text style={darkMode ? styles.darkModeFont : styles.lightModeFont}>
          Gender
        </Text>
        <RadioForm
          buttonSize={10}
          radio_props={genders}
          initial={0}
          onPress={(value) => setGender(value)}
          labelColor={"#50C900"}
          formHorizontal={true}
        />
      </View>

      <Result darkMode={darkMode} />
    </View>
  );
};
const calculatorStyles = StyleSheet.create({
  radioForm: { marginTop: 44 },
  input: { marginTop: 30 },
});
export default Calculator;
