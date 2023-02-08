import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { HomeScreen } from "./src/screens/HomeScreen/HomeScreen";
import { Provider as PaperProvider } from "react-native-paper";
import { FAB } from "react-native-paper";
import { theme } from "./src/styles/theme.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./src/screens/LoginScreen/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home">
              {(props) => <HomeScreen {...props} />}
            </Stack.Screen>
          </Stack.Group>
        </Stack.Navigator>

        <StatusBar style="auto" />
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    marginRight: 20,
    marginBottom: 30,
    borderRadius: 50,
    backgroundColor: "#FD9062",
    right: 0,
    bottom: 0,
  },
});
