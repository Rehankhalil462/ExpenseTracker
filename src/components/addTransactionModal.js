import {
  TextInput,
  View,
  Text,
  Modal,
  Pressable,
  Keyboard,
} from "react-native";

import React, { useMemo, useState, useEffect } from "react";
import { useTheme, Menu, Divider, Button, Provider } from "react-native-paper";
import Spacer from "./spacer";
import Ionicons from "@expo/vector-icons/Ionicons";

export const AddTransactionModal = ({ modalVisible, setModalVisible }) => {
  const { colors } = useTheme();
  const [detail, setDetail] = useState();
  const [amount, setAmount] = useState();
  const [visible, setVisible] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
  const [isKeyboardOpened, setIsKeyboardOpened] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  //function to reset start amount modal start
  const handleCloseAddTransactionModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const showKeyboard = Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyboardOpened(true);
    });
    const hideKeyboard = Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyboardOpened(false);
    });

    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);

  const addTransactionModal = useMemo(
    () => (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          handleCloseAddTransactionModal();
        }}
      >
        <Pressable
          style={{
            flex: 1,
            // backgroundColor: "transparent",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
          onPress={() => Keyboard.dismiss()}
        >
          <Provider>
            <View
              style={{
                height: "50%",
                marginTop: "auto",
                backgroundColor: colors.background,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                alignItems: "center",
                paddingHorizontal: 15,
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  flex: 1,
                  width: "100%",
                }}
              >
                {/* <AvoidSoftInputView style={{ flex: 1 }}> */}
                <View
                  style={{
                    width: "100%",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "500",
                      //   color: colors.primary,
                      textAlign: "center",
                      marginLeft: 4,
                    }}
                  >
                    Add Transaction Detail
                  </Text>
                </View>
                <Spacer height={10} />

                <View
                  style={{
                    width: "100%",

                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: 45,
                      backgroundColor: "white",
                      flexDirection: "row",
                      alignItems: "center",
                      borderRadius: 15,
                      paddingLeft: 15,
                    }}
                  >
                    <Ionicons
                      name="document-text-sharp"
                      size={20}
                      color="grey"
                    />
                    <Spacer width={10} />
                    <TextInput
                      style={{ width: "100%", height: "100%" }}
                      placeholder="Detail"
                      value={detail}
                      onChangeText={(text) => setDetail(text)}
                    />
                  </View>
                  <Spacer height={10} />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <View
                      style={{
                        width: "45%",
                        height: 45,
                        backgroundColor: "white",
                        flexDirection: "row",
                        alignItems: "center",
                        borderRadius: 15,
                        paddingLeft: 15,
                      }}
                    >
                      <Ionicons name="cash" size={20} color="grey" />
                      <Spacer width={10} />
                      <TextInput
                        keyboardType="numeric"
                        style={{ width: "100%", height: "100%" }}
                        placeholder="Amount"
                        value={amount}
                        onChangeText={(text) => setAmount(text)}
                      />
                    </View>
                    <View
                      style={{
                        width: "45%",
                        height: 45,
                        backgroundColor: "white",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 15,
                      }}
                    >
                      <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        // anchorPosition="bottom"
                        // style={{ width: "45%" }}
                        contentStyle={{
                          backgroundColor: "white",
                          borderRadius: 12,
                          marginTop: 20,
                          //   width: "45%",
                        }}
                        anchor={
                          <Button
                            contentStyle={{ width: "100%" }}
                            style={{ width: "100%" }}
                            onPress={openMenu}
                          >
                            {selectedCategory && selectedCategory.length !== 0
                              ? selectedCategory
                              : "Select Category"}
                          </Button>
                        }
                      >
                        <Menu.Item
                          onPress={() => {
                            setSelectedCategory("Tools");
                            closeMenu();
                          }}
                          title="Tools"
                        />
                        <Divider />
                        <Menu.Item
                          onPress={() => {
                            setSelectedCategory("Diesel");
                            closeMenu();
                          }}
                          title="Diesel"
                        />
                        <Divider />
                        <Menu.Item
                          onPress={() => {
                            setSelectedCategory("Car Wash");
                            closeMenu();
                          }}
                          title="Car Wash"
                        />
                        <Divider />
                        <Menu.Item
                          onPress={() => {
                            setSelectedCategory("Others");
                            closeMenu();
                          }}
                          title="Others"
                        />
                      </Menu>
                    </View>
                  </View>
                </View>
                {!isKeyboardOpened && (
                  <View
                    style={{
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      bottom: 5,
                      position: "absolute",
                    }}
                  >
                    <Button
                      theme={{ roundness: 3 }}
                      style={{ width: "45%", paddingVertical: 2 }}
                      mode="contained-tonal"
                    >
                      Cancel
                    </Button>
                    <Button
                      theme={{ roundness: 3 }}
                      //   elevation={3}
                      style={{ width: "45%", paddingVertical: 2 }}
                      mode="contained"
                    >
                      Add
                    </Button>
                  </View>
                )}

                {/* </AvoidSoftInputView> */}
              </View>
            </View>
          </Provider>
        </Pressable>
      </Modal>
    ),
    [modalVisible, visible, amount, detail, selectedCategory, isKeyboardOpened]
  );
  return addTransactionModal;
};
