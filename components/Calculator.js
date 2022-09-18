import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import { calculateBloodAlcoholLevel } from "../utilities/calculateHelper";
import { calculatorStyles } from "./Calculator.component.styles";
import Result from "./Result";
import Separator from "./UI/Separator";

const Calculator = ({ styles, darkMode }) => {
  console.log("darkmode: ", darkMode);
  const [weight, setWeight] = useState("");
  const [bottles, setBottles] = useState("");
  const [hours, setHours] = useState("");
  const [gender, setGender] = useState(1); // 1 for male, 2 for female
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const genders = [
    { label: "👨  ", value: 0 },
    { label: "👩", value: 1 },
  ];

  const handleCalculate = () => {
    // if (isNaN(weight)) {
    //   setError("Weight input invalid.");
    // }

    const validateInput = "";
    const result = calculateBloodAlcoholLevel(bottles, weight, hours, gender);
    setResult(result);
    console.log(gender);
  };
  return (
    <View>
      <View style={calculatorStyles.input}>
        <Text style={darkMode ? styles.darkModeFont : styles.lightModeFont}>
          Weight
        </Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          style={darkMode ? styles.darkModeFont : styles.lightModeFont}
        />
      </View>
      <View style={styles.input}>
        <Text style={darkMode ? styles.darkModeFont : styles.lightModeFont}>
          Bottles
        </Text>
        <TextInput
          onChangeText={setBottles}
          value={bottles}
          style={darkMode ? styles.darkModeFont : styles.lightModeFont}
        />
      </View>
      <View style={styles.input}>
        <Text style={darkMode ? styles.darkModeFont : styles.lightModeFont}>
          Hours
        </Text>

        <TextInput
          onChangeText={setHours}
          value={hours}
          style={darkMode ? styles.darkModeFont : styles.lightModeFont}
        />
      </View>
      <View style={styles.radioForm}>
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
      <Button onPress={handleCalculate} title="Calculate"></Button>
      <Text style={styles.error}>{error}</Text>

      <Result darkMode={darkMode} result={result} />
    </View>
  );
};

export default Calculator;
