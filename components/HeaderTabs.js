import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = ({ text, activeTab, setActiveTab }) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: text === activeTab ? "black" : "white",
        borderRadius: 30,
        paddingVertical: 6,
        paddingHorizontal: 16,
        marginHorizontal: 6,
        marginVertical: 6,
      }}
      onPress={() => setActiveTab(text)}
    >
      <Text
        style={{
          color: text === activeTab ? "white" : "black",
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);
