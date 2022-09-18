export const calculateBloodAlcoholLevel = (bottles, weight, time, gender) => {
  // Litres: bottles * 0.33
  try {
    const litres = bottles * 0.33;

    // Grams: litres * 8 * 4.5
    const grams = litres * 8 * 4.5;

    // Burning: weight / 10
    const burning = weight / 10;

    // Grams (left): grams – burning * time
    const gramsLeft = grams - burning * time;

    // Weight is multiplied by 0.7 in case of male and 0.6 for female

    const result =
      gender === 0 ? gramsLeft / (weight * 0.7) : gramsLeft / (weight * 0.6);
    console.log(`result is ${result} and gender is ${gender}`);
    return result > 0 ? result : 0;
  } catch {
    return "Error, please validate input.";
  }
};
export const validateInput = (bottles, weight, time, gender) => {
  let errorStrings = [];

  if (isNaN(weight) || !weight) {
    errorStrings.push("Weight not valid");
    return errorStrings;
  }
  if (isNaN(bottles) || !bottles) {
    errorStrings.push("Bottles not valid");
    return errorStrings;
  }

  if (isNaN(time) || !time) {
    errorStrings.push("Hours not valid");
    return errorStrings;
  }
  if (isNaN(gender)) {
    errorStrings.push("Gender not valid");
    return errorStrings;
  }

  return errorStrings;
};
