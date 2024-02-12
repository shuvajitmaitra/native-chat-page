import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./App/Pages/Home";
import TotalChats from "./App/Pages/TotalChats";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="TotalChats"
          options={{ headerTitle: "Chat" }}
          component={TotalChats}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
