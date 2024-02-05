import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fontisto } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';


const Inscription = ({ navigation }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Text style={styles.titleStyle}>Create Account</Text>

          <View style={styles.tit}>
            <Text style={styles.titleStyle2}>Welcome ! </Text>
            <Text style={styles.titleStyle2}>We're glad you're here.</Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Fontisto
              name="email"
              size={24}
              color="#626262"
              style={styles.icon}
            />
            <View style={styles.bar} />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Email address"
            placeholderTextColor="#626262"
            placeholderStyle={styles.placeholder}
            autoCapitalize="none"
          />
        </View>

      


        <View style={styles.inputContainer2}>
          <View style={styles.iconContainer2}>
             
            <AntDesign name="phone" size={24} color="#626262"     
                      style={styles.iconP}
 />
            <View style={styles.bar} />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#626262"
            />
              
         </View>
         <View style={styles.inputContainer2}>
          <View style={styles.iconContainer2}>
            <EvilIcons
              name="lock"
              size={35}
              color="#626262"
              style={styles.icon}
            />
            <View style={styles.bar} />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            placeholderTextColor="#626262"
            autoCapitalize="none"
            secureTextEntry={!isPasswordVisible}
          />
          <Pressable onPress={togglePasswordVisibility}>
            <Feather
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={20}
              color="#626262"
              style={styles.passwordVisibilityIcon}
            />
          </Pressable>
        </View>

        <View styles={styles.button}>
        <TouchableOpacity
        style={styles.button}
       >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity   
         onPress={() => navigation.navigate('Login')}
         style={{ top: 240, }}

         >
          <Text
            style={{
              color: "black",
               alignSelf: "center",
              fontFamily: "Poppins",
              fontSize: 12,
            }}
          >
            Already Have Account?   Sign In
          </Text>
        </TouchableOpacity >

        <TouchableOpacity>
          <Text
            style={{
              color: "blue",
              top: 260,
              alignSelf: "center",
              fontFamily: "Poppins",
              fontSize: 12,
            }}
          >
            Or Continue with
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            top: 265,
            alignSelf: "center",
            backgroundColor: "#ECECEC",
            borderRadius: 12,
            height: 50,
            width: 55,
          }}
        >
          <Image
            source={require("../assets/google.png")}
             
            style={styles.icon2}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "white",
  },

  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },

  headerSection: {
    height: 100,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    top: 60,
  },
  tit: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    top: 50,
  },

  titleStyle: {
    fontSize: 27,
    color: "#1F41BB",
    fontFamily: "Poppins",
  },

  titleStyle2: {
    fontSize: 18,
    fontFamily: "Poppins",
  },

  inputContainer: {
    flexDirection: "row",
    top: 170,
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
  },

  inputContainer2: {
    flexDirection: "row",
    top: 180,
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
  },

  input: {
    flex: 1,
    fontFamily: "Poppins",
  },

  bar: {
    width: 1.5,
    height: 30,
    backgroundColor: "#626262",
    marginHorizontal: 10,
  },

  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer2: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -9,
  },

  button: {
    top: 200,
    alignContent: "center",
    alignItems: "center",
    height: 60,
    width: "70%",
    backgroundColor: "black",
    shadowColor: "#1F41BB",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    borderRadius: 15,
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 10,
    marginLeft: 60,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontFamily: "Poppins",
    top: 15,
  },
  icon2: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    top: 7,
    height: 33,
    width: 33,
    left: 12,
   },

   iconP :{
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    top: 7,
    height: 33,
    width: 33,
    left: 5,
   }
});

export default Inscription;
