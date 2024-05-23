import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Itinerary from "./Screens/Itinerary";
import DateSelection from "./Screens/DateSelection";

//q: What is the purpose of this file?
//a: This file is the entry point of the app. It is the first file that is executed when the app is run. It is the main file that contains the main code of the app.
export default function App() {
  return (
    <View style={styles.container}>
      <DateSelection />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
