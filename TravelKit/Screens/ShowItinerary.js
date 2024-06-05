import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  Linking,
} from "react-native";

import { createApi } from "unsplash-js";
import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Feather";
import axios from "axios";
import LoadingScreen from "./LoadingScreen";

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "vfnjM3Kk7xIMGrZ8Tu0VVOzHTIAZwv2vF_QCiZDiP0Y",
});

const PlacePictures = ({ place }) => {
  const [data, setPhotosResponse] = useState(null);

  useEffect(() => {
    api.search
      .getPhotos({ query: place, orientation: "landscape", perPage: 1 })
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  return (
    <Image
      style={{ height: 200, borderRadius: 10 }}
      source={{
        uri: data?.response?.results[0]?.urls?.regular,
      }}
    ></Image>
  );
};

function ShowItinerary({ route , navigation}) {
  const [itinerary, setIinerary] = useState(null);
  const { city, country, numberOfDays } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    navigation.setOptions({headerShown: false});
    const postData = {
      numberOfDays: numberOfDays,
      country: country,
      city: city,
    };
    try {
      axios
        .post("http://192.168.50.211:4999/hello", postData)
        .then((response) => {
          setIinerary(response.data);
          navigation.setOptions({headerShown: true});
          setIsLoading(false);
          
        })
        .catch((error) => {
          console.error(error.message);
          navigation.setOptions({headerShown: true});
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const getGoogleMapsLink = (placeName) => {
    const baseUrl = "https://www.google.com/maps/search/?api=1&query=";
    const encodedPlaceName = encodeURIComponent(placeName);
    return `${baseUrl}${encodedPlaceName}`;
  };
  const handlePress = (placeName) => {
    const googleMapsLink = getGoogleMapsLink(placeName);
    Linking.openURL(googleMapsLink);
  };
  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.titleStyle}>
            A {numberOfDays}-day itinerary for {country},{city}.
          </Text>
          <Text style={styles.subTitleStyle}>
            {itinerary?.countrycitydescription}
          </Text>
        </View>
        <View style={styles.borderlineStyle}></View>
        {itinerary?.days?.map((day) => (
          <View>
            <View key={day.day} style={styles.headerContainer}>
              <Text style={styles.titleStyle}>Day {day.day}</Text>
              <Text style={styles.subTitleStyle}>{day.description}</Text>
              <View style={styles.borderlineStyle}></View>
              <View>
                <Text style={styles.titleStyle}>Places to Visit:</Text>
                {day.placestovisit.map((place, index) => (
                  <View key={place.placename}>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 20,
                        marginBottom: 5,
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "black",
                          height: 30,
                          width: 30,
                          borderRadius: 15,
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: 10,
                        }}
                      >
                        <Text style={{ color: "white", fontWeight: "bold" }}>
                          {index + 1}
                        </Text>
                      </View>

                      <Text style={styles.titleStyle}>{place.placename}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 5,
                        alignItems: "center",
                      }}
                    >
                      <Icon name="map-pin" size={20} />
                      <Pressable
                        onPress={() => {
                          handlePress(place.placename);
                        }}
                      >
                        <Text style={styles.linkStyle}>Google Map</Text>
                      </Pressable>
                    </View>
                    <PlacePictures place={place.placename} />
                    <Text style={styles.subTitleStyle}>
                      {place.description}
                    </Text>
                  </View>
                ))}
              </View>
              <View style={styles.borderlineStyle}></View>
              <View>
                <Text style={styles.titleStyle}>Places to Eat:</Text>
                {day.placestoeat.map((restaurant) => (
                  <View key={restaurant.restaurantname}>
                    <Text style={styles.titleStyle}>
                      {restaurant.restaurantname}
                    </Text>
                    <Text style={styles.subTitleStyle}>
                      {restaurant.descriptionoftherestaurant}
                    </Text>
                    <Text style={styles.titleStyle}>Popular Foods:</Text>
                    {restaurant.popularfoodoftherestaurant.map((food) => (
                      <View key={food.foodname}>
                        <Text style={styles.titleStyle}>{food.foodname}</Text>
                        <Text style={styles.subTitleStyle}>
                          {food.fooddescription}
                        </Text>
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.borderlineStyle}></View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    marginHorizontal: 20,
  },
  titleStyle: {
    fontSize: 27,
    fontWeight: "bold",
  },
  subTitleStyle: {
    fontSize: 15,
    marginVertical: 15,
  },
  borderlineStyle: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    marginVertical: 15,
  },
  linkStyle: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 15,
    marginLeft: 5,
  },
});

export default ShowItinerary;
