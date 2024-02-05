
import { Feather } from '@expo/vector-icons';
import React, { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { showToast } from "../utils/toast";

const menu = require("./assets/icons/left-arrow.png");
const face = require("./assets/face.png");
const image_v_1 = require("./assets/vehicles/v-1.png");
const image_v_2 = require("./assets/vehicles/v-2.png");
const image_v_3 = require("./assets/vehicles/v-3.png");
const image_v_4 = require("./assets/vehicles/v-4.png");
import data from "./dataset/vehicles.json";

const Cartitem = ({navigation}) => {
    const [filteredList, setFilteredList] = useState(data.vehicles.slice(0, 1));

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

      const confirmOrder = () => {

        showToast("success", "⚡️ Success");
        navigation.navigate("Home");

      }


    return (
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.headerSection}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={menu} resizeMode="contain" style={styles.menuIcon} />
            </TouchableOpacity>
            <Text style={styles.titleStyle}>Checkout</Text>
            <Image
              source={face}
              resizeMode="contain"
              style={styles.facIconStyle}
            />

            
          </View>

          <Text style={styles.DateText2}>Your reservations</Text>
            <View style={styles.carscontainer}>
          <ScrollView style={styles.carSectionA}>
     
    {filteredList
       .map((item) => (
        <View
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
            <TouchableOpacity style={{position: "absolute", top: 65, right: 0, margin: 10}}
>
            <Feather name="delete" size={24} color="gray" 
            />

            </TouchableOpacity>
          </View>
        </View>
      ))}
  
</ScrollView>

<View style={styles.Date}>

<View style={styles.Date1}>

<Text style={styles.DateText}>Pickup Date</Text>
</View>

<View style={styles.Date2}>
   <Text  style={styles.dateDetail2}>19/11 until 21/11 </Text>

</View>
<View style={styles.order}>

<Text style={styles.DateText}>Order details</Text>
</View>



<View style={styles.details}> 
<View style={{flexDirection : "row" , justifyContent : "space-between" , top : 15 , marginLeft: 20}}>

<Text  style={styles.dateDetaill}>Order amount </Text>
<Text  style={styles.dateDetail}>200 Dt </Text>

  
</View>
<View style={styles.hairline} />
<View style={{flexDirection : "row" , justifyContent : "space-between" , top : 35 , marginLeft: 20}}>

<Text  style={styles.dateDetaill}>Tax </Text>
<Text  style={styles.dateDetail}>20 Dt </Text>

  
</View>

<View style={styles.hairline2} />


<View style={{flexDirection : "row" , justifyContent : "space-between" , top : 50 , marginLeft: 20}}>

<Text  style={styles.dateDetaill}>Total Amount </Text>
<Text  style={styles.dateDetail}>220 Dt </Text>

  
</View>
 
            </View>



</View>



</View>

<View styles={styles.button}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => confirmOrder()}
           >
            <Text style={styles.buttonText}>Confirm order</Text>
          </TouchableOpacity>
        </View>


</View>
</SafeAreaView>  
    );
}

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
    carSectionA: {
        width: "100%",
        height: 200,
        marginLeft: -10,
        marginTop: 5,
        padding: 10,

      },
      carSection: {
        backgroundColor: "#fff",
        height: 110,
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
      carscontainer: {

        top: 10,
        height: 400,
      },
      DateText : { 
         color: "black",
         marginLeft: 10,
         fontSize: 20,
        fontWeight: "600",
         fontWeight: "bold",
         fontFamily   : "Poppins",
         top :25
      },
      DateText2 : { 
        color: "black",
        marginLeft: 10,
        fontSize: 20,
       fontWeight: "600",
        fontWeight: "bold",
        fontFamily   : "Poppins",
        top :5
     },
      Date2 : { 
          height  : 70,
          width   : '90%',
          backgroundColor: "#fff",
          top   :   40,
          borderRadius : 10,
            left : 10,
            
      },

      dateTitle : { 
        fontSize: 12,
        color: "#000",
        fontWeight: "bold",
        top : 5,
        left : 10,
        fontFamily   : "Poppins",

      },
      
          dateDetail : { 
            fontSize: 15,
             fontWeight: "bold",
            top : 0,
            left : -10,
            alignContent : "center",
            alignItems : "center",
            alignSelf : "center",
            fontFamily   : "Poppins",
           },

            dateDetaill : {
              fontSize: 13,
               top : 0,
              left : -10,
              alignContent : "center",
              alignItems : "center",
              alignSelf : "center",
              fontFamily   : "Poppins",
              color : "#696969",
  
            },
          dateDetail2 :{ 
            fontSize: 15,
            color: "black",
            fontWeight: "bold",
            top : 20,
            left : -10,
            alignContent : "center",
            alignItems : "center",
            alignSelf : "center",
            fontFamily   : "Poppins",
            color : "#696969",


          },
          details :{ 

            height  : 140,
            width   : '90%',
             top   :   85,
               left : 10,
              fontFamily   : "Poppins",
              backgroundColor: "#fff",
              borderRadius : 10,
          },
          hairline: {
             width: 280,
            top : 25,
            left : 10,
            borderStyle: 'dashed',
            borderWidth: 0.5,
            borderRadius: 1,
            borderColor: 'black',
          
           },
           hairline2: {
              width: 280,
            top : 40,
            left : 10,
            borderStyle: 'dashed',
            borderWidth: 0.5,
            borderRadius: 1,
            borderColor: 'black',
              
          
           },
            hairline3: {
              backgroundColor: "#696969",
              height: 0.5,
              width: 280,
              top : 65,
              left : 10,
            
            },

            order : { 

               top   :   40,
              borderRadius : 10,
                left : 2,
            },

            button: {
              top :   120,
              alignContent: "center",
              alignItems: "center",
              height: 60,
              width: "100%",
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
             },
             buttonText: {
              color: "white",
              fontSize: 15,
              fontFamily: "Poppins",
              top: 15,
            },
} );
export default Cartitem;


