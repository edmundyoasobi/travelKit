import { Text, View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";



const LoadingScreen = () => {
  return (
    <View style={styles.loadingContainer}>
      <Animatable.Image
        animation="pulse"
        iterationCount="infinite"
        duration={3000}
        source={require("../assets/travel.png")} // Replace with your image URL
        style={styles.loadingImage}
      />
      <Animatable.Text
        animation="jello"
        iterationCount="infinite"
        duration={3000}
        style={styles.loadingText}
      >
        Itinerary generating...
      </Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingImage: {
    width: 75,
    height: 75,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 15,
  },
});

export default LoadingScreen;
