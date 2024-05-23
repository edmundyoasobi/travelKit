import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import BottomButton from "../Components/BottomButton";
import TabBar from "../Components/TabBar";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";

function DateSelection() {
  const [selectedTab, setSelectedTab] = useState(0);

  const [numberOfDays, setNumberOfDays] = useState(1);

  const dayIncrementHandler = () => {
    setNumberOfDays(numberOfDays + 1);
  };
  const dayDecrementHandler = () => {
    if (numberOfDays > 1) {
      setNumberOfDays(numberOfDays - 1);
    }
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
              <Icon name="calendar" size={20} color="black" />
              <Text>Start date</Text>
              <Icon name="arrowright" size={12} color="black" />
              <Text>End date</Text>
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
                <Icon name="minuscircle" size={30} />
              </Pressable>
              <View style={{ marginHorizontal: 15 }}>
                <Text>{numberOfDays}</Text>
              </View>
              <Pressable onPress={dayIncrementHandler}>
                <Icon name="pluscircle" size={30} />
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
      <BottomButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: "space-between",
    marginBottom: 50,
    flex: 1,
  },
  headerContainer: {
    marginHorizontal: 20,
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
