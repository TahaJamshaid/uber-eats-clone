import { ScrollView, View, Text, Image } from "react-native";
import React from "react";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Food",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "coffee & Tea",
  },
];

const Catagories = () => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "white",
        paddingVertical: 10,
      }}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 20 }}
      >
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 20 }}>
            <Image
              source={item.image}
              style={{ width: 40, height: 40, resizeMode: "contain" }}
            />
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Catagories;
