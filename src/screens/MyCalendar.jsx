import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import Calendar  from 'react-native-calendars/src/calendar';
import { Calendar, LocaleConfig } from "react-native-calendars";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import { useFonts } from "expo-font";
import LineSvgComponent from "../svg/LineSvgComponent";
import DotComponent from "../components/DotComponent";
// calendar Heading......................................

import { useNavigation } from "@react-navigation/native";
import PlusCircleSvgComponent from "../svg/PlusCircleSvgComponent";
import RightArrowLong from "../svg/RightArrowLong";

export const CalendarHeading = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("../../assets/Fonts/Inter-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View style={calenderHeadingStyles.header}>
      <View style={calenderHeadingStyles.headerContent}>
        <Text style={calenderHeadingStyles.title}>My Calendar</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={calenderHeadingStyles.btn}>
            <PlusCircleSvgComponent />
            <Text style={calenderHeadingStyles.btnText}>New Event</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const calenderHeadingStyles = StyleSheet.create({
  header: {
    width: "100%",
    height: responsiveScreenHeight(12.6), // 50% of Screen height
    backgroundColor: "#ffffff",
  },
  headerContent: {
    marginTop: responsiveScreenHeight(6),

    marginLeft: responsiveScreenWidth(5),
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
  },
  title: {
    fontSize: responsiveScreenFontSize(2.3),
    fontWeight: "500",
    color: "#546A7E",
    fontFamily: "Inter-Medium",
    fontWeight: "500",
  },
  btn: {
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(5),
    backgroundColor: "#27AC1F",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: responsiveScreenWidth(4),
    gap: 8,
    borderRadius: responsiveScreenWidth(2),
  },
  btnText: {
    color: "white",
  },
});

//...........................................

// import RightArrowLong from "../../../assets/svgs/RightArrowLong";
// import Fonts from "../../../assets/Fonts/Fonts";

// --------------------------
// ----------- Calendar Item Components -----------
// --------------------------

export const CalendarItems = (item) => {
  return (
    <View style={styles.eventTopicContainer}>
      <View style={styles.eventDateContainer}>
        <View style={styles.eventDate}>
          <Text style={styles.eventDay}>{item.item.day}</Text>
          <Text style={styles.eventDateNumber}>{item.item.date}</Text>
        </View>
        <RightArrowLong />
      </View>
      <View
        style={{
          // backgroundColor: "salmon",
          width: responsiveScreenWidth(75),
        }}
      >
        <View
          style={[
            styles.eventTitleAndDateContainer,
            {
              backgroundColor:
                (item.item.status === "proposed new time" && "#619DCC") ||
                (item.item.status === "accepted" && "#27AC1F") ||
                (item.item.status === "pending" && "#FF9900") ||
                (item.item.status === "denied" && "#00C177") ||
                (item.item.status === "rejected" && "#EF4E52") ||
                (item.item.status === "finished" && "#7666FF"),
            },
          ]}
        >
          <Text style={{ color: "white", fontFamily: "WorkSans-Regular" }}>
            {item.item.title}
          </Text>
          <Text
            style={{
              color: "white",
              fontFamily: "WorkSans-Regular",
              fontSize: responsiveScreenFontSize(1.5),
            }}
          >
            {item.item.time}
          </Text>
        </View>
        <Text style={styles.EditorNameDate}>
          <Text style={{ color: "black", fontWeight: "500" }}>Edited:</Text>{" "}
          Abdullah Noman - Feb 20, 2024
        </Text>
      </View>
    </View>
  );
};

// --------------------------
// ----------- Main Components -----------
// --------------------------

export const CalendarData = () => {
  const data = [
    {
      title: "Show N Tell (Finished)",
      time: "10PM - 11PM",
      day: "Mon",
      date: 6,
      status: "proposed new time",
    },
    {
      title: "Show N Tell (Finished)",
      time: "10PM - 11PM",
      day: "Mon",
      date: 9,
      status: "accepted",
    },
    {
      title: "Show N Tell (Finished)",
      time: "10PM - 11PM",
      day: "Mon",
      date: 12,
      status: "pending",
    },
    {
      title: "Show N Tell (Finished)",
      time: "10PM - 11PM",
      day: "Mon",
      date: 14,
      status: "denied",
    },
    {
      title: "Show N Tell (Finished)",
      time: "10PM - 11PM",
      day: "Mon",
      date: 25,
      status: "proposed new time",
    },
  ];
  return (
    <ScrollView>
      <View style={CalendarStyles.calenderTopicContainer}>
        <View style={CalendarStyles.weekContainer}>
          <Text style={CalendarStyles.weekText}>Week 1</Text>
          <Text style={CalendarStyles.weekText}>Jan 1 - Jan 7</Text>
        </View>
        {data.map(
          (item, index) =>
            item.date >= 1 && item.date <= 7 && <CalendarItems item={item} />
        )}

        <View style={CalendarStyles.weekContainer}>
          <Text style={CalendarStyles.weekText}>Week 2</Text>
          <Text style={CalendarStyles.weekText}>Jan 8 - Jan 14</Text>
        </View>
        {data.map(
          (item, index) =>
            item.date >= 8 && item.date <= 14 && <CalendarItems item={item} />
        )}
        <View style={CalendarStyles.weekContainer}>
          <Text style={CalendarStyles.weekText}>Week 3</Text>
          <Text style={CalendarStyles.weekText}>Jan 15 - Jan 21</Text>
        </View>
        {data.map(
          (item, index) =>
            item.date >= 15 && item.date <= 21 && <CalendarItems item={item} />
        )}
        <View style={CalendarStyles.weekContainer}>
          <Text style={CalendarStyles.weekText}>Week 4</Text>
          <Text style={CalendarStyles.weekText}>Jan 22 - Jan 28</Text>
        </View>
        {data.map(
          (item, index) =>
            item.date >= 22 && item.date <= 28 && <CalendarItems item={item} />
        )}
        <View style={CalendarStyles.weekContainer}>
          <Text style={CalendarStyles.weekText}>Week 5</Text>
          <Text style={CalendarStyles.weekText}>Jan 29 - Feb 4</Text>
        </View>
        {data.map(
          (item, index) =>
            item.date >= 29 && item.date <= 31 && <CalendarItems item={item} />
        )}
      </View>
    </ScrollView>
  );
};

const CalendarStyles = StyleSheet.create({
  eventDay: {
    color: "#546A7E",
  },
  EditorNameDate: {
    fontSize: responsiveScreenFontSize(1.4),
    paddingTop: responsiveScreenHeight(0.5),
    color: "#546A7E",
    width: "100%",
  },
  eventTitleAndDateContainer: {
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(0.5),
    borderRadius: 10,
    width: "100%",
  },
  eventDateNumber: {
    fontFamily: "Inter-Medium",
    fontSize: responsiveScreenFontSize(2.7),
  },
  eventDateContainer: {
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: responsiveScreenWidth(1),
    // width: "100%",
  },
  eventTopicContainer: {
    flexDirection: "row",
    gap: responsiveScreenWidth(2),
  },
  weekText: {
    color: "#546A7E",
    fontSize: responsiveScreenFontSize(1.4),
  },
  weekContainer: {
    flexDirection: "row",
    gap: responsiveScreenWidth(6.5),
  },
  calenderTopicContainer: {
    paddingVertical: responsiveScreenHeight(2),
    paddingHorizontal: responsiveScreenWidth(4),
    gap: responsiveScreenHeight(1.5),
    // width: "100%",
    backgroundColor: "white",
  },
});

// Main Components.......................................

const MyCalendar = () => {
  //.......................For using google font................//
  const [fontsLoaded] = useFonts({
    "WorkSans-Regular": require("../../assets/Fonts/WorkSans-Regular.ttf"),
    "WorkSans-Black": require("../../assets/Fonts/WorkSans-Black.ttf"),
    "WorkSans-Medium": require("../../assets/Fonts/WorkSans-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Font...</Text>;
  }
  return (
    <View style={styles.container}>
      <CalendarHeading />
      <ScrollView>
        <View>
          <Calendar
            onDayPress={(date) => console.log(date)}
            markedDates={{
              "2024-03-20": {
                marked: true,
                dotColor: "red",
                selected: true,
                selectedColor: "#e9f7e9",
                selectedTextColor: "#27ac1f",
              },
              "2024-03-10": {
                marked: true,
                dotColor: "red",
                backgroundColor: "red",
              },
              "2024-03-07": {
                marked: true,
                dotColor: "#7666ff",
                backgroundColor: "red",
              },
            }}
            hideExtraDays={true}
            style={{
              height: 350,
            }}
            theme={{
              backgroundColor: "#ffffff",
              calendarBackground: "#ffffff",
              textSectionTitleColor: "#b6c1cd",
              selectedDayBackgroundColor: "#00adf5",
              selectedDayTextColor: "#ffffff",
              todayTextColor: "green",
              dayTextColor: "#2d4150",
              textDisabledColor: "#d9e",
            }}
          />
        </View>
        <DotComponent />

        <View style={styles.line}>
          <LineSvgComponent />
        </View>
        <CalendarData />
      </ScrollView>
    </View>
  );
};

export default MyCalendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: responsiveScreenWidth(4),
  },
  dotContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveScreenWidth(14),
    paddingHorizontal: responsiveScreenWidth(4),
    paddingTop: responsiveScreenHeight(1),
  },
  dotCon: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveScreenWidth(11),
    paddingHorizontal: responsiveScreenWidth(4),
    paddingTop: responsiveScreenHeight(1),
  },
  dot: { flexDirection: "row", alignItems: "center", gap: 8 },
  line: {
    paddingTop: responsiveScreenHeight(2),
    alignSelf: "center",
  },
});
