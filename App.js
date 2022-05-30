import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTabs from "./components/HeaderTabs";
import SearchBar from "./components/SearchBar";
import Home from "./screens/Home";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 16 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}
