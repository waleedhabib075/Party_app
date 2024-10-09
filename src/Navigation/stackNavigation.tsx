import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Explore from "../Screens/Explore";
import Home from "../Screens/Home";
import TabNavigator from "./TabNavigation";

export default function stackNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Explore"
        component={Explore}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
