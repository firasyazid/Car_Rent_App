import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { Image, StyleSheet } from "react-native";
import HomeScreen from "./src/HomeScreen";
import MapScreen from "./src/MapScreen";
import ProfileScreen from "./src/ProfileScreen";
import SavedScreen from "./src/SavedScreen";
import InfoScreen from "./src/InfoScreen";
import Toast from "react-native-toast-message";
import LoginScreen from "./src/LoginScreen";
import { useFonts } from "expo-font";
import Inscription from "./src/Inscription";
import WelcomeScreen from "./src/WelcomeScreen";
import Cartitem from "./src/Cartitem";
 




const homeIcon_active = require("./src/assets/icons/homee.png");
const homeIcon = require("./src/assets/icons/home.png");
const compass_active = require("./src/assets/icons/compass-active.png");
const compass = require("./src/assets/icons/compass.png");
const savedIcon_active = require("./src/assets/icons/saved-active.png");
const savedIcon = require("./src/assets/icons/saved.png");
const settingsIcon_active = require("./src/assets/icons/userwhite.png");
const settingsIcon = require("./src/assets/icons/usergrey.png");
const cartIcon = require("./src/assets/icons/cartt.png");
const cartIcon_active = require("./src/assets/icons/cart2.png");

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? homeIcon_active : homeIcon;
          } else if (route.name === "Map") {
            iconName = focused ? compass_active : compass;
          } else if (route.name === "Saved") {
            iconName = focused ? savedIcon_active : savedIcon;
          } else if (route.name === "Profile") {
            iconName = focused ? settingsIcon_active : settingsIcon;
          } else if (route.name === "Cart") {
            iconName = focused ? cartIcon_active : cartIcon;
          } 


          return (
            <Image
              source={iconName}
              resizeMode="contain"
              style={styles.footerIcon}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "black",
          borderTopWidth:1,
          elevation: 0,
          shadowOpacity: 2,
          height: 60,
          width: "75%",
           marginLeft: 40,
          borderRadius: 50,
          position: "absolute",
          padding: 5,
          bottom: 5,
          borderTopStartRadius: 40,
          borderTopEndRadius: 40,
          shadowColor: "#000",
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Cart" component={Cartitem} />

    </Tab.Navigator>
  );
};







const App = () => {
  const [fontsLoaded] = useFonts({
    "Inter-ExtraBold": require("./src/assets/fonts/Inter-ExtraBold.ttf"),
    Montserrat: require("./src/assets/fonts/Montserrat-Regular.ttf"),
    "Inter-Light": require("./src/assets/fonts/Inter-Light.ttf"),
    OpenSans: require("./src/assets/fonts/OpenSans-Regular.ttf"),
    Poppins: require("./src/assets/fonts/Poppins-SemiBold.ttf"),
  });
  if (!fontsLoaded) return null;

  return (
    <NavigationContainer independent={true} 
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"

      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />



        </Stack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  footerIcon: {
    width: 30,
    height: 25,
  },
});

export default App;
