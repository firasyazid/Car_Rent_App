import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import { Fontisto } from "@expo/vector-icons";
 import { AntDesign } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  const menu = require("./assets/icons/left-arrow.png");
  const face = require("./assets/icons/dots.png");
  const facee = require("./assets/face.png");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={menu} resizeMode="contain" style={styles.menuIcon} />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>Profil</Text>
          <Image
            source={face}
            resizeMode="contain"
            style={styles.facIconStyle}
          />
        </View>


        
        <View style={styles.picture}>
          <TouchableOpacity>
            <Image
              source={facee}
              resizeMode="contain"
              style={styles.imageStyle2}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins",
              top: 10,
              alignSelf: "center",
            }}
          >
            {" "}
            John Doe
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.inputContainer2}>
          <View style={styles.iconContainer2}>
            <AntDesign
              name="user"
              size={24}
              color="#626262"
              style={styles.icon}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="John Doe "
            placeholderTextColor="#626262"
            editable={false}
            selectTextOnFocus={false}
          />
        </View>
        <View style={styles.inputContainer2}>
          <View style={styles.iconContainer2}>
            <Fontisto
              name="email"
              size={22}
              color="#626262"
              style={styles.icon}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="johndoe@gmail.com"
            placeholderTextColor="#626262"
            editable={false}
            selectTextOnFocus={false}
          />
        </View>

        <View style={styles.inputContainer2}>
          <View style={styles.iconContainer2}>
            <AntDesign
              name="phone"
              size={24}
              color="#626262"
              style={styles.icon}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="+216 22 222 222"
            placeholderTextColor="#626262"
            editable={false}
            selectTextOnFocus={false}
          />
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.rentButtonText}>View your reservations</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#dddddd",
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

  titleStyle: {
    fontSize: 20,
    fontWeight: "600",
  },

  footer: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    height: 500,
    width: "100%",
  },

  imageStyle2: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },

  picture: {
    width: 150,
    height: 150,
    backgroundColor: "#E6E6E6",
    borderRadius: 150,
    marginLeft: 100,
    top: -15,
  },

  inputContainer2: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    marginLeft: 20,
    marginHorizontal: 20,
    backgroundColor: "#f1f4ff",
    fontSize: 14,
    fontFamily: "Poppins",
    height: 55,
    width: "85%",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 30,
    top: -50,
  },

  input: {
    flex: 1,
    fontFamily: "Poppins",
    marginLeft: 30,
  },

  bar: {
    width: 1.5,
    height: 30,
    backgroundColor: "#626262",
    marginHorizontal: 10,
  },
  iconContainer2: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -15,
  },

  btn: {
    height: 50,
    width: 250,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    top: -30,
    backgroundColor: "#f1f4ff",
  },

  rentButtonText: {
    color: "#626262",
    fontFamily: "Poppins",
  },
});

export default ProfileScreen;
