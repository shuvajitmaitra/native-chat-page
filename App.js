import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./App/Pages/Home";
import TotalChats from "./App/Pages/TotalChats";
import Thread from "./App/Pages/Thread";
import ViewProfile from "./App/Component/ViewProfileModal/ViewProfile";
import Calendar from "./App/Pages/Calendar/Calendar";

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
        <Stack.Screen
          name="Thread"
          options={{ headerTitle: "Thread" }}
          component={Thread}
        />
        <Stack.Screen
          name="ViewProfile"
          options={{
            headerTitle: "",
            headerShadowVisible: false,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: "white",
            },
          }}
          component={ViewProfile}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name="Calendar"
          component={Calendar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
