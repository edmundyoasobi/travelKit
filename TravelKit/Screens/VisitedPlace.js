import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { useState } from "react";
import BottomButton from "../Components/BottomButton";

function VisitedPlace({ navigation}) {
  
  const [enteredPlace, setEnteredPlace] = useState("");
  const [skipPlaces, setSkipPlaces] = useState([
    "Akihabara",
    "Shibuya",
    "Shinjuku",
  ]);

  const navigationButtonPressHanlder = () => {
    navigation.navigate("ShowItinerary");
  }

  function addSkipPlace() {
    setSkipPlaces((currentSkipPlaces) => [...currentSkipPlaces, enteredPlace]);
    setEnteredPlace("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleStyle}>Places that you want to skip</Text>
        <Text style={styles.subTitleStyle}>
          Add the place you have visited, so we can skip it
        </Text>
        <View style={{height:500}}>
          <ScrollView>
            {skipPlaces.map((place) => (
              <View style={styles.placeItemStyle}>
                <Text style={{ fontWeight: "bold" }} key={place}>
                  {place}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <View>
        <View style={{marginHorizontal : 20}}>
            <View style={styles.placeItemStyle}>
          <TextInput
            style={styles.input}
            placeholder="Enter the place you want to skip"
            onChangeText={(text) => setEnteredPlace(text)}
            value={enteredPlace}
          />
          </View>
          <Button title="Add" onPress={addSkipPlace} />
        </View>

        <View style={{marginBottom : 20}}>
        <BottomButton
          navigationButtonPressHanlder={navigationButtonPressHanlder}
        />
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor : "white"
  },
  headerContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  titleStyle: {
    fontSize: 27,
    fontWeight: "bold",
  },
  subTitleStyle: {
    color: "#D3D3D3",
    fontSize: 15,
    marginVertical: 15,
  },
  placeItemStyle: {
    borderColor: "#D3D3D3",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: "center",
  },
});

export default VisitedPlace;
