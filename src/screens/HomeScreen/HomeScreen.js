import { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { OverviewScreen } from "../OverviewScreen/OverviewScreen.js";
import { FAB, useTheme } from "react-native-paper";
import { CustomDrawerSidebar } from "./components/CustomDrawerSidebar.js";
import { HistoryScreen } from "../HistoryScreen/HistoryScreen.js";
import { AddTransactionModal } from "../../components/addTransactionModal.js";
import { BlurView } from "@react-native-community/blur";

const Drawer = createDrawerNavigator();

export const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Drawer.Navigator
        initialRouteName="overview"
        drawerContent={(props) => <CustomDrawerSidebar {...props} />}
      >
        <Drawer.Group>
          <Drawer.Screen
            name="overview"
            component={OverviewScreen}
            options={{
              headerTitle: "Home",
              title: "Home",
              headerTitleAlign: "center",
            }}
          />
          <Drawer.Screen
            name="history"
            component={HistoryScreen}
            options={{
              headerTitle: "Transactions History",
              title: "History",
              headerTitleAlign: "center",
            }}
          />
        </Drawer.Group>
      </Drawer.Navigator>
      <FAB
        icon="plus"
        style={{
          position: "absolute",
          marginRight: 20,
          marginBottom: 30,
          borderRadius: 50,
          backgroundColor: colors.fabBackgroundColor,
          right: 0,
          bottom: 0,
        }}
        size="medium"
        color="white"
        onPress={() => setModalVisible(true)}
      />
      <AddTransactionModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};
