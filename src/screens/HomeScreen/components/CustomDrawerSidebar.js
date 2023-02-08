import React from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import Greeter from "../../OverviewScreen/components/greeter";
import Spacer from "../../../components/spacer";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

import { IconButton, useTheme } from "react-native-paper";

export const CustomDrawerSidebar = (props) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            alignItems: "center",
            borderBottomColor: colors.background,
            borderBottomWidth: 0.5,
            padding: 10,
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: colors.background,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
            }}
          >
            <Image
              source={require("../../../../assets/images/call-center.png")}
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
            />
          </View>
          <View style={{ paddingHorizontal: 15, flex: 0.5 }}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Hello, Rehan
              </Text>
              <Text
                style={{ color: "grey", fontSize: 12, textAlign: "center" }}
              >
                Welcome back to your wallet!
              </Text>
            </View>
          </View>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          width: "100%",

          paddingLeft: 18,
          //   paddingVertical: 5,
          borderTopWidth: 0.7,
          borderTopColor: colors.background,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
          }}
          onPress={() =>
            Alert.alert("Are you sure you want to logout?", null, [
              {
                text: "No",
                style: "cancel",
                onPress: () => null,
              },
              {
                text: "Yes",
                style: "default",
                onPress: () => navigation.navigate("login"),
              },
            ])
          }
        >
          <IconButton icon="logout" size={18} />
          <Text style={{ color: "#333", fontWeight: "500", fontSize: 18 }}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
