//generate me a Basic starting template of react native component
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { useEffect } from "react";

import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomButton from "../Components/BottomButton";

function Itinerary({ navigation }) {
  

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <CustomHeader />,
      tabBarStyle: { borderTopWidth: 0 },
    });
  }, [navigation]);
  function CustomHeader() {
    return (
      <Pressable>
        <Image
          source={require("../assets/travel.png")} // Replace with your image source
          style={{ width: 120, height: 30 }} // Set the width and height of your image
          resizeMode="contain" // Adjust the resizeMode as needed
        />
      </Pressable>
    );
  }

  // generate me an array of city object in different country with 10 elements where each object has three properties: id, city name and country name
  const cities = [
    {
      id: "1",
      cityName: "Tokyo",
      countryName: "Japan",
      imagesource: require("../assets/tokyo.jpg"),
    },
    {
      id: "2",
      cityName: "Paris",
      countryName: "France",
      imagesource: require("../assets/paris.jpg"),
    },
    {
      id: "3",
      cityName: "London",
      countryName: "England",
      imagesource: require("../assets/london.jpg"),
    },
    {
      id: "4",
      cityName: "New York",
      countryName: "USA",
      imagesource: require("../assets/newyork.jpg"),
    },
    {
      id: "5",
      cityName: "Rome",
      countryName: "Italy",
      imagesource: require("../assets/rome.jpg"),
    },
    {
      id: "6",
      cityName: "Sydney",
      countryName: "Australia",
      imagesource: require("../assets/sydney.jpg"),
    },
    {
      id: "7",
      cityName: "Cape Town",
      countryName: "South Africa",
      imagesource: require("../assets/capetown.jpg"),
    },
    {
      id: "8",
      cityName: "Rio de Janeiro",
      countryName: "Brazil",
      imagesource: require("../assets/rio.jpg"),
    },
    {
      id: "9",
      cityName: "Dubai",
      countryName: "UAE",
      imagesource: require("../assets/dubai.jpg"),
    },
    {
      id: "10",
      cityName: "Mumbai",
      countryName: "India",
      imagesource: require("../assets/mumbai.jpg"),
    },
    {
      id: "11",
      cityName: "Seoul",
      countryName: "Korea",
      imagesource: require("../assets/seoul.jpg"),
    },
  ];

  const selectCity = (selectedPlace) => {
    navigation.navigate("DateSelection", { city: selectedPlace.city, country: selectedPlace.country });
  }

  return (
    //generate me a search bar with a prompt text (search by city or town) on top of the screen
    <View style={styles.screenContainer}>
      <View style={styles.topContainer}>
        <View style={{ marginVertical: 10 }}>
          <Text style={styles.titleStyle}>Where do you want to go?</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>City/Town</Text>
        </View>
        {/*search bar*/}
        <View style={styles.searchContainer}>
          <View style={{ marginHorizontal: 5 }}>
            <Icon name="search" size={20} color="#ccc" />
          </View>
          <TextInput placeholder="Search..." />
        </View>
      </View>

      {/*a list of places*/}
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <FlatList
          data={cities}
          renderItem={(itemData) => (
            <Pressable onPress={()=>selectCity({city: itemData.item.cityName, country: itemData.item.countryName})}>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              
                <View>
                  <Image
                    style={styles.tinyLogo}
                    source={itemData.item.imagesource}
                  ></Image>
                </View>

                <View style={styles.flatListItem}>
                  <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                    {itemData.item.cityName}
                  </Text>
                  <Text style={{ color: "#D3D3D3" }}>
                    {itemData.item.countryName}
                  </Text>
                </View>
              
            </View>
            </Pressable>
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  searchContainer: {
    borderWidth: 1,
    paddingVertical: 20,
    borderRadius: 30,
    paddingHorizontal: 10,
    borderColor: "#D3D3D3",
    flexDirection: "row",
  },
  topContainer: {
    marginHorizontal: 20,
  },

  screenContainer: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "space-between",
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },

  flatListItem: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 15,
  },

  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default Itinerary;
