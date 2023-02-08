import { View, Text, Button } from "react-native";

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Press Me" onPress={() => navigation.navigate("home")} />
    </View>
  );
};
