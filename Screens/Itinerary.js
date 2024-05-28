//generate me a Basic starting template of react native component
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Image,
} from "react-native";


import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomButton from "../Components/BottomButton";

function Itinerary({ navigation}) {
  const API_KEY = "AIzaSyA1xDSzcPLp6YLlZ8BydyZBgldVU6Ac-rQ";
  const fields = "places.displayName,places.formattedAddress,places.priceLevel";
  const textQuery = "Spicy Vegetarian Food in Sydney, Australia";

  const requestBody = {
    textQuery: textQuery,
  };

  const headers = {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": API_KEY,
    "X-Goog-FieldMask": fields,
  };
  const navigationButtonPressHanlder = () => {
    navigation.navigate("DateSelection");
  }
  const fetchDataFromExpress = async () => {
    axios
      .post("https://places.googleapis.com/v1/places:searchText", requestBody, {
        headers,
      })
      .then((response) => {
        // Handle the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error(error.message);
      });
  };
  // generate me an array of city object in different country with 10 elements where each object has three properties: id, city name and country name
  const cities = [
    {
      id: "1",
      cityName: "Tokyo",
      countryName: "Japan",
    },
    {
      id: "2",
      cityName: "Paris",
      countryName: "France",
    },
    {
      id: "3",
      cityName: "London",
      countryName: "England",
    },
    {
      id: "4",
      cityName: "New York",
      countryName: "USA",
    },
    {
      id: "5",
      cityName: "Rome",
      countryName: "Italy",
    },
    {
      id: "6",
      cityName: "Sydney",
      countryName: "Australia",
    },
    {
      id: "7",
      cityName: "Cape Town",
      countryName: "South Africa",
    },
    {
      id: "8",
      cityName: "Rio de Janeiro",
      countryName: "Brazil",
    },
    {
      id: "9",
      cityName: "Dubai",
      countryName: "UAE",
    },
    {
      id: "10",
      cityName: "Mumbai",
      countryName: "India",
    },
  ];

  return (
    //generate me a search bar with a prompt text (search by city or town) on top of the screen
    <View style={styles.screenContainer}>
      <View style={styles.topContainer}>
        <View style={{ marginVertical: 30 }}>
          <Text style={styles.titleStyle}>Where do you want to go?</Text>
        </View>

        <Button title="test" onPress={fetchDataFromExpress}></Button>
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
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: "https://media.cnn.com/api/v1/images/stellar/prod/230210161917-01-japan-never-traveler-culture-tokyo.jpg?c=16x9&q=h_833,w_1480,c_fill",
                  }}
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
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>

      <BottomButton navigationButtonPressHanlder={navigationButtonPressHanlder}/>
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
    marginTop: 50,
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 50,
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
