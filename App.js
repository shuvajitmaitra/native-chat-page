import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./App/Pages/Chat";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./App/Pages/Home";

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
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
