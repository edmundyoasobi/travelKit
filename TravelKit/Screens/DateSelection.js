// please rating the code below in term of structure and best practices from 1-10 and give some feedback on what is good and what can be improved

import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import BottomButton from "../Components/BottomButton";
import TabBar from "../Components/TabBar";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";


function DateSelection({ navigation, route }) {
  const { city, country } = route.params;
  useEffect(() => {
    console.log(city);
    console.log(country);
  }, []);
  const [selectedTab, setSelectedTab] = useState(0);

  const [numberOfDays, setNumberOfDays] = useState(1);

  const [date, setDate] = useState(new Date())
  const [showPicker,setShowPicker] = useState(false)

  const dayIncrementHandler = () => {
    setNumberOfDays(numberOfDays + 1);
  };
  const dayDecrementHandler = () => {
    if (numberOfDays > 1) {
      setNumberOfDays(numberOfDays - 1);
    }
  };
  const navigationButtonPressHanlder = () => {
    navigation.navigate("ShowItinerary", { city: city, country: country , numberOfDays: numberOfDays});
  };

  const tabPressHanlder = (tabIndex) => {
    setSelectedTab(tabIndex);
  };
  //generate me an array of month object with 12 elements where each object has two properties: id and month name
  const months = [
    {
      id: "1",
      monthName: "Jan",
    },
    {
      id: "2",
      monthName: "Feb",
    },
    {
      id: "3",
      monthName: "Mar",
    },
    {
      id: "4",
      monthName: "Apr",
    },
    {
      id: "5",
      monthName: "May",
    },
    {
      id: "6",
      monthName: "Jun",
    },
    {
      id: "7",
      monthName: "Jul",
    },
    {
      id: "8",
      monthName: "Aug",
    },
    {
      id: "9",
      monthName: "Sep",
    },
    {
      id: "10",
      monthName: "Oct",
    },
    {
      id: "11",
      monthName: "Nov",
    },
    {
      id: "12",
      monthName: "Dec",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleStyle}>When do you want to go?</Text>
        <Text style={styles.subTitleStyle}>
          Choose a date range or length of stay, up to 7 days
        </Text>
        <TabBar selectedTab={selectedTab} tabPressHanlder={tabPressHanlder} />

        <View
          style={[
            styles.tabView,
            { display: selectedTab == 0 ? "flex" : "none" },
          ]}
        >
          <Pressable style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
                flex: 1,
                borderRadius: 30,
                paddingStart: 10,
              }}
            >
              <Icon name="airplane-takeoff" size={20} color="black" />
              <Text>Start date</Text>
              <DateTimePicker mode="date" value={date} display="compact"/>
            </View>
          </Pressable>
        </View>
        <View
          style={[
            styles.tabView,
            { display: selectedTab == 0 ? "flex" : "none" },
          ]}
        >
          <Pressable style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
                flex: 1,
                borderRadius: 30,
                paddingStart: 10,
              }}
            >
              <Icon name="airplane-landing" size={20} color="black" />
              <Text>End date</Text>
              <DateTimePicker mode="date" value={date} display="calendar"/>
            </View>
          </Pressable>
        </View>

        <View style={{ display: selectedTab == 1 ? "flex" : "none" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 30,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Total days</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Pressable onPress={dayDecrementHandler}>
                <Icon2 name="minuscircle" size={30} />
              </Pressable>
              <View style={{ marginHorizontal: 15 }}>
                <Text>{numberOfDays}</Text>
              </View>
              <Pressable onPress={dayIncrementHandler}>
                <Icon2 name="pluscircle" size={30} />
              </Pressable>
            </View>
          </View>

          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            During what month? (optional)
          </Text>

          <View style={{ marginVertical: 20 }}>
            <FlatList
              data={months}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={(itemData) => (
                <View style={styles.flatListItem}>
                  <Pressable style={{ alignItems: "center" }}>
                    <Icon name="calendar" size={20} color="black" />
                    <Text style={{ fontWeight: "bold", marginTop: 5 }}>
                      {itemData.item.monthName}
                    </Text>
                  </Pressable>
                </View>
              )}
              keyExtractor={(item, index) => item.id}
            />
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 20 }}>
        <BottomButton
          navigationButtonPressHanlder={navigationButtonPressHanlder}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  flatListItem: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#D3D3D3",
    borderWidth: 1,
    padding: 32,
    marginRight: 15,
    borderRadius: 10,
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
  tabView: {
    flexDirection: "row",
    backgroundColor: "#D3D3D3",
    padding: 2,
    borderRadius: 30,
    height: 50,
    marginTop: 30,
  },
});

export default DateSelection;
