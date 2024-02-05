import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  View,
} from "react-native";
import data from "./dataset/vehicles.json";
import { showToast } from "../utils/toast";

const menu = require("./assets/icons/left-arrow.png");
const face = require("./assets/icons/dots.png");

const image_v_1 = require("./assets/vehicles/v-1.png");
const image_v_2 = require("./assets/vehicles/v-2.png");
const image_v_3 = require("./assets/vehicles/v-3.png");
const image_v_4 = require("./assets/vehicles/v-4.png");
const savedIcon = require("../src/assets/icons/saveicon.png");

const InfoScreen = ({ props, navigation, route }) => {
  const { item } = route.params;
  const vehicle = data.vehicles.find((element) => element.id === item);

  const handlePress = () => {
    showToast("success", "⚡️ Car saved");
  };

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
          <Text style={styles.titleStyle}>Details</Text>
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
        <View style={styles.headSection}>
          <Text style={styles.text1}>
            {" "}
            {vehicle.make} {vehicle.model}
          </Text>
          <View style={styles.priceSection}>
            <Text style={styles.text2}>
              {" "}
              {vehicle.price_per_day} Dt
              <Text style={styles.text3}> / Day </Text>
            </Text>
          </View>
        </View>

        <View style={styles.typesection}>
          <Text style={styles.text4}>
            {" "}
            {vehicle.type}-{vehicle.transmission}
          </Text>
          <Text style={styles.text5}> {vehicle.description} </Text>
          <Text style={styles.textp}> Propreties </Text>
        </View>

        <View style={styles.prop}>
          <View style={styles.prop1}>
            <Text style={styles.propertyText}>
              Motor power:
              <Text style={styles.valueText}>
                {" "}
                {vehicle.properties.motor_power_hp} hp
              </Text>
            </Text>
            <Text style={styles.propertyText}>
              Fuel:
              <Text style={styles.valueText}>
                {" "}
                {vehicle.properties.fuel_type}
              </Text>
            </Text>
          </View>
          <View style={styles.prop1}>
            <Text style={styles.propertyText}>
              Engine Capacity :
              <Text style={styles.valueText}>
                {" "}
                {vehicle.properties.engine_capacity_cc} cc
              </Text>
            </Text>

            <Text style={styles.propertyText}>
              Traction :
              <Text style={styles.valueText}>
                {" "}
                {vehicle.properties.traction}
              </Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Map", { item: item });
          }}
          style={styles.btn}
        >
          <Text style={styles.rentButtonText}>Rent a Car</Text>
        </TouchableOpacity>

        <View style={styles.saved}>
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={savedIcon}
              resizeMode="contain"
              style={styles.footerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
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

  ImageSection: {
    flex: 1,
    height: 150,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    top: -120,
  },

  ImageStyle: {
    width: 330,
    height: 330,
    marginBottom: 10,
  },
  headSection: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: -260,
  },

  priceSection: {
    marginLeft: 50,
  },

  text1: {
    fontSize: 17,
    fontWeight: "bold",
  },

  textp: {
    fontSize: 17,
    fontWeight: "bold",
   },
  text2: {
    fontSize: 14,
    fontWeight: "bold",
  },
  text3: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#696969",
  },

  typesection: {
    height: 100,
    top: -250,
  },
  text4: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#696969",
    top: -37,
    fontWeight: "bold",
  },

  text5: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#696969",
    top: -30,
    lineHeight: 18,
    letterSpacing: 0.2,
  },

  prop: {
    height: 40,

    top: -200,
  },
  prop2: {
    marginTop: 20,
  },

  prop1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  propertyText: {
    color: "#696969",
  },

  valueText: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
  },

  btn: {
    height: 50,
    width: 250,
    backgroundColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    top: -100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  rentButtonText: {
    color: "white",
    fontWeight: "500",
  },

  saved: {
    top: -140,
    left: 330,
  },
});
export default InfoScreen;
