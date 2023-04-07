import { useState } from "react";
import { View, Text, PermissionsAndroid } from "react-native";
import { TextInput, Button } from "react-native-paper";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        width: "100%",
        paddingHorizontal: 10,
      }}
    >
      <View style={{ width: "100%" }}>
        <Text style={{ fontSize: 50, marginBottom: 20 }}>
          Please login to continue
        </Text>
      </View>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        label="Email"
        style={{ width: "100%", elevation: 5, marginBottom: 20 }}
        mode="outlined"
      />
      <TextInput
        value={password}
        label="Password"
        style={{ width: "100%", elevation: 5, marginBottom: 20 }}
        onChangeText={(text) => setPassword(text)}
        mode="outlined"
      />
      <Button
        mode="contained"
        labelStyle={{ fontSize: 20 }}
        elevation={5}
        contentStyle={{ paddingVertical: 5 }}
        style={{ width: "100%" }}
        onPress={() => navigation.navigate("home")}
      >
        Log In
      </Button>
    </View>
  );
};
