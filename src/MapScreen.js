import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
   TouchableOpacity,
   View
} from "react-native";
import { useEffect } from "react";
 import { Calendar } from "react-native-calendars";
import DateTimePicker from "@react-native-community/datetimepicker";
 import { showToast } from "../utils/toast";
 
import data from "./dataset/vehicles.json";
const menu = require("./assets/icons/left-arrow.png");
const face = require("./assets/icons/dots.png");

const image_v_1 = require("./assets/vehicles/v-1.png");
const image_v_2 = require("./assets/vehicles/v-2.png");
const image_v_3 = require("./assets/vehicles/v-3.png");
const image_v_4 = require("./assets/vehicles/v-4.png");

const MapScreen = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date(Date.now()));
  const [timeMode, setTimeMode] = useState("time");
  const [show, setShow] = useState(false);
  const [selectedDates, setSelectedDates] = useState({});
  const [selectedH, setSelectedh] = useState();


  const handleConfirm = () => {
    if (Object.keys(selectedDates).length === 0) {
      console.log("No date selected");
      showToast("error", "⚠️ Select a date");
    } else if (!selectedH) {
      console.log("No time selected");
      showToast("error", "⚠️  Select a time");
    } else {
      console.log("Success");
      showToast("success", "⚠️ Success");
     }
  };
  


  useEffect(() => {
     setSelectedDates({});
  }, []);  

  useEffect(() => {
     setSelectedDates({});
  }, []);  

  const handleDayPress = (date) => {
    setSelectedDates((prevSelectedDates) => {
      const isDateSelected = prevSelectedDates[date.dateString];

      if (isDateSelected) {
        const { [date.dateString]: _, ...rest } = prevSelectedDates;
        return { ...rest };
      } else {
        return {
          ...prevSelectedDates,
          [date.dateString]: {
            selected: true,
            marked: true,
            selectedColor: "blue",
          },
        };
      }
    });
  };

  useEffect(() => {
    console.log("Selected Dates:", Object.keys(selectedDates));
  }, [selectedDates]);

  const handleTimeChange = (event, selectedDate) => {
    setShow(false);  
    if (selectedDate) {
      const selectedTime = new Date(selectedDate);
      const hours = selectedTime.getHours().toString().padStart(2, "0");  
      const minutes = selectedTime.getMinutes().toString().padStart(2, "0");  
      const formattedTime = `${hours}:${minutes}`;
      setSelectedh(formattedTime);  
      console.log("Selected Time:", formattedTime);  
    }
  };

  const handlePress = () => {
    setShow(true);
  };

  const { item } = route.params;
  const vehicle = data.vehicles.find((element) => element.id === item);

  const getImage = (id) => {
    if (id == 1) {
      return image_v_1;
    }
    if (id == 2) {
      return image_v_2;
    }
    if (id == 3) {
      return image_v_3;
    }
    if (id == 4) {
      return image_v_4;
    }
  };


  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={menu} resizeMode="contain" style={styles.menuIcon} />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>Reservation</Text>
          <Image
            source={face}
            resizeMode="contain"
            style={styles.facIconStyle}
          />
        </View>

        <View style={styles.ImageSection}>
          <Image
            source={getImage(vehicle.id)}
            resizeMode="contain"
            style={styles.ImageStyle}
          />
        </View>
      </View>

      <View style={styles.Datepick}>
        <Text style={styles.textStyle}>Select a start & end date : </Text>
      </View>

      <View style={styles.containerC}>
        <Calendar
          style={styles.calendar2}
          markedDates={selectedDates}
          onDayPress={handleDayPress}
        />
      </View>

      <View style={styles.timeButtonSection}>
        <TouchableOpacity onPress={handlePress} style={styles.btn}>
          <Text style={styles.rentButtonText}>
            {selectedH ? selectedH : "Select Time"}
          </Text>
        </TouchableOpacity>
      </View>

      {show && (
        <DateTimePicker
          mode="time"
          is24Hour={true}
          display={"clock"}
          value={selectedH || new Date()}
          onChange={handleTimeChange}
        />
      )}

      <View style={styles.ButtonSection}>
        <TouchableOpacity onPress={handleConfirm}  style={styles.btn2}>
          <Text style={styles.rentButtonText2}>Add to cart </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>

     
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e7e7e7",
  },
  rentButtonText: {
    color: "black",
    fontWeight: "bold",
  },

  container: {
    flex: 1,
    paddingRight: 35,
    paddingLeft: 35,
  },
  headerSection: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },

  menuIcon: {
    width: 25,
    marginLeft: -10,
  },
  facIconStyle: {
    width: 30,
    marginRight: -15,
  },
  containerC: {
    flex: 1,
    backgroundColor: "#e7e7e7",
    justifyContent: "center",
    top: -180,
    height: 300,
  },

  calendar2: {
    marginLeft: 20,
    marginRight: 20,
    borderColor: "#e7e7e7",
    height: 340,
    borderWidth: 5,
    borderRadius: 40,
    marginTop: -40,
  },

  titleStyle: {
    fontSize: 20,
    fontWeight: "600",
  },

  ImageSection: {
    flex: 1,
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    top: -33,
  },

  ImageStyle: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },

  calendar: {
    flex: 1,
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    top: -260,
  },
  Datepick: {
    flex: 1,
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    top: -150,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: -160,
  },

  timeButtonSection: {
    height: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    top: -150,
  },

  timeText: {
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: -240,
  },
  btn: {
    height: 40,
    width: 180,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    top: 30,
  },

  btn2: {
    height: 40,
    width: 180,
    backgroundColor: "black",

     justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderColor: "black",
   },

  ButtonSection: {
    height: 50,
    width: 250,
    backgroundColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    top: -60,
  },

  rentButtonText2: {
    color: "white",
    fontWeight: "500",
  },
});

export default MapScreen;
