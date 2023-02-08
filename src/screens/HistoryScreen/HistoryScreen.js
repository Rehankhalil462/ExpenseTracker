import React, { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import { faker } from "@faker-js/faker";
import Transaction from "../OverviewScreen/components/transaction";

export const HistoryScreen = ({ navigation }) => {
  const [value, setValue] = React.useState("");
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

    Array.from({ length: 30 }).forEach(() => {
      USERS.push(createRandomUser());
    });
    setUsers(USERS);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SegmentedButtons
          style={{}}
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: "tools",
              label: "Tools",
              icon: "tools",
            },
            {
              value: "diesel",
              label: "Diesel",
              icon: "fuel",
            },
            { value: "carwash", label: "Car Wash", icon: "car-wash" },
            { value: "others", label: "Others", icon: "dots-horizontal" },
          ]}
        />
      </View>
      <View style={{ flex: 10 }}>
        <FlatList
          contentContainerStyle={{ paddingHorizontal: 15 }}
          data={users}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.userId}
          renderItem={({ item }) => (
            <Transaction
              transaction={item}
              //   key={item.id}
              onPress={(val) => console.warn(`Clicked ${val}`)}
            />
          )}
        />
      </View>
    </View>
  );
};
