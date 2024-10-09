import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import Event from "../Screens/Event";
import Explore from "../Screens/Explore";
import Feed from "../Screens/Feed";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";

// Import your images here
// const homeIcon = require("../assets/icons/home.jpg");
const homeIcon = require("../../assets/icons/home.png");
const exploreIcon = require("../../assets/icons/search.png");
const eventIcon = require("../../assets/icons/PlusMath.png");
const feedIcon = require("../../assets/icons/RetroTV.png");
const profileIcon = require("../../assets/icons/user.png");

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconSource;

          switch (route.name) {
            case "Home":
              iconSource = homeIcon;
              break;
            case "Explore":
              iconSource = exploreIcon;
              break;
            case "Event":
              iconSource = eventIcon;
              break;
            case "Feed":
              iconSource = feedIcon;
              break;
            case "Profile":
              iconSource = profileIcon;
              break;
            default:
              iconSource = homeIcon; // Fallback icon
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: size,
                height: size,
                tintColor: color, // This will apply the color to the icon
              }}
            />
          );
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          height: 70,
          borderRadius: 15,
          bottom: 40,
          marginLeft: 20,
          marginRight: 20,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          height: 20,
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Event" component={Event} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
