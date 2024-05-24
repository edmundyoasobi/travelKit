import { StyleSheet, View, Text, Pressable } from "react-native";
import BottomButton from "../Components/BottomButton";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/AntDesign";

function TripPartnerScreen({navigation}) {
  const navigationButtonPressHanlder = () => {
    navigation.navigate("VisitedPlace");
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleStyle}>Who's coming with you?</Text>
        <Text style={styles.subTitleStyle}>Choose one.</Text>
        <View style={styles.optionContainer}>
          <View style={styles.optionItemContainer}>
            <Icon name="user" size={30} />
            <Text style={styles.optionItemTitleStyle}>Going solo</Text>
          </View>
          <View style={[styles.optionItemContainer, { marginLeft: 7 }]}>
            <Icon name="users" size={30} />
            <Text style={styles.optionItemTitleStyle}>Friends</Text>
          </View>
        </View>
        <View style={styles.optionContainer}>
          <View style={styles.optionItemContainer}>
            <Icon2 name="heart-multiple-outline" size={30} />
            <Text style={styles.optionItemTitleStyle}>Partner</Text>
          </View>
          <View style={[styles.optionItemContainer, { marginLeft: 7 }]}>
            <Icon3 name="home" size={30} />
            <Text style={styles.optionItemTitleStyle}>Family</Text>
          </View>
        </View>
      </View>
      <BottomButton navigationButtonPressHanlder={navigationButtonPressHanlder}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,

    justifyContent: "space-between",
    marginBottom: 50,
  },
  headerContainer: {
    marginHorizontal: 20,
  },
  titleStyle: {
    fontSize: 27,
    fontWeight: "bold",
  },
  subTitleStyle: {
    color: "#D3D3D3",
    fontSize: 15,
    marginVertical: 15,
    marginBottom: 20,
  },
  optionItemContainer: {
    borderColor: "#D3D3D3",
    borderWidth: 1,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  optionItemTitleStyle: {
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 30,
  },
});

export default TripPartnerScreen;
