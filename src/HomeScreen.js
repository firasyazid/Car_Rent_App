import React, { useState,useEffect  } from "react";
import { ScrollView, TextInput, TouchableOpacity,RefreshControl } from "react-native";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const menu = require("./assets/icons/menu.png");
const face = require("./assets/face.png");
const magnifying_glass = require("./assets/icons/magnifying-glass.png");

const image_v_1 = require("./assets/vehicles/v-1.png");
const image_v_2 = require("./assets/vehicles/v-2.png");
const image_v_3 = require("./assets/vehicles/v-3.png");
const image_v_4 = require("./assets/vehicles/v-4.png");

import data from "./dataset/vehicles.json";

const HomeScreen = ({ navigation }) => {


  const [vehicles, setVehicles] = useState(data.vehicles);
  const [filteredList, setFilteredList] = useState(data.vehicles);
  const [selectedType, setSelectedType] = useState('All');
  const [refreshing, setRefreshing] = useState(false);

  const fetchVehiclesData = () => {
     const newData =  data.vehicles  ;  
    setVehicles(newData);
    setFilteredList(newData);
    setRefreshing(false);  
  };


  useEffect(() => {
     fetchVehiclesData();
  }, []);
  const onRefresh = () => {
    setRefreshing(true); 
    fetchVehiclesData();
  };

  const filterVehiclesByType = (type) => {
    setSelectedType(type);
    if (type === 'All') {
      setFilteredList(vehicles);
    } else {
      setFilteredList(vehicles.filter(vehicle => vehicle.type === type));
    }
  };



  const searchVehicles = (keyword) => {

    const lowercasedKeyword = keyword.toLowerCase();

    const results = vehicles.filter(vehicle => {
        return vehicle.make.toLowerCase().includes(lowercasedKeyword)
    })

    setFilteredList(results);
  }

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
      <ScrollView
         refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >   
      
         <View style={styles.container}>
        <View style={styles.headerSection}>
        <Image
            source={face}
            resizeMode="contain"
            style={styles.facIconStyle}
          />
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>

          <AntDesign
                  name="poweroff"
                  size={24}
                  color="black"
                  style={styles.menuIcon}     
                              />
</TouchableOpacity>
          
        </View>

        <View style={styles.titleSection}>
          <Text style={styles.titleStyle}>Rent a car</Text>
        </View>

        <View style={styles.searchSection}>
          <View style={styles.searchPallet}>

          <TextInput
                style={styles.searchInput}
                placeholder="Search"
                onChangeText={(text) => searchVehicles(text)}
            />



            <View style={styles.searchIconSection}>
              <Image
                source={magnifying_glass}
                resizeMode="contain"
                style={styles.searchIcon}
              />
            </View>
          </View>
        </View>

        <View style={styles.typesSection}>
        <TouchableOpacity onPress={() => filterVehiclesByType('All')}>
           <Text style={styles.All}>All</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => filterVehiclesByType('SUV')}>

          <Text style={styles.Suv}>Suv</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => filterVehiclesByType('Sedan')}>

          <Text style={styles.Sedan}>Sedan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => filterVehiclesByType('MPV')}>
          <Text style={styles.Mpv}>Mpv</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => filterVehiclesByType('Hatchabck')}>
           <Text style={styles.Hatchabck}>Hatchabck</Text>
           </TouchableOpacity>

 
        </View>

        <View style={styles.listSection}>
          <Text style={styles.listTitle}>Most Rented</Text>

          <ScrollView style={styles.carSectionA}>
            {filteredList.map((item) => {
              return (
                <TouchableOpacity style={styles.carSection} key={item._id}
                activeOpacity={0.2}
                onPress={() => {
                  navigation.navigate('Info' , {item: item.id});
                }}
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
              );
            })}
          </ScrollView>
        </View>

       
      </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e7e7e7",
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
    marginRight: -25,
    marginTop: 15,
  },

  menuIcon: {
    width: 40,
    marginLeft: -10,
  },

  facIconStyle: {
    width: 60,
    marginRight: -15,
  },
  titleSection: {
    height: 100,
    justifyContent: "center",
    marginTop: -20,
    marginLeft: -10,
  },
  titleStyle: {
    fontSize: 30,
     fontFamily: "Poppins",
     

  },
  searchSection: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },

  searchPallet: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
    padding: 10,
    width: "100%",
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },

  searchInput: {
    fontSize: 13,
  },
  searchIconSection: {},
  searchIcon: {
    width: 30,
    height: 30,
  },
  typesSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
  },
  All: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
    fontWeight: "bold",
  },
  Suv: {
    fontSize: 15,
    fontWeight: "600",
    color: "#696969",
    fontWeight: "bold",
  },
  Sedan: {
    fontSize: 15,
    fontWeight: "600",
    color: "#696969",
    fontWeight: "bold",
  },
  Mpv: {
    fontSize: 15,
    fontWeight: "600",
    color: "#696969",
    fontWeight: "bold",
  },
  Hatchabck: {
    fontSize: 15,
    fontWeight: "600",
    color: "#696969",
    fontWeight: "bold",
  },
  listTitle: {
    fontSize: 22,
    fontWeight: "600",
     fontWeight: "bold",
    marginTop: -5,
    marginBottom: 10,
    width: "100%",
    marginLeft: -10,
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
  image_v_1: {
    width: 150,
    height: 100,
    borderRadius: 10,
    top: -15,
    left: -10,
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
});
export default HomeScreen;
