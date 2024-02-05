import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground    , TouchableOpacity } from 'react-native';
 

const image_v_4 = require("./assets/vehicles/car.jpg");

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={image_v_4}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text1}>Rent a vehicle</Text>
        <Text style={styles.text2}>Easily with your device !</Text>
 
        <View styles={styles.button}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Main")}
          >
            <Text style={styles.buttonText}>Get started</Text>
          </TouchableOpacity>
        </View> 
      </View>

          
        
        
         <StatusBar style="light" />

    </ImageBackground>
    

  );


};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',  
    justifyContent: 'center',
    alignItems: 'center',
    height  : '100%',
    width   : '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -150,
    marginTop: -500,
  },

  text2 : {
    fontSize: 24,
    color: 'white',
    fontFamily : 'Poppins',
    marginLeft :    130
   },
  
  text1: {
    fontSize: 24,
    color: 'white',
    fontFamily : 'Poppins'
  },

  button: {
 
    top: 550,
    alignContent: "center",
    alignItems: "center",
    height: 55,
    width: 300,
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
    marginLeft: 160,
   },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontFamily: "Poppins",
    top: 15,
  },
});

export default WelcomeScreen;
