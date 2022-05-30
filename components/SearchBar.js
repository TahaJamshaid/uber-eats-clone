import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { Ionicons } from "react-native-vector-icons";

export default function SearchBar() {
  return (
    <View style={{ marginTop: 16, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
          },
        }}
        renderLeftButton={() => (
          <View>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
      />
    </View>
  );
}
