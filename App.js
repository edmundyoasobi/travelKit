import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Itinerary from "./Screens/Itinerary";
import DateSelection from "./Screens/DateSelection";
import TripPartnerScreen from "./Screens/TripPartnerScreen";
import VisitedPlace from "./Screens/VisitedPlace";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ShowItinerary from "./Screens/ShowItinerary";
import LoadingScreen from "./Screens/LoadingScreen";

const Stack = createStackNavigator();
//q: What is the purpose of this file?
//a: This file is the entry point of the app. It is the first file that is executed when the app is run. It is the main file that contains the main code of the app.
export default function App() {
  
//q:how to comment in JSX

  return (
    <View style={styles.container}>
      
     


      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen  name="Itinerary" component={Itinerary}  />
          <Stack.Screen  name="DateSelection" component={DateSelection} />
          <Stack.Screen name="VisitedPlace" component={VisitedPlace} />
          <Stack.Screen name="TripPartnerScreen" component={TripPartnerScreen} />
          <Stack.Screen name="ShowItinerary" component={ShowItinerary} />
        </Stack.Navigator>
      </NavigationContainer>

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
