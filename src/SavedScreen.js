import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity, Image,ScrollView } from 'react-native';
import data from "./dataset/vehicles.json";
const menu = require("./assets/icons/menu.png");
const face = require("./assets/face.png");
const magnifying_glass = require("./assets/icons/magnifying-glass.png");

const image_v_1 = require("./assets/vehicles/v-1.png");
const image_v_2 = require("./assets/vehicles/v-2.png");
const image_v_3 = require("./assets/vehicles/v-3.png");
const image_v_4 = require("./assets/vehicles/v-4.png");


const SavedScreen = ( {navigation} ) => {
  const [vehicles, setVehicles] = useState(data.vehicles);
  const [filteredList, setFilteredList] = useState(data.vehicles);
 

  


  
 

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
 <TouchableOpacity>     
          <Image source={menu} resizeMode="contain" style={styles.menuIcon} />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>Saved</Text>
          <Image
            source={face}
            resizeMode="contain"
            style={styles.facIconStyle}
          />
        </View>

        <View style={styles.titleSection}>

        <Text style={styles.titleStyle2}> Saved cars</Text>

            </View>




            <ScrollView style={styles.carSectionA}>
            {!filteredList.some(item => item.properties.saved) ? (
  <Text style={styles.noSavedCarsMessage}>No saved cars available.</Text>
) : (
    filteredList
      .filter(item => item.properties.saved)
      .map((item) => (
        <TouchableOpacity
          style={styles.carSection}
          key={item.id}
          onPress={() => {
            navigation.navigate('Info' , {item: item.id});
          }}

          activeOpacity={0.2}
        >
          <View style={styles.carText}>
            <Text style={styles.infotitle}>
              {item.make} {item.model}{" "}
            </Text>
            <Text style={styles.infosub}>
              {" "}
              {item.type}-{item.transmission}
            </Text>
            <Text style={styles.infoprice}>
              <Text style={styles.infoAmount}>
                {" "}
                {item.price_per_day} Dt
              </Text>{" "}
              /Day
            </Text>
          </View>

          <View style={styles.imagesection}>
            <Image
              source={getImage(item.id)}
              resizeMode="contain"
              style={styles.image_v_1}
            />
          </View>
        </TouchableOpacity>
      ))
  )}
</ScrollView>




        </View>
        </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: "#e7e7e7",
  },
  footerIcon: {
    width: 30,
    height: 25,
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
    marginTop: 15,
  },

  menuIcon: {
    width: 25,
    marginLeft: -10,
  },
  facIconStyle: {
    width: 40,
    marginRight: -15,
  },
  titleSection: {
     height: 100,
     marginTop: 20,
     flexDirection: "row",
    justifyContent: "space-between",



 
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "600",
  },
  titleStyle2: {
    fontSize: 30,
     fontFamily: "Poppins",
  }, 

  carSectionA: {
    width: "100%",
    height: 400,
    marginLeft: -10,
    marginTop: 5,
    padding: 5,
  },
  carSection: {
    backgroundColor: "#fff",
    height: 90,
    borderRadius: 10,
    flexDirection: "row",
    padding: 8,
    marginBottom: 5,
  },

  carText: {
    flex: 1,
  },
  infotitle: {
    fontSize: 15,
    color: "#000",
    fontWeight: "bold",
  },

  infosub: {
    fontSize: 11,
    color: "#696969",
  },

  infoprice: {
    fontSize: 12,
    position: "absolute",
    bottom: 0,
    color: "#696969",
  },

  infoAmount: {
    fontSize: 11,
    color: "#000",
    fontWeight: "bold",
  },
  image_v_1: {
    width: 150,
    height: 100,
    borderRadius: 10,
    top: -15,
    left: -10,
  },
  noSavedCarsMessage  : { 

    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#696969",
    textAlign: "center",
  },
});

export default SavedScreen;