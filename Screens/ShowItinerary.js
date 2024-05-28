import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Button,
  Pressable,
  Linking,
} from "react-native";
import { createApi } from "unsplash-js";
import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Feather";

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "vfnjM3Kk7xIMGrZ8Tu0VVOzHTIAZwv2vF_QCiZDiP0",
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

function ShowItinerary() {
  const day = [
    {
      day: 1,
      description:
        "Welcome to Osaka! Today we'll explore the heart of the city, immersing ourselves in its vibrant culture and delicious street food.",
      placestovisit: [
        {
          placename: "Dotonbori",
          description:
            "This iconic entertainment district is known for its dazzling neon signs, bustling crowds, and a plethora of street food stalls. Get ready to indulge in the famous takoyaki (octopus balls), kushikatsu (deep-fried skewers), and other culinary delights. Don't forget to capture the dazzling Glico Man sign, a symbol of Osaka's vibrant energy.",
        },
        {
          placename: "Osaka Castle",
          description:
            "A majestic landmark, Osaka Castle offers a glimpse into the city's rich history. Explore the sprawling castle grounds, ascend the main tower for panoramic views, and immerse yourself in the castle's captivating tales of samurai warriors and feudal lords.",
        },
        {
          placename: "Shinsekai",
          description:
            "Step back in time in this retro neighborhood known for its vibrant atmosphere and unique street food. Wander through the alleyways lined with traditional stalls and treat yourself to kushikatsu (deep-fried skewers) and other regional specialties.",
        },
      ],
      placestoeat: [
        {
          restaurantname: "Kushikatsu Daruma",
          descriptionoftherestaurant:
            "This legendary kushikatsu (deep-fried skewers) joint is a must-visit for any foodie. Be prepared for a long wait, but trust me, it's worth it. The crispy, flavorful skewers are a true taste of Osaka.",
          googlemaplink: "https://goo.gl/maps/9v289K8xP1T3Q3k29",
          popularfoodoftherestaurant: [
            {
              foodname: "Kushikatsu",
              fooddescription:
                "A variety of deep-fried skewers, including meat, seafood, vegetables, and cheese, all coated in a light, crispy batter.",
            },
            {
              foodname: "Tendon",
              fooddescription:
                "A bowl of rice topped with tempura (deep-fried seafood and vegetables), a classic Osaka dish.",
            },
          ],
        },
        {
          restaurantname: "Ichiran",
          descriptionoftherestaurant:
            "Ichiran is a famous ramen chain known for its personalized ramen experience. You can customize your bowl of ramen with different broth strengths, noodle textures, and toppings. It's a ramen lover's paradise!",
          googlemaplink: "https://goo.gl/maps/d9t5e884g7r1kG5x8",
          popularfoodoftherestaurant: [
            {
              foodname: "Ramen",
              fooddescription:
                "A bowl of rich, flavorful ramen with your choice of toppings, such as pork belly, egg, and seaweed.",
            },
          ],
        },
      ],
    },
    {
      day: 2,
      description:
        "Today, we'll delve into the cultural side of Osaka, visiting temples, gardens, and experiencing the city's artistic spirit.",
      placestovisit: [
        {
          placename: "Sumiyoshi Taisha",
          description:
            "One of Japan's oldest and most revered Shinto shrines, Sumiyoshi Taisha is a tranquil sanctuary with a history dating back over 1,800 years. Explore the intricate architecture, serene gardens, and experience the spiritual atmosphere of this sacred place.",
        },
        {
          placename: "Nakanoshima Park",
          description:
            "This urban oasis in the heart of Osaka is a perfect place to relax and enjoy the city's greenery. Take a leisurely stroll through the park, visit the art museums, or simply soak up the tranquility.",
        },
        {
          placename: "Tsutenkaku Tower",
          description:
            "Ascend this iconic tower for panoramic views of Osaka. The tower, a symbol of the city, offers stunning vistas of the city's skyline, harbor, and surrounding mountains.",
        },
      ],
      placestoeat: [
        {
          restaurantname: "Minami",
          descriptionoftherestaurant:
            "This bustling district is a haven for foodies, offering a wide array of restaurants, from traditional Japanese cuisine to modern fusion dishes. Explore the vibrant streets and sample the diverse culinary delights that Osaka has to offer.",
          googlemaplink: "https://goo.gl/maps/16Z46n5k4w7n5sGq7",
          popularfoodoftherestaurant: [
            {
              foodname: "Okonomiyaki",
              fooddescription:
                "A savory pancake made with cabbage, flour, and your choice of fillings, cooked on a griddle and served with a variety of sauces. A true Osaka specialty.",
            },
            {
              foodname: "Takoyaki",
              fooddescription:
                "Bite-sized balls of batter filled with octopus, cooked in a special pan and served hot with sauce and mayonnaise. A popular street food in Osaka.",
            },
            {
              foodname: "Kushikatsu",
              fooddescription:
                "Deep-fried skewers of meat, seafood, and vegetables, coated in a light, crispy batter.",
            },
          ],
        },
        {
          restaurantname: "Sukiya",
          descriptionoftherestaurant:
            "Sukiya is a popular fast-food chain in Japan known for its affordable and tasty gyudon (beef bowl) dishes. It's a great option for a quick and satisfying meal.",
          googlemaplink: "https://goo.gl/maps/4u85XjD8N2a6h8P68",
          popularfoodoftherestaurant: [
            {
              foodname: "Gyudon",
              fooddescription:
                "A bowl of rice topped with thinly sliced beef, onions, and a savory sauce.",
            },
          ],
        },
      ],
    },
  ];
  const getGoogleMapsLink = (placeName) => {
    const baseUrl = "https://www.google.com/maps/search/?api=1&query=";
    const encodedPlaceName = encodeURIComponent(placeName);
    return `${baseUrl}${encodedPlaceName}`;
  };
  const handlePress = (placeName) => {
    const googleMapsLink = getGoogleMapsLink(placeName);
    Linking.openURL(googleMapsLink);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.titleStyle}>
            A 4-day itinerary for Tokyo, Japan.
          </Text>
          <Text style={styles.subTitleStyle}>
            Tokyo, Japan's bustling capital, is a vibrant metropolis where
            ancient traditions meet cutting-edge technology. Experience the
            charm of its traditional neighborhoods, the excitement of its
            neon-lit districts, and the serenity of its tranquil gardens.
            Explore world-renowned museums and temples, indulge in delicious
            cuisine, and discover the unique blend of culture and modernity that
            makes Tokyo so captivating.
          </Text>
        </View>
        <View style={styles.borderlineStyle}></View>
        {day.map((day) => (
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
                        <Text style={styles.linkStyle}>
                          Google Map
                        </Text>
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
    marginTop: 50,
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
