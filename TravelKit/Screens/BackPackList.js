import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import { useState } from "react";
import WeatherContainer from "../Components/WeatherContainer";

const BackPackList = () => {
  //generate me an array of item that might be used in the backpack with 10 elements where each object has three properties: id, item name and a boolean property to indicate if the item is packed or not
  const [items, setItems] = useState([
    { id: "1", itemName: "T-shirt", isPacked: false },
    { id: "2", itemName: "Pants", isPacked: false },
    { id: "3", itemName: "Underwear", isPacked: false },
    { id: "4", itemName: "Socks", isPacked: false },
    { id: "5", itemName: "Toothbrush", isPacked: false },
    { id: "6", itemName: "Toothpaste", isPacked: false },
    { id: "7", itemName: "Shampoo", isPacked: false },
    { id: "8", itemName: "Conditioner", isPacked: false },
    { id: "9", itemName: "Sunscreen", isPacked: false },
    { id: "10", itemName: "Hat", isPacked: false },
  ]);



  const checkListPressHanlder = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  };
  return (
    <View style={styles.container}>
      <WeatherContainer />
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <View style={{ marginVertical: 10 }}>
          <Text style={styles.title}>Backpack List</Text>
        </View>
        <FlatList
          data={items}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => (
            <View style={styles.checkListItem}>
              <View style={[styles.checkListButton,itemData.item.isPacked?styles.checkedListButton: null]}>
                <Pressable style={{flex:1}} onPress={()=>checkListPressHanlder(itemData.item.id)}></Pressable>
              </View>
              <Text style={[styles.checkListItemText,itemData.item.isPacked?styles.checkedListItemText: null]}>
                {itemData.item.itemName}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    margin: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
  checkListItem: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  checkListButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
  },
  checkedListButton: {
    backgroundColor: "black",
  },
  checkListItemText: {
    marginLeft: 10,
    fontSize: 20,
  },
  checkedListItemText: {
    textDecorationLine: "line-through",
  },

});

export default BackPackList;
