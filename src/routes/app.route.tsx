import { CreateMeal } from "@/screens/CreateMeal";
import { EditMeal } from "@/screens/EditMeal";
import { Feedback } from "@/screens/Feedback";
import { Home } from "@/screens/Home";
import { Meal } from "@/screens/Meal";
import { Statistics } from "@/screens/Statistics";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="statistics"
        component={Statistics}
        options={{ headerShown: false }}
      />

      <Screen
        name="CreateMeal"
        component={CreateMeal}
        options={{ headerShown: false }}
      />

      <Screen name="Meal" component={Meal} options={{ headerShown: false }} />
      <Screen
        name="EditMeal"
        component={EditMeal}
        options={{ headerShown: false }}
      />

      <Screen
        name="Feedback"
        component={Feedback}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
