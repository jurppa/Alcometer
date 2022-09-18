import { FlatList, View, Text } from "react-native";

const Error = ({ errorStrings }) => {
  const errorString = (error) => {
    console.log("error in errorstring: ", error);
    return (
      <View>
        <Text>{error.item}</Text>
      </View>
    );
  };
  console.log("error", errorStrings);
  if (errorStrings.length > 0) {
    return (
      <View>
        <FlatList renderItem={errorString} data={errorStrings} />
      </View>
    );
  }
};
export default Error;
