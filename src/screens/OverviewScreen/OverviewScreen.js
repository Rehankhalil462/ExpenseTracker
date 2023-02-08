import React, { useState, useEffect } from "react";
import Greeter from "./components/greeter";
import styles from "./styles";
import CustomInput from "../../components/customInput";
import Spacer from "../../components/spacer";
import Category from "./components/category";
import Transaction from "./components/transaction";
import values from "../../constants/values";
import { View, Text, SafeAreaView, FlatList, ScrollView } from "react-native";
import { categories, transactions } from "../../constants/data";
import colors from "../../constants/colors";
import { faker } from "@faker-js/faker";

export const OverviewScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let USERS = [];
    function createRandomUser() {
      return {
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        heading: faker.lorem.sentence(3),
        price: faker.commerce.price(),
        img: faker.image.avatar(),
        createdAt: faker.date.recent(),
      };
    }

    Array.from({ length: 8 }).forEach(() => {
      USERS.push(createRandomUser());
    });
    setUsers(USERS);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 10,
      }}
    >
      <View style={{ paddingHorizontal: 15, flex: 0.5 }}>
        <Greeter
          user={{
            img: "https://yt3.ggpht.com/ytc/AKedOLTkTJuNwAOnHrFVGRLwbncwovkgiqXjD2ceQYuKDA=s900-c-k-c0x00ffffff-no-rj",
            name: "Rehan",
          }}
        />
        <Spacer height={20} />
        {/* <CustomInput placeholder="Search" icon="search-outline" /> */}
        {/* <Spacer height={20} /> */}
      </View>
      <View style={{ paddingLeft: 15, flex: 1.7 }}>
        <Text style={values.h2Style}>Overview</Text>
        <Spacer height={20} />
        <FlatList
          horizontal
          data={categories}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Category
              category={item}
              onPress={(val) => console.warn(`Clicked ${val}`)}
            />
          )}
        />
      </View>

      <View style={{ flex: 3 }}>
        <Spacer height={20} />
        <View style={{ paddingHorizontal: 25 }}>
          <Text style={values.h2Style}>Last 10 Transactions</Text>
        </View>
        <Spacer height={20} />

        <FlatList
          contentContainerStyle={{ paddingHorizontal: 15 }}
          data={users}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.userId}
          renderItem={({ item }) => (
            <Transaction
              transaction={item}
              onPress={(val) => console.warn(`Clicked ${val}`)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
